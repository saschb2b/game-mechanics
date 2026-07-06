---
title: "Expedition 33: Pictos & Luminas"
type: game
game: clair-obscur-expedition-33
patterns:
  - loadout-as-budget
  - opportunity-cost-loadout
  - equip-to-learn
---

# Pictos & Luminas

The build system, and the game's quietest good idea. It is two systems stacked: **Pictos** (equipment) feed **Luminas** (a growing passive library), so every trinket you find is simultaneously a stat stick, a passive, and a *lesson your whole party can eventually keep.*

## Pictos: three slots of stats + one passive

Each character equips up to **3 Pictos**. A Picto carries one or two flat combat sub-stat bonuses (Health, Attack Power, Speed, Defense, Critical Rate) plus one passive effect. Any given copy can only be worn by one character at a time.

![Pictos equip screen with the Dodger tooltip](/images/clair-obscur-expedition-33/pictos-equip-dodger.jpg)
*Dodger: Speed +12, Crit +3%, and the passive "Gain 1 AP on Perfect Dodge. Once per turn." Three of these per character, no more. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

![Critical Burn Picto tooltip](/images/clair-obscur-expedition-33/pictos-critical-burn.jpg)
*Critical Burn: "25% increased Critical Chance on Burning enemies." Passives are conditional and combinatorial, which is what makes the learning system below matter. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

Pictos level up through acquisition (finding or buying a higher-level duplicate upgrades your copy), which scales the stat line, not the passive.

![New Pictos pickup on a battlefield of dead expeditioners](/images/clair-obscur-expedition-33/pictos-pickup-world.jpg)
*Pictos are ground loot, boss drops, and merchant stock, and thematically they're salvage: most of what you wear was carried by a previous, dead expedition. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Luminas: win 4 battles, keep the passive forever

The mechanic that turns the inventory into a curriculum: **fight 4 battles with a Picto equipped and its passive is "learned" as a Lumina.** From then on, *any* character can equip that passive without the Picto, paying its cost in **Lumina Points**, a per-character pool that grows 1 point per level and can be permanently extended with a consumable (Colour of Lumina, spent at the camp Curator).

![Inventory showing the Colour of Lumina consumable](/images/clair-obscur-expedition-33/inventory-tints-lumina.jpg)
*"Can be consumed to give an additional Lumina Point to a character." The budget itself is a lootable, spendable object. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

Lumina costs range from 1 point (Dodger, basic utilities) to 40 (endgame build-defining effects like Energy Master), so the pool is a real [`loadout-as-budget`](/concepts/loadout-as-budget) instance: a level-50 character fields either a couple of premium passives or a swarm of cheap ones. There is no slot cap, only the point budget.

![Character sheet with weapon, Pictos, and Lumina budget](/images/clair-obscur-expedition-33/character-sheet-gustave.jpg)
*The whole build on one screen: weapon, three Pictos, six skills, and the Luminas counter (0/2 at level 2: the budget starts tiny). Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Why the two-layer design is clever

1. **It forces rotation.** Optimal play is to keep unlearned Pictos equipped, so your "best in slot" is always temporarily whatever you haven't mastered yet. The game teaches its own catalog. This is Final Fantasy IX's equipment-ability learning, rebuilt with a per-item counter instead of AP grinding, and it's why the pattern tag here is `equip-to-learn`.
2. **It converts loot into permanent account-wide vocabulary.** A Picto found in hour 3 is still contributing to the level-90 endgame build as a 1-point Lumina.
3. **It splits stats from passives cleanly.** Late game, Pictos are chosen for stat lines while the passive layer is composed freely from the Lumina library: two decisions instead of one compromised decision.
4. **It scales into the endgame's break-the-game culture.** The 9,999 damage cap is itself lifted by a Lumina (Painted Power), so even the ceiling of the damage math is an equippable, opt-in choice. What the community did with that is covered in [design tensions](./design-tensions#let-them-break-it).

The cost of the design surfaced post-launch: managing dozens of Pictos and per-character Lumina loadouts outgrew the UI, and Sandfall shipped **Lumina Sets** (loadout presets) in patch 1.5.0. Budget systems this expressive need loadout management tooling from day one.

## Patterns this exemplifies

- [`loadout-as-budget`](/concepts/loadout-as-budget): Lumina Points are a per-character numeric budget with expandable capacity and wildly non-uniform item weights (1 to 40).
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout): 3 Picto slots, single-copy equipping across the party, and every premium Lumina crowding out a dozen cheap ones.
- `equip-to-learn`: passives are learned by fighting with the item equipped, so the inventory doubles as a skill curriculum.
