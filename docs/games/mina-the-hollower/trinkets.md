---
title: "Mina the Hollower — Trinkets (the build layer)"
type: game
game: mina-the-hollower
patterns:
  - opportunity-cost-loadout
  - bonus-with-drawback
---

# Trinkets — the build layer

Trinkets are Mina's **passive build system**: 60 collectible charms scattered across Tenebrous Isle, of which you equip a limited set at once. They're where a run stops being "Mina with a whip" and becomes *your* Mina — the glass cannon, the parry counter-build, the wall-burrowing explorer.

The design lineage is explicit: this is [Hollow Knight's charm budget](/games/hollow-knight/charms-and-notches) by another name — a large collectible pool, a small number of equip slots, and integer-flavoured decisions about what to wear. The difference is theme and risk appetite: Mina's trinkets lean harder into reckless, run-warping effects.

![The Equip Trinkets grid — 36 of 60 collected — with the Uranium Bracelet selected: "Deal and receive significantly more damage"](/images/mina-the-hollower/equip-trinkets-uranium-bracelet.jpg)
*The trinket grid (36/60 collected). The Uranium Bracelet — "**Deal and receive significantly more damage**" — is the genre's purest glass-cannon switch: pure upside *and* pure downside in one line. In a game where a few hits already kill, equipping it is a statement about how confident you are in your [burrow](./hollowing.md) timing. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

## Two grades of trinket

The 60 trinkets span a wide range, but they fall into two design buckets:

- **Stat bumps** — quiet, stackable boosts: +1 Attack level, +1 Defense, +1 Sidearm level, more Joules, longer burrow, faster heal. These are the "smooth out my build" trinkets. (The character screen even shows a weapon at "LVL 7**+1**" — the +1 is a trinket talking.)
- **Mechanical overhauls** — trinkets that change *how Mina plays*:
  - **Uranium Bracelet** — deal and receive significantly more damage (glass cannon).
  - **Wallower's Gauntlets** — burrow directly into *walls*, not just floor, converting the dodge into a traversal key that opens sealed rooms.
  - Burrow-on-emerge effects, parry-reward trinkets, on-kill procs — each one biases the run toward a particular verb.

The overhaul trinkets are the interesting ones because they don't add power so much as **redirect** it: Wallower's Gauntlets don't make you stronger, they make the *map* different; the Uranium Bracelet doesn't make you better, it makes you *swingier*.

## The slot budget is the game

You own far more trinkets than you can equip, so every loadout is a set of foreclosed choices — the textbook [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout):

- Wearing the wall-burrow gauntlets for an exploration session is a slot **not** spent on combat power.
- Stacking damage trinkets to melt a boss means going into that fight with less defense or utility.
- The Uranium Bracelet's "+damage / −survivability" is a [`bonus-with-drawback`](/concepts/bonus-with-drawback) you opt into *with a slot* — the drawback is the effect, and the opportunity cost is the slot it occupies.

Because trinkets are **re-equippable at will** (at the [Underlab / save points](./death-and-sparks.md)), the system encourages *situational* builds rather than one permanent setup: a wall-burrow loadout to sweep a region for collectibles, swapped for a parry-counter loadout before a boss, swapped again for a glass-cannon loadout once you've learned that boss's patterns and want to end it fast. The 60-trinket pool is wide enough that "what am I wearing for *this*" is a recurring, live question rather than a solved one.

## How it differs from the other slots

Mina rations power across several slot systems, and trinkets are the *persistent passive* one:

| Slot | Grain | What it commits |
|---|---|---|
| **[Weapon](./combat-and-weapons.md)** | One equipped | Your core melee rhythm (reach vs speed) |
| **[Shield](./combat-and-weapons.md)** | One equipped | Your active defensive verb (block / parry) |
| **[Sidearm](./sidearms-and-joules.md)** | One equipped | Your situational burst / traversal tool |
| **Trinkets** | Several slots from 60 | Your passive build identity and risk appetite |

Weapon, shield, and sidearm are each a single decisive pick; trinkets are the combinatorial layer that *tunes* those picks. Together they're why two players with the same weapon can be playing very different games.

## Patterns this exemplifies

- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — 60 trinkets, a few slots; every equipped charm is several you didn't wear.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — the glass-cannon and other reckless trinkets pair real upside with real, felt cost.
