---
title: "Mina the Hollower: Bones & progression"
type: game
game: mina-the-hollower
patterns:
  - currency-as-progression
---

# Bones & progression

Mina has two currencies, and keeping them straight is the key to the economy:

- **Bones**: the green-skull currency enemies drop. This is your **XP and your spending money in one**. You bank Bones into levels ("Boning Up") and the same Bones are what you ultimately put at risk when you [die](./death-and-sparks.md).
- **Bonestone**: a scarcer premium currency. This is what **vendors** charge for the big stuff: weapon/shield upgrades, sidearms, trinkets.

The split keeps grind-able power (Bones, from any enemy) separate from gated power (Bonestone, from exploration and bosses), so you can always *level* by farming but you can't *buy out the shop* by farming.

## Boning Up: three upgrade tracks

Bones are spent at the [Underlab / save points](./death-and-sparks.md) to level three parallel tracks:

![The character screen at Ossex: High Street, showing three upgrade tracks (Attack LVL 7+1, Shield LVL 7, Plasma Vial LVL 7), each "7400 Bones" to the next level](/images/mina-the-hollower/character-stats-upgrade-tracks.jpg)
*Three competing tracks: **Attack** (main weapon power), **Shield** (defense / parry), **Plasma Vial** (heal strength). Each shows the Bones cost to the next level (all 7400 here), so levelling is a choice between offense, defense, and survivability with one shared currency. The Attack track reads "LVL 7**+1**" because an equipped [trinket](./trinkets.md) is adding a level on top. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

![Character screen detail: "Attack Level 7 / Next level at 7400 Bones / The power of your main attack"](/images/mina-the-hollower/character-stats-attack-level.jpg)
*Each track states its cost and what it buys in one line: "The power of your main attack." Costs climb per level, so late upgrades are real commitments and the Attack-vs-Shield-vs-Vial decision keeps biting the whole game. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

Because all three tracks draw on the **same** Bones pool and costs escalate, you can't max everything in step. Early on you're choosing whether to become a glass cannon (pump Attack), a wall (pump Shield), or a marathoner (pump Plasma Vial). That choice rhymes with the [trinket](./trinkets.md) and [weapon](./combat-and-weapons.md) decisions. The whole game is one long "where does the next bit of power go?"

## Bonestone: the vendor currency

Bonestone is what shops want. It buys the upgrades that *aren't* on the three level tracks: new sidearms, trinkets, and weapon-skill unlocks like the parry counter:

![A vendor's wares with Bonestone prices, selling "Upgrade: Grave Counter: Parry with good timing to unleash a stronger attack"; prompt reads "Y: Use Bonestone"](/images/mina-the-hollower/shop-upgrade-grave-counter.jpg)
*Vendor stock priced in Bonestone (4000 / 3500 / 3000…). Bonestone is scarcer than Bones and isn't farmable from trash mobs, so vendor purchases are deliberate, exploration-funded choices. The merchants themselves are part of the worldbuilding, a [grim cast](./world-and-newspaper.md) of ghouls and oddities. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

## The economy in one diagram

```
Enemies ─► Bones (XP + cash)
              ├─ Boning Up at the Underlab → +1 Attack / Shield / Plasma Vial level
              └─ AT RISK on death: kept while you have Sparks, forfeited if you die with none

Exploration / bosses ─► Bonestone (premium)
              └─ Vendors → sidearms · trinkets · weapon-skill upgrades (e.g. Grave Counter)

Spark containers (found) ─► more Sparks  → bigger death buffer (see Death & Sparks)
```

The wiring that matters: **Bones are simultaneously your progress and your stake.** Every Bone you're carrying is a level you haven't banked yet *and* the thing you'll lose if you get greedy. That single overlap is what makes the [death system](./death-and-sparks.md) tense without needing a separate "souls" currency: your XP *is* your bloodstain.

## Patterns this exemplifies

- `currency-as-progression` *(uncurated)*: one currency (Bones) doubles as experience, spending money, and death stake; a second, scarcer currency (Bonestone) gates vendor power so farming can't trivialise it. Related in spirit to [`currency-as-crafting`](/concepts/currency-as-crafting), but here the twist is the *overlap* of XP and risk rather than the elimination of generic gold.
