---
title: "Path of Exile — Crafting & currency"
type: game
game: path-of-exile
patterns:
  - currency-as-crafting
  - aspirational-crafting
  - random-perfect-roll-economy
---

# Crafting & currency

The most copied-but-never-replicated PoE design move: **there is no gold.** Every "currency" is a consumable that performs a specific operation on an item.

## Core currencies (sample)

| Currency | What it does | Drop tier |
|---|---|---|
| **Scroll of Wisdom** | Identifies an item | Bulk |
| **Orb of Transmutation** | White → Magic (1–2 affixes) | Common |
| **Orb of Alteration** | Re-roll a magic item | Common |
| **Orb of Augmentation** | Add an affix to a magic item | Common |
| **Regal Orb** | Magic → Rare (adds one mod) | Uncommon |
| **Chaos Orb** | Re-roll a rare item entirely | Uncommon (the de-facto small unit of trade) |
| **Exalted Orb** | Add a single random affix to a rare item | Rare (large unit of trade) |
| **Divine Orb** | Re-roll the *values* of an item's existing affixes | Rare |
| **Annulment Orb** | Remove a random affix | Rare |
| **Mirror of Kalandra** | Duplicate an item exactly | Mythic (single-item value) |

Plus dozens more: Vaal Orbs (corrupt for unpredictable upside/downside), Orb of Scouring, Orb of Alchemy, Blessed Orb, Cartographer's Chisel, Bestiary Orbs, Eldritch Embers and Ichors, Sextants, Scarabs, Fossils, Resonators, Essences …

## The currency-as-crafting design move

Every currency has *intrinsic utility* — it modifies items. **Trade prices are denominated in these same currencies.** So when you receive a Chaos Orb from a monster:

- You can spend it on your own gear (re-roll a rare item).
- You can spend it acquiring someone else's gear (buy something on trade).
- The two uses *compete* — the same Chaos Orb cannot do both.

This produces:
1. **Built-in inflation control.** Every transaction is also a sink. Players who hoard currency to buy later still spend it to craft *now*. Currency leaves the economy through sinks every time someone uses it for its intrinsic purpose.
2. **Real opportunity cost on every drop.** "I just got a Divine — do I divine my own ring or sell it for 60c and buy a better ring?"
3. **Denomination as game design.** Chaos = small unit, Divine = mid unit, Mirror = the asymptote. Players think in tiers naturally.

vs Diablo: D2/D3/D4 use gold + materials. Gold is a pure trading abstraction with no item-modifying effect, so monsters are infinite gold faucets and the only sinks are repair / vendor gambling. Inflation is structural. **PoE folded the sink directly into the gameplay verb.**

## Item affixes

Items have **prefixes and suffixes** (max 3 each on rare items), pulled from pools weighted by item base, item level, and tags. Each roll has a **tier** (T1 best, T7 worst); T1 rolls are intentionally rare. Above the rare tier, the affix system layers on:

- **Influenced** items (Shaper / Elder / Conqueror / Crusader / etc.) — exclusive mod pools, accessed by farming specific endgame content.
- **Fractured** items — one mod locked permanently; you craft around it.
- **Synthesised** items — implicit mod combinations; mid-tier crafting.
- **Veiled** items — one slot reserved for an Aisling craft (deterministic mod choice).
- **Eldritch implicits** — top-tier implicit modifiers from Searing Exarch / Eater of Worlds.
- **Corrupted** items — one final lottery; can brick or transcend.

The endgame target is usually a **6-modded rare with 4 influence-exclusive mods** at T1–T2 tiers — a single such item can require dozens of crafting steps and tens of thousands of currency.

## Crafting subsystems — the recurring family

Across leagues GGG has shipped a *family* of bolt-on crafting layers:

| System | What it adds |
|---|---|
| **Essence** | Guaranteed one mod from a list |
| **Bestiary** | Split / imprint / add modifiers |
| **Harvest** | Targeted reforge / augment by tag (extremely powerful, repeatedly nerfed) |
| **Fossil / Resonator** | Weighted pools for specific mod families |
| **Eldritch** | Implicit slot influencer |
| **Recombinator** | Mod-mixing between two items |
| **Aisling** (Veiled) | Removes a mod and adds one in a chosen mod family |
| **Bench / Master** | Deterministic but limited mods |

Each subsystem trades randomness for specificity in a different direction. GGG calibrates each layer's "deterministic ceiling" against what they consider the appropriate average time-to-perfect-item for the top 0.1%.

The **Harvest cycle** is the canonical case study: shipped in 3.11 (2020) as extremely targeted crafting, drove a wealth boom in the top 1%, and was nerfed in 3.13/3.14. Chris Wilson explicitly named the tension:

> "We were concerned by how deterministic some Harvest Crafts are and how easily players can craft near-perfect items."
> — GGG, [Harvest crafting changes manifesto](https://www.pathofexile.com/forum/view-thread/3034317)

The Reddit revolt that followed is the cleanest single example of the friction-between-GGG-and-its-community that defines PoE discourse.

## Aspirational crafting as design philosophy

GGG has stated repeatedly that **crafting should be aspirational, not guaranteed.** A perfect mirror-tier item exists; reaching it should require *real* effort, not just gold. The 18-month "ship deterministic system → nerf it" cycle is the design pattern, not a bug.

Whether this is right is contested. The community position: deterministic crafting solves a real new-player problem (RNG walls), and removing it pushes crafting back into "buy from the top 1%, craft is for nerds." GGG's position: a frictionless craft removes the chase, and the chase *is* the game.

## Patterns this exemplifies

- [`currency-as-crafting`](/patterns/currency-as-crafting) — the canonical example. No gold; every currency does something.
- [`aspirational-crafting`](/patterns/aspirational-crafting) — perfect items must be *reachable but rarely reached*; deterministic crafting is repeatedly nerfed to preserve the asymptote.
- [`random-perfect-roll-economy`](/patterns/random-perfect-roll-economy) — same shape as Warframe's Riven mods. Affix RNG creates per-item uniqueness; perfect rolls become market commodities.
