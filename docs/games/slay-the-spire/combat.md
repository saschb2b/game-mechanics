---
title: "Slay the Spire — Combat"
type: game
game: slay-the-spire
patterns:
  - loadout-as-budget
  - tight-energy-budget
  - expiring-block
  - enemy-intent-telegraph
---

# Combat

Turn-based, card-driven, single-player. The player faces 1–4 enemies at a time, each turn draws a hand and plays cards. The combat triad — **energy + block + intent** — is widely held up as a textbook example of "complete-information turn puzzles."

![Silent vs. enemy — 3/3 energy, intent telegraph above enemy, relics row visible](/images/slay-the-spire/combat-silent.jpg)
*Silent combat: relics in the top row (their effects warp the run), 3/3 energy bottom-left, "Enemy Turn" indicator. The intent (just resolved here, mid-attack) is the telegraph that turns combat from RNG fight into optimization puzzle. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*

## Energy — the budget

- Start of each turn: draw 5, gain **3 Energy**.
- Each card costs N energy. Play cards until you can't / don't want to.
- Unspent energy is **wasted** — doesn't carry to the next turn.
- Cards/relics can modify: X-cost cards spend all energy at once; certain relics give +1.

This is a **tight budget**. You almost never have enough energy for everything you'd like to play, so every turn is an explicit prioritization. Compare with traditional CCGs (Hearthstone, MTG) where mana grows over time — Spire's flat 3/turn forces sharp decisions every turn from turn 1.

See `tight-energy-budget`.

## Block — defense that expires

- Block is HP-shaped damage absorption that **expires at the end of your next turn.**
- You block *for the next attack you'll take*, not for sustained defense.
- Block accumulates if you stack multiple block cards in a turn.
- Whatever block you don't use is **gone.**

The "use it this turn or lose it" design creates a **forecasting problem**: look at enemy intent, block exactly the right amount — not too much (wasted energy on overkill block) and not too little (damage through). Block is allocation, not investment.

See `expiring-block`.

## Intent — the telegraph

Every enemy shows their **next action above their head** before you take your turn:

- Attack icon (with damage number)
- Buff icon
- Debuff icon
- Defend icon
- Special / unknown
- Multi-hit attacks show the count.

This is the **most-imitated single mechanic in the genre.** It transforms combat from "RNG fight" into a **deterministic optimization puzzle each turn.** The randomness is in *which cards you drew*, not *what the enemy will do.*

See [`enemy-intent-telegraph`](/concepts/enemy-intent-telegraph).

## Why the triad is so strong

Energy + block + intent creates a **complete-information per-turn puzzle with imperfect-information macro state.** You know exactly what's coming this turn, but not what cards you'll draw next turn or what enemies you'll fight three nodes from now.

This is **the genre-defining design move.** Every modern roguelike-deckbuilder has this triad in some form. The combination is what lets Spire feel both *deterministic-tactical* and *replayable-strategic* simultaneously.

## Patterns this exemplifies

- `tight-energy-budget`
- `expiring-block`
- [`enemy-intent-telegraph`](/concepts/enemy-intent-telegraph)
