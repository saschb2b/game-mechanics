#!/usr/bin/env node
// Generates docs/public/llms.txt and docs/public/llms-full.txt from the markdown
// content under docs/. Run via the `prebuild` script. Follows the llmstxt.org
// convention so MCP-aware tools (Claude, Cursor, etc.) can ingest the site.

import { readFile, writeFile, readdir, stat } from 'node:fs/promises'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DOCS_ROOT = join(__dirname, '..')
const PUBLIC_DIR = join(DOCS_ROOT, 'public')

const SITE_URL = 'https://saschb2b.github.io/game-mechanics'
const SITE_NAME = 'game-mechanics'
const SITE_TAGLINE =
  "A designer's reference of game mechanics, reward loops, and the patterns that recur across roguelikes, ARPGs, deckbuilders, and looters. Per-game deep dives plus cross-game concept pages."

const IGNORE_DIRS = new Set(['node_modules', '.vitepress', 'public'])

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue
      out.push(...(await walk(join(dir, entry.name))))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      out.push(join(dir, entry.name))
    }
  }
  return out
}

// Minimal frontmatter parser — handles `key: value` and `key: "quoted value"`.
// Lists and nested keys are skipped (we only need scalars: title, description,
// iconic_mechanic, core_dialectic).
function parseFrontmatter(src) {
  if (!src.startsWith('---\n')) return { data: {}, body: src }
  const end = src.indexOf('\n---', 4)
  if (end === -1) return { data: {}, body: src }
  const fmText = src.slice(4, end)
  const body = src.slice(end + 4).replace(/^\r?\n/, '')
  const data = {}
  for (const line of fmText.split(/\r?\n/)) {
    const m = line.match(/^([a-z_][a-z0-9_]*):\s*(.*)$/i)
    if (!m) continue
    let [, k, v] = m
    if (v === '' || v.startsWith('[') || v.startsWith('{')) continue
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    data[k] = v
  }
  return { data, body }
}

// docs/games/hades/boons-and-gods.md → /games/hades/boons-and-gods
// docs/games/hades/index.md          → /games/hades/
// docs/index.md                      → /
function urlPathFor(absPath) {
  const rel = relative(DOCS_ROOT, absPath).replace(/\\/g, '/')
  const noExt = rel.replace(/\.md$/, '')
  if (noExt === 'index') return '/'
  if (noExt.endsWith('/index')) return '/' + noExt.slice(0, -'index'.length)
  return '/' + noExt
}

