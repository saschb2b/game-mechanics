---
title: "Hades"
type: game
studio: Supergiant Games
publisher: Supergiant Games
released: 2020
genre: action-roguelite
business_model: premium
iconic_mechanic: "Boon-draft + dialogue-after-death narrative"
core_dialectic: "Death as story beat, not failure"
patterns:
  - bonus-with-drawback
  - meta-as-variety-not-power
  - branching-dag-map
  - handcrafted-pcg-hybrid
  - bounded-roguelite
  - late-introduced-mechanics
tags: [roguelite, action, narrative, single-player, series]
og_image: images/hades/h2-title-screen.jpg
---

# Hades

> **A two-game series from Supergiant Games** — Hades (2020) and Hades II (2024 EA → 2025 1.0). The series's load-bearing innovation: **dying advances the story.** Each death triggers fresh dialogue from the gods, family, and mentors who can't help but comment on Zagreus's (or Melinoë's) ongoing escape — making the roguelite's defining failure state into the *narrative engine*.

![Hades II title screen — Melinoë holding silver dagger and silver hook against a green-arcana magic circle](/images/hades/h2-title-screen.jpg)
*Hades II — Melinoë, princess of the underworld, on a quest to defeat Chronos. The series's signature visual style: hand-painted character portraits over moody pixel-painted environments. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2192).*

## Snapshot

| | |
|---|---|
| **Studio / publisher** | Supergiant Games |
| **Series span** | 2020 (Hades 1) → 2024 EA / 2025 1.0 (Hades II) |
| **Genre** | Action roguelite, isometric, single-player |
| **Business model** | Premium, single-purchase. EA period precedes 1.0 |
| **Iconic mechanic** | Pick-1-of-3 boon draft + dialogue advances per death |
| **Core dialectic** | Death as story progression vs. roguelite "lose the run" framing |
| **Hours to credits** | Hades 1 ≈ 30–40h to credits; ~80–100h to "true ending" |

## The two entries

| Entry | Year | What's new |
|---|---|---|
| **Hades** | 2020 (EA from 2018) | The original. Zagreus's escape from the Underworld through 4 biomes (Tartarus → Asphodel → Elysium → Styx). Boons of the Olympian gods. Mirror of Night for meta-progression. Pact of Punishment for difficulty. Bounded campaign with a real ending. |
| **[Hades II](./series-evolution)** | 2024 EA / 2025 1.0 | The sequel. Melinoë (Zagreus's sister) versus Chronos. **Two paths** instead of one (descent into Tartarus + ascent to Olympus). New systems: Magick resource, Cast/Hex spells, Arcana cards (replaces Mirror), 4 weapons each with Aspects, Crossroads hub instead of House of Hades. |

## Macro loop (shared)

```
Crossroads / House hub: chat with characters, advance hub progression
  → pick a Nocturnal Arm (weapon)
  → step through the door → start a run
    → enter chamber → fight enemies → clear → pick a reward door
      → reward types: boon, magick, gold, hammer-upgrade, healing, urn
    → repeat ~12-20 chambers per biome
    → fight biome boss (Sisyphus → Megaera → Theseus → Hades, etc.)
    → next biome OR die
  → return to hub: dialogue advances based on what happened in the run
  → spend currency at Mirror / Arcana / Pact for next run
```

The *return to hub* step is the genre innovation. In most roguelites, dying = "try again". In Hades, dying = "what does Achilles say to me about how that run went?"

## Mechanic deep-dives

- [**Boons & gods**](./boons-and-gods) — pick-1-of-3 boon draft, ~12 Olympian gods, rarity tiers, duo boons, hammer rare upgrades.
- [**Chamber paths**](./chamber-and-paths) — branching DAG within each biome; the player picks the run's shape via reward-door icons.
- [**Death as narrative**](./death-as-narrative) — the series's signature design innovation. Dialogue tracks per-character, advances per death, locks new lines behind run conditions.
- [**Meta-progression**](./meta-progression) — Mirror of Night → Pact of Punishment (H1), Arcana grid + Resource Cards (H2). Variety unlocks > raw stat bumps.
- [**Series evolution (H1 → H2)**](./series-evolution) — what H2 adds: Magick, Cast/Hex, two paths, Arcana grid.

## What this game (series) teaches

- **Failure-as-content.** The death-resets-the-run loop is the genre default. Hades's contribution is making each reset *narratively productive*. Other roguelites should ask whether their failure state can become *something the player wants to see*.
- **Boon draft = Spire-pattern transposed to action combat.** Pick-1-of-3 with skip is Spire's draft language. Hades imports it intact and proves it generalizes outside deckbuilding.
- **Hub-as-character-roster.** The Crossroads / House of Hades is where the writing lives. Each NPC is a *recurring conversation partner*; their dialogue files are bigger than most JRPG side characters'. The hub structure makes that volume of writing *encounterable* in tiny doses.
- **Bounded roguelite with a real ending.** Hades 1 is unusual: it has credits, a "true ending" arc, and even an explicit *finished* state — not infinite escalation.

See [`lessons.md`](./lessons) for the longer take.

## See also

- [Patterns](./patterns) — full pattern table
- [Sources](./sources) — bibliography
