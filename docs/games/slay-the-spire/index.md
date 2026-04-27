---
title: "Slay the Spire"
type: game
studio: Mega Crit
released: 2019
genre: roguelike-deckbuilder
business_model: premium
iconic_mechanic: "Card draft + Ascension staircase"
core_dialectic: "Risk vs reward, fractally"
patterns:
  - subtractive-deckbuilding
  - card-draft-with-skip
  - branching-dag-map
  - tight-energy-budget
  - expiring-block
  - enemy-intent-telegraph
  - rule-breaking-relics
  - bonus-with-drawback
  - cumulative-modifier-staircase
  - meta-as-variety-not-power
  - orthogonal-class-design
  - shared-seed-daily
  - metrics-driven-balance
  - pity-system-anti-streak
  - handcrafted-pcg-hybrid
tags: [deckbuilder, roguelike, turn-based, single-player, indie]
og_image: images/slay-the-spire/combat-defect.jpg
---

# Slay the Spire

> The genre-defining roguelike deckbuilder. Codified the patterns now copied by Monster Train, Inscryption, Wildfrost, Across the Obelisk, Roguebook, and dozens more. Worth dissecting because **almost every system in it is a fractal restatement of one principle: risk vs. reward.**

![Defect combat — orb channeling, cards in hand, energy 4/3, intent lightning visible](/images/slay-the-spire/combat-defect.jpg)
*Defect combat. Card hand at the bottom, energy budget (4/3) bottom-left, the intent telegraph (lightning) visible above the enemy. Every Spire mechanic on one screen. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*

## Snapshot

| | |
|---|---|
| **Studio** | Mega Crit (Anthony Giovannetti, Casey Yano + small team), Seattle |
| **Released** | January 2019 (after ~2 years in Early Access) |
| **Sequel** | Slay the Spire 2 in Early Access (2025/2026) |
| **Platforms** | PC, Mac, Linux, PS4, Xbox, Switch, iOS, Android |
| **Run length** | ~45–90 min (faster late-Ascension) |
| **Iconic mechanic** | Card draft + Ascension staircase |
| **Core dialectic** | Risk vs reward, fractally |
| **Business model** | Premium one-time. No DLC for original. No microtransactions. |
| **Content scope** | 4 characters × 350+ cards × 200+ relics × ~50 events × 50+ enemies × 10 bosses × 20 Ascensions |

## Macro loop

```
Pick character (Ironclad / Silent / Defect / Watcher) and Ascension level
  → start with starter deck (10 cards) + 1 starter relic
  → enter Act 1 map (a branching DAG of nodes)
    → choose path through node types: Monster, Elite, Event, Shop, Rest, Treasure, Boss
    → each fight earns a card-reward draft of 3 cards (pick 1 or skip)
    → relics, gold, potions, HP changes accumulate
  → defeat Act boss → choice of 3 boss relics + 3 rare cards
  → Act 2 → Act 2 boss (same structure, harder)
  → Act 3 → Act 3 boss
  → (optional) Act 4 → Heart final boss
  ← die → run ends, return to character select with score
    → unlocks: new cards/relics added to that character's pool
    → Ascension level for that character +1 if you won
```

## Mechanic deep-dives

- [**Map & node types**](./map-and-nodes.md) — branching DAG, anti-streak resolution, why the map is the load-bearing mechanic.
- [**Combat system**](./combat.md) — energy + block + intent. Complete-information per-turn puzzles.
- [**Deckbuilding**](./deckbuilding.md) — card drafts, deck thinning, archetypes.
- [**Relics**](./relics.md) — rule-breaking modifiers, bonus-with-drawback boss relics.
- [**Characters**](./characters.md) — four orthogonal designs, not stat reskins.
- [**Ascension & meta-progression**](./ascension.md) — difficulty staircase, "variety not power".
- [**Daily climb & seeds**](./daily-climb.md) — same-seed leaderboards.

## Through other lenses

- [**Ludonarrative reading**](./ludonarrative-resonance) — these mechanics read through the [resonance lens](/concepts/ludonarrative-resonance). **Verdict: orthogonal** — light fiction, heavy math, honest framing. Forcing resonance would weaken the loop.

## What this game teaches

- **One design principle, fractally restated.** Risk vs reward shows up at every scale: the map, the draft, the rest site, the boss relic, the shop, every campfire. The whole game is one idea rendered at every level.
- **Subtractive deckbuilding.** Power lives in *removing* weak cards, not adding strong ones. Inverts the genre instinct.
- **Cumulative-modifier difficulty staircase** beats the slider. One new lesson per level, 20 levels, learnable.
- **Meta-progression as variety, not power.** Unlocks expand the *space*, never raise base stats. Run integrity preserved.
- **Anti-streak RNG** (pity counters on rare drops, on Unknown node resolution) smooths feel-bad runs without telling the player.
- **Daily seed = community for free.** One feature, almost no cost, enormous engagement.

See [lessons](./lessons.md) for the longer take.

## See also

- [Patterns this exemplifies](./patterns.md)
- [Design tensions](./design-tensions.md)
- [Sources](./sources.md)
