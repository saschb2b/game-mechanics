/**
 * Scans all game and concept pages, collects `patterns:` frontmatter,
 * and generates:
 *   - docs/patterns/index.md — grand table of patterns × games
 *   - docs/patterns/<pattern>.md — stub per pattern (when no concept page exists)
 *
 * Re-runnable. Hand-written concept pages at /concepts/<name>.md are NEVER touched.
 * Files at /patterns/ with `generated: true` in frontmatter are safe to overwrite.
 */

import { readFile, writeFile, readdir, mkdir, unlink } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import { globby } from 'globby'
import matter from 'gray-matter'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DOCS_ROOT = join(__dirname, '..', '..')
const PATTERNS_DIR = join(DOCS_ROOT, 'patterns')
const CONCEPTS_DIR = join(DOCS_ROOT, 'concepts')

interface PageRef {
  file: string        // relative path from docs/
  link: string        // VitePress link
  title: string
  type: 'game' | 'concept' | 'unknown'
  game?: string       // game slug, e.g. "sparklite"
  isGameIndex: boolean
}

type PatternMap = Map<string, PageRef[]>

async function scanFrontmatter(): Promise<PatternMap> {
  const files = await globby(['**/*.md', '!patterns/**', '!**/node_modules/**', '!.vitepress/**'], {
    cwd: DOCS_ROOT,
    absolute: false,
  })

  const map: PatternMap = new Map()

  for (const file of files) {
    const abs = join(DOCS_ROOT, file)
    const raw = await readFile(abs, 'utf8')
    const { data } = matter(raw)
    const patterns = data.patterns
    if (!Array.isArray(patterns) || patterns.length === 0) continue

    const type: PageRef['type'] =
      data.type === 'game' ? 'game' :
      data.type === 'concept' ? 'concept' :
      'unknown'

    const game = data.game ?? extractGameFromPath(file)
    const isGameIndex = type === 'game' && /^games\/[^/]+\/index\.md$/.test(file)
    const title = data.title ?? deriveTitleFromPath(file)
    const link = '/' + file.replace(/\.md$/, '').replace(/\/index$/, '/')

    const ref: PageRef = { file, link, title, type, game, isGameIndex }

    for (const pattern of patterns) {
      if (typeof pattern !== 'string') continue
      const canonical = pattern.toLowerCase().trim()
      if (!isValidPatternId(canonical)) {
        console.warn(`[patterns] skipping invalid pattern id "${pattern}" in ${file}`)
        continue
      }
      if (!map.has(canonical)) map.set(canonical, [])
      map.get(canonical)!.push(ref)
    }
  }

  return map
}

function isValidPatternId(s: string): boolean {
  return /^[a-z][a-z0-9-]*$/.test(s)
}

