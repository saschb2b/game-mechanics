/**
 * Scans all game and concept pages, collects `patterns:` frontmatter,
 * and generates per-pattern stub pages at docs/patterns/<pattern>.md.
 *
 * The stubs are NOT a navigated section — they exist purely so in-prose
 * links `/patterns/<x>` from game pages resolve. When a curated concept
 * page exists at `docs/concepts/<x>.md`, the stub redirects to it.
 * Otherwise it lists which games tag the pattern.
 *
 * The /patterns/ section is intentionally absent from the site nav. The
 * canonical surface for design patterns is /concepts/ — hand-curated,
 * grouped, with cross-game contrast tables.
 *
 * Re-runnable. Hand-written concept pages at /concepts/<name>.md are NEVER
 * touched. Files at /patterns/ with `generated: true` in frontmatter are
 * safe to overwrite.
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
    const hasConcept = await conceptExists(pattern)
    const games = renderStubGameList(refs)

    let body: string
    if (hasConcept) {
      // Redirect stub — /patterns/<name> stays resolvable when game prose links there,
      // but we point the reader at the curated concept page.
      body = `---
generated: true
title: "Pattern: ${pattern}"
---

# \`${pattern}\`

> Curated concept page: **[/concepts/${pattern}](/concepts/${pattern})**

The concept page has the lemma, the cross-game contrast table, when to use this pattern, and pitfalls. Read it there.

## Games tagged with this pattern

${games}
`
    } else {
      body = `---
generated: true
title: "Pattern: ${pattern}"
---

# \`${pattern}\`

> No curated concept page exists yet. The list below is auto-generated from frontmatter.

## Games using this pattern

${games}

*Want a curated discussion of this pattern? Add \`docs/concepts/${pattern}.md\`.*
`
    }

    await writeFile(join(PATTERNS_DIR, `${pattern}.md`), body, 'utf8')
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
  await writeStubs(map)
  // Drop a leftover /patterns/index.md from previous generator versions.
  const oldIndex = join(PATTERNS_DIR, 'index.md')
  if (existsSync(oldIndex)) {
    await unlink(oldIndex).catch(() => {})
  }
  const total = map.size
  const games = countGamesAcrossPatterns(map)
  console.log(`[patterns] wrote ${total} stub(s) for prose-link resolution; ${games} game(s) tagged`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
