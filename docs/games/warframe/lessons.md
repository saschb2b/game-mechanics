---
title: "Warframe — Lessons for my own games"
type: game
game: warframe
---

# Lessons for my own (Godot) games

What I'd actually steal, why, and what to watch out for.

## Steal: orthogonal progression layering

If you want to keep a game alive for years, **every new system must be orthogonal to existing ones.** When DE added Helminth, it didn't *replace* Forma; it added a parallel choice. When they added Incarnons, those didn't *invalidate* Rivens; they coexist.

For my own games: when I'm tempted to add a "new and improved" version of a system, ask whether the new system *replaces* or *augments* the old. Replacement creates dead content. Augmentation creates depth.

## Steal: Forma as a model for permanent grind currency

The Forma pattern: **a consumable that converts time-played into a permanent build improvement, but the consumable itself costs more time.** Self-sinking, never inflates raw stats, scales build expressivity directly with hours played.

This pattern works anywhere players want to invest "time = power" in a way that respects existing builds. Could apply to talent points that re-spec for free but cost a long cooldown, to gear-affinity systems, to skill-trees with limited slots that can be rearranged for a cost.

## Steal: community-driven soft balance

The Riven Disposition idea — **don't nerf, change the multiplier on a layered system.** Direct nerfs hurt players who built around the nerfed thing. Multiplier shifts on a *secondary* layer (Rivens) preserve base stats and keep base builds intact.

For multiplayer / competitive games this is gold. For single-player it's overkill. For live-service single-player (live-service rogues, evergreen sims) it may be the right tool.

## Steal: trade premium currency

If your game has premium currency *and* a market for in-game items, **let players trade the premium currency for in-game items between each other.** This doesn't lose you money; it creates a marketplace where free players become content for paying players, and both populations spend.

Hard requirements:
- Some items remain non-tradable (or it becomes pay-to-win).
- The premium currency must have **real sinks** (Market purchases from you, instant skips, trade tax) so the supply is bounded.
- The grind side and the buy side both have to be enjoyable in their own right.

This is a big design call and probably overkill for most indie games. But for any game with a planned multi-year live arm, it's worth thinking through.

## Steal: cumulative login, not streak

The simplest possible win in retention design. **Reward total days played, not consecutive days.** Anyone who tried streak-based dailies in 2010 learned that they punish players for having lives. Cumulative milestones reward the same long-term engagement without the anxiety.

## Steal: layered cadences

Daily (Tribute, Sortie), weekly (Nightwave, Circuit), seasonal (Nightwave story arc), quarterly (Prime Access), annual (major expansions). **Different player intensities are all served**; no single cadence is "the real one."

If you only have a daily, you punish weekly players. If you only have weekly, you under-reward dailies. Stack multiple cadences orthogonally and let players opt into the ones that fit their schedule.

## Steal: resurrect old content with evolution mechanics

Incarnon Genesis is "give old weapons a new mode rather than designing new weapons." That's **vastly cheaper** than building new content and **rewards player nostalgia**. Anything in your game that risks becoming obsolete with power creep is a candidate for an evolution-style retrofit.

## Cautionary lesson: power fantasy in co-op is structurally fragile

If your game is single-player, "let the player feel godlike" is fine. If your game is co-op or multiplayer, that fantasy *removes the other players' agency*. There's no clean fix — DE has been wrestling with this for a decade. Plan for it before shipping co-op, not after.

## Cautionary lesson: don't gate everything on a single meta-currency

Mastery Rank is great as a metric of breadth. It's *also* a friction point because too many systems require MR to access. **Pick what gates on the meta-currency, and what doesn't.** Default to less gating; add it where you specifically want to encourage breadth.

## Cautionary lesson: feature creep happens, plan for it

Twelve years in, Warframe has a dozen sub-systems some players ignore entirely. That's fine — but it's a *load* on every new player ("which of these do I have to learn?"). New-player onboarding is *much* harder when the game is 12 years deep.

For my own games: design new systems to be optional from a player's perspective when possible. If a new system gates the *next* system, the floor under everything keeps rising — and at some point you'll need to invest seriously in onboarding compression.

## Cautionary lesson: crafting timers age badly

12h was reasonable in 2013. 24h was acceptable. 72h for the actual frame is a lot to ask in 2026. **Real-time pacing tuned for one era doesn't always translate to another.** If you ship pacing-as-design, audit it periodically.
