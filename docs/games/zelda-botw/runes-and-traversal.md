---
title: "Breath of the Wild — Runes + traversal devices"
type: game
game: zelda-botw
patterns:
  - fixed-verb-set
  - chemistry-engine
---

# Sheikah Slate runes + traversal devices

The verb-set Link carries into every shrine, every encounter, every traversal puzzle. **All 5 main runes are unlocked in the first ~90 minutes**, on the Great Plateau tutorial area. Plus paraglider, climb, swim, sword, bow, shield. **No new verb is added for the rest of the 30+ hour main game.**

That is unusual. Most open-world games drip new verbs across the campaign. BOTW front-loads.

![The Runes menu — 8 runes laid out in one row at the bottom: Remote Bomb (round) / Remote Bomb (cube) / **Magnesis** (selected, "Manipulate metallic objects using magnetism. Grab on to metallic objects using the magnetic energy that pours forth from the Magnesis rune. Objects held in the magnetic snare can be lifted up and moved freely.") / Stasis / Cryonis / Camera / Master Cycle Zero (DLC) / amiibo](/images/zelda-botw/runes-menu.jpg)
*All eight runes visible in one menu. The first five are unlocked on the Great Plateau in the first 90 minutes; Camera unlocks slightly later via a side quest; Master Cycle Zero is DLC. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=35).*

## The base 5 runes (Great Plateau)

| Rune | What it does | What it unlocks |
|---|---|---|
| **Remote Bomb (round)** | Bouncing bomb, manually detonated | Cracked walls, distant kills, propulsion via blast |
| **Remote Bomb (cube)** | Same but doesn't roll — sits where placed | Precision demolition, contact-trigger stacks |
| **Magnesis** | Lift / move metallic objects | Metal puzzles, traps, "drop a metal box on a Bokoblin" plays |
| **Stasis** | Freeze an object in time; banked kinetic energy releases when the timer ends | Knock objects out of place, stop boss bullets, propel Link with hits |
| **Cryonis** | Create ice pillars on water surfaces | Vertical traversal across water, float-platforms |

These 5 are the core. Every shrine in the game is solvable with these 5 + climb + paraglider.

## The unlocks beyond Great Plateau

