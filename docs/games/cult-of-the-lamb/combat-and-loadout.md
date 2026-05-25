---
title: "Cult of the Lamb — Combat & loadout"
type: game
game: cult-of-the-lamb
patterns:
  - bonus-with-drawback
  - meta-as-variety-not-power
---

# Combat & loadout

Combat is the *means* of the Crusade, not its end. The reason to study it is that **every combat-loadout decision is also a hub-economy decision** — your weapon roll dictates which enemies you can farm efficiently, which dictates which Bones you bring home, which dictates which Rituals you can run. This page covers the five loadout axes: weapons, curses, Tarot Cards, Fleeces, and Relics.

## Weapons (six + one)

| Weapon | Light combo | Heavy attack (post-Relics-of-the-Old-Faith) | Profile |
|---|---|---|---|
| **Sword** | Balanced 3-hit | Ground-slam burst | All-rounder |
| **Axe** | Slow, wide arcs | Boomerang throw | High damage, slow speed |
| **Dagger** | Fast, short reach | Summoned-blade waterfall | DPS, glass cannon |
| **Gauntlet** | Punch combo, very fast | Tornado spin | Speed, low reach |
| **Hammer** | Slow, AoE | Charged slam | Boss DPS |
| **Blunderbuss** (Sins of the Flesh, Jan 2024) | Ranged shotgun | Charged sniper | Range fixer |
| **Flail** (Woolhaven, Jan 2026) | Whirling reach | Crowd clear | Anti-mob |

Weapons drop in the Crusade entry room (the starting roll) and in **weapon-offer rooms** mid-run. Each weapon roll also has a **rarity** (Common, Magic, Rare, etc.) that stacks **affixes** (poison, ice, bleed, lifesteal) drawn from a shared pool. A "Rare Dagger of Poison and Lifesteal" is a categorically different run than an "Epic Hammer of Ice."

![Mid-Crusade weapon swap — "Apostate's Cleaver I — A mighty tool of unstoppable brutality. Swing with intent. Damage ▲ 2.4 / Speed ▼ 0.5"](/images/cult-of-the-lamb/crusade-weapon-pickup-cleaver.jpg)
*A weapon swap pickup. Damage ▲ / Speed ▼ deltas are shown explicitly — the game makes the [`bonus-with-drawback`](/concepts/bonus-with-drawback) shape *legible at the swap*. Trade speed for damage; commit. Right-side: "Blood of the Covenant" objectives — return-with-bonus conditions you locked in by paying a sacrifice door. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

## Curses (ranged spells, cost Fervour)

