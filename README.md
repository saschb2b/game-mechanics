# game-mechanics

A personal knowledge base of game mechanics, reward loops, world-building, and design patterns — written by [Sascha Becker](https://github.com/saschb2b) while designing my own games in Godot.

> Public site (when deployed): **https://saschb2b.github.io/game-mechanics**

## What's in here

- **Per-game deep dives** — one folder per game, with sub-pages per mechanic system. Snapshot, macro loop, design tensions (with dev quotes), and "lessons for my own games."
- **Cross-game concepts** — pattern-first pages with contrast tables. How do different games solve the same design problem differently?
- **Auto-generated patterns index** — every recurring pattern × every game that exemplifies it. The graph view of the knowledge base.

## Quick start

```sh
pnpm install
pnpm dev      # http://localhost:5173
```

## Adding content

See [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Per-game folder layout & required frontmatter
- Concept page template
- How the patterns generator works
- Sub-page split rule
- Local dev commands

Open ongoing decisions are tracked in [TODO.md](./TODO.md).
LLM-specific conventions are in [CLAUDE.md](./CLAUDE.md).

## Stack

VitePress + pnpm workspace + GitHub Pages. Patterns index is generated at build time by [`docs/.vitepress/build/generate-patterns.ts`](./docs/.vitepress/build/generate-patterns.ts) from `patterns:` frontmatter.

## License

MIT, see [LICENSE](./LICENSE).
