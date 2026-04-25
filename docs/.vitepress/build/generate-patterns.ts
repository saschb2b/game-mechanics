/**
 * Scans all game and concept pages, collects `patterns:` frontmatter,
 * and generates:
 *   - docs/patterns/index.md — patterns index, grouped by cross-cutting count
 *   - docs/patterns/<pattern>.md — stub per pattern (redirect when concept exists)
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
const GAMES_DIR = join(DOCS_ROOT, 'games')

interface PageRef {
  file: string        // relative path from docs/
  link: string        // VitePress link
  title: string
  type: 'game' | 'concept' | 'unknown'
  game?: string       // game slug, e.g. "sparklite"
  isGameIndex: boolean
}

type PatternMap = Map<string, PageRef[]>

interface PatternEntry {
  pattern: string
  refs: PageRef[]
  distinctGames: Set<string>
  hasConcept: boolean
  lemma?: string
}

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
 * Read the lemma line from a curated concept page. Looks for the first
 * line matching `> **Lemma:** ...` (the convention used by all concept pages).
 */
async function readConceptLemma(pattern: string): Promise<string | undefined> {
  const path = join(CONCEPTS_DIR, `${pattern}.md`)
  if (!existsSync(path)) return undefined
  const raw = await readFile(path, 'utf8')
  const { content } = matter(raw)
  for (const line of content.split('\n')) {
    const m = line.match(/^>\s*\*\*Lemma:\*\*\s*(.+?)\s*$/)
    if (m) return m[1].trim()
  }
  return undefined
}

/**
 * Read each game's display title from games/<game>/index.md. Used to render
 * compact game pills.
 */
async function readGameTitles(): Promise<Map<string, string>> {
  const out = new Map<string, string>()
  if (!existsSync(GAMES_DIR)) return out
  const dirs = await readdir(GAMES_DIR, { withFileTypes: true })
  for (const d of dirs) {
    if (!d.isDirectory()) continue
    const idx = join(GAMES_DIR, d.name, 'index.md')
    if (!existsSync(idx)) continue
    const raw = await readFile(idx, 'utf8')
    const { data } = matter(raw)
    if (typeof data.title === 'string') {
      // Strip "(series)" or ": Subtitle" for compact display in pills.
      const compact = data.title
        .replace(/\s*\(series\)\s*$/i, '')
        .replace(/^([^:]+):.*$/, '$1')
        .trim()
      out.set(d.name, compact)
    } else {
      out.set(d.name, deriveTitleFromPath(d.name + '.md'))
    }
  }
  return out
}

/** Convert a kebab-case pattern slug to display name: "loadout-as-budget" → "Loadout as budget". */
function patternDisplayName(slug: string): string {
  // Tokens that should keep all-caps in display.
  const UPPER = new Set(['pcg', 'dag', 'rng', 'npc', 'f2p', 'tcg', 'mtg', 'arpg', 'xp', 'mmo', 'pvp', 'pve', 'ai', 'ui', 'hp'])
  return slug
    .split('-')
    .map((w, i) => {
      if (UPPER.has(w)) return w.toUpperCase()
      if (i === 0) return w[0].toUpperCase() + w.slice(1)
      return w
    })
    .join(' ')
}

/** Convert basic markdown emphasis (*x*, **x**) to HTML so it renders inside raw-HTML blocks. */
function inlineMarkdownToHtml(s: string): string {
  // Escape first, then re-introduce em/strong tags.
  let out = escapeHtml(s)
  // **bold** — non-greedy, no whitespace around markers
  out = out.replace(/\*\*([^*\n]+?)\*\*/g, '<strong>$1</strong>')
  // *italic* — likewise
  out = out.replace(/\*([^*\n]+?)\*/g, '<em>$1</em>')
  // `code`
  out = out.replace(/`([^`\n]+?)`/g, '<code>$1</code>')
  return out
}

/**
 * Deduplicate refs by game, preferring the most-specific mechanic page over
 * the game index. Concept pages are excluded.
 */
function distinctGameRefs(refs: PageRef[]): PageRef[] {
  const byGame = new Map<string, PageRef>()
  for (const ref of refs) {
    if (ref.type !== 'game' || !ref.game) continue
    const existing = byGame.get(ref.game)
    if (!existing || (existing.isGameIndex && !ref.isGameIndex)) {
      byGame.set(ref.game, ref)
    }
  }
  return [...byGame.values()].sort((a, b) => (a.game ?? '').localeCompare(b.game ?? ''))
}

/** Render a single pattern row as raw HTML inside the markdown index. */
function renderPatternRow(
  entry: PatternEntry,
  gameTitles: Map<string, string>
): string {
  const refs = distinctGameRefs(entry.refs)
  const display = patternDisplayName(entry.pattern)
  const count = entry.distinctGames.size

  const pills = refs
    .map((r) => {
      const gameSlug = r.game!
      const gameName = gameTitles.get(gameSlug) ?? gameSlug
      // Tooltip: full sub-page title (e.g. "Mega Man Battle Network — NaviCust")
      const tooltip = r.title.replace(/"/g, '&quot;')
      return `<a class="pp-pill" href="${r.link}" title="${tooltip}">${gameName}</a>`
    })
    .join('')

  const pageLink = entry.hasConcept
    ? `<a class="pp-status pp-status--concept" href="/concepts/${entry.pattern}">Concept →</a>`
    : `<a class="pp-status pp-status--stub" href="/patterns/${entry.pattern}">Stub</a>`

  const lemma = entry.lemma
    ? `<p class="pp-lemma">${inlineMarkdownToHtml(entry.lemma)}</p>`
    : ''

  const countBadge = `<span class="pp-count" data-n="${count}">${count}</span>`

  return `<div class="pp-row${entry.hasConcept ? ' pp-row--concept' : ''}">
  <div class="pp-main">
    <div class="pp-header">
      <h3 class="pp-name">${escapeHtml(display)}</h3>
      ${countBadge}
      ${pageLink}
    </div>
    ${lemma}
    <div class="pp-pills">${pills}</div>
  </div>
