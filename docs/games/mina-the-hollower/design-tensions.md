---
title: "Mina the Hollower: Design tensions"
type: game
game: mina-the-hollower
---

# Design tensions

What Yacht Club's team wrestled with, in their words. Mina was crowdfunded in February 2022, originally targeted for Halloween 2025, and slipped to **May 29, 2026** after a round of playtesting the team judged unsatisfactory, roughly six years from conception to ship. The tensions below are visible in the seams of that long development.

## One verb vs. depth

The burrow was the pillar from day one, which is a bet: build the whole game on a single mechanic and trust that recombination, not addition, will carry thirty hours.

> *"It was in the game from the start! It didn't evolve during development, but every enemy or object or NPC that went into the game, we often had to think of it in the context of the burrow."*, David D'Angelo

The tension is that a one-verb game can feel thin if the verb doesn't keep paying off. Mina's answer is to make [every system extend the burrow](./hollowing.md) rather than sit beside it, sidearms that fire *through* it (Seismic Belt), trinkets that change *where* it goes (Wallower's Gauntlets). The risk they accepted: if the burrow ever stopped being central, the rest of the design would have nothing to orbit.

## Deliberate punishment vs. accessibility

The combat brief was unapologetically harsh:

> *"We wanted to create something with the scary, deliberate combat feel of old school Castlevanias, but in a top-down world similar to Zelda."*

Reviewers landed on *"soulsy in difficulty yet beautifully accessible"*, but that phrase hides a real tension. Default Mina is fragile and unforgiving; some critics flagged "very high difficulty" and "lack of guidance." The team's resolution was twofold: a [graduated death penalty](./death-and-sparks.md) that softens failure *systemically* (Sparks absorb early deaths; levelling auto-forgives), plus an explicit **Modifiers / Accessibility** menu that softens it *by choice*. The bet is that you can ship Castlevania-hard defaults as long as the floor underneath the player is generous.

## Homage vs. originality

A retro action-adventure built by ex-Shovel-Knight developers risks being pastiche. The team's stated guardrail:

> *"Never during development did we say, 'Well, we should put this in because Castlevania did it.' But we might look to those games and many more for inspiration; that always led to us creating something new and different based on those inspirations."*

Influences are cited openly, Castlevania (whip, deliberation, theming), Zelda's Game Boy entries (top-down structure), Bloodborne/Dark Souls (aggression and death economy), but the burrow and the Spark economy are the parts with no direct ancestor. The tension is the eternal homage problem: borrow the *feel*, invent the *verb*.

## Authentic constraint vs. modern scope

Mina wears a Game Boy Color skin but is far larger than any GBC cartridge could hold:

> *"We definitely packed way more backgrounds and sprites on screen than was capable, even by the best Game Boy programmers."*

So the "constraint" is selective: keep the palette, the chunky grid, and the readable silhouettes (which [serve the combat](./world-and-newspaper.md#the-constraint-as-a-feature)); break the sprite and memory limits that would cap the scope. The discipline is knowing *which* limits are features and which are just old hardware being old.

## Scale vs. balance

A 60-trinket, multi-sidearm, multi-region build game is a balancing nightmare relative to a linear platformer:

> *"Building something of this scale and flexibility was definitely a challenge! We had to build a lot more tools for understanding the balancing, item distribution, etc., than we were typically used to."*

This is the quiet cost of the [opportunity-cost build systems](./trinkets.md): the more loadout freedom you give the player, the more combinations you have to keep from breaking. The 2025→2026 slip was, in part, the price of getting that distribution right.