function deriveTitle(data, body, urlPath) {
  if (data.title) return data.title
  const h1 = body.match(/^#\s+(.+?)\s*$/m)
  if (h1) return h1[1]
  return urlPath
}

function deriveDescription(data) {
  if (data.description) return data.description
  if (data.iconic_mechanic && data.core_dialectic) {
    return `${data.iconic_mechanic} — ${data.core_dialectic}`
  }
  return data.iconic_mechanic || ''
}

function classify(urlPath) {
  if (urlPath === '/') return { section: 'site', game: null }
  if (urlPath.startsWith('/games/')) {
    const parts = urlPath.slice('/games/'.length).split('/').filter(Boolean)
    if (parts.length === 0) return { section: 'games-index', game: null }
    return { section: 'games', game: parts[0] }
  }
  if (urlPath.startsWith('/concepts/')) return { section: 'concepts', game: null }
  return { section: 'other', game: null }
}

function gameLabel(slug) {
  // Special-case the few games where slug-to-Title-Case isn't quite right.
  const overrides = {
    'zelda-botw': 'Legend of Zelda: BotW',
    'pokemon-rse': 'Pokémon Ruby/Sapphire/Emerald',
    'mega-man-battle-network': 'Mega Man Battle Network',
    'path-of-exile': 'Path of Exile',
    'path-of-exile-2': 'Path of Exile 2',
    'cult-of-the-lamb': 'Cult of the Lamb',
    'nier-automata': 'Nier: Automata',
    'slay-the-spire': 'Slay the Spire',
    'hollow-knight': 'Hollow Knight',
    'xenoblade-chronicles': 'Xenoblade Chronicles',
    'moonlighter-2': 'Moonlighter 2',
  }
  return overrides[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

function bulletLine(page) {
  const url = `${SITE_URL}${page.urlPath}`
  return page.description
    ? `- [${page.title}](${url}): ${page.description}`
    : `- [${page.title}](${url})`
}

async function main() {
  const files = await walk(DOCS_ROOT)
  const pages = []
  for (const file of files) {
    const src = await readFile(file, 'utf8')
    const { data, body } = parseFrontmatter(src)
    const urlPath = urlPathFor(file)
    pages.push({
      file,
      urlPath,
      title: deriveTitle(data, body, urlPath),
      description: deriveDescription(data),
      body,
      ...classify(urlPath),
    })
  }

  // ---- llms.txt (index) ----
  const root = pages.find((p) => p.urlPath === '/')
  const gamesIndex = pages.find((p) => p.urlPath === '/games/')
  const conceptsIndex = pages.find((p) => p.urlPath === '/concepts/')

  const conceptPages = pages
    .filter((p) => p.section === 'concepts' && p.urlPath !== '/concepts/')
    .sort((a, b) => a.urlPath.localeCompare(b.urlPath))

  const otherPages = pages
    .filter((p) => p.section === 'other')
    .sort((a, b) => a.urlPath.localeCompare(b.urlPath))

  const gamePagesByGame = new Map()
  for (const p of pages.filter((p) => p.section === 'games')) {
    if (!gamePagesByGame.has(p.game)) gamePagesByGame.set(p.game, [])
    gamePagesByGame.get(p.game).push(p)
  }
  for (const list of gamePagesByGame.values()) {
    // Overview (index) first, then alphabetical by URL.
    list.sort((a, b) => {
      const ai = a.urlPath.endsWith('/') ? 0 : 1
      const bi = b.urlPath.endsWith('/') ? 0 : 1
      return ai - bi || a.urlPath.localeCompare(b.urlPath)
    })
  }
  const gameSlugs = [...gamePagesByGame.keys()].sort()

  const indexLines = []
  indexLines.push(`# ${SITE_NAME}`)
  indexLines.push('')
  indexLines.push(`> ${SITE_TAGLINE}`)
  indexLines.push('')
  indexLines.push(
    'This file follows the [llms.txt convention](https://llmstxt.org/). For the full text of every page in a single document, see [llms-full.txt](' +
      SITE_URL +
      '/llms-full.txt).'
  )
  indexLines.push('')

  indexLines.push('## Site')
  if (root) indexLines.push(bulletLine({ ...root, title: 'Home', description: SITE_TAGLINE }))
  for (const p of otherPages) indexLines.push(bulletLine(p))
  if (gamesIndex) indexLines.push(bulletLine({ ...gamesIndex, title: 'All games' }))
  if (conceptsIndex) indexLines.push(bulletLine({ ...conceptsIndex, title: 'All concepts' }))
  indexLines.push('')

  indexLines.push('## Games')
  indexLines.push('')
  for (const slug of gameSlugs) {
    const list = gamePagesByGame.get(slug)
    const overview = list.find((p) => p.urlPath.endsWith('/'))
    indexLines.push(`### ${gameLabel(slug)}`)
    if (overview && overview.description) indexLines.push(`${overview.description}`)
    indexLines.push('')
    for (const p of list) indexLines.push(bulletLine(p))
    indexLines.push('')
  }

  indexLines.push('## Concepts')
  indexLines.push('')
  for (const p of conceptPages) indexLines.push(bulletLine(p))
  indexLines.push('')

  const llmsTxt = indexLines.join('\n')

  // ---- llms-full.txt (concatenated content) ----
  const fullOrder = [
    ...(root ? [root] : []),
    ...otherPages,
    ...(gamesIndex ? [gamesIndex] : []),
    ...gameSlugs.flatMap((slug) => gamePagesByGame.get(slug)),
    ...(conceptsIndex ? [conceptsIndex] : []),
    ...conceptPages,
  ]

  const fullLines = []
  fullLines.push(`# ${SITE_NAME} — full text`)
  fullLines.push('')
  fullLines.push(`> ${SITE_TAGLINE}`)
  fullLines.push('')
  fullLines.push(
    `Concatenation of every page on ${SITE_URL}. Each section is preceded by a \`<!-- url: ... -->\` marker so models can cite the canonical page.`
  )
  fullLines.push('')
  fullLines.push('---')
  fullLines.push('')

  for (const p of fullOrder) {
    const url = `${SITE_URL}${p.urlPath}`
    fullLines.push(`<!-- url: ${url} -->`)
    fullLines.push('')
    fullLines.push(p.body.trim())
    fullLines.push('')
    fullLines.push('---')
    fullLines.push('')
  }

  const llmsFullTxt = fullLines.join('\n')

  await writeFile(join(PUBLIC_DIR, 'llms.txt'), llmsTxt)
  await writeFile(join(PUBLIC_DIR, 'llms-full.txt'), llmsFullTxt)

  const fmt = (n) => (n / 1024).toFixed(1) + ' KB'
  console.log(
    `generate-llms-txt: ${pages.length} pages → llms.txt (${fmt(llmsTxt.length)}), llms-full.txt (${fmt(llmsFullTxt.length)})`
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
