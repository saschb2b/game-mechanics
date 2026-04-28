---
title: "Loadout as budget"
type: concept
patterns:
  - loadout-as-budget
related_patterns:
  - power-creep-mitigation
  - opportunity-cost-loadout
  - subtractive-deckbuilding
  - grid-inventory
og_image: images/sparklite/adventure-log-ui.jpg
---

# Loadout as budget

> **Lemma:** Power lives inside a *fixed budget* — points, cells, slots, or hand size. Adding more of one thing necessarily means having less of another. Vertical growth is gated by *something the player must spend*, not just earn.

## What it solves

The naive instinct in progression design is **"more = better"**: more health, more damage, more skills. That instinct produces power-creep — players accumulate everything until the game becomes trivial.

A budget mechanic refuses the more-is-better drift. Power isn't accumulated; it's **packed**. Every choice is also a sacrifice.

This solves several problems at once:

- **Active opportunity cost** at every loadout decision.
- **Bounded power growth** without nerfing *content*.
- **Identity** for individual builds — different budgets produce visibly different playstyles.
- **Re-engagement** — players love rearranging budgets they've outgrown.

## Variants across games

| Game | Budget shape | What you "pack" | The packing constraint | Trade-off cost |
|---|---|---|---|---|
| **[Sparklite](/games/sparklite/patch-board)** | **Spatial** — 3×3 → 5×5 grid | Patches with Tetris footprints (1–4 cells) | Cells available on the patch board | Fitting a 4-cell damage patch costs 4 cells you can't use for HP / map / energy |
| **[Warframe](/games/warframe/modding)** | **Numeric + categorical** — 60 mod points + polarity slots | Mods costing N points each | Total points + matching polarity = packing efficiency | A non-matching slot costs +25%; matching slot costs −50% |
| **[Slay the Spire](/games/slay-the-spire/combat)** | **Combinatorial** — 3 energy / turn + ~5-card hand from a thin deck | Cards costing energy | Energy per turn + draw consistency | Bigger deck dilutes draws; energy can't carry to next turn |
| **[Moonlighter 2](/games/moonlighter-2/backpack-puzzle)** | **Adjacency-driven** — fixed backpack grid where placement triggers synergies | Relics with conditional placement tags (POINTED, ABSORB, corner, row) | Adjacency rules + grid position | Where you put a relic determines whether it triggers a synergy or wastes its tag |
| **[Path of Exile 1](/games/path-of-exile/passive-tree)** | **Massive numeric** — 1500 nodes shared across classes; ~122 points at level 100 | Single-point passives, multi-point notables, keystones, jewel sockets | Total points + pathing — points spent traversing also count | Respec costs Orbs of Regret; full re-spec is endgame-currency-expensive |
| **[Mega Man Battle Network](/games/mega-man-battle-network/folder-and-chip-codes)** | **Layered fixed budgets** — 30-chip Folder + 4×4 NaviCust grid + ~5-card Hand drawn from Folder | Battle Chips (codes A–Z + ★), NaviCust programs (Tetris shapes), opening Hand from random draw | Folder size (30) + Hand size (5) + NaviCust cells; chip codes constrain co-play | Fewer co-playable codes = more dead Hand draws; more bug-tolerant NaviCust = more debuffs |
| **[Xenoblade Chronicles 3](/games/xenoblade-chronicles/class-and-ouroboros)** | **Combinatorial: 8-art palette × class × cross-class master** — pick a class for each character; pick which 3 arts of that class are active; pick alt-arts from a *different* mastered class | Arts (class-bound), Master Arts (from another mastered class), accessory slots, gem slots | 8 art slots × ~20 classes × N other classes mastered for cross-slotting | Pick the wrong cross-class slot and you've burned 60+ hours of class mastery; the loadout *is* the build |
| **[Hollow Knight](/games/hollow-knight/charms-and-notches)** | **Pure numeric — 11-notch charm budget** | ~45 charms with integer costs (1–5 notches each) | Total notches; opt-in *overcharm* state lets you exceed at the cost of 2× damage taken | A 5-notch charm eats nearly half the early budget; cheap-charms-only vs. one-big-charm builds play very differently |
| **[Nier: Automata](/games/nier-automata/chip-system)** | **Numeric storage budget — starts ~64, max 256 — that *includes the HUD*** | Plug-in chips: combat passives, Auto-* accessibility, AND the HUD elements (HP bar, minimap, damage numbers). Same chip exists at multiple storage costs depending on quality | Total storage; mandatory OS Chip cannot be removed without dying; three saved Sets (A/B/C) for fast role-swap | Showing the minimap costs storage you can't spend on Auto-Heal. Frame and action share one budget — the only entry where the *UI itself* is in the loadout |
| **[Pokémon RSE](/games/pokemon-rse/stats-and-natures)** | **Tiny 4-slot moveset per Pokémon, drawn from hundreds of typed options; plus 510 EVs across 6 stats per Pokémon** | Battle moves (typed; with PP); Effort Values (cap 252 per stat); held items (1 slot per creature) | 4 move slots — adding a 5th forces *forgetting* an existing move permanently; EVs hard-capped at 510 total / 252 per stat | A 5th move replaces a 4th — coverage vs power vs status vs finisher; EVs in two stats means none in the others. The smallest-grain canonical case in this knowledge base |

