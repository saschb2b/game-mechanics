# Contributing to game-mechanics

How to add new entries, the conventions to follow, and how the patterns index works.

## Repo layout

```
docs/                          VitePress site (the published content)
  index.md                     Site home
  about.md                     About page
  games/<game>/                One folder per game
    index.md                   Snapshot, macro loop, headline lessons
    <mechanic>.md              One file per major mechanic system
    design-tensions.md         Devs' framing + quotes (optional)
    patterns.md                Quick pattern table (link out to concept pages)
    lessons.md                 What I'd steal for my own games
    sources.md                 Citations
  concepts/<concept>.md        Curated cross-game pattern pages
  patterns/                    Auto-generated; do not edit by hand
  .vitepress/
    config.ts                  Sidebar, nav, theme config
    build/generate-patterns.ts Patterns index generator (runs on dev/build)

CLAUDE.md                      Conventions for the LLM working on this repo
CONTRIBUTING.md                This file
.github/workflows/             CI / Pages deploy
```

## Adding a new game entry

End-to-end checklist. Follow in order. Each step is necessary; skipping any will produce a broken or incomplete entry. Cross-reference an existing entry — [`docs/games/moonlighter-2/`](docs/games/moonlighter-2/) is a recent complete example.

### 1. Research

Use web search + dev interviews + reviews + wiki. Synthesize before writing — you need to know the game's iconic mechanic, core dialectic, macro loop, and which existing patterns it touches *before* you start drafting files.

If the research is substantial, write it as a multi-file synthesis under `planning/research/<game>/` per [CLAUDE.md](CLAUDE.md). Once polished into `docs/`, **delete the research dump** — it's scaffolding, not reference material.

### 2. Create the game folder

```
docs/games/<game-slug>/
```

Slug is kebab-case (e.g. `slay-the-spire`, `moonlighter-2`). Used in URLs.

### 3. Write the standard set of files

Every game folder has these files. Even small games create stubs for all of them — consistency makes the sidebar predictable.

| File | Required? | Contents |
|---|---|---|
| `index.md` | yes | Snapshot, macro loop, TOC of mechanic sub-pages, "What this game teaches" summary |
| `<mechanic-1>.md`, `<mechanic-2>.md`, … | yes | One file per major mechanic system. Tag each with `patterns:` |
| `design-tensions.md` | yes if devs are explicit; skip if no quotes available | Block-quoted dev quotes; what the game wrestles with |
| `patterns.md` | yes | Quick reference table of patterns this game exemplifies, linking out to `/patterns/<pattern>` |
| `lessons.md` | yes | Opinionated "what I'd steal for my own (Godot) games", with cautionary lessons |
| `sources.md` | yes | Bibliography. Wiki, Steam, dev interviews, reviews, guides. Group by category. |

**Sub-page split rule** — how many mechanic files to create:

| Mechanic systems | Recommendation |
|---|---|
| < 6 | One `index.md` with deep sections is fine; mechanic files optional |
| 6–10 | Folder split at author preference |
| > 10 | **Mandatory** folder split |

Folder split is always safer — allows growth.

### 4. Frontmatter

`index.md` requires the full snapshot frontmatter:

```yaml
---
title: "Slay the Spire"
type: game
status: complete         # playing | complete | shelved | research-only
studio: Mega Crit
publisher: Mega Crit     # omit if same as studio
released: 2019           # year only, OR YYYY-MM-DD for new releases
release_status: 1.0      # 1.0 | early-access — omit if shipped
genre: roguelike-deckbuilder
business_model: premium  # premium | f2p | subscription | hybrid
hours_played: 120        # null/omit for research-only
iconic_mechanic: "Card draft + Ascension staircase"
core_dialectic: "Risk vs reward, fractally"
patterns:
  - subtractive-deckbuilding
  - card-draft-with-skip
  - cumulative-modifier-staircase
tags: [deckbuilder, roguelike, single-player]
---
```

The two fields that earn their keep:
- **`iconic_mechanic`** — the *one phrase* that summarises this game's mechanical identity.
- **`core_dialectic`** — the central tension the game restates across its systems.

Required sections in `index.md`, in order:

1. Headline blockquote — one-paragraph "why this game is in the knowledge base."
2. Hero image — one strong screenshot under the headline.
3. **Snapshot table** — rendered from frontmatter + a few extras (run length, inspirations, etc.).
4. **Macro loop** — ASCII pseudo-code block. See any existing entry's macro-loop section.
5. **Mechanic deep-dives** — bulleted list linking to sub-pages.
6. **What this game teaches** — short version, ~5 bullets, links to `lessons.md`.
7. **See also** — Patterns / Design tensions / Sources links.

Mechanic sub-pages have lighter frontmatter:

```yaml
---
title: "Warframe — Modding system"
type: game
game: warframe
patterns:
  - loadout-as-budget
  - permanent-grind-currency
---
```

