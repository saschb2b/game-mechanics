import { defineConfig } from 'vitepress'

const siteUrl = 'https://saschb2b.github.io/game-mechanics'
const defaultDescription = 'A designer\'s reference of game mechanics, reward loops, and the patterns that recur across roguelikes, ARPGs, deckbuilders, and looters. Per-game deep dives plus cross-game concept pages.'
const defaultOgImage = `${siteUrl}/images/path-of-exile/atlas-of-worlds.jpg`

export default defineConfig({
  title: 'game-mechanics',
  description: defaultDescription,
  base: '/game-mechanics/',
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: siteUrl,
  },

  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'author', content: 'Sascha Becker' }],
    ['meta', { name: 'keywords', content: 'game design, game mechanics, reward loops, roguelike, deckbuilder, looter, ludonarrative, godot' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'game-mechanics' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@saschb2b' }],
    ['meta', { name: 'twitter:creator', content: '@saschb2b' }],
    ['meta', { name: 'theme-color', content: '#1a1a1a' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/game-mechanics/favicon.svg' }],
  ],

  transformHead({ pageData }) {
    const fm = pageData.frontmatter || {}

    // siteUrl already contains the GitHub Pages base path, so URLs are
    // siteUrl + '/' + <relative-page-path>. Don't concat siteData.base again.
    const rel = (pageData.relativePath || '')
      .replace(/\.md$/, '')
      .replace(/(^|\/)index$/, '$1')
      .replace(/\/$/, '')
    const url = rel ? `${siteUrl}/${rel}/` : `${siteUrl}/`

    // Title: page title falls back to site title
    const title = fm.title || pageData.title || 'game-mechanics'
    const fullTitle = title === 'game-mechanics' ? title : `${title} · game-mechanics`

    // Description priority:
    //   1. explicit fm.description
    //   2. game-page synthesis: iconic_mechanic — core_dialectic
    //   3. site default
    let description = fm.description
    if (!description && fm.iconic_mechanic) {
      description = fm.core_dialectic
        ? `${fm.iconic_mechanic} — ${fm.core_dialectic}.`
        : fm.iconic_mechanic
    }
    if (!description) description = defaultDescription

    // Image priority: fm.og_image (rooted at /public) → site default
    let image = defaultOgImage
    if (fm.og_image) {
      image = fm.og_image.startsWith('http')
        ? fm.og_image
        : `${siteUrl}/${fm.og_image.replace(/^\//, '')}`
    }

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:title', content: fullTitle }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:width', content: '1920' }],
      ['meta', { property: 'og:image:height', content: '1080' }],
      ['meta', { name: 'twitter:title', content: fullTitle }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'description', content: description }],
    ]
  },

  themeConfig: {
    siteTitle: 'game-mechanics',

    nav: [
      { text: 'Games', link: '/games/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'About', link: '/about' },
      {
        text: 'GitHub',
        link: 'https://github.com/saschb2b/game-mechanics'
      }
    ],

    sidebar: {
      '/games/': [
        { text: 'All games', link: '/games/' },
        {
          text: 'Hades',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/hades/' },
            { text: 'Boons & gods', link: '/games/hades/boons-and-gods' },
            { text: 'Chamber paths', link: '/games/hades/chamber-and-paths' },
            { text: 'Death as narrative', link: '/games/hades/death-as-narrative' },
            { text: 'Meta-progression', link: '/games/hades/meta-progression' },
            { text: 'Series evolution (H1 → H2)', link: '/games/hades/series-evolution' },
            { text: 'Patterns', link: '/games/hades/patterns' },
            { text: 'Lessons', link: '/games/hades/lessons' },
            { text: 'Sources', link: '/games/hades/sources' },
          ]
        },
        {
          text: 'Hollow Knight',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/hollow-knight/' },
            { text: 'Charms & notches', link: '/games/hollow-knight/charms-and-notches' },
            { text: 'Soul & focus', link: '/games/hollow-knight/soul-and-focus' },
            { text: 'Map & discovery', link: '/games/hollow-knight/map-and-discovery' },
            { text: 'Shade on death', link: '/games/hollow-knight/shade-on-death' },
            { text: 'Patterns', link: '/games/hollow-knight/patterns' },
            { text: 'Lessons', link: '/games/hollow-knight/lessons' },
            { text: 'Sources', link: '/games/hollow-knight/sources' },
          ]
        },
        {
          text: 'Mega Man Battle Network',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/mega-man-battle-network/' },
            { text: 'Battle system', link: '/games/mega-man-battle-network/battle-system' },
            { text: 'Folder & chip codes', link: '/games/mega-man-battle-network/folder-and-chip-codes' },
            { text: 'Program Advance', link: '/games/mega-man-battle-network/program-advance' },
            { text: 'NaviCust', link: '/games/mega-man-battle-network/navicust' },
            { text: 'Power forms', link: '/games/mega-man-battle-network/power-forms' },
            { text: 'Series evolution', link: '/games/mega-man-battle-network/series-evolution' },
            { text: 'Design tensions', link: '/games/mega-man-battle-network/design-tensions' },
            { text: 'Patterns', link: '/games/mega-man-battle-network/patterns' },
            { text: 'Lessons', link: '/games/mega-man-battle-network/lessons' },
            { text: 'Sources', link: '/games/mega-man-battle-network/sources' },
          ]
        },
        {
          text: 'Moonlighter 2',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/moonlighter-2/' },
            { text: 'Dual-life loop', link: '/games/moonlighter-2/dual-life-loop' },
            { text: 'Backpack puzzle', link: '/games/moonlighter-2/backpack-puzzle' },
            { text: 'Dungeon map', link: '/games/moonlighter-2/dungeon-map' },
            { text: 'Shop & pricing', link: '/games/moonlighter-2/shop-pricing' },
            { text: 'Combat', link: '/games/moonlighter-2/combat' },
            { text: 'Progression', link: '/games/moonlighter-2/progression' },
            { text: 'Design tensions', link: '/games/moonlighter-2/design-tensions' },
            { text: 'Patterns', link: '/games/moonlighter-2/patterns' },
            { text: 'Lessons', link: '/games/moonlighter-2/lessons' },
            { text: 'Sources', link: '/games/moonlighter-2/sources' },
          ]
        },
        {
          text: 'Path of Exile',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/path-of-exile/' },
            { text: 'Passive tree', link: '/games/path-of-exile/passive-tree' },
            { text: 'Skill gems', link: '/games/path-of-exile/skill-gems' },
            { text: 'Ascendancy', link: '/games/path-of-exile/ascendancy' },
            { text: 'Crafting & currency', link: '/games/path-of-exile/crafting-and-currency' },
            { text: 'Trade & economy', link: '/games/path-of-exile/trade-and-economy' },
            { text: 'Atlas of Worlds', link: '/games/path-of-exile/atlas' },
            { text: 'Death & difficulty', link: '/games/path-of-exile/death-and-difficulty' },
            { text: 'Design tensions', link: '/games/path-of-exile/design-tensions' },
            { text: 'Patterns', link: '/games/path-of-exile/patterns' },
            { text: 'Lessons', link: '/games/path-of-exile/lessons' },
            { text: 'Sources', link: '/games/path-of-exile/sources' },
          ]
        },
        {
          text: 'Path of Exile 2',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/path-of-exile-2/' },
            { text: 'Combat philosophy', link: '/games/path-of-exile-2/combat-philosophy' },
            { text: 'Weapons grant skills', link: '/games/path-of-exile-2/weapons-grant-skills' },
            { text: 'Skill gem rework', link: '/games/path-of-exile-2/skill-gem-rework' },
            { text: 'Atlas (one-death)', link: '/games/path-of-exile-2/atlas-one-death' },
            { text: 'Crafting pulled back', link: '/games/path-of-exile-2/crafting-pulled-back' },
            { text: 'Design tensions', link: '/games/path-of-exile-2/design-tensions' },
            { text: 'Patterns', link: '/games/path-of-exile-2/patterns' },
            { text: 'Lessons', link: '/games/path-of-exile-2/lessons' },
            { text: 'Sources', link: '/games/path-of-exile-2/sources' },
          ]
        },
        {
          text: 'Slay the Spire',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/slay-the-spire/' },
            { text: 'Map & nodes', link: '/games/slay-the-spire/map-and-nodes' },
            { text: 'Combat', link: '/games/slay-the-spire/combat' },
            { text: 'Deckbuilding', link: '/games/slay-the-spire/deckbuilding' },
            { text: 'Relics', link: '/games/slay-the-spire/relics' },
            { text: 'Characters', link: '/games/slay-the-spire/characters' },
            { text: 'Ascension', link: '/games/slay-the-spire/ascension' },
            { text: 'Daily climb', link: '/games/slay-the-spire/daily-climb' },
            { text: 'Design tensions', link: '/games/slay-the-spire/design-tensions' },
            { text: 'Patterns', link: '/games/slay-the-spire/patterns' },
            { text: 'Lessons', link: '/games/slay-the-spire/lessons' },
            { text: 'Sources', link: '/games/slay-the-spire/sources' },
          ]
        },
        {
          text: 'Sparklite',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/sparklite/' },
            { text: 'Patch board', link: '/games/sparklite/patch-board' },
            { text: 'World & loop', link: '/games/sparklite/world-and-loop' },
            { text: 'Combat', link: '/games/sparklite/combat' },
            { text: 'Design tensions', link: '/games/sparklite/design-tensions' },
            { text: 'Patterns', link: '/games/sparklite/patterns' },
            { text: 'Lessons', link: '/games/sparklite/lessons' },
            { text: 'Sources', link: '/games/sparklite/sources' },
          ]
        },
        {
          text: 'Xenoblade Chronicles',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/xenoblade-chronicles/' },
            { text: 'Combat foundation', link: '/games/xenoblade-chronicles/combat-foundation' },
            { text: 'Vision system (XC1)', link: '/games/xenoblade-chronicles/vision-system' },
            { text: 'Driver–Blade pairing (XC2)', link: '/games/xenoblade-chronicles/blade-driver-pairing' },
            { text: 'Class & Ouroboros (XC3)', link: '/games/xenoblade-chronicles/class-and-ouroboros' },
            { text: 'Skells & FrontierNav (XCX)', link: '/games/xenoblade-chronicles/skells-and-frontiernav' },
            { text: 'Series evolution', link: '/games/xenoblade-chronicles/series-evolution' },
            { text: 'Patterns', link: '/games/xenoblade-chronicles/patterns' },
            { text: 'Lessons', link: '/games/xenoblade-chronicles/lessons' },
            { text: 'Sources', link: '/games/xenoblade-chronicles/sources' },
          ]
        },
        {
          text: 'Warframe',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/games/warframe/' },
            { text: 'Acquisition', link: '/games/warframe/acquisition' },
            { text: 'Modding', link: '/games/warframe/modding' },
            { text: 'Progression layers', link: '/games/warframe/progression-layers' },
            { text: 'Reward loops', link: '/games/warframe/reward-loops' },
            { text: 'Monetization', link: '/games/warframe/monetization' },
            { text: 'Combat', link: '/games/warframe/combat' },
            { text: 'Design tensions', link: '/games/warframe/design-tensions' },
            { text: 'Patterns', link: '/games/warframe/patterns' },
            { text: 'Lessons', link: '/games/warframe/lessons' },
            { text: 'Sources', link: '/games/warframe/sources' },
          ]
        },
      ],
      '/concepts/': [
        { text: 'All concepts', link: '/concepts/' },
        {
          text: 'Loadout & inventory',
          collapsed: false,
          items: [
            { text: 'Loadout as budget', link: '/concepts/loadout-as-budget' },
            { text: 'Grid inventory', link: '/concepts/grid-inventory' },
            { text: 'Opportunity-cost loadout', link: '/concepts/opportunity-cost-loadout' },
            { text: 'Subtractive deckbuilding', link: '/concepts/subtractive-deckbuilding' },
            { text: 'Fusion economy', link: '/concepts/fusion-economy' },
          ]
        },
        {
          text: 'Maps & encounters',
          collapsed: false,
          items: [
            { text: 'Branching DAG map', link: '/concepts/branching-dag-map' },
            { text: 'Bonus with drawback', link: '/concepts/bonus-with-drawback' },
            { text: 'Handcrafted-PCG hybrid', link: '/concepts/handcrafted-pcg-hybrid' },
            { text: 'Tile-shuffled world', link: '/concepts/tile-shuffled-world' },
            { text: 'Enemy intent telegraph', link: '/concepts/enemy-intent-telegraph' },
          ]
        },
        {
          text: 'Run shape & meta',
          collapsed: false,
          items: [
            { text: 'Bounded roguelite', link: '/concepts/bounded-roguelite' },
            { text: 'Meta as variety, not power', link: '/concepts/meta-as-variety-not-power' },
            { text: 'Nested progression graph', link: '/concepts/nested-progression-graph' },
            { text: 'Late-introduced mechanics', link: '/concepts/late-introduced-mechanics' },
          ]
        },
        {
          text: 'Crafting & economy',
          collapsed: false,
          items: [
            { text: 'Currency as crafting', link: '/concepts/currency-as-crafting' },
            { text: 'Aspirational crafting', link: '/concepts/aspirational-crafting' },
            { text: 'Random perfect-roll economy', link: '/concepts/random-perfect-roll-economy' },
          ]
        },
        {
          text: 'Studio philosophy',
          collapsed: false,
          items: [
            { text: 'Vision-driven iteration', link: '/concepts/vision-driven-iteration' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/saschb2b/game-mechanics' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Notes from games I\'ve dissected.'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    },

    editLink: {
      pattern: 'https://github.com/saschb2b/game-mechanics/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
