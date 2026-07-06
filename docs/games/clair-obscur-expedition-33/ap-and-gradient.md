---
title: "Expedition 33: AP & Gradient economy"
type: game
game: clair-obscur-expedition-33
patterns:
  - shared-party-gauge
  - reactive-turn-based
---

# AP & Gradient economy

Two currencies run combat: **AP** (per character, the skill fuel) and the **Gradient gauge** (party-wide, the ultimate fuel). Both are earned by playing well *on defense as much as offense*, which is what welds the reactive layer to the strategic layer.

## AP: earned by hand

AP is displayed as pips under each character portrait. The flows:

| Source | AP |
|---|---|
| Base Attack | +1 |
| Each successful **Parry** | +1 per parried hit |
| Perfect Dodge with the Dodger Picto (and similar Luminas) | +1, once per turn |
| Small/regular Energy Tint (item) | +3 or more to one ally |
| Skills | −3 to −7 typical |
| Aim shots | −1 each |

![Attack tutorial: "Try attacking to gain 1 AP"](/images/clair-obscur-expedition-33/attack-ap-tutorial.jpg)
*The tutorial duel drills the base loop: attack to bank AP, spend it on skills. The right panel already advertises the other half: Gustave's arm charges "by dealing damage, dodging & parrying." Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

The consequence: **your defensive performance funds your offense.** A player who parries a four-hit string comes out of the enemy turn richer than they entered it; a player who face-tanks pays twice, in health and in tempo. This is the sharpest economic statement in the design, and also the root of its most-criticized dynamic (parry strictly dominates dodge for anyone who can execute it; see [design tensions](./design-tensions)).

![Skill tooltips in combat showing AP costs](/images/clair-obscur-expedition-33/skills-in-combat.jpg)
*Skill select mid-fight: Lumière Assault (3 AP, crits generate an extra Charge) vs Overcharge (4 AP, spends all Charges). Costs sit right on the buttons. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## The Gradient gauge

Below the party frames sits a shared segmented bar that fills as the fight goes on: dealing damage, taking turns, defending well. It pays for two things:

- **Gradient Attacks**: per-character cinematic ultimates unlocked through the story, costing one or more full segments.
- **Gradient Counters**: the only answer to attacks flagged with the special indicator, which can't be parried.

Because the gauge is party-wide, spending it is a group decision: a Gradient Counter spent to survive is an ultimate you can't cash later. One pool, two uses, offense vs insurance: `shared-party-gauge` logic applied at the per-fight timescale, a close cousin of the fixed budgets in [`loadout-as-budget`](/concepts/loadout-as-budget).

## Items: tints

![Combat item menu with three tint types](/images/clair-obscur-expedition-33/items-tints-combat.jpg)
*Tints: Healing (30% HP), Energy (+3 AP), Revive (30% HP ally revive). Stock is small and refills at every expedition flag, Estus-style, so hoarding is pointless and using them is never a long-term loss. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

The refill-at-flag design (see [world & camp](./world-and-camp#expedition-flags)) keeps the item economy per-attempt instead of per-playthrough: a deliberate anti-hoarding stance borrowed from Souls bonfires rather than from JRPG shopping.

## Patterns this exemplifies

- `shared-party-gauge`: one party-wide resource with competing offensive and defensive uses.
- `reactive-turn-based`: the AP flows are what make the real-time layer strategically legible rather than cosmetic.
