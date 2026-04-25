---
title: "Enemy intent telegraph"
type: concept
patterns:
  - enemy-intent-telegraph
related_patterns:
  - anti-screen-clear-combat
  - expiring-block
---

# Enemy intent telegraph

> **Lemma:** The enemy **shows what they're about to do** before the player commits to a response. This converts combat from "RNG fight" into a **complete-information optimization puzzle** at the per-turn (or per-encounter) timescale. Randomness moves out of *what the enemy will do* and into *what resources the player has to respond.*

![Slay the Spire combat — intent icons above each enemy show exactly what's coming next turn](/images/slay-the-spire/combat-silent.jpg)
*Slay the Spire's intent icons — the canonical implementation. The icon above each enemy shows the next action (attack with damage number, buff, defend, multi-hit count). Combat is a turn-by-turn optimization puzzle, not a coin flip. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*

## What it solves

A combat system where the enemy's next action is hidden has two failure modes:

1. **It's pure reaction.** Players just spam defense and hope. There's no deliberate planning.
2. **It's pure pattern memorization.** Players who've seen the encounter before know what to do; everyone else dies.

Telegraphing the next attack solves both. **Each engagement becomes a decision: given what's coming, what's the best response with what I have right now?** That's a puzzle, not a coin flip. And the puzzle is fresh each turn because the *resources you have to solve it* — the cards in your hand, the cooldowns up, the position you're in — keep changing even when the enemy intent shape is familiar.

## Variants across games

| Game | Telegraph form | Timescale | What the player solves |
|---|---|---|---|
| **[Slay the Spire](/games/slay-the-spire/combat)** | Icon above each enemy: attack (with damage number), buff, debuff, defend, special, multi-hit count | Turn-based, before the player's turn | Allocate energy: attack now? block exactly the incoming damage? buff for sustained combat? Block expires next turn, so over-blocking wastes energy. |
| **[Mega Man Battle Network](/games/mega-man-battle-network/battle-system)** | **Tile state on the 6×3 grid** — flashing / coloured panels mark incoming attack zones; charging enemies highlight their row; hazardous floor (lava, poison, ice) is visibly tagged | Real-time, but on a discrete grid | *Where to stand.* Slide left, jump rows, steal panels to compress the enemy's space. Reaction is positional, not button-press. |
| **[Sparklite](/games/sparklite/combat)** | Genre-default wind-ups: hitch + flash + swing for melee enemies; layered phase patterns for biome bosses | Real-time, top-down action | Dodge in 2D space; learn boss patterns. Tight starter HP makes telegraphs *load-bearing* — un-telegraphed attacks would make the patch-board tightness feel unfair. |
| **[Moonlighter 2](/games/moonlighter-2/combat)** | Boss wind-ups + ground markers + projectile fan-outs in 3D isometric | Real-time, mid-combat | Position relative to telegraphed AoEs; commit to perk-locked weapon-combo windows. |
| **[Path of Exile 2](/games/path-of-exile-2/combat-philosophy)** | Boss/elite wind-ups, cone tells, ground markers, animation commits | Real-time, mid-combat | Dodge-roll *now*, position before the swing, choose between reactive defense and offense. The "build" doesn't dodge — the player does. |

The cases span turn-based to real-time, icon-based to spatial-tile to animation-tell. The insight is invariant: **show the player what's coming and let them solve.** What changes is the *medium* of the telegraph (icon, tile colour, wind-up animation) and the *response vocabulary* (allocate energy, slide rows, dodge-roll, position).

A few are worth contrasting:

- **Spire** telegraphs *what action*; **PoE2** telegraphs *which animation*; **MMBN** telegraphs *which tiles*. Same pattern, three render targets.
- **Sparklite and Moonlighter 2** are the "standard genre default" cases — every action-roguelite has wind-ups. They're listed because the *load-bearing role* of the telegraph is what makes the tight HP / locked-perk builds feel fair. The pattern earns its concept page even when it's not the headline mechanic.
- **PoE1 is the explicit counter-example.** Screen-clearing combat dissolves telegraphs into noise; PoE2's slowdown was greenlit partly to restore them. (See `anti-screen-clear-combat`.)

This pattern is **the most-imitated single mechanic in the modern roguelike-deckbuilder** — every Spire-like ships intent icons. It's also the keystone of the soulslike combat tradition (Souls / Elden Ring / Sekiro) — wind-up + tell + dodge window. And it predates both: tile-grid telegraphs were already the combat language of Battle Network in 2001.

### Visual contrast

| Slay the Spire | Mega Man Battle Network | Path of Exile 2 |
|---|---|---|
| ![Slay the Spire intent icons](/images/slay-the-spire/combat-defect.jpg) | ![MMBN 6×3 grid combat with Custom Gauge](/images/mega-man-battle-network/combat-grid-custom-gauge.jpg) | ![PoE2 boss Cualli mid-windup](/images/path-of-exile-2/boss-cualli.jpg) |
| Icon above each enemy = next action. Combat is a per-turn allocation puzzle. | Telegraph through the grid: panels flash, rows highlight, hazards mark the floor. Reaction is positional. | Boss wind-ups + ground markers. Real-time, soulslike-leaning. The player dodges, not the build. |

| Sparklite | Moonlighter 2 |
|---|---|
| ![Sparklite top-down combat](/images/sparklite/combat-wrench.jpg) | ![Moonlighter 2 boss arena with bullet patterns](/images/moonlighter-2/boss-fight.jpg) |
| Standard 2D wind-ups + flashes. Load-bearing for the tight 3-heart starter HP. | 3D ground markers + projectile fan-outs. Telegraph as the floor of fairness for locked perk builds. |

## When to use this pattern

- **Combat designs where the player has *limited* per-turn or per-encounter resources** (energy, dodge stamina, cooldowns) that need allocation against known incoming damage.
- **Games that want skill expression to come from *decision quality* rather than reflexes alone** (Spire) or *both* (Souls).
- **Roguelikes / roguelites** where re-fighting a slightly different encounter shape benefits from the "same monsters, different draw" puzzle texture.

Avoid when:
- Combat is meant to be hidden-information (poker-shaped, fog-of-war PvP). The whole point of telegraph is removing surprise.
- Encounters are too dense to legibly telegraph. PoE1's screen-clearing combat made telegraphing *every* monster impossible — there are 80 monsters on screen. Telegraph requires combat slow enough that the player can read the tells. (See `anti-screen-clear-combat`.)

## Pitfalls

- **Telegraphs that lie or omit are worse than no telegraph.** If a "defend" intent sometimes does damage, players stop trusting the system and revert to spam-defense. Spire's intent icons are *gospel* — they tell the truth deterministically. Honesty in the telegraph is non-negotiable.
- **Telegraphs that are too dense become noise.** A boss with 12 simultaneous tells produces a screen of icons that no one parses. PoE2 has been criticized at high build power when so many telegraphs overlap that none are readable.
- **Telegraph + screen-clearing combat is incompatible.** If the player kills the enemy before the wind-up resolves, the telegraph is decorative. PoE2 explicitly slowed combat to make telegraphs matter; Spire enforces it via turn structure.
- **In real-time variants, telegraph + RNG damage variance can feel cheap.** If you dodged the tell but *still* take damage from an unannounced second hit, the telegraph contract is broken. Souls/PoE2 enforce: if you dodged the tell, you took zero from that attack.

## Adjacent patterns

- `anti-screen-clear-combat` — the *upstream* design choice that makes telegraphing readable. PoE1 vs. PoE2 is the canonical case — same studio, same engine, same genre, opposite combat philosophies.
- `expiring-block` — Spire's specific "use this turn or lose it" defense. Telegraph + expiring block is what forces the per-turn allocation puzzle: too much block wastes the energy, too little and the announced damage gets through.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — many keystone-style passives in ARPGs interact with the telegraph contract (e.g. "you can't dodge but +damage" turns combat into pure resource math instead of reaction).

## Why this matters as a design lesson

The pattern moves randomness **off the enemy and onto the player**. The enemy is deterministic-in-intent; what's random is which cards drew, which cooldowns are up, which positions are open. That inversion is what lets a fight feel both **deterministic-tactical** (you know what's coming this turn) and **replayable-strategic** (your kit varies run to run).

For your own designs: if combat feels like a coin flip, ask whether the player can *see* what they're solving. If the answer is "no, they just react," telegraphing is the cheapest fix to convert reactions into decisions.
