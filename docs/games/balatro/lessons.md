---
title: "Balatro — Lessons"
type: game
game: balatro
---

# Lessons

What I'd steal — and what I'd be careful about — for my own (Godot) games.

## What I'd steal

### Use a familiar input format

Poker hand rankings are the most accessible card-game vocabulary in the world. Players already know that a Flush beats a Straight, that a Royal Flush is rare, that a Pair is weak. LocalThunk didn't have to teach the noun set; he reused poker's.

For my own designs: **before inventing a new input format, see if a familiar one fits.** Tarot, chess, mahjong, dominoes, dice notation — any well-known game format ships with built-in player fluency.

### Two scoring axes (chip × mult)

Every Balatro discussion comes back to chips × mult. The two-axis structure produces:

- Per-build identity (chip-focused vs mult-focused).
- Multiplicative ceiling (numbers explode, satisfyingly).
- Two design dimensions for content (cards/jokers/enhancements target chips, mult, or both).

For a Godot game with combat: try splitting damage into a *base* and a *multiplier*. Stack them independently. The combinatorial depth grows multiplicatively for the same content count.

### A 5-slot loadout from 150+ options

Balatro's Joker count is enormous (150+ base, 200+ with DLC), but the slot count is tight. The math: 150 choose 5 = ~600M build combinations. Most aren't optimal; many are surprising; players never run out of build experiments.

For my own games: **a small slot count + a large pool > a large slot count + a small pool.** Constraint produces identity. Don't be afraid of small slot caps; the pool size is where the variance lives.

### Slot order matters (left-to-right firing)

Jokers fire left-to-right. Blueprint copies the Joker to its right. Brainstorm copies the leftmost. This makes loadout *ordering* a real puzzle on top of *picking*.

Most loadout systems are commutative. Breaking commutativity is a design lever — order-mattering produces a second optimization layer for free.

For my own games: if your passives can interact, **make order matter**. The depth scales without adding new mechanics.

### The interest rule (one line of code, transforms the economy)

> +$1 per $5 banked, capped at $5/round.

This single rule produces the central economic dialectic of every Balatro run. The interest meter is *visible* every round, so players naturally hoard to $25 minimum.

For a smaller game with an in-run economy: **try a saving incentive rule.** It's free design depth. Make it visible (a meter, not a footnote) so players adjust behaviour around it.

### Pre-revealed debuffs

The Boss Blind for the upcoming Ante shows one Ante early. Players plan around it. This turns boss difficulty from *surprise* to *puzzle*.

For my own games: **pre-revealing future challenges is more interesting than hiding them.** The player gets to plan; the design surface gains a new dimension (now the player makes pre-fight decisions).

### Three orthogonal modifier dimensions per atom

Each playing card has up to one Enhancement + one Edition + one Seal. The combinatorial space per-card is larger than the card pool itself.

For a Godot game with collectible items: **stack 2–3 modifier dimensions per item.** Don't pile them additively; keep them orthogonal (different effect categories), so they can stack on the same item.

### Decks-as-rule-mods, not stat-bumps

The 15 Balatro decks are *rule modifications*, not power bumps. Plasma Deck balances chips and mult; Erratic Deck randomizes ranks; Black Deck trades a hand for a Joker slot. Every deck is a different *game*, not a different *power level*.

For my own games: when adding starting variants, **avoid "+5% damage" mods**. Use rule changes instead. Each variant should produce a perceptibly different play experience.

### Solo dev coherence

LocalThunk built Balatro alone, with one composer and a publisher for distribution. The aesthetic is wildly coherent because one author held all the threads. Every Joker name is in the same tonal palette. Every card feels hand-balanced.

The lesson is unfair to copy directly — most studios can't afford "one author" — but it argues for **strong directorial authority** even in larger teams. Committee-balanced cards drift toward sameness.

## What I'd be careful about

### The math ceiling can become a turn-off

By Ante 16, scores cross 10²⁰. For some players, this *feels* unrewarding — the numbers stop being legible, and "I scored 7.7e16" doesn't read as more impressive than "I scored 50,000."

LocalThunk has acknowledged this. Endless mode is opt-in; the canonical run ends at Ante 8 with bounded numbers. If you ship multiplicative stacking, **make sure the bounded experience is the canonical one**.

### Multiplicative chains reward optimal-only play

The most discussed Balatro builds are 1e30+ score chains. Casual players who don't optimize *can't reach the higher Stakes*. The skill ceiling is a real wall.

This is fine for a roguelite (the audience self-selects), but for a broader-audience game, **add a difficulty toggle that flattens the multipliers**. Otherwise the math-skilled minority dominates the discourse and discourages newcomers.

### Solo-dev balance produces over-tuned outliers

Triboulet (Legendary Joker) was nerfed multiple times post-launch. Mr. Bones was rebalanced. The Plasma Deck was tuned twice. LocalThunk's "balance by feel" produces aesthetic coherence but **misses statistical outliers**.

For my own games: ship with playtest analytics if you can. Solo dev "feel" is great for *direction* but blind to outliers that 10,000 players will discover in the first week.

### The completion grid is voluntary; some players bounce

15 decks × 8 stakes = 120 cells. Many players complete ~30 cells and stop. The completion grid is *opt-in* — the game doesn't require it for narrative or unlocks.

This is the right design for an audience that wants a math sandbox. But it's hostile to players who need *external structure* to keep engaging. **Offer the completion grid; don't force it.** Don't gate content behind it.

### "No fiction" works because the audience expects it

Balatro's audience is roguelite-systems-fluent. They expect Slay-the-Spire-style minimal narrative. A wider audience (people who came for the poker theme) has occasionally complained about the lack of story.

For a broader-audience game: **have at least a thin narrative wrapper.** The audience that doesn't care will skip it; the audience that does will appreciate the gesture.

## On LocalThunk's economics

The framing that's most useful from Balatro's development: **scope discipline is the indie superpower**.

LocalThunk:

- Worked solo for 3 years.
- Hand-balanced 150 Jokers.
- Used an open-source 2D engine (LÖVE / Lua).
- Shipped without microtransactions or service plans.
- Sold 5M+ copies.

Most indie devs ship a less-polished game with more ambition (3D, multiplayer, story, voice acting). LocalThunk inverted: small visual scope, *huge* mechanical scope. Pixel art, flat 2D UI, no animations beyond card movements — but 150+ unique Jokers, 30 Boss Blinds, 32 Vouchers.

The lesson: **scope down on visuals; scope up on systems.** A small team can build the systems of a big game; they cannot build the art of one.

For a Godot game with a 1–3 person team: pick *one* axis where you go deep (systems, narrative, art, music) and accept smaller ambition on the others. Balatro's axis was systems. Hades's axis was narrative-via-systems. Hollow Knight's axis was atmosphere-and-craft. Pick yours and commit.
