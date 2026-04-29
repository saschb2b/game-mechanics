---
title: "Balatro — Decks + Stakes"
type: game
game: balatro
patterns:
  - meta-as-variety-not-power
  - cumulative-modifier-staircase
---

# Decks + Stakes

The replayability axis. **15 starting Decks** (each a persistent rule mod) × **8 difficulty Stakes** (each adds modifiers) = **120 cells of completion** to fill out. Each cell is one playthrough.

This is the meta-progression structure that turns a single ~2 hour run into a ~200 hour completionist game.

![Pre-game lobby — Red Deck shown with description "+1 discard every round". Base Cards breakdown: A 4 / K 3 / Q 4 / J 4 / 10 3 / 9 3 / 8 2 / 7 3 / 6 2 / 5 3 / 4 3 / 3 4 / 2 3, plus suit counts ♠ 12 / ♥ 10 / ♣ 10 / ♦ 12](/images/balatro/pre-game-deck-stake.jpg)
*The pre-game lobby. Pick a Deck (Red Deck shown). The deck panel previews the deck's modifier and the Base Cards breakdown — rank counts and suit counts. Some decks remove cards, some add modifiers, some change the suit distribution entirely. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1935).*

## The 15 Decks

Each deck is a **persistent rule mod** for the whole run. The player picks one at run start.

| Deck | Modifier |
|---|---|
| **Red Deck** | +1 discard per round |
| **Blue Deck** | +1 hand per round |
| **Yellow Deck** | Start with $10 extra |
| **Green Deck** | Earn $2 per remaining hand at end of round; no interest |
| **Black Deck** | +1 Joker slot (5→6); -1 hand per round (4→3) |
| **Magic Deck** | Start with the Crystal Ball voucher and 2 copies of the Fool tarot |
| **Nebula Deck** | Start with Telescope voucher; -1 consumable slot |
| **Ghost Deck** | Spectral cards may appear in the shop; start with a Hex Spectral |
| **Abandoned Deck** | Start with no Face Cards (J/Q/K removed; 40-card deck) |
| **Checkered Deck** | Start with 26 Spades and 26 Hearts (no Clubs or Diamonds) |
| **Zodiac Deck** | Start with Tarot Merchant + Planet Merchant + Overstock vouchers |
| **Painted Deck** | +2 hand size; -1 Joker slot |
| **Anaglyph Deck** | After defeating each Boss Blind, gain a **Double Tag** (next pack is doubled) |
| **Plasma Deck** | Balance chips and mult before scoring (chips_avg = mult_avg = (chips+mult)/2); blinds 2× chip requirement |
| **Erratic Deck** | Each card's rank and suit is randomized at run start |

Each deck **breaks the assumed shape of the run**. The Plasma Deck is the most-discussed: by averaging chips and mult, it disables the entire chip-stacking-vs-mult-stacking dichotomy and rewards balance-builds. The Erratic Deck makes Flush builds nearly impossible (random suits) while making suit-agnostic builds dominant.

The Abandoned Deck (no face cards) is the highest-skill ceiling deck — Royal Flush is impossible, Full House is harder, but Pair-and-Three-of-a-Kind builds become extremely consistent.

## The 8 Stakes (difficulty tiers)

Stakes are difficulty modifiers that **stack cumulatively**. Beating a deck on White Stake unlocks Red Stake on that deck, etc.

| Stake | Modifier (on top of all previous) |
|---|---|
| **White (1)** | Base game |
| **Red (2)** | Small Blind reward → $1 (was $3); Big Blind → $2 (was $4); Boss → $3 (was $5) — i.e. all rewards halved |
| **Green (3)** | Required score: Small Blind +25%, Big Blind +25%, Boss Blind +25% |
| **Black (4)** | Shop has Eternal jokers (cannot be sold or destroyed) |
| **Blue (5)** | -1 discard per round |
| **Purple (6)** | Required score: another +20% |
| **Orange (7)** | Booster Pack costs $1 more |
| **Gold (8)** | Shop has Perishable jokers (debuffed after 5 rounds) |

So Gold Stake — the hardest tier — combines: half the rewards × 1.5× score requirement × +$1 shop costs × Eternal AND Perishable Jokers × -1 discard. Most players never clear Gold Stake on every deck (15 × 8 = 120 cells; a top player has cleared maybe 80–110 of them).

This is `cumulative-modifier-staircase` at the meta-progression layer. Each Stake = one more rule. The staircase is built into the difficulty system itself.

## The 15 × 8 completion grid

The Stake-completion screen on each deck shows 8 stakes-cleared markers. Cleared stakes are marked with the deck's color tint; uncleared are greyed.

A player who's cleared every deck on White Stake (15 cells) has played the game 15 times. A Gold Stake completionist has played 120 *targeted* runs — many more than 120 with failures.

Compare to:

- **[Slay the Spire's Ascension staircase](/games/slay-the-spire/ascension)** — 4 characters × 20 ascensions = 80 cells. Balatro's grid is ~50% bigger.
- **[Hades's Pact of Punishment](/games/hades/meta-progression)** — score-driven, no fixed cells.
- **[Pokémon RSE Battle Frontier](/games/pokemon-rse/series-evolution)** — 7 facilities × 2 Symbols = 14 cells.

The Balatro grid is one of the densest completion structures in modern roguelites.

## Why decks-as-rule-mods is the right call

A casual roguelite would have unlocked decks be *power upgrades* — "Yellow Deck has +5 starting mult" — drifting the meta toward optimal-deck-meta. Balatro's choice: each deck has a **rule modifier**, not a power bump. Yellow Deck has $10 extra (which mostly evaporates by Ante 3); Black Deck has +1 Joker slot but -1 hand (a real tradeoff); Plasma Deck has *fundamentally different scoring* (which is harder, not easier).

The rule-mod choice produces:

- **Variety, not power.** Every deck plays *differently*; no single deck is objectively best.
- **Completion as a play directive.** Clearing Black Deck on Gold Stake forces you to learn 3-hand discipline, an unusual skill the other decks don't develop.
- **Build identity tied to deck.** A Magic Deck run plays around its starting Fool tarots; an Erratic Deck run gives up on Flush builds entirely.

This is the [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power) pattern in its purest form.

## What this teaches

- **15 × 8 grid = 200 hours of self-paced completion.** A 15-cell axis × an 8-cell axis = ~120 distinct goals. Players self-pace through the grid; LocalThunk doesn't have to fund 120 individual unlock cinematics.
- **Difficulty modifiers as cumulative > as toggles.** Stake 8 is not "harder than Stake 1." It's "Stake 1 + 7 more rules." Each Stake teaches the player to handle one more constraint at a time.
- **Rule mods > stat mods.** "+5% damage on Yellow Deck" is forgettable. "Yellow Deck starts with $10 extra" is a tactical asymmetry that reshapes the early-Ante decisions.
- **Completion structures are cheaper than content.** A 120-cell grid uses *the same shop, same Jokers, same Boss Blinds* — the variation is in the rules around them. Author one strong run-engine, mod it 120 ways.

## Patterns this exemplifies

- [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power) — the canonical case in this knowledge base. Decks are rule mods, not power bumps. Stakes are difficulty modifiers, not stat boosts.
- `cumulative-modifier-staircase` — Stakes stack cumulatively (Stake 8 = Stake 1 + 7 rules). Hades's Pact of Punishment is the closest analogue.
- [`bounded-roguelite`](/concepts/bounded-roguelite) — the run *ends* at Ante 8 (Boss Blind 8). Endless is opt-in; the canonical experience is bounded. ~2-hour runs.
