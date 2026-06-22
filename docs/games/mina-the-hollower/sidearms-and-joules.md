---
title: "Mina the Hollower — Sidearms & Joules"
type: game
game: mina-the-hollower
patterns:
  - opportunity-cost-loadout
---

# Sidearms & Joules

The **sidearm** is Mina's secondary tool — a swappable gadget in its own HUD slot, powered by a resource called **Joules**. Where the [weapon](./combat-and-weapons.md) is your constant melee verb and the [burrow](./hollowing.md) is your movement verb, the sidearm is the *situational* verb: a burst of damage, a panic button, or a traversal key you reach for when the basic kit isn't enough.

You carry **one sidearm equipped at a time** and swap your loadout between encounters. So the sidearm slot is a single high-value decision, not an accumulating arsenal — which is what makes it a [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) slot rather than a hotbar.

## The three families

Sidearms sort into three roles, and which one you slot reshapes what the run is about:

| Family | What it does | Examples |
|---|---|---|
| **Offensive** | Direct damage / ranged burst | Gyro Dagger (thrown, returns), Volt Hatchet, Bounding Bombs |
| **Utility** | Defense, control, support | Deflector Parasol (block/reflect), Beckoning Collar (pull/aggro), Mist Jar |
| **Traversal** | Movement & exploration keys | Angler's Raft (cross water), Drill Driver, Iron Steed (mount/speed) |

The traversal family is the Metroidvania-gating layer: a sealed area you bounced off in hour three opens once you own the raft or the drill, so sidearms double as the game's "items" in the Zelda sense: each one is both a combat option *and* a key. The Seismic Belt fuses the two — an offensive tool that only fires through the movement verb:

![A sidearm vendor selling the Seismic Belt: "Press B while burrowing to emit a damaging pulse," with Bonestone prices](/images/mina-the-hollower/sidearm-shop-seismic-belt.jpg)
*The Seismic Belt keys directly off the [burrow](./hollowing.md): "Press B while burrowing to emit a damaging pulse." A defensive verb becomes an AoE attack — the sidearm doesn't add a parallel system, it deepens the one Mina already revolves around. Sidearms are bought (and stocked) at vendors with Bonestone, or found in chests and quest rewards. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

## Joules — the fuel, and the cost

Sidearms run on **Joules**. Each activation spends Joules; you replenish them through play (drops, combat), so leaning on a powerful sidearm is rate-limited by your Joule economy rather than free. The HUD shows the current sidearm and its Joule count next to the weapon icon.

The interesting part is what happens at the boundary with [death](./death-and-sparks.md): sidearms "carry real economic cost through Joules and death penalties." A sidearm is **burst power you pay for** — Joules to use, gold to buy, and risk to rely on. That keeps the basic loadout (weapon + burrow + shield) the spine of the game; the sidearm is the spice you reach for at a cost, not the meal.

![A Provisioner shop — a towering ghoul shopkeeper looming over Mina: "Welcome to the Shoppe. Ya' here to stock uppe?"](/images/mina-the-hollower/shop-provisioner.jpg)
*Restocking at a Provisioner. Vendors are where the sidearm and consumable economy lives — and, like every shopkeeper on Tenebrous Isle, they're rendered as a grotesque to keep even the menus inside the [gothic-horror fiction](./world-and-newspaper.md). Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

## Why one slot, not a belt

Restricting Mina to a single equipped sidearm is the design making a [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) decision out of what could have been a hotbar:

- **It forces a read of the encounter.** Heading into a ranged-enemy gauntlet? Slot the Deflector Parasol. A boss that punishes melee range? Slot the Gyro Dagger. You're committing to a *plan*, not carrying answers to everything.
- **It keeps the basic kit central.** If you could carry six sidearms, the melee + burrow core would become optional. One slot means the sidearm supplements the spine; it never replaces it.
- **It makes vendors matter.** Because you can only field one, *which* sidearm you buy and main is a genuine spend of [Bones / Bonestone](./bones-and-progression.md), not a checklist purchase.

This is the same lesson the [trinket layer](./trinkets.md) teaches at a different grain: power in this game is rationed by slots, and the player's job is to decide which risks to be equipped for.

## Patterns this exemplifies

- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — one equipped sidearm at a time; slotting a defensive tool means *not* slotting a damage tool for that stretch.
- See [`bonus-with-drawback`](/concepts/bonus-with-drawback) at the [trinket](./trinkets.md) and [combat](./combat-and-weapons.md) layers for the explicit upside/downside version of the same commitment pressure.