| Rune | Unlock | Function |
|---|---|---|
| **Camera (Hyrule Compendium)** | Side quest from Robbie / Purah at Hateno Tech Lab (~5h in) | Photograph creatures / items / monsters → unlocks Pictograph entries; can be used to set custom map markers |
| **Master Cycle Zero** (DLC) | Final reward of *The Champions' Ballad* DLC | Summonable motorcycle — fastest land traversal |
| **Travel Medallion** (DLC) | *The Master Trials* DLC | Place once anywhere as a custom fast-travel beacon |
| **amiibo** | Settings → toggle on | Unlocks special items (Wolf Link companion, Champion's gear, etc.) |

So the post-Great-Plateau additions are: 1 utility (Camera), 1 DLC vehicle, 1 DLC fast-travel, and 1 toy-figure interface. None are *new combat or puzzle verbs*. The Camera is the only new utility, and it's narrow (photograph things, set 5 map markers).

## The traversal devices — non-rune layer

Beyond runes, Link has a fixed set of traversal verbs:

| Device | Unlock | What it does |
|---|---|---|
| **Paraglider** | Great Plateau (granted by the Old Man after clearing 4 shrines) | Open from any height; consumes stamina; steerable horizontally; the load-bearing traversal verb |
| **Climb** | Always on | Up any non-slick surface, gated by stamina |
| **Swim** | Always on | Across water, gated by stamina |
| **Horse** | World (catch + tame from wild horse herds) | Faster ground travel; calls via Stable whistle when registered |
| **Master Cycle Zero** (DLC) | Champions' Ballad clear | Bike — gas costs (random items as fuel) |
| **Travel Medallion** (DLC) | Master Trials | One custom fast-travel beacon |

The cumulative effect: a player can move *anywhere* by hour 1, with three primary techniques (climb, glide, swim) that together cover all terrain. Speed and convenience improve over the long tail (horse, Master Cycle), but the fundamental capability is set.

![The Camera Mode viewfinder framing a Sheikah Tower in the distance — "45/48" photos taken, framing brackets visible. Bottom controls: Zoom / Album / Self-Portrait / Quit / Capture](/images/zelda-botw/camera-mode.jpg)
*The Camera rune is a one-input mode-shift: D-pad to bring it up, frame, A to capture. The 48-slot album is the player's authored journal. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=35).*

## The Camera + Compendium loop

The Camera is the most quietly clever rune. Its mechanical payload is:

- Take photos of NPCs, creatures, monsters, weapons, materials, treasures.
- Each photographed entry fills a slot in the **Hyrule Compendium** (385 entries total).
- Filled compendium entries enable the **Sheikah Sensor +**, which detects entries by photo on the map (e.g. "find me a Cucco").
- Each filled entry rewards 5–500 Mon (Hateno Tech Lab currency).

So the Camera is *also* a content-discovery loop. Walk past a flower you haven't photographed → detour, frame, snap → fill a slot, earn Mon, gain a permanent search ability. This is `flavor-as-meta-narrative` operating on the player's own *photo journal*.

![Hyrule Compendium → Creatures category. A grid of 24 silhouette tiles, mostly unfilled (Sheikah-eye watermark visible behind black background); Mountain Goat #012 has a player-photo. Bottom: "Target with sensor / Back / Select"](/images/zelda-botw/hyrule-compendium.jpg)
*The Compendium with most slots unfilled. The "Target with sensor" prompt at the bottom is the chain — once you photograph a creature, you can ping the map to find more. Self-sustaining discovery loop. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=35).*

## Why front-loading the verb-set works

The team's bet — give the player most of the verb-set in the first 90 minutes, no new mechanical primitives added — is the inverse of [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) at the *verb* layer.

Why does it work?

1. **The verbs are deep.** Magnesis isn't "lift metal"; it's a foundation for hundreds of physics interactions. The player keeps finding new applications across 30 hours.
2. **The chemistry engine multiplies.** The 5 verbs combine with fire / ice / wind / water / electricity rules at every shrine. The combinations grow with the player's familiarity.
3. **Trust over surprise.** The player learns the toolkit early and feels the game *trusts them* to use it creatively, rather than dripping new verbs as rewards.
4. **No tutorial debt.** Every late-game encounter can use any verb without explaining anything.

Compare to a typical 30-hour open-world game that introduces new gadgets through 80% of the campaign — players spend the late game retraining instead of mastering. BOTW's mastery curve is monotonic.

## The DLC additions don't violate the rule

Master Cycle Zero (vehicle) and Travel Medallion (single beacon) both arrive as endgame extras. Neither is a *new puzzle verb*; both are *traversal accelerators*. The team kept the verb-set frozen even when adding paid content.

This is unusual. Most DLC adds new mechanics to differentiate. BOTW's DLC adds *more puzzles for the existing verbs* (Trial of the Sword, Champions' Ballad shrines) and modest QoL.

## What this teaches

- **Front-loading a deep verb-set is more powerful than dripping a shallow one.** Trust the player to recombine; don't hand them tools across 20 hours.
- **A fixed verb-set scales with chemistry.** BOTW's 5 runes feel like 50 because they multiply with the chemistry engine. If the runes were context-specific, 5 would feel like 5.
- **The Camera is a discovery loop, not a side-feature.** Tying photography → Compendium → Sensor → search produces a four-step engagement chain that runs across the entire game. Each step's payoff funds the next.
- **DLC can extend without expanding.** BOTW's DLC adds more *contexts for the existing verbs* rather than new verbs. This preserves the design-trust of the base game.

## Patterns this exemplifies

- `fixed-verb-set` — the entire mechanical vocabulary is locked in the first hour, with no new primitives added across the campaign. Uncurated; BOTW is the canonical case.
- [`chemistry-engine`](./chemistry-engine) — the runes are *also* chemistry-engine actors. Magnesis is "metallic-attraction rule"; Stasis is "kinetic-energy bank rule"; Cryonis is "ice-formation rule." The runes are universal rules, applied universally.
- `flavor-as-meta-narrative` — the Camera + Compendium loop is the player's own authored photo journal. Soft narrative authorship, mechanical reward.
