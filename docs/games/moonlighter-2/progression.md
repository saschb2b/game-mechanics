---
title: "Moonlighter 2 — Progression"
type: game
game: moonlighter-2
patterns:
  - meta-as-variety-not-power
---

# Progression

Three nested progression layers, similar to other modern roguelites:

## 1. In-run

Per-descent state, lost on death (mostly):
- Backpack contents — what you've picked up.
- Map perks chosen this run.
- HP / shields.

Note: *some* loot is preserved on death by being in the backpack at exit; the rest is left behind. This is friendlier than full permadeath and similar to Sparklite's "permalife" framing — but Moonlighter 2 doesn't fully commit to permalife. Death has real cost.

## 2. Per-day meta

Persists across runs but resets daily:
- Themed-day bonuses (popularity boosts).
- Perks chosen during shop setup.
- Display layout (until you choose to rearrange).

## 3. Permanent meta

The village investment loop. Persists forever:
- **Blacksmith** — armor & weapon upgrades. Spend gold + relics for stat bumps + new sets.
- **Recipe vendors** — unlocks new craftable items.
- **Other NPC establishments** — alchemist, etc., each unlock more perks for runs.
- **Shop tier** — better display cases, more slots, decoration options.
- **Recipes & blueprints** — found in dungeons, redeemed in town.

![Blacksmith armor selection with Will modeling Nimbus Regalia armor](/images/moonlighter-2/blacksmith-armor.jpg)
*The Blacksmith. Pick armor sets and upgrade them with gold + materials. Each set has both stats and a unique trait (Nimbus Regalia: shields, damage boost on shield break). Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*

## Variety vs. power

Moonlighter 2 sits between the Spire ("variety only, no power") and Hades ("variety + persistent power") models. Permanent upgrades **do** make Will stronger over time — armor sets have real stat bumps. But the bulk of "what changes between runs" is variety:

- New perks unlocked from village NPC investments.
- New recipes for backpack-puzzle synergies.
- New display cases that change shop math.

Compare with [Spire's `meta-as-variety-not-power`](/concepts/handcrafted-pcg-hybrid) — Mega Crit explicitly rejects permanent power gains. Digital Sun is more relaxed: permanent power is fine, *variety* is what scales.

## Critique

- Reviewers note that **progression in the EA build feels slowed rather than gated.** The original Moonlighter had clean progression beats (each new dungeon was a real escalation); the sequel has more options to grind for, less clear milestones.
- This may iron out before 1.0 — Early Access game, content roadmap published.

## Patterns this exemplifies

- [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power) — but only partially; permanent stat upgrades exist alongside variety unlocks.
