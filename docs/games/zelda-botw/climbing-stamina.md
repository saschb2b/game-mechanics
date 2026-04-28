---
title: "Breath of the Wild — Climbing + the stamina ring"
type: game
game: zelda-botw
patterns:
  - climb-anywhere-stamina
  - bonus-with-drawback
---

# Climbing + the stamina ring

The single design decision that re-shapes Hyrule. **Almost every solid surface in the world is climbable** — cliffs, trees, walls, monsters, towers, ruins. The constraint is a **stamina ring** that depletes while you climb (and run, swim, paraglide-glide-extend) and recharges while you're on flat ground.

This one rule re-routes every other system in the game.

![Link paragliding into rainy Kakariko Village — paraglider stamina circle visible mid-screen, hearts top-left, weather indicators bottom-right](/images/zelda-botw/paraglider-rain.jpg)
*Paragliding consumes stamina just like climbing. The same ring governs sprint, swim, climb, and glide — making vertical movement a single resource economy. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=35).*

## What the ring governs

The stamina ring is a single circular meter near Link's portrait. It controls:

| Action | Stamina cost | Recovery |
|---|---|---|
| **Sprint** (run faster than walk) | Drains while held | While walking / standing |
| **Climb** (any wall) | Drains while moving up; **stops draining when stationary on the wall** | While stationary on the wall (slow) or on flat ground (fast) |
| **Climb-jump** | Big single drain (~1/4 ring) | — |
| **Glide** (paraglider) | Drains while gliding | On landing |
| **Swim** (fast stroke) | Drains while held | On shore / standing in shallow water |
| **Charge attacks** | Drains during charge | After release |

The ring starts at one full circle. **Stamina Vessels** — earned by trading 4 Spirit Orbs from shrines at a Goddess Statue — add segments. Each Vessel adds 1/5 of a circle. Maxed: ~3 full circles (15 Vessels). The player chooses Stamina vs Heart Container at every Goddess Statue trade — a permanent commitment.

## Climb is governed by the ring AND by weather

The "almost every surface" rule has one major exception: **rain.**

When it's raining, Link's hands slip on the wall every ~1 second of climb-up. The stamina cost stays the same; the climb just resets your position. Effectively, climbing in rain is impossible above shallow heights.

This single environmental constraint reshapes the player's planning:

- See the sky → check weather → if rain, postpone the cliff approach.
- Caught in rain mid-climb → either rappel down or bonfire-pass-time (sit at a campfire and skip until morning).
- Storm-cooking ingredients → certain food items reduce slip chance ("Sticky" elixir from Sticky Frogs grants temporary climb-in-rain ability).

So climbing is **not just gated by stamina**. It's gated by stamina × weather × terrain (wet wood, ice). The ring is the visible cost; the weather is the hidden gate.

## Why "climb anywhere" works

The "almost everywhere" rule is what makes Hyrule's verticality matter. In a typical open-world game, traversal is gated by *designed paths* — doors, bridges, ladders. Players walk along the routes the level designer drew.

In BOTW, climb-anywhere means **the player draws their own route**. Three consequences:

1. **Encounter approach is open.** Every Bokoblin camp has 20 viable approaches: from above (paraglide bombs), from a cliff side (climb-up + sneakstrike), through grass (fire arrow), via Magnesis (drag a metal box onto them).
2. **Map gates dissolve.** The "you must clear this dungeon to reach this region" pattern of classic Zelda is gone. You can walk to Hyrule Castle in the first hour. You'll die — but you can walk there.
3. **Stamina becomes the difficulty curve.** Tall mountains aren't gated by puzzles; they're gated by stamina capacity. Want to climb Mount Lanayru? Train more Stamina Vessels, or come back with cooked food that grants temporary stamina.

This is `climb-anywhere-stamina` — a single rule that produces a continuous, navigable, non-gated open world. There is, to my knowledge, no widely-replicated peer to this in commercial games. Genshin Impact's climb borrows the form, but its world has more designed gates.

## Stamina food — the temporary stamina sub-economy

The ring has *one* extension: cooked food that grants temporary stamina (or fully restores it on consumption).

| Effect | Source | Use |
|---|---|---|
| **Stamina restore** | Stamella Shrooms, Restless Crickets | Standard recharge food. |
| **Endura ("temporary extension")** | Endura Shrooms, Endura Carrots | Adds 1+ extra rings *on top* of your max — needed for the longest climbs. |
| **Hearty (extra hearts + full HP)** | Hearty Durian, Hearty Truffle | Indirect — fully heals so you can re-engage. |

Endura food is the player's tool for breaking the soft cap on stamina. A maxed-stamina + Endura Carrot meal lets you climb a wall the base game wouldn't allow. The ingredient is rare; the meal is expensive; the trip is once-per-rare.

## The ring as a designer's lever

The Goddess Statue trade — 4 Spirit Orbs for either +1 Heart Container or +1 Stamina Vessel — is a real choice. The player commits permanently. There are 30 total Goddess Statue trades (120 shrines / 4) plus 4 Champion Memory blessings = 34 total trades. The player gets to fill **either** the heart bar OR the stamina ring to max, not both, without the DLC trial.

This is `bonus-with-drawback` at the meta-progression layer: you cannot have both maximum HP and maximum traversal. Combat-focused builds run out of stamina; explorer-focused builds get one-shot by Lynels.

## What this teaches

- **One constraint can carry the whole verb-set.** Sprint + climb + swim + glide + charge-attack all share *one* meter. The player learns the meter once and applies it everywhere. No new tutorial needed for any new traversal verb.
- **A single environmental gate (rain) reshapes player planning.** Players check the sky before committing to a climb. Weather becomes a *strategy resource* rather than ambient texture.
- **Climb-anywhere works because the cost is small enough to forgive.** A botched climb costs you a few hearts (fall damage) and 30 seconds. So players experiment freely. If the cost were a death and a 5-minute reload, players would stop trying.
- **A meta-progression fork forces commitment.** Heart vs Stamina at every Goddess Statue is a real, irreversible (without rare amiibo) choice. Players become *kinds* of players — climbers vs fighters — through their accumulated trades.

## Patterns this exemplifies

- `climb-anywhere-stamina` — universal climbability gated by a single regenerating resource. Uncurated; BOTW is the canonical case.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — the Heart / Stamina trade at every Goddess Statue is a clean per-decision tradeoff with permanent consequences.

## Adjacent patterns

- [`loadout-as-budget`](/concepts/loadout-as-budget) — the whole stamina ring is a 1-resource budget across 5 verbs. Loadout-as-budget at the *traversal* layer instead of the inventory layer.