### 5. Add screenshots

See [Visuals](#visuals) below for the procedure. Always do this *before* embedding images in pages — captioning is much easier when you've actually seen the screenshots.

Per game: **8–12 screenshots is the sweet spot**, covering the iconic mechanic + each major sub-page's headline visual. Plus one `CREDITS.md`.

### 6. Update the sidebar in `docs/.vitepress/config.ts`

Add a new section under `/games/` listing every page in the new folder. Match the structure of existing games (Overview, mechanics, design-tensions, patterns, lessons, sources). Order matters — readers will read top-to-bottom.

### 7. Update `docs/games/index.md`

Add one row to the games table: name, iconic mechanic, core dialectic, status. Match the column widths of existing rows.

### 8. Cross-cut: update concept pages this game exemplifies

**This step is easy to forget.** When the new game uses a pattern that already has a curated concept page (`docs/concepts/<pattern>.md`), add it to the concept page's variants table.

Specifically:
- For each `patterns:` entry on the new game's pages, check `docs/concepts/<pattern>.md`.
- If a concept page exists, add a new row to its **Variants across games** table.
- If the concept page has a **Visual contrast** image grid, add a column for the new game.
- See `loadout-as-budget.md` and `handcrafted-pcg-hybrid.md` for examples of the pattern.

The auto-generated patterns index (`docs/patterns/`) updates itself from frontmatter, but **curated concept pages do not** — you must edit them by hand.

### 9. Run the patterns generator + build

```sh
pnpm generate   # regenerate /patterns/ from frontmatter
pnpm build      # full build; fails on dead links
```

Fix any dead-link errors before considering the entry done. Common cause: a `patterns:` entry references a pattern that doesn't exist anywhere else (the build fails because the link in your prose to `/patterns/<name>` has no stub yet — the generator only creates stubs for patterns *referenced in `patterns:` frontmatter*, so make sure your prose links match your frontmatter).

### 10. Verify in the browser

Restart `pnpm dev` (the generator runs once at startup). Click through:
- The new game's index page.
- Each mechanic sub-page.
- The patterns index (`/patterns/`) — confirm the new patterns appear.
- The concept pages you updated — confirm the new variants row appears.

### 11. Delete research scaffolding

If you used `planning/research/<game>/` during step 1, delete the folder now. The published `docs/` is canonical.

## Adding a concept page

Concept pages live at `docs/concepts/<pattern>.md` and are the **curated** discussion of a cross-game pattern. They follow this template:

```markdown
---
title: "Pattern Name"
type: concept
patterns:
  - pattern-name
related_patterns:
  - adjacent-pattern-1
  - adjacent-pattern-2
---

# Pattern Name

> **Lemma:** one-line description.

## What it solves
The design problem this pattern addresses.

## Variants across games
| Game | Instantiation | Trade-off |
|---|---|---|
| Game A | ... | ... |

## When to use
## Pitfalls
## Adjacent patterns
```

The contrast table is the load-bearing feature. **Pattern-first, with games-as-examples** — don't write a concept page until you have ≥2 games (or ≥1 game and a strong unique angle).

When a concept page exists at `docs/concepts/<name>.md`, the patterns index automatically links to it instead of generating a stub.

## Patterns index

`docs/patterns/index.md` and `docs/patterns/<name>.md` files are **auto-generated** by `docs/.vitepress/build/generate-patterns.ts`. Don't edit them by hand — your edits will be overwritten on next `pnpm generate` (or `pnpm dev` / `pnpm build`).

The generator:
- Scans every `docs/**/*.md` for `patterns: [...]` frontmatter.
- Deduplicates per game (prefers mechanic sub-pages over the game index).
- Writes `docs/patterns/index.md` — the grand table of patterns × games.
- Writes a stub `docs/patterns/<name>.md` for each pattern that doesn't have a concept page.
- Removes orphan stubs (patterns no longer referenced anywhere).

Hand-written `docs/concepts/<name>.md` files are **never touched** by the generator.

Pattern IDs are kebab-case (lowercase letters, digits, hyphens). Invalid IDs are warned about and skipped.

## Local dev

```sh
pnpm install
pnpm dev      # localhost:5173, runs the generator before vitepress dev
pnpm build    # production build, fails on dead links
pnpm generate # regenerate patterns/ on demand (e.g. after editing frontmatter while dev is running)
```

The generator only runs once at `pnpm dev` startup, so editing `patterns:` frontmatter mid-session needs `pnpm generate` again to refresh the index.

## Visuals

Game screenshots and UI references live under `docs/public/images/<game>/`. VitePress serves `docs/public/` at the site root, so a file at `docs/public/images/sparklite/refuge-hub.jpg` is reachable as `/images/sparklite/refuge-hub.jpg`.

**Always prefer static, repo-hosted copies over hotlinking.** Hotlinks rot; copies don't.

### Conventions

- Filenames are descriptive kebab-case: `patch-board-grid.jpg`, `modding-upgrade-detail.jpg`, `combat-defect.jpg`.
- Prefer `1920×1080` JPEGs (Steam screenshot CDN serves these natively). Don't upload 4K originals — too heavy.
- Each game folder under `docs/public/images/<game>/` has a `CREDITS.md` listing every image, the source URL, and the license/usage basis.
- Embed with a captioned figure pattern:

  ```markdown
  ![Patch board UI showing Tetris-shaped patches on a 3x3 grid](/images/sparklite/adventure-log-ui.jpg)
  *Adventure Log: Sparklite currency + patches inventory. Source: [Steam screenshot](https://store.steampowered.com/app/943140/).*
  ```

### Sources we use

- **gameuidatabase.com** — labeled UI screenshots, ideal for menu/HUD shots. Each screenshot is tagged (Modding, Loadout, Star Chart, Daily Reward, etc.) so picking by mechanic is fast. Note: WebFetch is blocked (403) but `curl` with a real User-Agent works. Page IDs are in the URL: `gameuidatabase.com/gameData.php?id=<id>`.
- **Steam screenshot CDN** — see procedure below.
- **Game wikis** (wiki.gg, Fandom) — most are CC-BY-SA; verify per-image.
- **Press kits / official pages** — safest source when available.

### Procedure: download screenshots from Steam

```sh
# 1. Find the Steam appid from the store URL (e.g. 943140 for Sparklite).
# 2. Fetch the store page.
curl -s -L -A "Mozilla/5.0" "https://store.steampowered.com/app/<appid>/" -o /tmp/<game>-steam.html

# 3. Find the URL pattern. Newer games (~2024+) use a 2-segment path
#    with the hash as both directory and filename:
grep -oE 'apps/<appid>/[a-f0-9]+/ss_[a-f0-9]+\.1920x1080\.jpg' /tmp/<game>-steam.html | sort -u
#    Older games use a 1-segment path:
grep -oE 'apps/<appid>/ss_[a-f0-9]+\.1920x1080\.jpg' /tmp/<game>-steam.html | sort -u

# 4. Most reliable: extract from the screenshots JSON blob in the page HTML.
#    Search for "&quot;screenshots&quot;:[" and parse out the "full" URLs.

# 5. Download with descriptive sequential filenames (we'll rename after viewing).
mkdir -p docs/public/images/<game>/
cd docs/public/images/<game>/
curl -s -L -A "Mozilla/5.0" -o screen-01.jpg "<full-url>"
# ...
```

**Common gotcha:** if every download is ~146 bytes you're getting 404 HTML pages because the path format is wrong. Steam migrated newer games (e.g. Moonlighter 2, app 2350790) to the 2-segment path; older games (e.g. Sparklite, app 943140) still use the 1-segment path. Try both.

### Procedure: rename and caption

```sh
# 6. View each screenshot to identify what it shows. (Use the Read tool on the
#    image file — it renders inline.)

# 7. Rename to descriptive kebab-case based on what's shown:
mv screen-01.jpg backpack-puzzle.jpg
mv screen-02.jpg shop-active-customers.jpg
# ...

# 8. Write a CREDITS.md in the same folder listing every image,
#    its source URL, and what it shows. See any existing game's
#    docs/public/images/<game>/CREDITS.md for the template.
```

### Embedding in mechanic pages

Use the captioned figure pattern. Place embeds *inline with the analysis they support*, not in a separate gallery section:

```markdown
![Backpack with relic synergies — Soldier Doll selected, showing POINTED + ABSORB markers](/images/moonlighter-2/backpack-puzzle.jpg)
*The backpack puzzle. Each cell holds a relic with a quality multiplier (e.g. +18, +34). The selected relic — Soldier Doll — has POINTED + ABSORB tags: "Absorbs all the pointed Dolls or Crystals of the same rarity and transforms into a Prince Doll." Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*
```

The alt text describes the image for accessibility. The italic caption explains *why this image is here* and links the source.

### Fair use posture

Screenshots are used as **transformative critical commentary** on game mechanics — discussing design decisions, contrasting patterns across games, and supporting analytical claims. We:

- Always cite the source URL.
- Don't claim ownership.
- Use 1920×1080 JPEGs (well under deluxe quality).
- Display alongside substantive analysis, not as a decorative gallery.

If a publisher requests removal of any specific image, comply immediately and replace with a textual description.

## Style

- Mechanic descriptions: analytical, neutral.
- Lessons + design tensions: opinionated, first-person ok.
- Reception sections: framed as "what design problem surfaced", not as a review.
- Dev quotes are gold. Block-quote them whenever they exist.
- Cross-link to other games and to concept pages aggressively. The graph is the point.
