---
title: "Hades — Lessons"
type: game
game: hades
---

# Lessons for my own games

Notes for Godot work, opinionated. Hades's load-bearing innovation is **converting failure into content**, and most of these lessons orbit that.

## 1. The post-death return location is a writing surface

Most roguelites treat the post-death state as a punishment the player wants to skip past. Hades treats it as the **most narratively-productive moment in the loop** — the player just finished a run, has fresh memory of what happened, and is about to make decisions about the next attempt. The hub is where that energy gets converted into character writing.

For my own work: **if my game has a return-to-hub-on-death loop, every NPC at the hub is a potential dialogue-progression node**. Each NPC should have *fresh content* surfaced based on what happened on the previous run — not just generic filler.

The cost is real: this requires (a) a granular dialogue trigger system, (b) writing volume (Hades 1 ships ~21,000 lines), and (c) tagging discipline so triggers fire at the right moments. But the payoff is the rarest thing in roguelite design: the player *wanting* to die because they want to see what happens next.

## 2. Trigger granularity unlocks writing volume

Vague triggers ("you died") produce 5 lines per character. Specific triggers ("you died to Megaera while carrying 4 Aphrodite boons") produce 500. **The granularity of your trigger system determines the ceiling of writing volume.**

Cheap engineering, high payoff. Designing the trigger system as "any combination of run-state booleans can fire a line" rather than "fixed lifecycle events fire fixed lines" multiplies the writer's effective surface area by 100×.

## 3. Pick-1-of-3 with implicit skip is a load-bearing draft pattern

Spire established it. Hades shows it generalizes outside deckbuilding to action combat. The pattern works because:

- **Three options ≈ enough to pick from, few enough to read.** Two options feel arbitrary; four or more feel like a menu.
- **Implicit skip.** The player can pick the worst option as a soft skip; Hades doesn't even *show* an explicit "skip" button, but players use the third-option-skip move all the time.
- **Foreshadow the offer type before the offer.** Door icons telegraph "this chamber gives an Apollo boon"; players self-select based on build fit.

For my own designs: if I'm shipping a reward-selection moment between encounters, **default to pick-1-of-3 with foreshadowed type**. Don't reinvent.

## 4. Two-axis rarity + level gives huge progression curves from small option pools

Hades runs on **rarity tier × level** for every boon. ~12 gods × 5 slots × 5 rarity tiers × N levels = thousands of variations from a few hundred underlying boons. The player never feels like they've "seen all the boons" because the *roll* on top of the boon adds depth.

Cheap to author, big perceived depth. Two axes are usually enough; three is overkill.

## 5. Bounded roguelite + Pact post-credits is the right shape for narrative-leaning games

Hades 1 has an actual ending (not infinite escalation), then **post-credits content via Pact** for players who want to keep going. This shape:

- Lets the writing team ship a real **arc** — beginning, middle, climax, resolution.
- Doesn't punish players who want to stop at the credits.
- Keeps players who *want* the chase engaged via opt-in difficulty.
- Avoids the infinite-roguelite trap where the writing has to support a 1000-hour engagement curve.

For my own designs: **if my game has narrative arcs, prefer bounded + opt-in extension over infinite escalation**. Slay the Spire's Ascension model is the same shape applied to non-narrative games; both work.

## What I'd be careful about

- **Volume of writing is non-negotiable.** Hades's core innovation is unreplicable without a 20,000+ line dialogue commitment. Don't ship death-as-narrative if you can't fund the writing.
- **Granular trigger systems are engineering work.** The trigger condition matrix has to land before content authoring scales. Build it first; don't bolt it on.
- **The hub-character roster is the limiting reagent.** Each NPC supports ~500 unique lines in Hades-shape. If you have 3 NPCs, you have ~1500 lines of unique content. Plan headcount accordingly.
- **The sequel decision is harder than it looks.** Hades 2 took 3+ years of EA. The original system worked; the new system had to extend without breaking. Adding a new resource axis (Magick) is a massive content multiplier — don't do it casually.