A **Curse** is the ranged option — Fervour-powered (Cult of the Lamb's mana), one equipped per run. Variants:

- **Tentacle** — straight-line projectile (basic).
- **Hellbinder** — homing projectiles.
- **Necromancer** — lobbed AoE.
- **Ambrosia** — multi-shockwave.
- **Snail** — slow tracking AoE.
- **Bloodless** — self-vicinity AoE.

Curses are the answer to the problem the melee weapon can't solve. A Dagger build that runs out of options against ranged Anuran spitters lives or dies by its curse. The curse roll is fixed at the entry room (with the weapon), but can be swapped at later curse-offer rooms.

## Tarot Cards — the per-run hand

Tarot Cards are **draftable in-run buffs that stack**, pulled from chests, Tarot rooms (Clauneck), and lore rooms. You have a small number of slots on the Crown; you fill them as you go.

![Player menu — Lamb in centre of pentagram, eight Tarot slots (mostly locked), Fleece of the Lamb equipped, footnote "Tarot Cards are reset after each Crusade"](/images/cult-of-the-lamb/player-tarot-and-fleece.jpg)
*The Crown — eight Tarot slots arranged around the Lamb. Most are locked by quests / Sermon-tree upgrades / Talisman fragments. The active Fleece (Fleece of the Lamb, baseline) is shown right-tooltipped. **Critically: "Tarot Cards are reset after each Crusade."** This is the line that defines the Tarot economy. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

The mechanical implications of the reset:
- Tarot is **pure variety, not power.** Whatever you build in one run, you start the next without it.
- The **unlock pool** is persistent — the more Tarots you've seen, the more interesting future draws become.
- A run can fully commit to one Tarot theme (Fervour generation, follower synergy, lifesteal stack) and *not be afraid* of "wasting" the build.

![Tarot Cards Unlocked codex — Collected 15/36 — Divine Strength card detail visible](/images/cult-of-the-lamb/tarot-codex-collected.jpg)
*The Tarot codex. 15/36 collected — each filled square is a card now available in the future-run draw pool. **Unlock progress is the meta-axis; the draw is the run-axis.** Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

This puts Tarot squarely in [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power) territory — the player gets a richer future draw pool, but never a stronger *direct* loadout. Hades' boons are the same shape; Spire's relics are the inverse (relics persist within an act, then reset).

## Fleeces — persistent loadout modifiers

A **Fleece** is what the Lamb wears. Unlike Tarots, **Fleeces are persistent** — you equip one before the Crusade starts at the Temple's Crown menu. Each Fleece is a major run-shaping modifier.

| Fleece | Effect |
|---|---|
| **Fleece of the Lamb** | Baseline. No modifier. |
| **Fleece of the Glass Cannon** | 2× Fervour, +curse damage; ½ HP, melee weaker. |
| **Fleece of the Old Faith** (Heretic Pack DLC) | +Poison damage. |
| **Fleece of the Pilgrim** (Pilgrim Pack DLC) | Stamina-based melee combos. |
| **Fleece of the Necromancer** (post-launch) | Summon skeleton allies on kill. |
| *…and more added per major update* |  |

Fleeces are the **build container** that Tarots fill. A Glass Cannon Fleece pulls the run toward Fervour Tarots; a Necromancer Fleece pulls toward follower-trigger Tarots. The interesting design choice is that the Fleece is **chosen before you know your weapon/curse roll** — so the Fleece commits you to a *shape* and the run fills in *which way that shape can express itself.*

This is one of the cleanest examples of a permanent-loadout-modifier that **biases run variety without dominating it**. It's a Hades-Mirror-style mechanic done with style guides instead of stat bonuses.

## Relics

Added in **Relics of the Old Faith** (Apr 2023). A Relic is a persistent **active ability** — you can hold one per run, drawn from Chemach NPC at the hub before the Crusade. There are 37+ total. Examples:

- **Hathor** — at the cost of a max-HP slot, gain a permanent run-buff each Crusade.
- **The Heart of Filth** — sacrifices on activation for an effect.
- **Knucklebones-themed** — interacts with the dice minigame.

Relics added a long-missing *fifth* slot to the loadout puzzle, mostly addressing the launch criticism that runs felt same-y once you'd seen the weapon and curse pool. The relic is the "wildcard verb" — a button-pressed cooldown ability you have on top of the constant melee + Fervour-spend cycle.

## Hearts (HP) and difficulty

- Start: **3 hearts** on Normal difficulty.
- Max-HP upgrades come from **Sermon-tree** ("Hearts of the Faithful" — half-heart per purchase, two purchases), from the **Hathor relic** (max-HP-for-buff trade), and from **Ratoo** (mid-run trade).
- Cult of the Lamb has multiple difficulty modes plus an **automatic difficulty adjustment system** added in Relics of the Old Faith. Julian Wilton: *"Cult of the Lamb has an automatic difficulty adjustment system."* (Invisible assists scale on lower difficulties.)
- **Permadeath mode** (Penitence, post-DST crossover) makes Martyred a hard reset.

## Bosses — Bishops and their bullet patterns

Each Bishop fight is a **multi-phase bullet-hell encounter**, considerably tighter than the room-by-room combat. The fights are tuned to test the loadout you arrive with — there is no respec, no shop, no Tarot pick mid-fight (in launch; post-launch revamps softened this slightly).

![Leshy boss fight in Darkwood — bullet-hell projectiles spreading from a thorned arena, the Lamb dashing through a curse, +2 Bone pickup ticking up](/images/cult-of-the-lamb/boss-leshy-darkwood.jpg)
*Leshy in Darkwood — the first Bishop. Vine-and-thorn arena, ranged projectile waves, summoned mob waves between phases. The combat dramatically shifts from the room-by-room mode into bullet-hell — many players' first cause of "Martyred!" The bone +2 micro-feedback continues firing through the boss fight, so even the cinematic confrontation is a *resource accumulator*. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

The Bishops were one of the most aggressively *revamped* systems post-launch — Relics of the Old Faith rebuilt all four with new phases, attack patterns, and arena hazards. Reviewers at launch found them too easy; the rework was a direct response.

## The five-axis loadout puzzle

Put together:

| Axis | Persistent? | Chosen when? | Provides |
|---|---|---|---|
| **Weapon** | Pool persistent, instance per-run | Entry room + offer rooms | DPS profile, range |
| **Curse** | Pool persistent, instance per-run | Entry room + offer rooms | Ranged answer |
| **Tarot** | Codex persistent, hand per-run | Mid-run picks | Stat synergy stack |
| **Fleece** | Persistent, swapped at hub | Before Crusade | Run shape constraint |
| **Relic** | Persistent (post-launch), instance per-run | Before Crusade | Active ability |

Two persistent slots (Fleece, Relic) set the **shape**; three per-run slots (Weapon, Curse, Tarot) fill the **content**. This is the cleanest version of "the meta determines variety, the run determines power" that the genre has produced — see [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power).

## Patterns this exemplifies

- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — weapon swaps, Fleece of the Glass Cannon, Tarot trade-offs, Hathor relic.
- [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power) — Tarot codex and weapon/curse pools widen what *can happen*, not what *will happen* in any one run.
