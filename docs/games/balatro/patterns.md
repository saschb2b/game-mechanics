---
title: "Balatro — Patterns"
type: game
game: balatro
---

# Patterns Balatro exemplifies

| Pattern | How Balatro uses it |
|---|---|
| [`loadout-as-budget`](/concepts/loadout-as-budget) | **5-slot Joker loadout** over a pool of 150+ candidates. Combinatorial space far exceeds slot count; slot order matters because Jokers fire left-to-right (a pipeline / functional-composition design). |
| [`subtractive-deckbuilding`](/concepts/subtractive-deckbuilding) | Tarot Cards (Hanged Man) and Spectral Cards (Familiar / Grim / Incantation) thin and re-shape the deck across the run. The strongest expression of this pattern in the knowledge base — *more* aggressive than Slay the Spire's once-per-event removal. |
| [`bonus-with-drawback`](/concepts/bonus-with-drawback) | Multiple structural cases: Spectral Cards (Ankh, Hex, Ectoplasm) carry catastrophic costs for one strong upgrade. Glass Cards (×2 mult / 25% break). Stone Cards (huge chips, no rank/suit so they break poker hands). Madness Joker (×1.5 mult, destroys a random Joker per Blind). The Hieroglyph voucher (skip Ante / lose hand). |
| [`bounded-roguelite`](/concepts/bounded-roguelite) | The base run *ends* at Ante 8 (Boss Blind 8). Endless mode is opt-in; the canonical experience is bounded ~2-hour runs. |
| [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power) | The 15 starting Decks are *rule mods*, not power bumps. Plasma Deck balances chips and mult — fundamentally different scoring math. Erratic Deck randomizes ranks and suits. Each deck plays differently; no deck is objectively best. The 8 Stakes stack difficulty modifiers cumulatively. |
| `chip-and-mult-stacking` | Twin scoring axes (additive base × multiplier output). Every modifier targets one axis or the other (or rarely both). The two-axis structure produces emergent build identity (chip-stacking vs mult-stacking vs hybrid). Uncurated; Balatro is the canonical case. |
| `cumulative-modifier-staircase` | Two staircases: Ante chips required (300 → 800 → 2k → 5k → 11k → 20k → 35k → 50k); Stake modifier stack (each Stake adds one rule on top of all previous). Hades's Pact of Punishment is the closest analogue. |
| `greed-vs-spend-economy` | Interest rule: +$1 per $5 banked, capped at $5/round. The $25 floor produces a continuous save-vs-spend dialectic. Adjacent to Slay the Spire's gold management, but more explicit (interest visible per round). |
| `pre-revealed-debuff` | The Boss Blind for the upcoming Ante is shown one Ante in advance. Players plan around it (hoard Spectrals before The Water; thin face cards before The Plant). The reveal turns the Boss into a planning constraint rather than a surprise. |
| `equipment-as-input-layer` | Playing cards aren't input — they're equipment. Tarots / Spectrals / Enhancements / Editions / Seals stack three orthogonal modifier dimensions per card. The same hand draws differently across runs because the deck *is* different. |
| `flavor-as-meta-narrative` (loose) | The cumulative texture of 150 Joker names — Sins, court-jester references, banana lore, theatre-and-mortality nods — produces vibe without narrative. Pure aesthetic coherence. |