</div>`
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderSection(
  title: string,
  blurb: string,
  entries: PatternEntry[],
  gameTitles: Map<string, string>
): string {
  if (entries.length === 0) return ''
  const rows = entries.map((e) => renderPatternRow(e, gameTitles)).join('\n')
  return `## ${title}

${blurb}

<div class="pp-section">
${rows}
</div>

`
}

async function writeIndex(map: PatternMap) {
  const gameTitles = await readGameTitles()

  // Build the pattern entries with distinct-game counts and lemma loading.
  const entries: PatternEntry[] = []
  for (const [pattern, refs] of map.entries()) {
    const distinctGames = new Set(
      refs.filter((r) => r.type === 'game' && r.game).map((r) => r.game!)
    )
    const hasConcept = await conceptExists(pattern)
    const lemma = hasConcept ? await readConceptLemma(pattern) : undefined
    entries.push({ pattern, refs, distinctGames, hasConcept, lemma })
  }

  // Sort: most cross-cutting first, then alphabetical.
  entries.sort(
    (a, b) =>
      b.distinctGames.size - a.distinctGames.size ||
      a.pattern.localeCompare(b.pattern)
  )

  // Group by coverage.
  const broad = entries.filter((e) => e.distinctGames.size >= 3)
  const cross = entries.filter((e) => e.distinctGames.size === 2)
  const single = entries.filter((e) => e.distinctGames.size === 1)
  const orphan = entries.filter((e) => e.distinctGames.size === 0)

  const totalGames = countGamesAcrossPatterns(map)

  let body = `---
generated: true
---

# Patterns

Cross-game design patterns, indexed automatically from \`patterns:\` frontmatter on every game and concept page. **${entries.length}** pattern${entries.length === 1 ? '' : 's'} across **${totalGames}** game${totalGames === 1 ? '' : 's'}.

`

  if (entries.length === 0) {
    body += `*No patterns indexed yet. Add \`patterns: [...]\` frontmatter to a game page and run \`pnpm generate\`.*\n`
  } else {
    body += renderSection(
      'Broadly cross-cutting (3+ games)',
      'The strongest patterns in the library — same idea, different math, multiple genres.',
      broad,
      gameTitles
    )
    body += renderSection(
      'Cross-cutting (2 games)',
      'Pairs that already point toward a curated concept page. Promote when the contrast is interesting.',
      cross,
      gameTitles
    )
    body += renderSection(
      'Single-game patterns',
      'Distinctive moves that haven\'t been re-discovered yet across the library. Worth tracking — when a second game lands using the same pattern, it earns a curated concept page.',
      single,
      gameTitles
    )
    if (orphan.length > 0) {
      body += renderSection(
        'Concept-only references',
        'Referenced from concept pages without a tagged game implementation.',
        orphan,
        gameTitles
      )
    }
  }

  body += `\n---

*Re-run with \`pnpm generate\`. The script: scans every \`docs/**/*.md\` for \`patterns:\` frontmatter, deduplicates per game (preferring mechanic sub-pages over the game index), groups by coverage, and writes redirect stubs at \`/patterns/<pattern>\` whenever a curated concept exists at \`/concepts/<pattern>\`.*\n`

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
    const hasConcept = await conceptExists(pattern)
    const games = renderStubGameList(refs)

    let body: string
    if (hasConcept) {
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
    .map((r) => `- [${r.title}](${r.link})`)
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

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
