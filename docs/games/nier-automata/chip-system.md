---
title: "Nier: Automata — Plug-in chips"
type: game
game: nier-automata
patterns:
  - loadout-as-budget
  - bonus-with-drawback
  - opportunity-cost-loadout
  - diegetic-ui
---

# Plug-in chips

The loadout. **Every passive ability the player has is a Plug-in Chip slotted into a fixed Storage budget. The chips that show your HP bar, EXP bar, and minimap are *also* Plug-in Chips. So is the chip that prevents the operating system from crashing.**

Removing them does what they say.

![Plug-in Chips: Set Type B configuration screen — left column lists chip categories (Equipped Chips, All Chips, System, Attack [highlighted], Defense, Support, Hacking, Optimize). Centre shows a horizontal coloured bar representing storage allocation by category. Right panel shows 9S Lv 33 with stats. Top-right reads "Storage Used: 68/72"](/images/nier-automata/chip-categories.jpg)
*The canonical chip configuration screen. Top-right: **Storage Used: 68/72** — the loadout budget. Categories: System (the OS chip, mandatory), Attack, Defense, Support, Hacking. Each chip costs storage; the total can never exceed the budget. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=150).*

## What's in a chip

The chip catalogue splits into seven categories. The honest framing: **everything that is a number, a HUD element, or a quality-of-life feature is in here.**

| Category | Examples | Notes |
|---|---|---|
| **System** | OS Chip | Mandatory. **Removing it kills 2B/9S.** Mentioned later. |
| **Attack** | Weapon Attack Up, Ranged Attack Up, Shock Wave, Last Stand, Critical Up | Combat damage modifiers. Cost scales with bonus tier. |
| **Defense** | Max HP Up, Anti Chain Damage, Reset, Damage Absorb | Survivability. |
| **Support** | Auto-Heal, Auto-Use Item, Item Scavenge, Drop Rate Up, EXP Gain Up | Quality of life + reward shaping. |
| **Hacking** (9S only) | Hijack Boost, Stun, RAM Defense | Active during the hack minigame. |
| **HUD chips** (cosmetic — actually System slot) | HP Gauge Display, EXP Display, Minimap Display, Damage Numbers, Enemy HP Bar, Sound Indicator, Score Display | **These chips are how the game draws your HUD.** Unequip them and that part of the screen disappears. |
| **Auto-** chips | Auto-Attack, Auto-Battle, Auto-Move, Auto-Aim, Auto-Use Item | Hand control of the game over to the AI to varying degrees. Used to enable Easy mode-style accessibility. |

The HUD-chip line is the philosophical pivot. **The HP bar in the corner of your screen is a chip you chose to install.** So is the minimap. So is the *operating system itself.*

## The Storage budget

Storage is the loadout's central number. Starting Storage is around 64; the maximum is 256, reached by paying ascending Funds (G) costs at the maintenance shop to expand it.

| Storage | When |
|---|---|
| ~64 | Game start |
| ~128 | Mid-route B |
| 256 | Late game, fully upgraded |

Most chips cost between 1 and 16 storage. The cost scales with both the chip's level (+1, +2, +3 — better effect, more storage) and its quality (random base cost — duplicates of the "same" chip can have very different storage costs).

So: a Lv 33 build with 72 storage and 68 used is *almost* full, mid-game, on a real player save.

![Plug-in Chips → Attack list. Each chip row shows name and storage cost in brackets: Ranged Attack Up +1 [6], Ranged Attack Up +1 [11], Ranged Attack Up +3 [17], Shock Wave +2 [8], Shock Wave +2 [12], Shock Wave +3 [11], Shock Wave +3 [11], Last Stand +1 [7], Last Stand +1 [9]. Tooltip at bottom: "Increase power of projectile attacks by 4%"](/images/nier-automata/chip-list-attack-detail.jpg)
*The same chip type appears at multiple storage costs and tiers. Two "Ranged Attack Up +1" chips here cost 6 and 11 storage respectively — the cheaper one is more *efficient* but rare. Optimization is partly chip selection, partly chip-cost RNG. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=150).*

## Fusion — the chip economy's pressure valve

Two duplicate chips can be fused into a single chip one tier higher (+1 → +2 → +3) at a Maintenance Shop. Three chips of tier N produce one tier N+1.

