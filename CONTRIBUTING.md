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
  concepts/<concept>.md        Curated cross-game pattern pages — the canonical "design patterns" surface
  patterns/<pattern>.md        Auto-generated stubs that exist only so prose links /patterns/<x> resolve.
                               NOT navigated. Don't edit by hand.
  .vitepress/
    config.ts                  Sidebar, nav, theme config
    build/generate-patterns.ts Stub generator (runs on dev/build)

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
| `patterns.md` | yes | Quick reference table of patterns this game exemplifies. Curated patterns link to `/concepts/<pattern>`; uncurated patterns link to `/patterns/<pattern>` (the auto-generated stub) |
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
studio: Mega Crit
publisher: Mega Crit     # omit if same as studio
released: 2019           # year only, OR YYYY-MM-DD for new releases
release_status: 1.0      # 1.0 | early-access — omit if shipped
genre: roguelike-deckbuilder
business_model: premium  # premium | f2p | subscription | hybrid
iconic_mechanic: "Card draft + Ascension staircase"
core_dialectic: "Risk vs reward, fractally"
patterns:
  - subtractive-deckbuilding
  - card-draft-with-skip
  - cumulative-modifier-staircase
tags: [deckbuilder, roguelike, single-player]
---
```

The site is a design-pattern reference, not a personal play log — don't add `status`, `hours_played`, or similar personal-timeline fields. Personal context belongs in `lessons.md` if anywhere.

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

Add one row to the games table (alphabetical order): name, release year, iconic mechanic, core dialectic. Match the column widths of existing rows.

### 8. Cross-cut: update concept pages this game exemplifies

**This step is easy to forget.** When the new game uses a pattern that already has a curated concept page (`docs/concepts/<pattern>.md`), add it to the concept page's variants table.

Specifically:
- For each `patterns:` entry on the new game's pages, check `docs/concepts/<pattern>.md`.
- If a concept page exists, add a new row to its **Variants across games** table.
- If the concept page has a **Visual contrast** image grid, add a column for the new game.
- See `loadout-as-budget.md` and `handcrafted-pcg-hybrid.md` for examples of the pattern.

**Curated concept pages do not auto-update.** You must edit them by hand. The auto-generator only owns the `/patterns/<x>` URL-resolution stubs — see [Pattern stubs](#pattern-stubs-url-resolution).

### 9. Run the generator + build

```sh
pnpm generate   # regenerate /patterns/<x>.md stubs from frontmatter
pnpm build      # full build; fails on dead links
```

Fix any dead-link errors before considering the entry done. Common cause: a `patterns:` entry references a pattern that doesn't exist anywhere else (the build fails because the link in your prose to `/patterns/<name>` has no stub yet — the generator only creates stubs for patterns *referenced in `patterns:` frontmatter*, so make sure your prose links match your frontmatter).

### 10. Verify in the browser

Restart `pnpm dev` (the generator runs once at startup). Click through:
- The new game's index page.
- Each mechanic sub-page.
- The concept pages you updated — confirm the new variants row appears.

### 11. Delete research scaffolding

If you used `planning/research/<game>/` during step 1, delete the folder now. The published `docs/` is canonical.

## Adding a concept page

A concept page is the **curated** discussion of a cross-game pattern. End-to-end procedure for when you decide to promote a pattern from "stub" to "curated."

### When to promote a pattern

Default rule: **≥2 games tag a pattern in their `patterns:` frontmatter** before you write a curated concept page for it.

Why wait: a one-game concept page is just a restatement of the game's mechanic page. The point of the concept layer is *contrast* across games — the variants table is what earns the page its existence. Without ≥2 games, you have nothing meaningful to put in it.

Exception: a pattern with only 1 current game but a strong unique angle (e.g. `permalife` — a deliberate dev-coined term) can earn its own page early.

To find candidates, grep the repo for `patterns:` frontmatter entries that appear in two or more games' files but don't yet have a `docs/concepts/<slug>.md`. The auto-generated stubs at `docs/patterns/<slug>.md` show which games tag each pattern (machine reference; not navigated).

### 1. Create the concept page

```
docs/concepts/<pattern-slug>.md
```

The slug must match the pattern ID used in game pages' `patterns:` frontmatter exactly.

### 2. Use the standard template

Every section is required. Don't skip the variants table — it's the load-bearing piece.

```markdown
---
title: "Pattern Name"
type: concept
patterns:
  - <pattern-slug>
related_patterns:
  - adjacent-pattern-1
  - adjacent-pattern-2
---

# Pattern Name

> **Lemma:** one-line description of the pattern.

## What it solves

The design problem this pattern addresses. ~2 paragraphs. Be concrete: what
goes wrong without this pattern, and what does adding it fix?

## Variants across games

| Game | <axis-1> | <axis-2> | <trade-off> |
|---|---|---|---|
| **[Game A](/games/<a>/<mechanic>)** | ... | ... | ... |
| **[Game B](/games/<b>/<mechanic>)** | ... | ... | ... |

