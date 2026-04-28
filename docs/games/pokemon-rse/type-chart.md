---
title: "Pokémon RSE — Type chart + dual typing"
type: game
game: pokemon-rse
patterns:
  - type-rps-matrix
---

# Type chart + dual typing

The signature Pokémon mechanic. **17 types in Gen 3** (Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel — Fairy was added in Gen 6). Every Pokémon has 1 or 2 types. Every move has exactly 1 type. Every type has a fixed effectiveness against every other type — 0× (immune), 0.5× (resisted), 1× (neutral), or 2× (super-effective).

Dual typing **multiplies**. So a Bug move on a Grass/Poison Pokémon (Bulbasaur) does 2× × 0.5× = **1×** damage; a Bug move on a Bug/Flying (Beedrill) does 1× × 0.5× = **0.5×**; a Rock move on Charizard (Fire/Flying) does 2× × 2× = **4×**.

This is the load-bearing layer of every Pokémon battle.

![BATTLE MOVES screen — Torchic Lv 10, four moves listed: NORMAL Scratch (PP 35/35), NORMAL Growl (PP 40/40), NORMAL Focus Energy (PP 30/30), FIRE Ember (PP 25/25). Each move has a coloured Type tag on the left — beige Normal, orange Fire](/images/pokemon-rse/battle-moves.jpg)
*Every move's type is shown on the left of the BATTLE MOVES screen. The type tag is the *first* thing the player learns to read. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1708).*

## The matrix

The 17×17 type chart is **289 cells** total — 25 of them 2×, 53 of them 0.5×, 7 of them 0× (immunities), the rest 1×. The most important asymmetries:

| Type | 2× against | 0.5× against | Resisted by | Immune |
|---|---|---|---|---|
| Fire | Grass, Bug, Ice, Steel | Fire, Water, Rock, Dragon | Fire, Water, Rock, Dragon | — |
| Water | Fire, Ground, Rock | Water, Grass, Dragon | Water, Grass, Dragon | — |
| Grass | Water, Ground, Rock | Fire, Grass, Poison, Flying, Bug, Dragon, Steel | Same | — |
| Electric | Water, Flying | Electric, Grass, Dragon | Electric, Grass, Dragon, Ground | Ground |
| Ground | Fire, Electric, Poison, Rock, Steel | Grass, Bug | Same | Flying, Levitate |
| Ghost | Ghost, Psychic | Dark, Steel | Same | Normal, Fighting |
| Dragon | Dragon | Steel | Steel | — |

The **Fire / Water / Grass triangle** is the canonical introduction: each starter beats one and loses to another. This is the first systems lesson the game teaches, in the very first battle (Treecko vs Poochyena, etc).

## Dual typing as a designer's lever

A Pokémon with **two types** has a multiplied weakness/resistance profile. This produces a much wider range of distinct defensive identities than 17 types alone:

- **Skarmory** (Steel/Flying) — resists 9 types, immune to 1, weak only to Electric and Fire. **The defensive fortress.**
- **Heracross** (Bug/Fighting) — hit 4× by Flying. **Glass cannon — high attack, fragile profile.**
- **Aggron** (Steel/Rock) — 4× weak to Fighting and Ground. **Looks like a tank, dies to common moves.**
- **Spiritomb** (Ghost/Dark, Gen 4) and **Sableye** (Ghost/Dark) — were 0 weaknesses pre-Fairy, the only two such Pokémon. **The puzzle box.**

Dual typing is the single biggest reason the same six-stat creature can feel fundamentally different from another with similar stats. The matchup matrix is doing the work, not the numbers.

## Same-Type Attack Bonus (STAB)

If a Pokémon uses a move that matches one of its own types, the move does **1.5× damage** on top of any type-effectiveness multiplier. This is "STAB."

So a Fire-type Pokémon using Ember on a Grass type: 2× (super-effective) × 1.5× (STAB) = **3× damage**, before anything else. STAB is the single biggest reason competitive moves on most Pokémon are *of their own type*.

## How this teaches the player

The type chart is **never explicitly taught**. The game shows type tags on every move, names every Pokémon's type in its Pokédex entry, prints "It's super effective!" or "It's not very effective…" or "It doesn't affect [target]…" after each hit. But the matrix itself is never displayed in-game.

Players learn the chart **inductively** over the first ~10 hours, building a mental model from feedback. By the time the player faces gym 5, they know Water beats Rock; by gym 8, they know Ghost beats Psychic but is weak to Dark. The game treats the chart as a real-world fact the player will absorb.

Children, in particular, build this knowledge over months and treat it as personally-discovered. The chart's complexity (289 cells) is much higher than what would normally be learnable through play — but Pokémon's repetition (~1000+ battles in a playthrough) gives the player enough exposure to internalise it.

## Type chart at the design layer

Two design decisions worth flagging:

1. **The chart is asymmetric and irregular.** Fighting hits Normal for 2× but is resisted by Flying — there's no underlying "fast vs heavy" rule that generates the matrix; it's a hand-tuned table. The asymmetry is what gives each type a real character.
2. **Some types are deliberately weak.** Bug, in Gen 3, is *bad offensively* — 2× against only Grass, Psychic, and Dark; resisted by 7 types; STAB-ed by Pokémon that mostly have low Attack. This creates *categories of Pokémon that can't carry a team*, which (paradoxically) creates space for niche builds. The designers don't try to make every type viable in every role.

## Patterns this exemplifies

- `type-rps-matrix` — the canonical instance. Asymmetric N-way RPS where every move is tagged with one of N types and every target has 1–2 of N types, multiplying. Dozens of game-design students rebuild a 6×6 or 8×8 version in their first prototype.

## Adjacent patterns

- [`loadout-as-budget`](/concepts/loadout-as-budget) — the type chart matters because each Pokémon has only [4 moves](./stats-and-natures); the type-tags become a *coverage* problem.
- `coverage-vs-power` — competitive teambuilding always trades raw STAB power against type coverage. A pure-Fire team has a 4× weakness to Water; a coverage build dilutes STAB but plugs the holes.
