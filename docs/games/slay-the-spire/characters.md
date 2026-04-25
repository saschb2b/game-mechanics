---
title: "Slay the Spire — Characters"
type: game
game: slay-the-spire
patterns:
  - orthogonal-class-design
---

# Characters

Four characters, each a fundamentally different game. **Not "different stats" — different *systems*.**

## Ironclad — the warrior

- Resource: HP regen on kill (Burning Blood starter relic).
- Themes: Strength scaling, Block, **Exhaust**.
- Iconic cards: Body Slam (deal damage equal to current Block); Barricade (Block doesn't decay); Limit Break (double Strength).
- Plays like: a tanky combo brawler. Stack Strength, multiply with Heavy Blade or Body Slam, sustain with Feel No Pain on Exhaust triggers.

## Silent — the rogue

- Resource: starts with extra cards in hand (Ring of the Snake).
- Themes: **Poison**, **Shivs**, Discard, Draw.
- Iconic cards: Catalyst (double poison); Bullet Time (cards cost 0, can't draw); Footwork (permanent Dexterity).
- Plays like: setup-and-payoff. Apply poison ticks, scale with Footwork, rely on draw engine. Squishy early-game, ramps hard.

## Defect — the mage

- Resource: **channels orbs** (Lightning, Frost, Dark, Plasma) into orb slots.
- Themes: orb management, **Focus** (boosts orb effects), evoking.
- Iconic cards: Claw (gets stronger every play); Echo Form (first card each turn played twice); Biased Cognition (massive Focus, decays each turn).
- Plays like: a slow scaler that loses early but becomes a god if it survives. Most "engine"-feeling of the four.

## Watcher — the monk (DLC, but free)

- Resource: **Stances** — Wrath (2× damage taken & dealt), Calm (+2 energy on exit), Divinity (3× damage dealt), Vigilance (energy from cards).
- Themes: stance dancing, Retain, mid-combat card generation, scry.
- Iconic cards: Pressure Points (deal damage equal to Mark stacks across all enemies); Lesson Learned (transform a card on kill); Wallop (block + damage).
- Plays like: highest skill ceiling. Massive damage potential, easy to OTK enemies if you flow stances correctly.

## Why this matters as a design pattern

Most games offer "classes" that are reskins of the same system. **Spire's characters are different system stacks sitting on top of the *same* combat shell** (energy/block/intent/cards). The shell is universal; the character defines which mechanics on top of the shell are even *available* to you.

- Ironclad doesn't *have* poison (it's a Silent thing).
- Silent doesn't *have* orbs (it's a Defect thing).
- Defect doesn't *have* stances (it's a Watcher thing).
- Watcher doesn't *have* Strength scaling (it's an Ironclad thing).

This is much stronger than "this class has +20% crit". It's "this class plays a different game inside the same engine."

See `orthogonal-class-design`.

## Patterns this exemplifies

- `orthogonal-class-design`
