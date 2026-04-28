---
title: "Nier: Automata — Genre-shifting combat"
type: game
game: nier-automata
patterns:
  - genre-shifting-camera
---

# Genre-shifting combat

Nier: Automata's combat sells itself in trailers as a PlatinumGames hack-and-slash — fast melee, light/heavy weapon swaps, dodges, juggles. That's the *default* mode. The full inventory of combat verbs is wider:

| Mode | Camera | Verbs | When |
|---|---|---|---|
| **Third-person hack-and-slash** | Free 3D camera, behind 2B/A2 | Light, heavy, ranged (Pod), dodge, perfect-dodge counter, jump | Default open-world combat |
| **Twin-stick shmup** | Top-down, 2B/9S piloting flight unit | Move + shoot | Vertical "flight" sections (intro, certain bosses) |
| **2D side-scroller** | Side-view, locked plane | Move + jump + attack | Hallways in the Bunker, Copied City sequence, several boss approaches |
| **Top-down 3D** | Locked overhead, character at centre | Same as default but constrained | Specific corridor encounters, Amusement Park introduction |
| **Bullet-hell** | Top-down, character is a small ship-icon | Move + shoot, bullet curtain | The hacking minigame (9S only) AND the Ending E credits |
| **Idle / dialogue** | Static camera, sometimes 2D | Talk, no combat | Bunker, Resistance Camp |

The shift is **camera-driven, not menu-driven.** The player doesn't pick a mode. They walk through a doorway and the camera reframes; on the other side of the doorway, the verbs available have changed.

![Open-world third-person combat against a Lv 39 machine boss. Player Lv 33 with HP bar top-left, enemy with Lv 39 HP bar top-centre, minimap bottom-right. The character is mid-dash with a +1 hit indicator on the boss](/images/nier-automata/player-vitals-minimap.jpg)
*The default combat camera — hack-and-slash. Note the minimap bottom-right, the HP bar top-left, the enemy HP bar top-centre — every one of these elements is a Plug-in Chip the player has chosen to install. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=150).*

## Why this is more interesting than "set-piece variety"

Plenty of games include genre-shift segments — Uncharted has a stealth bit, Yakuza has karaoke. Those segments are typically marked: a clear loading screen, a clear minigame frame, a clear return. **Automata does not mark its shifts.**

A short walk in the Resistance Camp is in side-scrolling 2D. You exit through a door, the camera lifts to top-down 3D for the courtyard. You jog through a tunnel and the camera swings behind you for an open-world encounter. Then you mount the flight unit and you're in a top-down shmup.

The implicit rule: **the room shapes the verb-set.** A tight corridor wants 2D. A circular plaza wants top-down. A bossfight in open ground wants behind-the-character 3D. Camera angle becomes a hint for what the player is allowed to do.

This is **rhetorical:** the Bunker — YoRHa's institutional home — is shot in 2D side-scroller, like a Game Boy Advance. The Earth surface is shot in open 3D. Without a single line of dialogue, the camera tells you which is the cage and which is the world.

## The hacking minigame — the most committed genre-shift

When 9S hacks an enemy or terminal, the screen cuts to a **bullet-hell twin-stick shmup**. 9S becomes a small triangular ship in an arena; the target is a black core. Hack the core under the time limit; survive the bullet curtain; unlock the system / damage the enemy / read the data.

The minigame:

- Has its own progression — chips affect it (Hack Defense, Hijack Boost, RAM-related chips).
- Has its own difficulty curve — late-game hacks are denser bullet patterns than early ones.
- Replaces certain encounters entirely. Some 9S boss "fights" *are* the hack.
- Is later promoted to an **Arcade Mode** at Access Points — a standalone shmum with score tables.

![Access Point → Arcade. A Result modal: "Total Stages Cleared — NEW RECORD 0 → 14". Below the modal, Challenge Mode and Training entries are visible. Bottom: "Clear as many hacking games as you can"](/images/nier-automata/arcade-result.jpg)
*The hacking minigame, promoted to a standalone Arcade Mode at Access Points. The scoreboard format ("NEW RECORD 0 → 14") signals: this is a real game, not a transition device. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=150).*

The Ending E credits use **the same hacking shmum engine** — but now the bullets are letters of the credits, fired at the player at increasing density. You shoot the credits to advance them.

This is one of the highest-leverage decisions in the game's design: **build one good shmum, reuse it for hacking, for Arcade Mode, and for the final-final climax.** Three uses for one system.

## The Pod — a shooter inside the hack-and-slash

Even within standard combat, the Pod (a flying companion drone with a chain-gun, missile pod, or laser) gives 2B a permanent ranged attack. So default combat is *already* dual-genre: melee with the right hand, twin-stick shooter with the left.

This shows up as the **Pod programs** subsystem — separate from chips, with its own progression menu. Pod programs include long-cooldown specials (gravity well, decoy, 360° barrier) that function more like a MOBA ult than a shooter weapon.

![SKILLS root menu — only two top-level skill categories: "Pod Programs" (18% complete) and "Plug-in Chips". Right panel: 9S Lv 33 with full status](/images/nier-automata/skills-root-pod-chips.jpg)
*The whole skill system is two things: chips (the loadout) and Pod programs (the cooldown abilities). Two systems doing different jobs — passives vs actives — explicitly separated at the menu's top level. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=150).*

## What this teaches

- **Camera angle is a verb-set hint.** Before any tutorial pop-up, the camera tells the player what the controls do now. This is much faster than text.
- **Genre-shift only works if the underlying input language stays consistent.** 2B's controls in 2D are just the 3D controls projected onto a plane. The player doesn't relearn buttons; the camera relearns them for them.
- **Build a transition device once, reuse it three ways.** Automata's hacking minigame is mechanic, transition, and credits sequence. The shmum engine has higher ROI than any other PlatinumGames system.
- **Rhetorical camera framing is essentially free.** The 2D Bunker is the same 3D environment with a fixed camera. No new assets. Massive narrative payload.

## Patterns this exemplifies

- `genre-shifting-camera` — verbs change with camera framing, not menu select. Uncurated; Automata is the only entry currently using this.

## Adjacent

- [Mega Man Battle Network](/games/mega-man-battle-network/) also blends two genres (action + card game), but in a fixed 6×3 grid — the inverse approach.
