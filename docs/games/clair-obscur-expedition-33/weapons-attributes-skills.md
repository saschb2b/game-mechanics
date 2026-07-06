---
title: "Expedition 33: Weapons, attributes & skills"
type: game
game: clair-obscur-expedition-33
patterns:
  - opportunity-cost-loadout
---

# Weapons, attributes & skills

The conventional RPG substrate under the flashy systems. It's worth documenting because almost every choice here is tuned for **respec-friendliness and legibility** rather than novelty: the progression layer stays out of the way of the combat and build layers.

## Weapons: scaling letters, one element, milestone passives

Each character has their own weapon roster. A weapon card shows Power, an inherent element (Physical, Fire, Ice, Lightning, Earth, Light, Dark, Void), and **attribute scaling letters** (S/A/B/C/D), Souls-style: the weapon's damage grows with specific attributes, so weapon choice and attribute spending are one decision.

![New Weapon pickup card showing scaling letters](/images/clair-obscur-expedition-33/weapon-pickup-world.jpg)
*A pickup card states the whole contract up front: Power 52, physical, scales C with Vitality, D with Agility. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

![Weapon comparison in the equip menu](/images/clair-obscur-expedition-33/weapon-compare-scaling.jpg)
*Comparing Lanceram and Noahram: same UI grammar as the pickup card. No affix soup; two weapons differ by number, element, and scaling pair. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

Weapons level from 1 to 33 (a number the fiction owns). Levels are gated by ascending **Chroma Catalyst** tiers (base → Polished → Resplendent → Grandiose → Perfect for the final level), which are availability-gated by story progress and endgame dungeons. Weapons unlock **unique passives at levels 4, 10, and 20**, so upgrading is a build decision, not just a bigger number. Duplicates of an owned weapon auto-level your copy.

![Weapons tab of the inventory](/images/clair-obscur-expedition-33/inventory-weapons.jpg)
*The full roster is small and readable; every weapon stays viable in principle because upgrade materials, not drop RNG, set its level. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Attributes: five dials, cheap resets

Leveling grants **3 attribute points** (and 1 skill point). Five attributes each feed two derived stats: Vitality (health), Might (attack power), Agility (speed, i.e. turn frequency), Defense (damage reduction, crit), Luck (speed, crit). Crits deal +50%.

![Attributes screen with derived-stat breakdown](/images/clair-obscur-expedition-33/attributes-upgrade.jpg)
*The screen shows its math: Attack Power 49 = 17 base + 32 weapon; Speed 212 = 200 + 12 from a Picto. Transparent arithmetic is rare in JRPGs and makes theorycrafting a menu activity instead of a wiki activity. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

Respec is a consumable, **Recoat**, spent at any expedition flag to reset one character's attributes or skill tree. Recoats are common enough (enemy drops, merchants) that mid-game reinvention is a real option; combined with catalyst-driven weapon levels this makes the whole progression layer soft-committed.

## Skill trees: unlock many, equip six

Each character has a lattice-shaped tree of active skills with per-node point costs. The constraint that matters is downstream: **only 6 skills are equipped at a time**, swappable freely outside combat. The tree is a catalog; the loadout is the decision, [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) applied to actives. Monoco is the deliberate exception: no skill points, his tree fills by hunting Nevron types (see [character kits](./character-kits#monoco-the-bestial-wheel)).

![Gustave's skill tree](/images/clair-obscur-expedition-33/skill-tree-gustave.jpg)
*Diamond lattice, locked nodes, costs of 1 to 10 points, and the Recoat counter in the corner: the reset is advertised inside the spend screen. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Cosmetics stay cosmetic

![Wardrobe screen](/images/clair-obscur-expedition-33/wardrobe-cosmetics.jpg)
*Outfits and haircuts carry zero stats. In a game this build-dense, keeping one whole menu consequence-free is itself a design choice. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Patterns this exemplifies

- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout): six equipped skills from a big tree; scaling letters welding weapon choice to attribute allocation.
