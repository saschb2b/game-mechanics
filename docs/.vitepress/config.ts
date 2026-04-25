import { defineConfig } from 'vitepress'

const siteUrl = 'https://saschb2b.github.io/game-mechanics'

export default defineConfig({
  title: 'game-mechanics',
  description: 'A personal knowledge base of game mechanics, design patterns, reward loops, and what they teach.',
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
    ['meta', { property: 'og:title', content: 'game-mechanics' }],
    ['meta', { property: 'og:url', content: siteUrl }],
  ],

  themeConfig: {
    siteTitle: 'game-mechanics',

    nav: [
      { text: 'Games', link: '/games/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'Patterns', link: '/patterns/' },
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
      ],
      '/concepts/': [
        {
          text: 'Concepts',
          items: [
            { text: 'Index', link: '/concepts/' },
            { text: 'Loadout as budget', link: '/concepts/loadout-as-budget' },
            { text: 'Handcrafted-PCG hybrid', link: '/concepts/handcrafted-pcg-hybrid' },
          ]
        }
      ],
      '/patterns/': [
        {
          text: 'Patterns',
          items: [
            { text: 'Index', link: '/patterns/' },
          ]
        }
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
