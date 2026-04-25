---
title: "Sparklite — Lessons for my own games"
type: game
game: sparklite
---

# Lessons for my own (Godot) games

What I'd actually steal, why, and what to watch out for.

## Steal the grid loadout

Tetris-shape footprints are an absurdly good forcing function for choice — they scale meaningful tradeoffs with very simple math (rectangle packing). Could work for spell loadouts, ship modules, ability bars, deckbuilders, robot upgrades. **Why it works:** every increase in raw power directly costs space, so vertical and horizontal progression are inseparable.

## Steal "permalife" for narrative-leaning games

If your game has any story, permadeath is hostile to it. Permalife (world resets, character keeps progress) gives you the structural variety of a roguelite without breaking narrative momentum. Especially fertile for indie games that want roguelite replay but can't author 50 hours of branching content.

## Hand-author tiles, procedurally arrange

A solid cost/value sweet spot if you can't afford full PCG content. The lesson is to **partition where the procedural-ness lives** — at the *layout* level, not the *content* level. Players experience variety; you author at fixed cost.

## Cautionary lesson: don't solve the early game *too* well

The patch board solves the early-game power bottleneck cleanly. Two consequences:
1. The mid-game often becomes trivial, because the board fills before bosses scale.
2. The patch grid was the lever that *opened* the bottleneck — but no equivalent lever *closes* a different one later.

For my own games: if I add a meta-progression mechanism that solves a specific phase, I should think hard about whether that phase is worth solving completely or whether the constraint *is* the fun. Sparklite chose to solve, and paid for it in mid-game pacing.

## Cautionary lesson: procedural arrangement can feel superficial

If you reuse the same room types in shuffled positions, players notice. Two ways to mitigate:
- More tile variety up front (expensive).
- Tile *modifiers* — same tile, different enemy spawns / lighting / hazards / events (cheap).

Sparklite leans on (a) and the criticism shows. Most modern roguelites lean harder on (b).

## Stealable: dual-purpose unlocks

Sparklite's gadgets are both weapons and traversal keys. The Shrink Ray opens new biomes *and* fights enemies. **A single unlock moves the player forward on two axes.** This is just compressed metroidvania design under a procedural shell — cheaper than designing two unlocks for the same content beat.