The column headers are pattern-specific. For loadout patterns: budget shape /
what gets packed / constraint / cost. For map patterns: shape / node types /
what's revealed. Pick columns that highlight where the games *differ*.

### Visual contrast (when images exist)

| Game A — caption | Game B — caption |
|---|---|
| ![alt](/images/<a>/<file>.jpg) | ![alt](/images/<b>/<file>.jpg) |
| One-line description of what this image shows of the pattern. | Same. |

Optional but high-value when good screenshots exist for each game.

## When to use this pattern

- Genres / scales / contexts where it works.
- Avoid when: ...

## Pitfalls

- Where the pattern fails or feels bad.
- Common implementation mistakes.

## Adjacent patterns

- [`other-pattern`](./other-pattern.md) — relationship to this one.
```

See existing concept pages for examples — [`loadout-as-budget`](docs/concepts/loadout-as-budget.md) is the canonical four-game contrast; [`grid-inventory`](docs/concepts/grid-inventory.md) is a tighter two-game contrast.

### 3. Update `docs/concepts/index.md`

Add the new page under the right category. The index groups concepts by area:

- **Loadout & inventory** — patterns about what the player carries.
- **Maps & encounters** — patterns about run structure.
- **Run shape & meta** — patterns about progression / scope.

Pick the category, add a `- [**Title**](./slug) — one-line lemma` bullet.

If the new pattern doesn't fit any existing category, add a new category section. Categories are cheap; rename / regroup if needed.

### 4. Update the sidebar in `docs/.vitepress/config.ts`

Add the new page to the `/concepts/` sidebar map under the matching category. The sidebar mirrors `concepts/index.md` — keep them in sync.

### 5. Run the generator

```sh
pnpm generate
```

Behind the scenes the generator notices `docs/concepts/<slug>.md` exists and rewrites the corresponding `docs/patterns/<slug>.md` stub as a one-line redirect to the concept page — so any pre-existing `/patterns/<slug>` links in game prose keep resolving. (See [Pattern stubs](#pattern-stubs-url-resolution).)

### 6. Verify

`pnpm build` should pass. Click through the new concept page in the browser and confirm:
- Each game in the variants table links to a real mechanic sub-page.
- The concept appears under the right category in `docs/concepts/index.md`.
- The new entry shows up in the `/concepts/` sidebar.

## Workflow at a glance

```
Game pages (hand-written)
  ├─ frontmatter: patterns: [a, b, c]
  └─ prose: links to /concepts/<x> for curated, /patterns/<x> for uncurated

         ↓ (when ≥2 games tag a pattern, manually promote)

docs/concepts/<p>.md (hand-written, curated)
  ├─ Lemma + variants table + visual contrast + pitfalls
  └─ Listed in docs/concepts/index.md under a category — THIS is the canonical surface

docs/patterns/<p>.md (auto-generated, NOT navigated)
  └─ One-line stub or concept redirect; exists only so prose links resolve.
```

**The thing the generator doesn't do for you:** keep concept-page contrast tables in sync with new games. When game X is added with pattern Y, and Y already has a curated concept page, *you* must add a row to that concept page's variants table. Concept-page rows are bespoke prose ("how does game X specifically instantiate this pattern?") and aren't well-served by frontmatter-driven boilerplate. They are the artisanal layer.

## Pattern stubs (URL resolution)

`docs/patterns/<name>.md` files are **auto-generated** by `docs/.vitepress/build/generate-patterns.ts` and are not part of the site nav. They exist purely so in-prose links of the form `/patterns/<x>` from game pages resolve to *something* rather than 404.

There are two kinds of stub:

- **Redirect stub** — written when `docs/concepts/<x>.md` exists. A one-line "see the concept page" pointer.
- **Plain stub** — written when no concept page exists. Lists which games tag the pattern.

Don't edit stubs by hand — they're regenerated on every `pnpm generate` / `pnpm dev` / `pnpm build`. Hand-written `docs/concepts/<name>.md` files are **never touched** by the generator.

Pattern IDs are kebab-case (lowercase letters, digits, hyphens). Invalid IDs are warned about and skipped.

In practice you don't visit `/patterns/<x>` URLs as a reader. You navigate via `/concepts/` (curated) or via game pages (origin). The generator just keeps stale links from breaking.

## Local dev

```sh
pnpm install
pnpm dev      # localhost:5173, runs the generator before vitepress dev
pnpm build    # production build, fails on dead links
pnpm generate # regenerate /patterns/ stubs on demand (after editing `patterns:` frontmatter mid-session)
```

The generator only runs once at `pnpm dev` startup. Editing `patterns:` frontmatter mid-session needs `pnpm generate` again to refresh the stubs (otherwise new prose `/patterns/<x>` links may not resolve).

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
