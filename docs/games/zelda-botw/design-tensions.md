---
title: "Breath of the Wild — Design tensions"
type: game
game: zelda-botw
---

# Design tensions

What the developers wrestled with, in their own words.

## Multiplicative vs additive design

> "Additive design is when you keep adding things to the game. … Multiplicative design is when objects react to the player's action, and the objects themselves also influence each other."
>
> — **Hidemaro Fujibayashi**, GDC 2017 ([via Thumbsticks](https://www.thumbsticks.com/gdc-17-breath-of-the-wild-science-lies/))

The framing of the entire design philosophy. Programmer **Takuhiro Dohta** built the "**chemistry engine**" — the rule layer that makes fire, ice, wind, water, and electricity propagate consistently across the world. Combined with a fixed verb-set, this produces the "every problem has 5 solutions" property the game is famous for.

The cost: **encounters cannot be balanced for any one solution.** The team accepted that some players would solve a Bokoblin camp in 8 seconds and others in 5 minutes. Both are correct.

## Shrines vs dungeons

> "When we considered the size of the field — about 60 km² — and how often a player would want to find something while wandering, we calculated the ratio. … We didn't want a dungeon to take too much player time, so we designed each shrine to take around 10 minutes."
>
> — **Hidemaro Fujibayashi** (paraphrased, from coverage on [Niche Gamer](https://nichegamer.com/zelda-breath-of-the-wild-director-explains-the-lack-of-traditional-dungeons-why-the-shrines-are-short/))

The math drove the count. ~60 km² ÷ 5-minute-radius destinations = ~120 nodes. The shrine duration was tuned to *not* take the player out of the open-world flow.

> "When we considered each shrine takes around 10 minutes, we realized it might not feel enough for a Zelda title. So we decided to incorporate big dungeons with unique features."
>
> — **Hidemaro Fujibayashi**

The Divine Beasts are explicitly the team's compromise. They knew classical Zelda fans would want long dungeons; they tried to hit *both*. Reception was mixed; Tears of the Kingdom (2023) returned to longer dungeons, suggesting the team agreed shrines alone weren't enough.

## Hyrule as Kyoto

> "I used a map of Kyoto, my hometown, as a reference for the placement of shrines and the density of the field."
>
> — **Hidemaro Fujibayashi** (paraphrased; this came up across multiple post-launch interviews)

Kyoto's grid + shrine-density was Fujibayashi's mental model for Hyrule's traversal feel. **This is the second time in this knowledge base** that a director used their hometown's geography to shape a Zelda/Pokémon region:

- **Pokémon RSE** — Junichi Masuda used Kyushu (his grandparents' home) for Hoenn. Rotated 90°.
- **BOTW** — Fujibayashi used Kyoto (his hometown) for Hyrule's shrine layout.

Both are evidence that **autobiography is a useful design device** for region design at Nintendo. The lived experience of a place at human scale gets translated into the field-density of the game.

## Weapon durability

> "Having a nice weapon that will break after a certain number of uses, that forces players to think about: when am I going to use it? What enemies am I going to use it on? It encourages the player to strategize."
>
> — **Eiji Aonuma**, paraphrased ([summary](https://screenrant.com/breath-wild-repair-weapon-durability/))

> "We added weapon durability to draw players into the open world — to encourage them to challenge enemies and claim weapons to use on their adventure."
>
> — **Hidemaro Fujibayashi** (paraphrased)

The two stated rationales: per-encounter strategy + engagement-driving. The mechanic ships with a known controversy budget — Aonuma has spent 7+ years defending it in interviews, and Tears of the Kingdom's Fuse mechanic is the team's partial-walkback (weapons still break, but you can extend them).

The team's confidence on this one is notable. They knew it would be divisive; they shipped it anyway because they believed the system-level argument was correct.

## Player freedom over guided structure

> "I wanted the user to be able to experience a new sense of adventure again and again, and to be able to freely navigate through it as they see fit. … A game where the user can think and decide, on their own, where they want to go and what they want to do."
>
> — **Hidemaro Fujibayashi**, GDC 2017

The Great Plateau tutorial is ~90 minutes. After that, the entire game is open. The player can fight Calamity Ganon at 3 hearts, with no shrines cleared, with a tree branch. They will lose — but the game does not stop them.

This is unusual for AAA in 2017. Most "open" games of the era still gate major chunks behind level / story progress. BOTW's only gates are the Great Plateau (90 min) and the Master Sword (requires 13 hearts).

The team's wager: **trust the player with the whole map**. Most players will follow the natural difficulty curve (start easy, end hard) without enforcement. The minority who break the curve (speedrunners; 3-heart-runs) will find their own challenge.

## What the team chose not to do

A few decisions known from interviews and developer postmortems:

- **No level-scaling of enemies (mostly).** Bokoblins stay at the same difficulty across the game; a Bokoblin in hour 50 dies in 1 hit. The team rejected level-scaling to preserve player-felt growth. Instead, the world has fixed-difficulty regions: Plateau (easy), Hyrule Field (medium), Death Mountain / Hebra / Gerudo (hard), and elite enemies (Lynels, Guardians) scattered for the player to *avoid* until ready.
- **No quest markers for most main objectives.** The 4 Champion regions are loosely-pointed-at by NPCs; the player chooses the order. Side quests do have markers; main quests use vague directional cues.
- **No fall damage from the paraglider.** A player can paraglide off a 1000m cliff and land safely. The team explicitly chose not to penalise vertical exploration.
- **No level-up system.** Link doesn't gain XP. Stats grow only through Heart Containers and Stamina Vessels (shrine trades) and the Master Sword. The strategic depth lives in *what the player carries*, not in a stat sheet.

The pattern: **trust the player; cut levelling busywork; let the world do the work.**

## The Wii U / Switch dual-launch

BOTW was developed for Wii U and shipped as a Switch launch title. The team has acknowledged this constrained the game's tech footprint (no super-detailed world; emphasis on rules over content; modest polygon counts) — and that those constraints **helped** the design.

> "If we had had unlimited hardware, we might have been tempted to add more content. The constraints made us focus on the rules."
>
> — paraphrased from Aonuma / Fujibayashi reflections post-launch

This is consistent with the broader Nintendo approach: limited hardware → constrained design → forced creativity.

## See also

- [Chemistry engine](./chemistry-engine) — the multiplicative design at the rule layer
- [Shrine network](./shrine-network) — the 120-shrine math
- [Sources](./sources) — full interview citations
