---
title: "Expedition 33: Lessons"
type: game
game: clair-obscur-expedition-33
---

# What I'd steal (and what I'd avoid)

Opinionated takeaways for my own (Godot) projects.

## Steal

### 1. Give the defender a verb

The single most transferable idea in the game, and it costs almost nothing systemically: whatever your combat structure, make the player *do something* when they're attacked. E33 proves the payoff is enormous even inside the most turn-based of turn-based frames. The dead time between "my turn" and "my turn again" is where genre fatigue lives. Even a small prototype can test this: one dodge button during enemy actions changes the entire feel of menu combat.

### 2. Pay for risk in resources, not just survival

Parry and perfect dodge occupy the same timing space, but parry is tighter *and generates AP*. The reward for choosing the harder input is fuel for your best skills, so the economy itself teaches mastery; no tutorial text needed. The general form: **when two defensive options exist, make the harder one an economic engine, not just a better shield.**

### 3. Universal passive layer under unique kits

The two-layer build architecture (shared Luminas under per-character subsystems) gets you multiplicative build variety at additive content cost. Every Lumina I design works for six characters; every kit stays mechanically private. Balatro-scale combinatorics with a party-RPG face.

### 4. Equipment that teaches (equip-to-learn)

"Win 4 battles wearing it and keep the passive" is a rotation-forcing loop: optimal play is to keep cycling unlearned gear, so players explore the catalog *by playing optimally* instead of despite it. Any game with equipment and passives can retrofit this with one counter per item.

### 5. Ship the failure screen in the fiction's voice

"Expedition Failed" and "We Continue" cost nothing and do real thematic work. Naming your failure and continue states in-world is the cheapest ludonarrative move available (see the [full reading](./ludonarrative-resonance)).

### 6. Refill consumables at checkpoints

Tints refilling at every flag kills item hoarding, the oldest JRPG pathology, with one rule. Potions become per-attempt tactical resources instead of a museum collection.

## Handle with care

### 7. Deceptive timing is a difficulty dial with an accessibility bill

The delayed, off-beat wind-ups are the skill ceiling and the mastery joy, *and* they're why some players bounce off entirely: there's no timing indicator, surreal enemy anatomy hides the tells, and defensive inputs can't be automated on any difficulty. If I use adversarial timing, I'd ship what E33 only patched in later (or never): practice/retry tools from day one (Battle Retry arrived in patch 1.4.0), a timing-assist option decoupled from the difficulty label, and telegraph animations authored on readable silhouettes.

### 8. If defense is mandatory, audit the "or die" threshold

Act 3 enemies hitting for full health bars turned "parry is rewarding" into "parry or die," and the build system stopped mattering for anyone who couldn't execute ([TheGamer's criticism](https://www.thegamer.com/clair-obscur-expedition-33-too-much-parrying/) is the canonical writeup). One-shot damage converts a skill *bonus* into a skill *gate*. Keep at least one honest build-based answer (tank stats, shields, revives) viable at every difficulty, or admit the game is an action game.

### 9. Decide your break-the-game policy before launch

The 9,999 damage cap removed by an opt-in Lumina is a great idea; the billion-damage Stendhal build that one-shot the final superboss was that idea untested. Sandfall's recovery was actually excellent (pre-announced nerf, then player-set Challenge Modifiers), but the lesson is to choose deliberately: either the ceiling is content (then test it like content) or it's the player's toy (then hand them the dials on day one, not in patch 1.3.0).

### 10. Friction needs tooling even when it's the point

No minimap is a defensible artistic stance (Broche's memory argument is real; it worked on me in Hollow Knight). But E33 pairs it with invisible walls, samey corridors, and no in-level progress tracking, so the friction reads as jank half the time. If you remove the map, spend the savings on landmark-driven, silhouette-readable levels. Friction is a feature only when the environment can carry the navigation load the UI dropped.

### 11. Menu-heavy build systems need loadout presets at launch

Lumina Sets (build presets) arrived in patch 1.5.0, months after players were hand-rebuilding 40-point loadouts per character per boss. If the build system is the endgame, its management UI is endgame content too.
