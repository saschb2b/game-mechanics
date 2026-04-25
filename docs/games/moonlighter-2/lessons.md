---
title: "Moonlighter 2 — Lessons for my own games"
type: game
game: moonlighter-2
---

# Lessons for my own (Godot) games

What's worth stealing, why, and what to watch out for.

## Steal: the dual-life loop framing

A single character living **two distinct mini-games that consume each other's outputs** is a rare design shape and almost always interesting. Action-roguelite + shopkeeper is the Moonlighter twist — but the pattern generalizes:

- Combat by day + farming by night (Stardew).
- Dungeon by day + cooking sim at night (untouched indie space).
- Battle royale + base-builder hybrid.

What matters: **the same items / resources flow through both**, and each half evaluates them by a different rubric. The tension between "what's good in mini-game A" and "what's good in mini-game B" is where the design lives.

## Steal: loot value as a placement problem

The backpack puzzle is **the most original mechanic in the game.** Almost no other indie has tried "where you put loot determines what it sells for" with this much commitment.

Generalizes naturally:
- Spell loadouts where adjacency triggers combos.
- Crew assignments on a ship (Sea of Thieves-ish).
- Garden plot layouts where adjacent crops boost each other.
- Inventory tetris where items have synergy patterns, not just shape.

The lesson: **don't make loot just have a value — make it have a value *equation* that the player solves.**

## Steal: the Hades-style map even in non-roguelikes

Moonlighter 2's map is one of the cleanest "graft a Hades-style DAG onto a non-Hades game" examples around. The pattern works because:

- Players see the run shape *before* committing.
- Path choices feel meaningful even when individual encounters are simple.
- One UI screen unlocks days of design discussions about node-type balance.

This is portable to *anything* with sequential encounters. Not just roguelites. Tower defense waves, narrative branching games, RPG dungeons — all candidates.

## Steal: layered multipliers as the price equation

The pricing equation `base × quality × popularity × showcase + tip` is a clear template for **player-facing depth via multipliers.** Each multiplier has a different sourcing path (loot → backpack → calendar → furniture → live shop), so each gives the player a different lever to pull.

If you're designing economy systems, **layered multipliers from independent sources** is more interesting than one big number plus modifiers — because each multiplier is a different mini-decision.

## Steal: cite your inspirations

Digital Sun being open about Hades inspiration helped reception. Players appreciate knowing what the dev was reading; reviewers respond better to "Hades-inspired with an original twist" than to "we totally invented this." Honesty is cheaper than mystery here.

## Cautionary lesson: re-platforming a sequel costs charm

Moonlighter 1 → 2 went from 2D pixel art to 3D isometric. **The mechanical depth went up; the charm went down.** Reviewers consistently flag this. Some original-game fans aren't coming back.

For my own future sequels: if you change *visuals* alongside *mechanics*, audiences perceive both as a single shift. Plan for the cost.

## Cautionary lesson: don't replace charm-mechanics without a great replacement

The original's price-discovery minigame had charm. The sequel's multi-multiplier math has depth. **They are not the same thing.** If you replace a charm-mechanic with a math-mechanic, you'd better make the math itself charming — Spire does this with "risk vs reward fractally"; Moonlighter 2's math is currently not labeled with a similar identity, so it reads as opaque to new players.

## Cautionary lesson: in EA, the exchange rates are everything

Multiple reviewers note that the *ratios* between systems (gold per relic, perk per encounter, blacksmith cost) feel off in early access. Even when each individual system is fine, **the exchange rates between them is what makes the loop feel rewarding or grindy.** Ship those tuned, or expect EA reviews to reflect it.

## Cautionary lesson: variety is good, but milestones matter

The original Moonlighter had clean milestone progression — each new dungeon was a real escalation. The sequel has more options, less clear milestones. **Players need to feel "I just unlocked the next thing."** If your meta-progression is mostly variety, you still need *some* mile-markers, or it feels like grinding for nothing.
