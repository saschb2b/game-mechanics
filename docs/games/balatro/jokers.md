---
title: "Balatro — Jokers as multiplicative modifiers"
type: game
game: balatro
patterns:
  - loadout-as-budget
  - bonus-with-drawback
---

# Jokers as multiplicative modifiers

The build. **150 base Jokers, 5 starting slots.** Every Joker is a passive trigger: it fires on hands played, on cards scored, on suits hit, on hand types matched, on round end, on shop visited. Some add chips; some add mult; some multiply mult; some scale per-trigger; some interact with other Jokers.

Solving a Balatro run is solving the **Joker synergy graph**.

![Joker editions display — five copies of the Joker base card showing different Editions: Base / Foil / Holographic / Polychrome / Negative. Tooltip on Base: "No extra effects." Caption: "Playing cards may each have one Enhancement, Edition, and Seal"](/images/balatro/editions-grid.jpg)
*Editions are roll modifiers on Jokers (and on playing cards). Foil = +50 chips, Holographic = +10 mult, Polychrome = ×1.5 mult, Negative = doesn't take a Joker slot. The same Joker becomes much stronger with the right edition. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1935).*

## Slot budget

The default Joker capacity is **5 slots**. Sources of expansion:

| Source | Effect |
|---|---|
| **Negative edition** (random shop roll) | Joker takes 0 slots — effectively a free slot |
| **Antimatter Voucher** | +1 slot |
| **Hidden / specific Joker effects** | Some Jokers (e.g. Blueprint, Brainstorm) reference *other* Jokers; the game treats them as having a slot but their power scales with neighbours |

So most builds end at 5–7 effective slots. The constraint is real: most jokers seen in the shop will not be picked up.

This is [`loadout-as-budget`](/concepts/loadout-as-budget) at the run-build layer: a 5-slot integer budget over a pool of 150+ candidates.

## Joker categories

Jokers fall into roughly six functional buckets:

| Type | Example | What it does |
|---|---|---|
| **Flat chip adders** | Joker (the base "Joker") | +4 mult on every hand. Cheap, reliable. |
| **Suit/rank scaling** | Greedy Joker (+3 mult per Diamond), Lusty Joker (+3 mult per Heart) | Scales with deck composition |
| **Hand-type scalers** | Even Steven (+4 mult per even-rank card scored), Odd Todd (+30 chips per odd-rank) | Tied to specific deck shapes |
| **Conditional triggers** | Hack (+1 retrigger on 2/3/4/5 played), Photograph (×2 mult on first scoring face card) | Trigger on specific events |
| **Persistent scalers** | Constellation (+0.1 ×mult per Planet Card used), Lucky Cat (+0.25 ×mult per Lucky Card triggered) | Grow over the run |
| **Meta / chain Jokers** | Blueprint (copies the Joker to its right), Brainstorm (copies the leftmost Joker), Mime (retriggers held-card effects) | Multipliers of other Jokers |

The deepest builds combine 2–3 chain Jokers with a strong scaler. Example endgame archetype:

> Blueprint → Baron (×1.5 mult per King held in hand) → Mime → … → +Polychrome × 1.5 edition on Baron

Each component multiplies the next, producing the famous "Balatro Astronomical Numbers" memes.

## The slot-order matters

**Jokers fire left to right.** Blueprint copies the Joker to its right; if you put Blueprint *after* Baron, it copies Baron's effect. If Blueprint is at the end of the row with nothing to its right, it does nothing.

So the slot order is a real puzzle. Players physically drag Jokers in the menu to optimize the firing chain.

Compare to [Hollow Knight charms](/games/hollow-knight/charms-and-notches) — order doesn't matter there, only fit. Balatro's order-mattering is closer to a pipeline / functional-composition design.

## Joker rarity tiers

| Rarity | Cost in shop | Drop weight |
|---|---|---|
| Common | $4 | 70% |
| Uncommon | $6 | 25% |
| Rare | $8 | 5% |
| **Legendary** | (Soul Spectral Card only) | special unlock |

Legendary Jokers (5 of them — Caino, Chicot, Triboulet, Yorick, Perkeo) only appear via the Soul Spectral Card or specific shop interactions. They're build-defining.

Editions stack on top of rarity: a Negative Polychrome Common is rarer than any base Legendary.

## The shop randomness layer

Each shop visit shows ~2 Joker slots, drawn from the rarity pool. Players can:

- Buy what's there.
- Reroll for $5 (cost grows: +$1 per reroll within the same shop).
- Skip the shop entirely (no reroll cost, advances to next round).
- Buy Booster Packs (Buffoon Pack contains 2–4 Jokers; Mega Buffoon contains more, with better edition odds).

So the player is not guaranteed any specific Joker on any given run. Two structural consequences:

1. **Adaptation > optimization.** A run that opens with a strong Pair Joker should pivot to a Pair build, not chase the player's "favourite" build.
2. **Reroll economy is real.** Spending $5 on a reroll is $5 you can't bank for interest. The opportunity cost is felt every shop.

## What this teaches

- **Multiplicative passives produce emergent ceilings.** Balatro's ceiling isn't bounded by stat balance — it's bounded by the number of multiplicative Jokers you can chain. Designers who fear "too much power" should look at how Balatro's chained ceiling *feels good* even at 1e20 scores.
- **Slot-order-mattering is a design lever.** Most loadout systems are commutative (order doesn't change output). Balatro's left-to-right firing breaks that — and produces *more* depth for the same nominal slot count.
- **Rarity × edition is more space than rarity alone.** A common Joker with a Polychrome edition is collectively rarer than a base Legendary. Stacking randomness dimensions cheaply expands the variation surface.
- **A 5-slot budget is enough.** 150 Jokers / 5 slots = 750+ million possible loadouts. The constraint is what makes individual loadouts feel chosen rather than collected.
- **Solo dev coherence.** LocalThunk hand-balanced 150 Jokers without committee process. Several Jokers were nerfed post-launch (Triboulet, etc) but the *aesthetic* of each Joker is consistent because one author held all the threads.

## Patterns this exemplifies

- [`loadout-as-budget`](/concepts/loadout-as-budget) — 5 Joker slots over 150 candidates. Combinatorial space far exceeds slot count.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — many Jokers have strict trade-offs. Mr. Bones (prevents 1 death, then deletes itself), Madness (× 1.5 mult, but destroys 1 random Joker per Blind), Burnt Joker (upgrades a hand, but only the *first* hand each round counts).
