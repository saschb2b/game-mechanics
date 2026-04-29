---
title: "Balatro — Shop economy + interest"
type: game
game: balatro
patterns:
  - bonus-with-drawback
  - greed-vs-spend-economy
---

# Shop economy + interest

The run economy is small and fast: a few dollars per round, a randomized shop, a compounding interest rule. The interest rule alone reshapes the entire game.

![The Shop between rounds. "SHOP — Improve your run!" Next Round / Reroll $5. Slots: a face-down Joker $5, a Venus Planet Card $3, an Ante 1 Voucher $10, a Buffoon Pack $4, a Standard Pack $4. $10 banked](/images/balatro/shop.jpg)
*The shop after clearing a Small Blind. Reroll costs $5. The voucher slot ($10) is bigger than the player's bank — they cannot afford it this visit. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1935).*

## The income sources

Each cleared round pays out:

| Source | Amount |
|---|---|
| **Small Blind base reward** | $3 ($$$) |
| **Big Blind base reward** | $4 ($$$$) |
| **Boss Blind base reward** | $5 ($$$$$) |
| **Hands remaining at round end** | +$1 each |
| **Discards remaining at round end** | $0 (use them or lose them — not banked) |
| **Interest** | +$1 per $5 banked, **capped at $5/round** (so $25+ banked = $5 interest) |
| **Various Jokers** | (Cloud 9: +$1 per 9 in deck on round end; Egg: +$3/round; Rocket: +$1/round, +$3 on Boss) |
| **Gold Seals on cards played** | +$3 per scoring card with seal |

So a typical Boss-Blind clear pays: $5 base + $4 unused-hand + $5 interest = $14, plus joker income.

## The interest rule (the load-bearing mechanic)

> "Earn $1 interest per $5 banked, up to $5/round."

This single rule produces the central economic dialectic of Balatro: **save now or spend now?**

### The $25 floor

To max interest, you need $25+ banked. Below that, you're leaving money on the table:

| Banked | Interest |
|---|---|
| $0–$4 | $0 |
| $5–$9 | $1 |
| $10–$14 | $2 |
| $15–$19 | $3 |
| $20–$24 | $4 |
| $25+ | $5 (cap) |

So every player learns to **hoard to $25 minimum** and spend only the *excess*. Crossing the $25 threshold is the early-game mid-run goal of most builds.

### The greed-vs-spend trap

But the shop offers real upgrades. Skip the $5 Joker now → save $5 → next round earn +$1 from interest. Net: $1 + the *opportunity cost* of the Joker you didn't buy.

If the Joker would have multiplied your subsequent income (e.g. Egg: +$3/round), buying it pays back in 2 rounds. If it's a build piece, the value is harder to compute.

This is the same dialectic Slay the Spire's economy plays in (combat-then-shop, gold management, removal vs purchase) but **more explicit**: the interest is right there on the screen as a per-round subtotal. Players literally see the saving meter every round.

## The reroll cost ladder

Each shop offers ~2 Joker slots + Voucher + 2 Booster Packs. Players can **reroll** the Joker offers for $5 base, then $6, then $7 — costs reset on next shop.

So a heavily rerolled shop visit can cost $20+ to find the right Joker. This is a real luxury — most early-Ante runs skip rerolls entirely.

The Liquidation Voucher (one of 32 vouchers) reduces reroll cost to $1. A run with Liquidation re-rolls aggressively; a run without it reroles only when desperate.

## Vouchers — the run-permanent shop modifiers

![Booster Packs catalogue — Arcana Pack (Tarot), Celestial (Planets), Spectral, Buffoon (Jokers), Standard, plus Jumbo and Mega variants. Selected: Arcana Pack — "Choose 1 of up to 3 Tarot cards to be used immediately." Page 1/4](/images/balatro/booster-packs-grid.jpg)
*The shop's Booster Pack inventory. Each Pack is a temporary 2–5 card draft for a specific consumable type. Mega and Jumbo variants are larger / better-odds versions. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1935).*

**Vouchers are run-permanent.** Buy one in the shop ($10), it persists across all subsequent rounds in the run. There are 32 of them, paired in tiers (the second tier requires the first as a prerequisite):

| Tier 1 voucher | Effect | Tier 2 (requires T1) | Effect |
|---|---|---|---|
| Overstock | +1 shop slot | Overstock Plus | +1 shop slot |
| Clearance Sale | -25% shop prices | Liquidation | -50% shop prices |
| Hone | Foil/Holo/Polychrome 2× more common | Glow Up | 4× more common |
| Reroll Surplus | Reroll cost -$2 | Reroll Glut | -$2 again |
| Crystal Ball | +1 consumable slot | Omen Globe | Tarots can appear in any pack |
| Telescope | First Celestial Pack of run gets the Planet for your most-played hand | Observatory | Planets in consumable slot give ×1.5 mult on their hand |
| Grabber | +1 hand per round | Nacho Tong | +1 hand per round |
| Wasteful | +1 discard per round | Recyclomancy | +1 discard per round |
| Tarot Merchant | Tarots 2× more common in shop | Tarot Tycoon | 4× more common |
| Planet Merchant | Planets 2× more common | Planet Tycoon | 4× more common |
| Seed Money | +$1 interest cap (max $6) | Money Tree | +$2 again (max $7) |
| Blank | (does nothing) | Antimatter | +1 Joker slot |
| Magic Trick | Playing cards in shop | Illusion | Cards in shop can be Enhanced/Editioned/Sealed |
| Hieroglyph | -1 Ante (skip ahead!), -1 hand per round | Petroglyph | -1 Ante again, -1 discard |
| Director's Cut | Reroll Boss Blind for $10 | Retcon | Boss Blind reroll free |

The Antimatter chain (Blank → Antimatter) is one of the most-purchased combos: skipping a useless voucher tier to unlock the +1 Joker slot. Sequencing matters.

## What this teaches

- **A single rule (interest) can reshape an entire economy.** "+$1 per $5 banked, cap $5" is one line of code. It produces the run's central tension. Most economies lack a comparable load-bearing rule.
- **Make the interest meter visible.** Players need to *see* the saving floor to behave around it. Hidden interest (or implicit-only) doesn't change behaviour.
- **Permanent run-modifiers (vouchers) are stronger than per-shop bonuses.** Spending $10 once for run-permanent +$1/round interest cap pays back in 10 rounds. Buy them aggressively.
- **Pricing tiers should pair gates.** Tier 2 vouchers requiring tier 1 means buying *Blank* (does nothing) becomes valuable as a prerequisite for *Antimatter* (+1 Joker slot). Pair-gating turns useless items into ladders.
- **The greed-vs-spend trap is the entire midgame.** A run that hoards too much loses to under-built scoring. A run that spends too much dies to no-interest. The right behaviour is *just enough* — a soft cap at $25 with discretionary spending above.

## Patterns this exemplifies

- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — Hieroglyph voucher (skip Ante / lose hand) is the canonical case. Pay a permanent cost to skip a permanent threshold.
- `greed-vs-spend-economy` — interest creates a saving floor; the player must actively decide when to break it. Uncurated; Balatro is the canonical case.
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — every shop choice forecloses others. The reroll cost ladder makes "look at one more option" itself a real cost.
