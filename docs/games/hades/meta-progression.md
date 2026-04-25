---
title: "Hades — Meta-progression (Mirror, Pact, Arcana)"
type: game
game: hades
patterns:
  - meta-as-variety-not-power
  - bonus-with-drawback
  - nested-progression-graph
---

# Meta-progression — Mirror, Pact, Arcana

How Hades pays you for runs you didn't win. The series ships **three orthogonal meta-progression axes** — Mirror of Night (variety unlocks), Pact of Punishment (difficulty), and (in Hades II) Arcana cards (a tarot-card meta-build).

## Mirror of Night (Hades 1) → Arcana grid (Hades II)

The "what does my run start with" axis. Both games let the player invest a meta-currency (Darkness in H1, Ash in H2) into permanent slot upgrades that affect every run.

![Hades II Arcana grid — slots arranged in a 3-row tarot-card layout, with Ghost Onion card visible (heal on exit Location, +50 max Life), Location/Life/Healing tooltip explanations on the right](/images/hades/h2-arcana-grid.jpg)
*Hades 2's Arcana grid. Each card is a meta-talent — *Ghost Onion* "Whenever you exit a Location, fully restore your Life, up to a total of 50 Life this night." Cards rank up by clearing 25 Encounters with them slotted (right-side text). The layout is grid-shaped: total Grasp (capacity) limits how many cards you can fit. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2192).*

The Arcana grid is more elaborate than Mirror of Night was — it's a **`loadout-as-budget`** combinatorial puzzle: which N cards fit your *Grasp* limit, given each card has a Grasp cost and synergies between adjacent cards.

| Hades 1 Mirror | Hades 2 Arcana |
|---|---|
| Linear slot list | Grid + Grasp budget |
| Each slot has 2 mutually-exclusive options | Each card is unique; you pick which to slot |
| Cost: Darkness, then Diamonds at higher tiers | Cost: Ash + Psyche; rank up by *use* |
| Stat-style upgrades (+ HP, + dash) + variety unlocks | Most cards are *variety* — new mechanics, conditional triggers |

Both are squarely [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power). The strict version of that pattern says *only* variety, never raw power. Hades sits a little softer — Mirror has +HP, +damage. But the *interesting* upgrades are the ones that change how the run *plays* (Stubborn Defiance gives you a one-shot revive; Olympian Favor doubles boon offers from one specific god per run).

## Pact of Punishment — opt-in difficulty

Hades's answer to **post-credits replayability**. After beating the game, the player unlocks the Pact — a menu of difficulty modifiers (called *Conditions*) the player can stack to make runs harder. Each Condition adds:

- A *Heat* level (1–N)
- A reward bonus for clearing the run with that Heat applied
- A specific cap on stacking (e.g. Hard Labor max Heat = 5)

The player picks which Conditions to take. **Conditions are bonus-with-drawback at the meta-level** — opt-in difficulty in exchange for opt-in reward.

| Sample Condition | Effect | Heat |
|---|---|---|
| Hard Labor | Enemies deal +20% damage | 1 per level (max 5) |
| Lasting Consequences | You take +20% damage from each source already-dealt | 1 per level (max 4) |
| Convenience Fee | Charon's shop costs more | 1 per level (max 4) |
| Damage Control | Wells of Charon offer fewer items | 1 per level (max 2) |
| Tight Deadline | Bosses get a damage bonus over time | 1 per level (max 3) |

By Heat 32+ the game is brutally hard. This is the post-credits curve — the run length doesn't change, the *ceiling* of difficulty does, and the player picks which Conditions match the kind of challenge they want to chase.

This is the same shape as Slay the Spire's Ascension levels: **a difficulty-modifier menu unlocked after the campaign, with bespoke rewards for each unlocked tier.**

## Nocturnal Arms — the weapon roster

![Hades II Nocturnal Arms select screen — Sister Blades, Umbral Flames, Moonstone Axe, Witch's Staff listed; right side shows the Crossroads altar; Umbral Flames description visible](/images/hades/h2-nocturnal-arms.jpg)
*Nocturnal Arms select. Hades II's 4 weapons (so far in EA): Sister Blades, Umbral Flames, Moonstone Axe, Witch's Staff. Each weapon has its own Aspect tree (alternative forms unlocked through gameplay). The Silver / Cinder counters at the bottom are the meta-currencies for unlocking the next weapon. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2192).*

Each Nocturnal Arm has multiple **Aspects** — alternate forms of the same weapon with substantially different combat mechanics:

- *Sister Blades / Aspect of Artemis:* dagger throws return like boomerangs
- *Witch's Staff / Aspect of Circe:* Special channels a beam instead of firing projectile
- *Moonstone Axe / Aspect of Charon:* trade Magick to slow time

Aspects unlock by spending Titan's Blood (from boss kills) at Hecate's altar. Late-game players carry 3–4 Aspects per weapon, each effectively a separate playstyle, picked per-run.

## How the three axes compose

| Axis | Frequency | Cost | What it changes |
|---|---|---|---|
| Boon draft | Every chamber | None (in-run) | This run's build |
| Hammer | 1–2 per run | None | This run's weapon mechanics |
| Mirror / Arcana | Hub menu | Meta-currency | Permanent run-start state |
| Pact / Heat | Hub menu | Opt-in difficulty | Run difficulty + reward |
| Aspect select | Per-run | Already unlocked | This run's weapon identity |

A single run touches all 5: equip Aspect at hub → set Pact heat at hub → load Arcana → enter run → boon draft per chamber → hammer once or twice → die or win. **Every layer is a *different* loadout decision at a different timescale.**

This is [`nested-progression-graph`](/concepts/nested-progression-graph) — five orthogonal axes, each with its own optimization loop, all composing into a single run.

## Patterns this exemplifies

- [`meta-as-variety-not-power`](/concepts/meta-as-variety-not-power) — most Mirror / Arcana upgrades change *how* runs play, not raw stat numbers.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — Pact Conditions are explicitly opt-in drawbacks for opt-in rewards.
- [`nested-progression-graph`](/concepts/nested-progression-graph) — five orthogonal meta-axes composing per run.
