---
title: "Balatro — Poker hands as a chip × mult ladder"
type: game
game: balatro
patterns:
  - chip-and-mult-stacking
  - cumulative-modifier-staircase
---

# Poker hands as a chip × mult ladder

The base scoring engine. **Every poker hand has a base chips count and base mult**, multiplied to produce the round score. Everything else in the run modifies one or the other.

This is a five-line table that the entire 200+ hour endgame is built on.

![BATTLE — Small Blind round in progress. Flush lvl.1 highlighted with **35 × 4** chip-and-mult readout. Five Hearts cards selected on the table. Round score 0; banking $4; Ante 1/8 Round 1](/images/balatro/scoring-flush.jpg)
*A Flush about to fire. The base "**35 × 4**" appears on the left panel — those are the *unmodified* chips and mult for a Flush at lvl.1. Every chip and mult contribution from cards / Jokers / Enhancements gets added to those two numbers before the multiplication runs. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1935).*

## The base table

| Hand | Base chips | Base mult | Base score |
|---|---|---|---|
| High Card | 5 | 1 | 5 |
| Pair | 10 | 2 | 20 |
| Two Pair | 20 | 2 | 40 |
| Three of a Kind | 30 | 3 | 90 |
| Straight | 30 | 4 | 120 |
| Flush | 35 | 4 | 140 |
| Full House | 40 | 4 | 160 |
| Four of a Kind | 60 | 7 | 420 |
| Straight Flush | 100 | 8 | 800 |
| Royal Flush | 100 | 8 | 800 |
| **Five of a Kind** (mod) | 120 | 12 | 1,440 |
| **Flush House** (mod) | 140 | 14 | 1,960 |
| **Flush Five** (mod) | 160 | 16 | 2,560 |

The last three "secret" hands unlock as the player builds Wild Cards / Stone Cards / specific Joker combos that allow same-rank multiples or all-same-suit-and-rank conditions.

## The scoring formula

Once a hand is selected and Play Hand pressed:

```
1. Hand type recognized → look up base chips, base mult
2. For each scoring card in hand:
     base_chips += card_chip_value (2 of Clubs = +2, K = +10, A = +11, etc.)
     trigger any Enhancements (Bonus Card +30 chips, Mult Card +4 mult, etc.)
     trigger any Editions (Foil = +50 chips, Holographic = +10 mult, Polychrome = ×1.5 mult)
     trigger any Seals (Gold Seal = $3 on score, Red Seal = trigger card again, etc.)
3. For each Joker in slots (left to right):
     apply Joker's effect (varies — many add chips, mult, or x_mult)
4. Final: chips × mult = round score contribution
5. Add to round total; check against Blind threshold
```

The order matters: **Jokers fire left to right**, so the slot you put a Joker in changes the run's total because earlier Jokers' outputs feed later Jokers' multipliers.

## Planet Cards level the ladder

The base table isn't fixed across a run. **Planet Cards** (consumables, blue/cosmic-themed) level up specific hand types permanently within the run.

![Planet Cards collection — Mercury / Venus / Earth / Mars / Jupiter / Saturn / Uranus / Neptune / Pluto in pixel-art booster-style layout. Neptune tooltip: "lvl.1 Level up Straight Flush — +4 Mult and +40 chips."](/images/balatro/planet-grid.jpg)
*Each planet levels its named poker hand. The Neptune card adds +4 mult AND +40 chips to Straight Flush every time it's used. Stack 5 Neptunes in a run = +20 mult / +200 chips on every Straight Flush. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1935).*

| Planet | Hand | Effect (per use) |
|---|---|---|
| Pluto | High Card | +1 mult / +10 chips |
| Mercury | Pair | +1 mult / +15 chips |
| Uranus | Two Pair | +1 mult / +20 chips |
| Venus | Three of a Kind | +2 mult / +20 chips |
| Saturn | Straight | +3 mult / +30 chips |
| Jupiter | Flush | +2 mult / +15 chips |
| Earth | Full House | +2 mult / +25 chips |
| Mars | Four of a Kind | +3 mult / +30 chips |
| **Neptune** | Straight Flush | +4 mult / +40 chips |
| **Planet X** | Five of a Kind | +3 mult / +35 chips |
| **Ceres** | Flush House | +4 mult / +40 chips |
| **Eris** | Flush Five | +3 mult / +50 chips |

Planet Cards drop in Celestial Packs, in the Shop, and from Black Hole Spectral Cards. A run that finds many Jupiter cards turns Flush into the dominant hand even when other hands score higher in raw base.

## Why this design works

Three structural reasons the chip×mult ladder is more interesting than a flat damage system:

### 1. Two separable axes

Most card games scale on one axis (damage, points). Balatro scales on **chips** AND **mult** independently. So a player can:

- **Chip-stack** — pile additive chip bonuses (Bonus Cards, Steel Cards, Stone Cards, suit-pip-counting Jokers). Big base, small mult.
- **Mult-stack** — pile multiplicative mult bonuses (Polychrome jokers, Mult Cards, ×_mult jokers like Blueprint, Brainstorm, Photograph). Small base, huge mult.
- **Hybrid** — moderate stacks of both. Most actual builds.

The *type* of build matters; the *direction* of stacking changes which Jokers, Enhancements, and Hands are valuable.

### 2. Multiplication beats addition

A run that's collected chip-stacking only ends at score = base + chip_pile = ~10,000. A run that's also added a single ×3 mult Joker triples that to ~30,000. Multiplicative bonuses produce **emergent skill ceilings** that no purely additive system can match.

By Ante 8, a casual run scores ~50,000 (just hitting the threshold). An optimal run scores 50,000,000 (1000× over). The same chip×mult formula, the same hand types, the same shop — but exponentially different outcomes based on Joker chains.

### 3. The numbers can be insane and it doesn't matter

Endless mode scoring crosses 10²⁰ at Ante 16. The numbers stop being readable as integers; they become **decimal-place identity**. "I crossed 1e20" is the milestone, not the specific digit.

This is unique to multiplicative-stacking games. An RPG that capped at 999,999,999 damage would feel hollow at the cap; Balatro feels *more* satisfying as the numbers explode because every order of magnitude is a build identity.

## What this teaches

- **Two scoring axes is more interesting than one.** Whether you call them chips and mult, attack and crit, or something else — separating "size of input" from "amplifier on output" is the move.
- **Permanent run-level power-ups should also be lookups.** Planet Cards level *individual hand types*. The game doesn't say "+50% damage for the run" — it says "Flush is now stronger." Players can specialise.
- **Multiplication is the lever.** Designers who lean too heavily on additive bonuses get linear progression. The juice is in stacking *multipliers*. Balatro's most-discussed Jokers (Blueprint, Brainstorm, Mime, Baron) are all triggers-of-other-triggers — meta-multipliers.
- **Familiar input formats compound on themselves.** Players who already know Pair < Two Pair < Three of a Kind get the entire scoring identity-tree on the first run. The game's depth grows on knowledge they already have.

## Patterns this exemplifies

- `chip-and-mult-stacking` — twin scoring axes (additive base × multiplier output). Uncurated; Balatro is the canonical case.
- [`cumulative-modifier-staircase`](/concepts/) — Planet Cards permanently level hand types within a run. Adjacent to [Slay the Spire](/games/slay-the-spire/ascension)'s Ascension staircase, but operating on hand types rather than difficulty modifiers.

## Adjacent

- [`subtractive-deckbuilding`](/concepts/subtractive-deckbuilding) — Balatro's deck mutation lets you *remove* cards via Tarots; this matters because hand-type frequency depends on which cards remain.
