---
title: "Slay the Spire — Map & node types"
type: game
game: slay-the-spire
patterns:
  - branching-dag-map
  - pity-system-anti-streak
  - handcrafted-pcg-hybrid
---

# Map & node types

Each act is a procedurally generated **DAG (directed acyclic graph)** of nodes from bottom to top. The player picks a starting node from the bottom row and travels along connected paths — paths can branch and merge but never go down.

> The iconic Spire map view (a vertical DAG of node icons) isn't yet captured locally — the Steam screenshot set doesn't include it. See the [Slay the Spire wiki — Map Locations](https://slaythespire.wiki.gg/wiki/Map_Locations) for examples until we have a local copy.

## Seven node types

| Icon | Node | Reward |
|---|---|---|
| (sword) | **Monster** | 10–20 gold + card draft (3 cards, pick 1 or skip) + occasional potion |
| (skull) | **Elite** | A relic (always), 25–35 gold, card draft |
| (merchant) | **Shop** | Spend gold on cards, relics, potions, or **remove a card from your deck** |
| (campfire) | **Rest Site** | Choose: heal 30% max HP **OR** upgrade a card (some relics add other options) |
| (chest) | **Treasure** | Open a chest, get a relic |
| **?** | **Event** | Flavor + decision; often a real cost-benefit. May resolve as Monster/Shop/Treasure |

![Event encounter — narrative dialogue with a creature](/images/slay-the-spire/event-encounter.jpg)
*An Event encounter ("Greetings...") — these are hand-authored narrative beats with branching choices, scattered procedurally across the map. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*
| (crown) | **Boss** | Choice of 3 rare cards + 3 boss relics |

## Why the map is the load-bearing mechanic

The map is the **meta-decision layer** that wraps the combat layer. Every node-choice is a small risk/reward call:

- Take an Elite for the relic, but burn HP/cards.
- Skip a Rest to hit a Shop, but you can't smith that key card.
- Cross over to a Treasure, but lose a Monster fight you needed for gold.

Critically: **paths are partially-visible from the start of the act** — so the player plans the *shape* of the run before the first fight. This is what makes Spire feel strategic across runs of similar enemies. The map turns "random encounters" into "**chosen sequences of risks.**"

See [`branching-dag-map`](/concepts/branching-dag-map).

## Procedural generation rules

(Paraphrased from wiki + the arxiv analysis paper.)

- **15 floors per act**, plus the boss.
- **6 starting nodes**, 1 boss at the top.
- Edges generated to form a DAG with branching/merging.
- Distribution of node types is partly fixed, partly randomized within constraints.
  - Floor 6 in Act 1 is always a Treasure.
  - Floor 9 in Act 1 is always a Rest Site.
  - First 4 floors never have an Elite.

This is a clean **handcrafted-PCG hybrid**: the *positions* of certain key node types are fixed; the *layout* connecting them is procedural. Same trick Sparklite uses for biome layout, same trick Warframe uses for tile-set assembly. See [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid).

## Anti-streak RNG

The "?" Unknown nodes have a **dynamic resolution table**: the longer it's been since you saw an Event, the higher the chance the next "?" *is* an Event. When it resolves as Event, the counter resets.

That's a great example of anti-streak RNG. Pure randomness would produce stretches of "all events" or "no events ever." Spire **biases against feel-bad runs without lying to the player.** Same pattern shows up in card-reward rarity (see [deckbuilding](./deckbuilding.md)).

See [`pity-system-anti-streak`](/patterns/pity-system-anti-streak).

## Patterns this exemplifies

- [`branching-dag-map`](/concepts/branching-dag-map)
- [`pity-system-anti-streak`](/patterns/pity-system-anti-streak)
- [`handcrafted-pcg-hybrid`](/concepts/handcrafted-pcg-hybrid)