function deriveTitleFromPath(file: string): string {
  return basename(file, '.md').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function extractGameFromPath(file: string): string | undefined {
  const m = file.match(/^games\/([^/]+)\//)
  return m ? m[1] : undefined
}

async function conceptExists(pattern: string): Promise<boolean> {
  return existsSync(join(CONCEPTS_DIR, `${pattern}.md`))
}

/**
 * For a pattern's references, produce the rendered "Games" cell:
 *   - One entry per distinct game.
 *   - Prefer the most-specific mechanic page over the game index.
 *   - Concept pages excluded entirely.
 */
function renderGameRefs(refs: PageRef[]): string {
  const byGame = new Map<string, PageRef>()
  for (const ref of refs) {
    if (ref.type !== 'game') continue
    if (!ref.game) continue
    const existing = byGame.get(ref.game)
    if (!existing) {
      byGame.set(ref.game, ref)
      continue
    }
    // Prefer mechanic sub-page over the game index.
    if (existing.isGameIndex && !ref.isGameIndex) {
      byGame.set(ref.game, ref)
    }
  }

  if (byGame.size === 0) return '—'

  return [...byGame.values()]
    .sort((a, b) => (a.game ?? '').localeCompare(b.game ?? ''))
    .map(r => `[${gameLabelFromRef(r)}](${r.link})`)
    .join(', ')
}

function gameLabelFromRef(ref: PageRef): string {
  // For sub-pages, the title already has "Game — Section" form.
  // For game indexes, just use the game's pretty title.
  return ref.title
}

async function writeIndex(map: PatternMap) {
  // Sort by number of distinct games covered, descending.
  const entries = [...map.entries()].map(([pattern, refs]) => {
    const distinctGames = new Set(refs.filter(r => r.type === 'game').map(r => r.game)).size
    return { pattern, refs, distinctGames }
  })
  entries.sort((a, b) => b.distinctGames - a.distinctGames || a.pattern.localeCompare(b.pattern))

  let body = `---
generated: true
---

# Patterns Index

*Auto-generated from \`patterns:\` frontmatter across all game and concept pages.*

*Run \`pnpm generate\` to regenerate.*

`

  if (entries.length === 0) {
    body += `*No patterns indexed yet. Add \`patterns: [...]\` frontmatter to game pages and run \`pnpm generate\`.*\n`
  } else {
    body += `_${entries.length} pattern(s) indexed across ${countGamesAcrossPatterns(map)} distinct game(s)._\n\n`
    body += `| Pattern | Games | Page |\n|---|---|---|\n`
    for (const { pattern, refs, distinctGames } of entries) {
      const hasConcept = await conceptExists(pattern)
      const pageCell = hasConcept
        ? `[concept](/concepts/${pattern})`
        : `[stub](/patterns/${pattern})`
      const gamesCell = renderGameRefs(refs)
      const _ = distinctGames // currently unused, kept for sort key clarity
      body += `| \`${pattern}\` | ${gamesCell} | ${pageCell} |\n`
    }
  }

  await mkdir(PATTERNS_DIR, { recursive: true })
  await writeFile(join(PATTERNS_DIR, 'index.md'), body, 'utf8')
}

function countGamesAcrossPatterns(map: PatternMap): number {
  const games = new Set<string>()
  for (const refs of map.values()) {
    for (const ref of refs) {
      if (ref.type === 'game' && ref.game) games.add(ref.game)
    }
  }
  return games.size
}

async function writeStubs(map: PatternMap) {
  const existing = (await readdir(PATTERNS_DIR).catch(() => [])) as string[]
  const written = new Set<string>(['index.md'])

  for (const [pattern, refs] of map) {
    if (await conceptExists(pattern)) continue

    const games = renderStubGameList(refs)
    const stub = `---
generated: true
title: "Pattern: ${pattern}"
---

# \`${pattern}\`

> No curated concept page exists yet. The list below is auto-generated from frontmatter.

## Games using this pattern

${games}

*Want a curated discussion of this pattern? Add \`docs/concepts/${pattern}.md\`.*
`
    await writeFile(join(PATTERNS_DIR, `${pattern}.md`), stub, 'utf8')
    written.add(`${pattern}.md`)
  }

  // Remove orphan generated stubs.
  for (const name of existing) {
    if (written.has(name)) continue
    const path = join(PATTERNS_DIR, name)
    const raw = await readFile(path, 'utf8').catch(() => '')
    const { data } = matter(raw)
    if (data.generated === true) {
      await unlink(path).catch(() => {})
    }
  }
}

function renderStubGameList(refs: PageRef[]): string {
  const byGame = new Map<string, PageRef>()
  for (const ref of refs) {
    if (ref.type !== 'game' || !ref.game) continue
    const existing = byGame.get(ref.game)
    if (!existing || (existing.isGameIndex && !ref.isGameIndex)) {
      byGame.set(ref.game, ref)
    }
  }
  if (byGame.size === 0) return '_(no games yet — only concept references)_'
  return [...byGame.values()]
    .sort((a, b) => (a.game ?? '').localeCompare(b.game ?? ''))
    .map(r => `- [${r.title}](${r.link})`)
    .join('\n')
}

async function main() {
  const map = await scanFrontmatter()
  await writeIndex(map)
  await writeStubs(map)
  const total = map.size
  const games = countGamesAcrossPatterns(map)
  console.log(`[patterns] indexed ${total} pattern(s) across ${games} game(s)`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