This means a played-through inventory generates a slow currency of **storage savings**: you find a Weapon Attack Up +0 [11], you fuse three of them into a +1 [9 or 7 or 6], you fuse three of those into a +2 with even smaller storage cost. Better builds emerge from compressing your existing chips, not from finding new ones.

![Plug-in Chips → Attack list with the Move / Remove popup open over a Shock Wave +2 [8] chip. Storage Used: 68/72. Same status panel right](/images/nier-automata/chip-attack-list-with-popup.jpg)
*The Move / Remove popup is the fusion gateway — Move sends the chip to a different Set, Remove discards it (and frees storage). The Sort: Equipped header at top is itself relevant: with this many chip duplicates, sorting is a real ergonomic problem. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=150).*

## The OS Chip — the load-bearing joke

There is one chip you can equip and unequip that the game will not stop you from removing.

The **OS Chip** is mandatory for the android to function. The chip menu lets you select it and choose Remove. The game asks "Are you sure?" If you say yes, **2B (or 9S) instantly dies, the screen cuts to a Game Over, and your save is reverted to the last checkpoint.**

This is the most quoted Yoko Taro flourish in the chip system. It is dismissable as a gag — but it makes one structural argument: **the player's character is software.** The OS is not a metaphor. The HUD is not a frame. They are systems running on the android, and what runs can be uninstalled.

The accidental version of this happens later — chips drop to the ground when you die, and if you die a second time before recovering them, they're permanently gone. *Including* your equipped HUD chips. Some players experience the un-rendered minimap as a glitch before they realise it's the consequence of a previous death.

## Bonus-with-drawback through composition

Most individual chips are pure upgrades — there's no chip that says "+10% damage, but you take 20% more damage". The drawback layer is **emergent from the storage budget**:

- Equipping Auto-Heal (~16 storage) means foregoing a Critical Up.
- Showing the Minimap (~4 storage) means a smaller Auto-Use Item.
- Showing damage numbers means *less* Last Stand defence.

So [`bonus-with-drawback`](/concepts/bonus-with-drawback) here is **structural**, not per-item. The drawback is what you couldn't fit. This is the same logic as Hollow Knight charms, or [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) generally — but Automata uniquely puts the *UI* into the same budget.

The closest analogue elsewhere in this knowledge base: Sparklite's patch-board grid forces you to fit Tetris-shaped patches in a limited grid (spatial budget); Hollow Knight's notches give you a pure integer budget; Automata is in between — integer budget like Hollow Knight, but with the UI itself as a participant.

## Two chip sets, swappable on the fly

The chip menu has **Set Type A / B / C** — three saved loadouts you swap between mid-game from the menu. So a player typically configures:

- **Set A**: combat-focused. Heavy on Attack chips. HUD pared down.
- **Set B**: exploration. Item Scavenge + Auto-Use Item + Minimap + Damage Numbers (all the QoL).
- **Set C**: bossing or hacking-heavy missions.

Swap is instant. So there's no real cost to multiple builds *if* you've already paid the storage for the chips. The constraint is *one budget per set*, not three budgets total.

## What this teaches

- **The HUD is a system. Treat it as one.** Most games hard-code the minimap and HP bar. Automata's choice to put them in the loadout creates: (a) accessibility — show only what you want to see, (b) incentive — players who don't need a minimap can spend that storage on combat, (c) commentary — perception itself is configurable.
- **Diegetic UI lands harder when the game *commits*.** Other games render the HUD diegetically (helmets, holograms) without making it interactive. Automata makes it *removable*, which is the difference between aesthetic and mechanic.
- **Fusion economies create slow optimisation.** A player who's barely paid attention to chip costs at hour 5 will notice in hour 25 that the same chip exists in their inventory at 6 storage *and* 17 storage, and they will spend an hour fusing duplicates. Free engagement. No new content shipped.
- **Mandatory ≠ unequippable.** The OS Chip is *mandatory*, but the menu doesn't hide the unequip option. Letting the player do the wrong thing — and immediately punishing it — is more interesting than greying out the choice.

## Patterns this exemplifies

- [`loadout-as-budget`](/concepts/loadout-as-budget) — pure integer storage budget, items have variable costs.
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — every chip equipped is a chip not equipped.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — emerges from the budget, not from per-chip drawbacks.
- `diegetic-ui` — HUD elements are themselves equippable. Uncurated; only Automata in this knowledge base does this fully. Adjacent-but-distinct from "diegetic interface" in *Dead Space*-style fiction.
