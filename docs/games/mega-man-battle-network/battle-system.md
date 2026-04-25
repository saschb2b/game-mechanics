---
title: "Mega Man Battle Network — Battle system"
type: game
game: mega-man-battle-network
patterns:
  - real-time-grid-tactics
  - draw-step-as-tactical-resource
---

# Battle system

The reason the series exists. **6×3 grid combat in real time, with a deck-draw step embedded in the action.**

![BN combat showing the 6×3 grid: red panels on the left for MegaMan, blue panels on the right for the enemy, Custom Gauge across the top, HP 100 in the corner, MegaMan firing the buster](/images/mega-man-battle-network/combat-grid-custom-gauge.jpg)
*The grid (3×3 each side), the Custom Gauge across the top, an HP counter top-left. MegaMan slides D-pad-style between panels and fires the buster in real time; the gauge fills, you tap Custom, and combat freezes for the chip-draw screen. Source: [Steam](https://store.steampowered.com/app/1798010/).*

## The 6×3 grid

The battlefield is **two 3×3 grids facing each other.** MegaMan controls the left side; enemies control the right. Movement is one panel per D-pad press — *discrete* tiles, but you slide between them in real time, dodging between bullets in the gaps.

**Panel state is half the combat:**

| Panel type | Effect |
|---|---|
| Normal | Standable, no effect |
| **Cracked** → **Broken** | Step off → cracks. Step off again → broken (un-standable). |
| **Ice** | Slides you to the next valid panel (FloatShoes immune from BN3) |
| **Grass** | Heals Wood-element actors; doubles incoming Fire damage |
| **Sand**, **Poison**, **Lava**, **Holy** | Later additions; element-modifier panels |
| **Stolen** (via AreaGrab/Steal chips) | Annexed enemy columns physically shrink the opponent's space |

Panels are *resources*. Stealing them isn't just denial — it compresses the opponent's dodge options. Cracking panels under a flying enemy sets up a free-damage moment when they land.

![BN combat with grass and broken panels visible, MegaMan in his Beast Out form](/images/mega-man-battle-network/combat-grass-panels.jpg)
*Grass panels in green; cracked and broken panels visible. Panel state is half the tactical layer. Source: [Steam](https://store.steampowered.com/app/1798020/).*

## What's distinctive about grid + real-time

Most grid combat games are turn-based (Fire Emblem, FFT, Into the Breach). Most action games are continuous-movement (Diablo, Souls). **BN's hybrid is rare:**

- The grid is *positional puzzle thinking* — which column to stand in, which panel to crack first.
- The real-time-ness is *reflex play* — when to dodge a charging enemy, when to switch rows.

The combination means a fight is *both* a chess problem and an action sequence. Skill at one isn't enough. Players who only think tactically die to attack timing; players who only react die to positional ambushes.

## The Custom Gauge — the rhythm

A bar at the top of the screen fills in real time during combat (~8–10 seconds normally). When full, press **Custom** (L or R on GBA, default trigger button on Legacy Collection) — the action freezes and you're back at the chip-draw screen.

This is the **genuinely original move.** Not "menu → combat → menu" alternation. Not pause-and-resume planning. **The draw step is itself a real-time tactical resource:**

- **Hitting enemies fills the gauge faster.** You can attack to *recharge your hand sooner*.
- **Taking damage slows the gauge.** Defensive play means you're stuck with the chips you already played.
- **Some chips refill the gauge instantly** (FullCust). These become defensive lifelines — get hit, no chips, FullCust, fresh hand.
- **Chip cost scales with chip tier** — Standard chips cost 1/3 gauge per use, Mega chips 2/3, Giga chips spend the whole bar. So mega-stacking your folder means longer dry stretches between hand refills.

The result is **an oscillating rhythm:** spend the chips you have → dodge bullets while the gauge fills → tap Custom → draw → repeat. Combat is paced *by your own resource cycle*, not by enemy turns or skill cooldowns.

## Mega Chips and Giga Chips

Two upper tiers of Battle Chips (introduced fully in BN3):

- **Mega Chips** — powerful named effects (Navi summons, signature attacks). Folder cap: **5 Mega chips**, only 1 of each name.
- **Giga Chips** — game-defining ultimate effects (FullSynchro double-damage, screen-clearing attacks, mid-tier boss summons). Folder cap: **1 Giga chip per folder**.

Both cost more Custom Gauge to use *and* are restricted in what they can combine with at the chip-draw screen. The cap turns them into **commit choices** — your one Giga is your run's defining ace card.

## What reviewers and the community keep saying

**Praise** — almost universal. Jeremy Parish (1UP) called it the "sole reason for the series' success." The combination of "sharp thinking and quick reflexes" is repeatedly cited as the genre's signature. Folder-building, PA recipe discovery, and the rhythmic Custom Gauge are described as uniquely satisfying. The Legacy Collection's reception (2023) repeatedly remarked on how well the system holds up two decades later.

**Critique** — the system has known weak points. BN1's difficulty curve is rough. Random virus encounters in the cyber world are slogs on replay. The series' AI difficulty plateaus by mid-game; chip-stacking makes the late game easy if you've collected the right Mega chips. BN4's structure (forced multi-playthroughs of an inferior version of the system) is universally panned.

## Patterns this exemplifies

- `real-time-grid-tactics` — discrete tile movement in a real-time combat fight. The defining BN move.
- `draw-step-as-tactical-resource` — the Custom Gauge is the genuinely original mechanic. Card draw becomes something you fight to enable.
