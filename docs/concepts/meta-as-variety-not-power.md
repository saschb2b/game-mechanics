---
title: "Meta as variety, not power"
type: concept
patterns:
  - meta-as-variety-not-power
related_patterns:
  - bounded-roguelite
---

# Meta as variety, not power

> **Lemma:** Meta-progression unlocks *more options*, not *more strength*. Each subsequent run is more *interesting*, not easier. The base difficulty of run #1 and run #100 is the same.

## What it solves

The default roguelite meta is "permanent power-ups between runs" — Hades' Mirror of Night, Dead Cells' permanent stats, Rogue Legacy's hereditary boosts. This works, but it has costs:

- **Difficulty drift** — the game has to scale enemies up to match player power, which is hard to do without it feeling artificial.
- **Run integrity erodes** — if your starting stats are 3× what they were at run #1, you're not playing the same game anymore.
- **New-player gap widens** — late-game players have so much accumulated power that early content trivializes for them. New players can't share runs / strategies meaningfully.
- **The run is no longer the unit of design** — it's a stepping stone to next run's stats.

The "variety, not power" stance says: **unlock more cards, more relics, more characters, more starting decks. Don't raise base stats.** Each new run still starts from the same baseline; what's different is the *space of possible builds* the run could draw from.

## Variants across games

| Game | What's unlocked | What is *not* unlocked |
|---|---|---|
| **[Slay the Spire](/games/slay-the-spire/ascension)** | New cards, new relics, new characters, Ascension difficulty levels | No starting HP/damage/energy bumps. Ever. |
| **[Moonlighter 2](/games/moonlighter-2/progression)** | New recipes, new perks, new shop decorations, new village NPC services | Some permanent power exists (blacksmith stat upgrades) — partial commitment |
| **[Hades](/games/hades/meta-progression)** | Mirror talents (mostly variety effects); Arcana cards (combinatorial loadout); weapon Aspects; god-favor unlocks | Mirror does include some +HP / +damage; Arcana grid leans variety hard. Softer than Spire; harder than Moonlighter 2 — a *middle stance* |

### The strict vs. relaxed stance

**Spire is strict.** Mega Crit explicitly rejected meta-power. Quote (paraphrased from interviews): we don't want meta-progression to make you stronger because that hollows out the run. The Ascension staircase even adds *more* difficulty as you progress — you're explicitly making the game harder over time.

**Moonlighter 2 is relaxed.** Most progression is variety unlocks, but the blacksmith permanently upgrades armor stats. This is a softer commitment to the pattern. Reviewers note: "progression is no longer gated by your mastery of the most interesting ideas, but slowed down" — a critique that lands partly because the meta-power isn't doing as much heavy lifting as the variety unlocks are.

**Hades is the opposite.** Permanent power-ups are the design. Both work; pick one stance and commit.

## When to use this pattern

- **Run-based games** where you want runs to remain *the* unit of play.
- **Bounded roguelites** ([see](./bounded-roguelite.md)) — variety unlocks let you scale content without scaling stats.
- **Games with strong build-crafting layers** — Spire's deck variety is the meta because the deck is the build.
- **When you want new players and veterans to share runs / strategies** — same baseline = same conversations.

Avoid when:
- Your design wants the player to *get stronger* as the throughline (Hades' "every death is progress").
- The game is short — variety unlocks don't pay off in 5 hours.
- Your audience expects RPG-style power growth.

## Pitfalls

- **Variety without distinct identity** — if the unlocks are just "more cards that do similar things," variety feels hollow. Spire avoids this with sharp archetype differentiation per character.
- **Variety paywalled by hours played** — if the *good* variety is gated behind 50+ hours of unlocking, new players play a watered-down version of the game. Spire's full pool unlocks reasonably fast.
- **Ascension-style "just make it harder" can replace variety with grind** — Spire's A20 is brutal and contested. Pure-difficulty meta is its own design choice with its own audience.
- **Mixing variety and power inconsistently** confuses players about what runs are about. Moonlighter 2 reviewers flag this: blacksmith stat upgrades muddy the message that "the run is the unit."

## Adjacent patterns

- [`bounded-roguelite`](./bounded-roguelite.md) — variety-not-power pairs naturally with finite-arc games. Where the game has an ending, you can author *all* the variety up front.
