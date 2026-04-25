---
title: "Path of Exile 2 — Weapons grant skills"
type: game
game: path-of-exile-2
patterns:
  - weapon-grants-skills
---

# Weapons grant skills

The major break from PoE1's "skills come from gem slots in any gear." In PoE2, **the weapon you wield directly grants base skills.**

## What changed

In **PoE1**, your skills come from gems in any socket of any gear. A 6-link chestpiece can host a primary skill regardless of what weapon you're holding. The build space is "any class can use any skill on any weapon" — provided you can colour the sockets correctly.

In **PoE2**, picking up a Crossbow grants Crossbow skills (Permafrost Bolts, Galvanic Shards, Shockburst Rounds, etc.). Picking up a Quarterstaff grants Quarterstaff skills. Sword grants Sword skills. **Your weapon is your skill set.**

You can still slot active skill gems into the weapon (now via dedicated weapon-skill sockets), but the *base* skills come from the weapon archetype itself. Different weapons of the same archetype share a skill family.

## The stated rationale

Paraphrased from Jonathan Rogers' EA-launch interviews:

> If you pick up a crossbow, the crossbow tells you how to play. We wanted the weapon to be the build, not a stat-stick.

The two costs of PoE1's "any skill on any weapon" model that GGG has explicitly named:

1. **It's unclear what works with what.** New players couldn't tell that Spell Echo only worked with self-cast spells, that Multistrike only worked with melee attacks. The combinatorics of "which skill, which support, which weapon" produced a search space the average player couldn't navigate.
2. **Upgrading gear was functionally a downgrade.** Found a better chestpiece? Great — but your *current* chestpiece has your colours and links. The new piece arrives white, no links, no setup. Mid-build gear changes were genuinely punishing.

PoE2 fixes both. Your weapon is legible (a Crossbow user knows what their skills *are*); upgrading to a better weapon of the same archetype keeps your build intact.

## What this constrains

The trade-off: **PoE1's "any skill on any weapon" was the maximum build space.** A Witch carrying a wand and casting Cyclone is gone in PoE2. A Marauder Toxic Rain is gone. The build space is now archetype-shaped — Crossbow builds are Crossbow builds, Bow builds are Bow builds.

This is a deliberate narrowing. GGG's stance: **the freedom of "any skill on any weapon" produced more theory-craft than fun.** Most builds in PoE1 settled into "best skill for this archetype" anyway; the freedom was nominal for the median player.

## Weapon Skill Sets — two builds in one character

The complement to the constraint: each character carries **two weapon sets** with separately-allocated passive points (a partial subset of the tree). You swap between sets mid-combat.

This restores some of the lost flexibility. A Mercenary can carry a Crossbow (ranged) and a Quarterstaff (melee), with different passives allocated for each. Swap based on encounter.

Effectively: **two builds in one character, switched live.** This is much more legible to the player than PoE1's "your build is whatever you set up." The player explicitly decides "this is my Crossbow build, this is my Quarterstaff build, I swap based on situation."

## Compared to other ARPGs

| Game | Skills come from | Weapon role |
|---|---|---|
| Diablo 2 | Class trees | Stat stick + element type |
| Diablo 3 | Class skills + rune slots | Stat stick |
| Diablo 4 | Class skill tree | Stat stick + power scaling |
| Last Epoch | Class trees + skill specialisation trees | Stat stick + per-skill mods |
| **PoE 1** | Skill gems in any socket on any gear | Sockets-and-links carrier |
| **PoE 2** | **Weapon archetype directly** | **Identity layer** |

PoE2's choice is unusual — most ARPGs treat weapons as stat carriers, not as build identity. The closest analogue is Last Epoch's per-skill specialisation trees, but Last Epoch still gates skills by class. **No mainstream ARPG has tried "weapon is the build."**

## EA reception

Mostly positive. New-player feedback is consistently "I knew what to do with my weapon" — a complaint long-running in PoE1.

The pushback: theory-crafters miss PoE1's freedom. There are fewer "creative" builds in PoE2 — most Crossbow players run similar Crossbow setups. Whether GGG considers this a problem to solve or a feature is unclear at EA stage.

## Patterns this exemplifies

- [`weapon-grants-skills`](/patterns/weapon-grants-skills) — the design pattern. Weapon archetype provides the build identity; gear becomes legibly tied to playstyle. New for the ARPG genre.
