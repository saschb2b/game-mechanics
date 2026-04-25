---
title: "Mega Man Battle Network — NaviCust"
type: game
game: mega-man-battle-network
patterns:
  - grid-inventory
  - block-puzzle-stat-upgrades
  - bonus-with-drawback
  - opportunity-cost-loadout
---

# NaviCust (Navi Customizer)

Introduced in **BN3 (2002)** as a replacement for the linear stat-upgrade system. The single most-original meta-progression mechanic the series produced — and a textbook [`grid-inventory`](/concepts/grid-inventory) implementation that **pre-dates Sparklite by 17 years** and Moonlighter 2 by 23.

![NaviCust 4×4 grid with pink, white, and grey program blocks placed in cells; NormStyl indicator on the left and RUN button on the right](/images/mega-man-battle-network/navicust-grid.png)
*The NaviCust customization screen in BN3. Pink program (UnderSht — keeps you at 1 HP on otherwise-lethal hits), white programs (Atk+1, Speed+1), grey buster mods. The third row is the Command Line — solid programs must touch it; striped programs must not. Source: image captured during a community Let's Play of MMBN3 (CC) on the [LP Archive](https://lparchive.org/Mega-Man-Battle-Network-3-Blue/Update%2009/); underlying game © Capcom.*

## Structure

A small grid (4×4 in BN3, expandable to 5×5; effectively doubled in BN6 via off-grid overflow). The player drops **Tetromino-shaped programs** onto the grid: HP+50, Charge+1, Shield, AirShoes, FloatShoes, Custom+1, Buster+1, etc. Each program is a 1–4 cell shape — same Tetris-style geometry as Sparklite's patches.

There's a **Command Line** running through the middle of the grid horizontally — the load-bearing constraint:

| Program type | Rule |
|---|---|
| **Solid / "ON" parts** (one-color blocks) | **Must** touch the Command Line |
| **Plus / "OFF" parts** (textured/striped, often pink/white/yellow) | **Must NOT** touch the Command Line |
| **Same-color edge adjacency** | Forbidden (corners are fine) |

Violating any rule **doesn't reject the placement** — it boots the program **bugged.**

## Bugs as an opt-in cost

Bugs are **persistent debuffs that follow MegaMan into combat:**

- Random panel cracks (under your own feet)
- Reduced HP regen
- Button input corruption
- Accidental chip use
- Aggro behavior that pulls enemies toward you

This is the cleverest part of the design. **You can ship a sub-optimal solution to fit one more program in.** "I want HP+50 but it doesn't fit in a legal placement → ship it bugged → take the bug → still get the +50." A BugStop program neutralizes one bug — but BugStop costs valuable space too.

The whole NaviCust meta-puzzle is: **how much chaos can I tolerate to fit one more buff?** Pure-clean solutions are achievable but constrained. Strong, bug-tolerant solutions are tighter.

This is **textbook [`bonus-with-drawback`](/concepts/bonus-with-drawback) at the loadout layer.**

## Compression Codes (BN6)

BN6 added a depth layer: **secret button-input codes that compress a program by one cell.** Hold Up + B + Select on the Customizer screen with a specific program selected, and its footprint shrinks. The codes are released in magazines, in-game hints, and (now) community wikis — same "[hidden knowledge depth](/patterns/hidden-knowledge-depth)" pattern as Program Advance recipes.

Compressed programs let you fit *more* into the same grid. Players who memorize the codes can ship 50%+ more programs than players who don't.

## Why this is a textbook grid-inventory

NaviCust matches the [`grid-inventory`](/concepts/grid-inventory) pattern as cleanly as any game in this knowledge base:

| Element | NaviCust |
|---|---|
| Grid | 4×4 → 5×5 (BN3); larger in BN6 |
| Item shape | Tetris-shaped programs |
| Adjacency rules | Command-Line constraint + same-color non-adjacency |
| Footprint vs. value | Bigger / better programs eat more cells |
| Constraint violation cost | Bugs (debuffs) — opt-in, not failure |
| Pressure-release valve | BugStop, Compression Codes (BN6) |

**BN3 shipped this in 2002.** It pre-dates Sparklite (2019), Moonlighter 2 (2025), and most Tetris-inventory games of the modern era. The game does not get cited as much as it should for the genre's lineage.

## Evolution across the series

| Game | NaviCust shape | Notes |
|---|---|---|
| **BN3 (2002)** | 4×4 → 5×5 grid; Style-Color overlay | Style locks you to a preferred program color; Error Codes unlocked via subquests |
| **BN4 (2003)** | Same as BN3, cleaner ruleset | Soul Unison decouples forms from color-locking |
| **BN5 (2004)** | Dark Programs added | Bug consequences scaled; Liberation Mission programs unlock new effects |
| **BN6 (2005)** | Effective area roughly doubled (off-grid overflow); Compression Codes | The series' final, most expansive form |

## What this teaches

- **Adjacency-based constraint puzzles produce more design space than slot-counting.** Same buff library, totally different meta-puzzle.
- **Opt-in chaos is more interesting than fail-state chaos.** Bugs aren't "you broke the rule, now this doesn't work" — they're "you bent the rule, here's what it costs you."
- **A 4×4 grid is enough.** You don't need a sprawling Sparklite-scale grid; the constraints carry the design.
- **Hidden depth (Compression Codes) extends the system's lifespan.** Codes shipped in magazines in 2005 are still being shared in retrospectives.

## Patterns this exemplifies

- [`grid-inventory`](/concepts/grid-inventory) — the canonical example, predating most modern instances.
- [`block-puzzle-stat-upgrades`](/patterns/block-puzzle-stat-upgrades) — Tetris-shaped stat blocks; passive upgrades through spatial packing.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — Bugs as opt-in costs for fitting more.
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — every cell taken by HP+ is a cell not available for Charge+, FloatShoes, etc.
