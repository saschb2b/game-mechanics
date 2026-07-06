---
title: "Expedition 33: Patterns"
type: game
game: clair-obscur-expedition-33
---

# Patterns Expedition 33 exemplifies

| Pattern | How Expedition 33 uses it |
|---|---|
| `reactive-turn-based` | The lemma. Menu-driven turn selection with real-time execution on both sides: timed hits on offense, dodge/parry/jump/counter on defense. The enemy's turn is the player's most engaged moment. |
| `timed-hits` | Paper Mario / Lost Odyssey lineage: every attack and skill carries mid-animation button prompts for bonus damage, with an accessibility toggle that auto-resolves offense only. |
| [`enemy-intent-telegraph`](/concepts/enemy-intent-telegraph) | The stress test of the pattern. Attack *type* is always honest (parryable / jumpable / Gradient-flagged) but attack *timing* is deliberately theatrical and deceptive. Telegraph honesty becomes a two-axis dial, and the game maxes one axis while weaponizing the other. |
| [`loadout-as-budget`](/concepts/loadout-as-budget) | Lumina Points: a per-character numeric budget (roughly = level, extendable via consumables) spent on passives costing 1 to 40 points each. No slot cap, only the budget. |
| [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) | Three Picto slots per character with single-copy equipping across the party; six equipped skills from a much larger tree; weapon scaling letters welding weapon choice to attribute spending. |
| `equip-to-learn` | Win 4 battles with a Picto equipped and its passive is learned party-wide as a Lumina. The inventory is a curriculum; best-in-slot is always "whatever you haven't mastered yet." FF9's ability learning, modernized. |
| `per-character-subsystem` | Six characters, six private resource loops (Overcharge gauge, elemental Stains, fencing stances, Foretell cards, Perfection ranks, Bestial Wheel) over one shared combat chassis. |
| `shared-party-gauge` | The Gradient bar: one party-wide resource paying for both ultimates and the mandatory counters to unparryable attacks. Offense and insurance compete for the same pips. |
| `bonfire-rest-point` | Expedition flags: checkpoint, respec, level-up, and consumable refill in one placed object; tints refill at every flag so hoarding is pointless. Fiction inverted: every flag was planted by a previous, dead expedition. |
