---
title: "Expedition 33: Character kits"
type: game
game: clair-obscur-expedition-33
patterns:
  - per-character-subsystem
  - reactive-turn-based
---

# Character kits

Six playable characters, and each one runs a **different resource subsystem** on top of the shared AP/parry chassis. This is the game's answer to "why keep playing new party members": a new character is not a stat block with different animations, it's a new mini-game. New kits keep arriving deep into the campaign, which gives the game some of the [late-introduced-mechanics](/concepts/late-introduced-mechanics) energy this site documents in Xenoblade.

## Gustave: Overcharge

A 0–10 gauge on his prosthetic arm that charges from dealing damage, dodging, and parrying. His signature skill dumps the whole gauge as single-target Lightning damage that scales with charges spent. Support skills (Lumière Assault) generate extra charges on crits.

![Gustave's Overcharge gauge at 0/10 during the tutorial duel](/images/clair-obscur-expedition-33/combat-overcharge-gauge.jpg)
*The arm on the right edge is the gauge. Playing defense well literally charges the payoff, the reactive layer feeding a character resource. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

![Overcharge tooltip in the skills menu](/images/clair-obscur-expedition-33/skills-overcharge-tooltip.jpg)
*"Deals high single target Lightning damage based on the amount of Charges. Can Break. Resets Charges." One sentence, one build-around. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Lune: elemental Stains

Casting an elemental skill leaves behind a **Stain** of that element. Other skills consume Stains for amplified or altered effects; her tooltips read like a two-step combo language (Immolation: 3 Burns, 2 more if the target is Marked, "Consumes [Stain] for increased damage"). Playing Lune well means sequencing spells so each one sets up the next: a solitaire chain inside a party game.

![Lune's skill tree with the Immolation tooltip](/images/clair-obscur-expedition-33/skill-tree-lune-immolation.jpg)
*Immolation's full text shows the kit grammar: element, status, Mark synergy, Stain consumption. A post-launch patch added colorblind-friendly Stain icons, evidence the subsystem carried real cognitive load. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Maelle: fencing stances

Skills move her between stances: **Offensive** (hit harder), **Defensive** (take less, safer), and **Virtuose**, the payoff stance where her next skill deals multiplied damage (the community's endgame builds were built entirely around living in Virtuose). The kit plays like a rhythm of entering and cashing stances, and it produced both the game's most celebrated build ceiling and its most famous balance patch (the Stendhal one-shot; see [design tensions](./design-tensions#let-them-break-it)).

## Sciel: Foretell and Twilight

Her scythe skills stack **Foretell** on enemies, delayed damage that other skills then detonate. Alongside it runs a Sun/Moon charge cycle that, when both sides are filled, tips her into an empowered **Twilight** state. She is the "invest now, collect later" kit: damage as a futures contract.

## Verso: Perfection ranks

A performance grade (D up to S) that climbs as he executes well: perfect parries and dodges, crits, clean play, and drops when he gets hit. Higher ranks empower his abilities. Verso grafts a fighting-game judge onto the party: his damage output is a direct readout of how well *you* are playing the reactive layer.

## Monoco: the Bestial Wheel

The wildcard. Monoco learns his skills from defeated Nevron enemies (each drops its move for his roster) and gets no normal skill points at all. In battle, a wheel cycles through skill categories with every cast; skills matching the wheel's current segment fire empowered. He is a monster-collection subsystem and a tempo puzzle stacked together, and he joins late enough that learning him is a fresh mid-game chapter.

## Why this works

- **The chassis is shared.** AP, parry timing, timed hits, Pictos and Luminas apply to everyone, so a new kit never resets your fundamentals.
- **The kit is one sentence each.** Charge a gauge; leave Stains; dance stances; stack Foretell; hold a grade; spin a wheel. Everything else in each kit elaborates its sentence.
- **Kits point at different player skills.** Verso rewards execution, Lune rewards sequencing, Sciel rewards planning, Maelle rewards commitment. Party selection becomes a statement about which game you want to play this fight.

## Patterns this exemplifies

- `per-character-subsystem`: each party member owns a private resource loop over a shared combat chassis.
- `reactive-turn-based`: several kits (Overcharge, Perfection) are direct readouts of defensive execution.
