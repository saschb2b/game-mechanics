---
title: "Path of Exile — Skill gems"
type: game
game: path-of-exile
patterns:
  - skill-as-item
  - random-perfect-roll-economy
---

# Skill gems

The genuinely original mechanical move in PoE: **skills are items, not character abilities.** A Templar can cast Fireball if she finds a red socket. A Witch can use Cyclone if she finds a strength-tagged armour with a green socket.

## Structure

- **Active skill gems** are coloured items (red/green/blue + white). They drop from monsters, get sold by NPCs, are traded between players, level up via shared XP with the character holding them.
- **Sockets** are properties of equipment, separately rolled. A 5-socket chestpiece may have any combination of red/green/blue sockets; the *colours* are themselves a crafting target.
- **Links** between sockets are also separately rolled. Linked sockets allow a support gem to modify the active gem in the same link group.
- **Support gems** modify the active skill they're linked with: Spell Echo, Multistrike, Concentrated Effect, Greater Multiple Projectiles, etc. Same support, different active = different effect entirely.

The endgame target is a **6-link** — a chestpiece or 2-handed weapon with all six sockets in one continuous link group, allowing one active skill to be modified by five support gems simultaneously.

## Why "skills live in your gear" is the load-bearing call

The first-order consequence: skill identity floats *across* your characters. Your Cyclone build can be Marauder, Duelist, or Champion — anyone with the right tags and gear can run it.

The second-order consequence (which GGG eventually flagged as a design cost) is what Chris Wilson named in the PoE2 origins interview:

- **It's unclear what works with what.** New players don't know that Spell Echo only works with self-cast spells, that Multistrike only works with melee attacks, that Cast on Crit needs a specific trigger setup.
- **Upgrading gear is functionally a downgrade.** Found better boots? Great — but your *current* boots have your colours and links. The new boots arrive at +0 sockets, white colours, no links. You must re-craft them before you can use them.

Both of these are intentional friction in PoE1. PoE2 walks them back: support gems are now slotted *inside* skill gems, and sockets/colours have been simplified.

## Sockets and links as a crafting target

The infamous part. Three currencies modify sockets:

| Currency | What it does | Notes |
|---|---|---|
| **Jeweller's Orb** | Reroll number of sockets | RNG; usually <6 sockets |
| **Chromatic Orb** | Reroll socket colours | Weighted by item's STR/DEX/INT requirements |
| **Orb of Fusing** | Reroll links between sockets | The canonical chase |

**Six-linking via Fusings is ~1/1500 attempts on a quality item.** Community lore is full of "1000 fusings, no six-link" stories. A Bench recipe (Vorici / Master crafting) caps the cost deterministically at 1500 fusings — itself a sizeable currency expense.

The design intent: *the gear itself is a multi-axis RNG craft target.* Every gear upgrade in PoE is not just "I found a better chestpiece" — it's "I found a better chestpiece, now spend 50 chaos getting the colours right and 1500 fusings linking it." This converts every endgame upgrade into a multi-stage currency sink, which sustains the trade economy GGG built the game around.

## Vaal gems and Awakened gems

Two extension layers:

- **Vaal gems** — corrupted variants of a skill that retain the base skill *and* gain an "ultimate" mode triggered by accumulating souls from kills. Vaal Cyclone, Vaal Spark, etc. Often degenerate, frequently nerfed.
- **Awakened gems** — endgame-only support gems with stronger numerical effects and an extra level cap. Drop only from Sirus and certain pinnacle sources. The "perfect-build" target after the build itself works.

Both layers are explicitly **aspirational** — most players never see them; players who do see them are flexing rather than baselining.

## What this teaches

- **The "everyone can use any skill" pattern isn't free.** It produces enormous build space *and* it produces opacity. PoE accepted the trade; PoE2 didn't.
- **Making sockets themselves a crafting target is a direct sustained-engagement choice.** Diablo's static sockets give you 5 minutes of optimization per upgrade; PoE's give you 5 hours. Whether that's good is a values question.
- **The 6-link is one of the cleanest "asymptote" rewards in F2P design.** It's binary (you have one or you don't), expensive (real currency), and identity-defining (your build runs through it). It's also gettable for free, eventually.

## Patterns this exemplifies

- [`skill-as-item`](/patterns/skill-as-item) — skills are tradable, levelable, droppable items.
- [`random-perfect-roll-economy`](/patterns/random-perfect-roll-economy) — the 6-link is the canonical expression: a stat that's binary, expensive, and traded between players.
