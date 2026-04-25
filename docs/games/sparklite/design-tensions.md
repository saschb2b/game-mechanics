---
title: "Sparklite — Design tensions"
type: game
game: sparklite
---

# Design tensions

The Red Blue Games team is unusually candid about the design problems they tried to solve. Their framing is worth quoting because each tension maps onto cross-game concept pages.

## Adventure progression vs. roguelike resets

> *"Progression is one of those things that's required for a fun adventure game but is antithetical to roguelikes."* — **Edward Rowe**

The Sparklite answer: permalife. Death resets the *world*, not the *character*. Adventure progression preserved; roguelite tempo preserved.

## Authored content vs. procedural variety

> *"The marriage of deliberately authored adventure gameplay to the organized chaos of procedural generation… two completely competing genres."* — **Kevin Mabie**

The Sparklite answer: hand-author tiles, procedurally arrange them. See [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid).

## Skill floor vs. depth

> *"If a boss requires too high of a minimum skill level, we basically just forced some players out."* — **Edward Rowe**

The Sparklite answer: keep the skill floor low, but offer multiple ways through any encounter (combat mastery, patch loadout, gadget choice). Players who can't out-skill a boss can out-build it.

## Procedural puzzles don't work

> *"Very few puzzles work well in a repeated context and procedurally reproducing the elegant progression of puzzles you see in a Zelda dungeon is not something we wanted to tackle."* — **Lucas Rowe**

The Sparklite answer: don't even try. Mini-puzzles live inside hand-authored tile rooms; layout shuffles around them.

## Self-imposed tension that didn't fully resolve

The patch board solves *early-game* power so cleanly that *mid-game* often becomes a victory lap. Most reviewers note this difficulty curve issue. The mechanism that fixes the bottleneck is exactly the mechanism that flattens it once stacked. There isn't an obvious patch-board fix to this without breaking the design — it's a real design cost the team accepted.
