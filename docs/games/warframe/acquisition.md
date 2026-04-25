---
title: "Warframe — Acquisition pipeline"
type: game
game: warframe
patterns:
  - crafting-timer-as-pacing
  - vault-rotation-economy
---

# Acquisition pipeline

How do you get a Warframe? Five-day-real-time chain across multiple sub-systems. The structure repeats for most loot in the game.

![Warframe Foundry — build queue showing Air Support Charges (1 minute), Archwing Launcher (30 minutes, Archwing Launcher Segment Required), Ascaris Negator (1 blueprint left, Not Enough Components), with material costs and timers visible](/images/warframe/foundry-crafting.jpg)
*The Foundry. Three concurrent builds in different states: one ready to start (1 minute timer, all materials present), one gated on a *segment* unlock (which is itself a separate quest reward), one stalled on missing components. The whole acquisition pipeline routes through this screen — every Warframe, weapon, gadget, and upgrade resource passes through a Foundry queue with real-time timers. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=192).*

## A standard (non-Prime) frame

Every frame has **four parts**:

- Main blueprint
- Neuroptics (head)
- Chassis (body)
- Systems (organs)

Each acquired separately, each via a different RNG-gated path.

```
star-chart progression → unlock the planet
  → unlock the boss node
    → run the boss N times for RNG drops (typically 4 distinct drops needed)
      → buy main BP from Market for credits
        → submit all 4 to Foundry → 12h × 3 + 72h main = ~5 days real time
          → frame appears in inventory at rank 0
            → grind affinity in missions to rank 30
              → install Orokin Reactor (rare drop / 20 plat)
                → mod, polarize with Forma (1+ runs of 0→30 per Forma)
                  → fully built
```

That's not one task. It's a chain of tasks across multiple sub-systems, deliberately spread over real-world days. The chain is the design.

## Prime frames — the Void Relic system

Prime variants replace the boss-drop step with a **squad-driven Relic pipeline**:

- Relics drop from specific mission types — **Lith / Meso / Neo / Axi** (early → late game tiers).
- Refine a relic with **Void Traces** (25 / 50 / 100) to bias drop rarity.
- Crack the relic in a **Void Fissure mission** (typically 4-player). Everyone's relic shows one drop; the squad picks one each.
- Each relic has 3 commons / 2 uncommons / 1 rare drop slot.
- A Prime frame's parts are scattered across multiple relics.

The squad mechanic is intentional: solo players grind harder, group players see each other's drops. And because **Prime parts can be traded between players for Platinum**, the entire Relic system is the supply side of Warframe's player-driven F2P economy. See [/games/warframe/monetization](./monetization.md).

## Crafting timer as pacing

12h weapons / 12h parts / 72h frames. Bypassable with Platinum.

This timer does two jobs:

1. **Anti-rush pacing.** You finish the boss but can't immediately use the reward. The dopamine spreads across days, and you keep playing while waiting because the next thing is also queued.
2. **Soft monetization.** Impatient players pay Platinum to skip.

DE has openly walked the timer back over time. The Koumei release (2024) shipped with a 24h timer as an experiment — they're considering reducing 72h → 24h game-wide, suggesting they think the original timer is too long for the modern audience.

## Vault rotation — the scarcity engine

After ~1–2 years, older Prime frames get **vaulted** — pulled out of the active relic pool. They can still be traded between players, but they can't be farmed fresh.

This drives both populations:
- **Paying customers** who buy Prime Access or Prime Vault bundles for instant access.
- **Grinders** who farm relics aggressively before vaulting (creating market scarcity later).

It also rotates the player base's attention to current content rather than letting old Primes dominate forever. See `vault-rotation-economy`.

## Patterns this exemplifies

- `crafting-timer-as-pacing`
- `vault-rotation-economy`
