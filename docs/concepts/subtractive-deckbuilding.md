---
title: "Subtractive deckbuilding"
type: concept
patterns:
  - subtractive-deckbuilding
related_patterns:
  - loadout-as-budget
  - card-draft-with-skip
  - opportunity-cost-loadout
---

# Subtractive deckbuilding

> **Lemma:** A deck that's *too big* is *worse*, because every card dilutes the chance of drawing the cards you actually want. The strongest play is **carving out a tight loop**, not stacking power on top of stuff. Skipping a card is a first-class option; removing one is a power move.

![Slay the Spire merchant shop — Card Removal Service panel highlighted](/images/slay-the-spire/shop-card-removal.jpg)
*Spire's Card Removal Service. Pay gold *to make your deck smaller.* The escalating cost is the design's pulse — removing one card is cheap, removing five is the run's economy. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*

## What it solves

The instinctive deck-shape in TCGs (Magic, Hearthstone) is **build up** — add the strong cards, fill to deck size, win. Modern roguelike-deckbuilders inverted this: the deck has a starting size, additions dilute it, and the winning strategy is *thinning to the synergies you've committed to.*

This solves several problems at once:

- **Forces commitment.** You can't take "good" cards in 18 directions and still draw your synergies; you must pick a direction and prune.
- **Makes drafting genuinely interesting.** "Pick 1 of 3 or skip" only matters if skipping is sometimes correct. With subtractive thinking, skip is *often* correct.
- **Makes the random hand draw deterministic-feeling at the strategic timescale.** A 15-card deck cycles fast and reliably draws its synergies; a 35-card deck draws random junk.

The inversion is what defines the modern roguelike-deckbuilder genre.

## Variants across games

| Game | Starting deck | What "subtractive" means | Tools for thinning | Co-play / hand mechanic |
|---|---|---|---|---|
| **[Slay the Spire](/games/slay-the-spire/deckbuilding)** | 10 starter cards (mostly basic Strikes/Defends) | Literally fewer cards = better draws. A 15-card deck dominates a 35-card deck even at lower power. | Shop card-removal (escalating cost, capped per visit), events that exhaust/remove, Exhaust archetype (cards self-remove during play), Innate cards | 5-card hand drawn from the deck each turn; deck reshuffles when empty |
| **[Mega Man Battle Network](/games/mega-man-battle-network/folder-and-chip-codes)** | 30-chip Folder (fixed size) | *Size is fixed, so subtraction is in code spread.* Mono-code or name-stacked Folders draw co-playable hands; spread-code Folders draw uncoordinated hands. | Letter-code coherence, name-stacking (4 of one chip), ★ wildcards as flex slots | Opening 5-chip Hand drawn from Folder; the *letter-code rule* gates which Hand chips are co-playable per turn |

The two cases sit on opposite ends of the constraint axis but converge on the same insight: **focus dominates breadth.** Spire achieves it through deck-size shrinkage; BN achieves it through code-coherence within a fixed-size deck. Same effect, different lever.

### Visual contrast

| Slay the Spire — Compendium | Mega Man Battle Network — Folder editor |
|---|---|
| ![Spire compendium of Ironclad cards](/images/slay-the-spire/compendium-cards.jpg) | ![BN Folder editor showing Cannon A×2, Cannon B×2, Shotgun N×3](/images/mega-man-battle-network/folder-cannon-shotgun.jpg) |
| ~75 cards per character — but the run's deck is 15–20. Subtraction is *literal*: pay to remove. | 30 chips per Folder, fixed. Subtraction is in the *code spread*: stack one letter to make hands play together. |

## When to use this pattern

- **Roguelike / roguelite deckbuilders** where each run wants a distinct identity. Subtractive thinking forces commitment, which produces archetypes.
- **Hand-draw card games with a small per-turn budget** (energy, mana that doesn't ramp). The smaller the energy budget, the more the draw quality matters.
- **Games where draft choices are the loadout decision.** Spire's "pick 1 or skip" only earns its keep if skipping is genuinely sometimes correct.

Avoid when:
- The genre expects build-up TCG semantics (Hearthstone, MTG). Players coming from those games will reflexively want to add and resist removing.
- The deck has no random-draw element. Without random hands, deck thinning loses its statistical edge — every card always plays at the right moment.

## Pitfalls

- **Card removal must be reachable but not free.** Spire's escalating shop cost is the canonical balance — removing one card is cheap, removing five is the run's economy. If removal is too cheap, every run converges on the same minimum-deck shape; too expensive and the pattern doesn't bite.
- **The "skip" option must be a real choice.** If every offered card is strictly better than not picking, you've smuggled additive logic back in. Spire's tightness comes from "this card is fine but adding it dilutes my Strength scaling — skip" being a *correct* play.
- **Onboarding wall.** The new-player intuition is "more cards = more power." Spire's earliest-Ascension difficulty is partly the player learning to *not* take cards. This is a real cost; tutorials usually can't telegraph "skip more often."
- **Subtractive doesn't mean monotonic.** A deck thinned too aggressively can lose flexibility — you draw the same 5 cards every turn and lose to anything those 5 don't answer. The pattern is *tight, not minimal.*

## Adjacent patterns

- [`loadout-as-budget`](/concepts/loadout-as-budget) — the parent pattern. A subtractive deck is a *combinatorial* budget: hand size + deck size + draw consistency are the budget axes.
- `card-draft-with-skip` — the in-run mechanic that operationalizes subtractive thinking. Without skip-as-first-class, drafts are forced additions.
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — every card you take is a card not skipped; every code you commit to is a code you're not committing to elsewhere. Same shape one level up.
- `code-constrained-deckbuilding` — Battle Network's specific lever. Letter codes as a co-play constraint that operates on a fixed-size deck.

## Why this matters as a design lesson

The genre move was **inverting the additive instinct**. Building up a deck is the obvious design; thinning it is counter-intuitive but produces tighter, more identity-driven runs. The math is universal — drawing from a 15-card pool is statistically different from drawing from a 35-card pool — but the design language to *expose* that math to the player is the contribution.

For your own designs: if your deckbuilder has a random-hand draw and a small per-turn budget, ask whether removing cards is a power move. If it isn't, you've shipped a TCG; if it is, you've shipped a roguelike-deckbuilder.