### Visual contrast

| Sparklite | Warframe | Slay the Spire | Moonlighter 2 | Path of Exile |
|---|---|---|---|---|
| ![Sparklite adventure log with patches](/images/sparklite/adventure-log-ui.jpg) | ![Warframe modding upgrade detail](/images/warframe/modding-upgrade-detail.jpg) | ![Slay the Spire Defect combat](/images/slay-the-spire/combat-defect.jpg) | ![Moonlighter 2 backpack puzzle](/images/moonlighter-2/backpack-puzzle.jpg) | ![PoE Atlas tree showing massive node graph](/images/path-of-exile/atlas-of-worlds.jpg) |
| Patches collected, awaiting placement on the Med Bay grid | Mod points + polarity slots; matching polarity halves cost | 4/3 energy + 5-card hand; every turn is allocation | Backpack grid where adjacency triggers POINTED / ABSORB synergies | Atlas tree (≈700 nodes) — the *meta*-budget; the character passive tree is even bigger (~1500 nodes) |

| Hollow Knight | Nier: Automata | Pokémon RSE |
|---|---|---|
| ![Hollow Knight charm screen — 5 of 11 notches used, full grid of charms below](/images/hollow-knight/hk-charms-equip.jpg) | ![Nier Automata chip categories — Storage Used 68/72](/images/nier-automata/chip-categories.jpg) | ![Pokémon battle moves — Torchic with 4 typed moves and PP counters](/images/pokemon-rse/battle-moves.jpg) |
| 11 notches, ~45 charms with integer costs. Pure numeric. | 72 storage, chip costs 1–17. Same numeric form — but the HUD elements (HP bar, minimap, damage numbers) are *also* chips in the same budget. | 4 move slots, hundreds of typed moves. The smallest-grain budget — and the constraint that's anchored Pokémon battling for ~30 years. |

## When to use this pattern

- **Roguelites / run-based games** where each run wants distinct identities.
- **Looter-shooters / RPGs** with long-term build progression that risk power-creep otherwise.
- **Deckbuilders, deck-light card games, ability-bar designs.**
- **Anywhere "more upgrades" would otherwise just keep stacking.**

The pattern requires:
- A clear, visible **packing space** (the grid, the mod points, the hand size).
- A way to **expand the budget** at real cost (Forma re-leveling, med-bay tier-ups, deck thinning).
- **Distinct items with non-uniform "weight"** — if everything is the same size, the budget doesn't bite.

## Pitfalls

- **Budgets that are too generous defeat the point.** If the player can fit everything they want, the constraint isn't a constraint. Sparklite's mid-game flatness comes from the 5×5 board being roomy enough to fit "the answer."
- **Budgets that never expand feel punishing.** Players need progression somewhere — the budget itself is a good axis of progression (Sparklite's med-bay tiers, Warframe's Reactor/Catalyst).
- **Spatial budgets are intuitive but author-heavy.** Designing patches/items with multiple footprints takes more art and tuning than a flat numeric cost.
- **Numeric budgets can feel abstract.** Warframe's polarity-matching is initially opaque to new players. The math has to be explained well or the depth is invisible.

## Adjacent patterns

- `power-creep-mitigation` — broader category. A loadout budget is one mechanism for mitigating power creep; there are others (e.g. enemy scaling, content gating).
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — restates the trade-off framing.
- [`subtractive-deckbuilding`](/concepts/subtractive-deckbuilding) — Spire's specific implementation: a deck that's *too big* is *worse*, so the budget pressure is internal to the deck rather than external to it.
- [`grid-inventory`](/concepts/grid-inventory) — the specifically-spatial flavor.

## Why this matters as a design lesson

The variants above show that the same design problem (preventing power-creep while keeping progression interesting) can be solved with **completely different math** — spatial, numeric, or combinatorial. The choice of math shapes the *feel* of the constraint:

- Spatial budgets feel **puzzly and tactile.**
- Numeric budgets feel **algebraic and optimization-driven.**
- Combinatorial (deck-based) budgets feel **probabilistic and adaptive.**

Pick the math that fits your game's tone. The pattern is the same; the texture is yours to design.
