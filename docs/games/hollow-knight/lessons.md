---
title: "Hollow Knight — Lessons"
type: game
game: hollow-knight
---

# Lessons for my own games

Notes for Godot work, opinionated. Hollow Knight is a three-person studio's 2017 title that holds up better than most AAA contemporaries. The systems are *small in count and precise in execution*; the lessons mostly orbit constraint discipline.

## 1. A pure numeric loadout budget is enough

Sparklite has Tetris pieces. Warframe has polarities. Spire has hand-draw probability. Hollow Knight has integers: ~45 charms, costs 1–5, budget 11. **The simplest possible loadout-as-budget shape; thousands of viable builds.**

The discipline is in the *charm design*, not the system shape. Every charm has to be **interesting at 1–5 notches**, *and* interesting in combination with at least 5 other charms, *and* readable from the icon. Team Cherry hit this bar consistently across ~45 designs. That's the work.

For my own games: **don't over-engineer the loadout system before the loadout *items* are designed**. A pure integer budget can carry a metroidvania.

## 2. Healing should be a moment of vulnerability

Hollow Knight's Focus locks the Knight in place for ~1.5s. Players who try to heal at the wrong moment eat the boss attack. Players who learn boss patterns find Focus windows.

This is the *opposite* of how most action games handle healing. Most use potions you chug instantly. Hollow Knight makes the heal itself a decision and a risk.

For my own designs: **if combat depth is your goal, make healing risky**. The 1.5-second commitment is a feature, not a UX problem.

## 3. A single resource for offense and defense forces real decisions

Soul fuels both Focus (heal) and spells (damage). You can't pour resources into both. Every Soul gauge is an offense-vs-defense decision.

This is the same insight as Spire's tight-energy-budget — the resource is the design. Hollow Knight just applies it to action combat instead of turn-based combat.

For my own work: **don't bifurcate health and mana if you want tense combat**. The single-resource constraint is what makes encounters interesting.

## 4. Earned cartography changes the player's mental model

Without a quest marker or default map, Hollow Knight players spend the first ~5 hours disoriented. Then something flips: they're *paying attention* to the world itself. Memory of landmarks matters. Every region has a place where you *found* Cornifer.

The cost is real: ~5h of friction. The payoff is the rest of the game *feels* like exploration in a way maps-by-default games don't.

For my own designs: **if exploration is your design pillar, ship without a map by default**. Or at least make the map something the player earns. Quest markers are the death of exploration.

## 5. Active recovery > passive recovery

Hollow Knight's Shade fight is more memorable than Dark Souls's bloodstain because *you have to play it*, not just visit it. The recovery is its own little encounter.

For any game with a "lose-something-on-death" mechanic: **make the recovery active**. A short fight. A short puzzle. Anything that's *played*, not just walked through.

## 6. Free DLC builds long-tail community

Team Cherry shipped four free DLCs in the year following 1.0 (Hidden Dreams, Lifeblood, Grimm Troupe, Godmaster). Each was a multi-week event for the community. Goodwill: enormous. Critical reception: each was treated like a small new release.

For my own work: **if I have post-launch content, free DLC over paid DLC builds dramatically more goodwill** for a small studio. The marketing-as-content model.

## What I'd be careful about

- **Removing all quest markers is a polarizing call.** Hollow Knight's first-impression review window was kind to it because the press knew. New IP without that reputation may not get the same patience.
- **Charm balance is an enormous QA cost.** ~45 × ~45 charm-pair interactions = ~1000 combinations to think about. If your loadout system is small, design it small enough that you can balance every combo.
- **Atmospheric storytelling without a quest log requires *exceptional* writing.** Hollow Knight's lore is genuinely good. A weaker writing team would have produced a confusing game where players don't engage with the lore at all. Don't ship "no quest log" without writing the team can carry the load.
- **The 1.5-second Focus timing is a tuning constant.** 1.0s would be too easy; 2.0s would be punishing. The number matters. Don't ship a healing-vulnerability system without playtesting the timing window into the right band.
