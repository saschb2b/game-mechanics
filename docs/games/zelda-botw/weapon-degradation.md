---
title: "Breath of the Wild — Weapon degradation"
type: game
game: zelda-botw
patterns:
  - weapon-degradation
  - bonus-with-drawback
---

# Weapon degradation

The most controversial mechanic in BOTW. **Every melee weapon, bow, and shield Link picks up has a hidden durability counter, and breaks after a finite number of hits.** No repair tool. No "permanent weapon" except, eventually, the Master Sword (which itself "runs out of energy" and recharges, not breaks).

Aonuma defended it. Players argued for years. The system is doing more design work than its critics acknowledge — and the cost is real.

![Inventory → Weapons tab. 18 weapons listed in a grid; each shows a durability number (5/30, 20/50, 30/50, 10/10, 1/1, 50/50, 50/50, 55/55, 40/40, 42/42, 26/26, 19/19, 15/15, 14/14, 35/35, 18/18). "Edge of Duality" selected: 30/50 durability with green Durability Up modifier. Description: "A curious double-edged sword crafted using Sheikah technology"](/images/zelda-botw/inventory-weapons.jpg)
*The weapon menu's center constraint: each weapon has a remaining-uses count visible as a number on the icon. The "Edge of Duality" with **Durability Up** modifier displays 30/50 durability — most picked-up weapons sit in the 5-50 hit range. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=35).*

## The numbers

Most weapons have 20–60 base durability. A "hit" is roughly one swing landing on a hard surface (enemy, rock, tree); some swings consume more (heavy attacks, charged attacks).

Categories:

| Tier | Examples | Durability | Damage |
|---|---|---|---|
| Improvised | Tree branch, Boko club | 4–10 | 2–4 |
| Knight | Knight's Broadsword, Soldier's Spear | 25–40 | 14–24 |
| Royal | Royal Broadsword, Royal Halberd | 36–55 | 36–48 |
| Ancient (DLC, crafted) | Ancient Bladesaw, Ancient Bow | ~55+ | 50–70 |
| Legendary | Lynel Crusher, Royal Guard's Sword | 14–60 (Royal Guard's: 14, glass-cannon) | 60+ |
| **Master Sword** | (unique) | "energy" recharges in 10 minutes | 30 base / 60 vs Calamity |

Modifiers (random rolls on weapons taken from defeated enemies, or earned from shrines):

- **Durability Up** (+25 hits)
- **Attack Up** (+5 to +20)
- **Critical Hit** (chance for last hit to crit)
- **Long Throw** (further on throw)

So an "Edge of Duality" 30/50 with Durability Up = ~30 of 75 hits remaining.

## Aonuma's stated rationale

> "Having a nice weapon that will break after a certain number of uses, that forces players to think about: when am I going to use it? What enemies am I going to use it on? It encourages the player to strategize."
>
> — **Eiji Aonuma**, paraphrased from interviews summarised in [ScreenRant](https://screenrant.com/breath-wild-repair-weapon-durability/) and similar coverage

> "We added weapon durability to draw players into the open world — to encourage them to challenge enemies and claim weapons to use on their adventure."
>
> — **Hidemaro Fujibayashi** (paraphrased)

The two stated design goals:

1. **Force per-encounter weapon decisions.** Players save the good weapon for the boss; use the trash weapon on the chaff.
2. **Drive engagement with combat encounters.** If weapons didn't break, the player would commit to one good weapon and never engage Bokoblin camps. Breakage is what *generates the demand* for camp-clearing.

Both goals are real and observable in play. The system is doing what it claims to do.

## Why it's controversial anyway

Three persistent player complaints, all worth taking seriously:

### 1. Reward-trivialisation

Open a chest in a hidden cave after a 20-minute climb. Get a Knight's Broadsword that will break in 30 hits. The reward feels *transient* — the player can't keep it. The tradeoff between exploration effort and reward permanence becomes negative-feeling for many players.

### 2. Cooking + planning friction

Players who *want* to engage with weapon-tier strategy end up:

- Constantly opening the menu mid-fight to swap weapons.
- Avoiding combat to preserve weapon durability ("hoarding").
- Force-completing fights with bare fists or thrown weapons to save the good gear.

The friction is not the design's intent — Aonuma wanted strategy, not menu-juggling — but the player's optimal strategy is to *minimize combat*, which is the opposite of the stated goal.

### 3. The Master Sword compromise

The legendary, lore-canonical Master Sword is the one weapon that doesn't break. But it does **run out of energy** after ~30 hits, becoming unusable for 10 minutes. This is durability with extra steps; many players read it as "the team admitted breakage is bad but couldn't fully back out."

## What the system actually does well

Despite the friction, the system produces three real design wins:

- **Combat pacing.** Without breakage, players would stick to one weapon class. With breakage, every fight forces variety — you'll cycle through swords, spears, two-handers, claymores, and bows over a single hour, learning each weapon's animations.
- **Exploration justification.** Every camp / shrine / chest is *worth visiting* because the loot has utility. A non-breaking system means most chests become trivial; a breaking system keeps them meaningful.
- **Difficulty curves.** The Master Sword being *limited* is what allows late-game enemies (Lynels, Guardians) to be threatening at all. If the player had a permanent 60-damage sword, they'd one-shot everything.

The system is a `bonus-with-drawback` at the engagement-loop layer — every weapon you find is also a clock running down. The drawback is what makes the bonus matter.

## The Tears of the Kingdom answer

In the 2023 sequel, Tears of the Kingdom, the Fuse mechanic lets the player attach materials to weapons to **reinforce + repair** them. Aonuma has called this the "answer" to the durability complaint: weapons still break, but you can extend them via fusion. The system is an evolution; the underlying breakage stays.

Worth flagging as evidence that the team *agreed* the original system needed a friction-reducer, but did *not* abandon the principle.

## What this teaches

- **Reward-permanence and engagement-pressure trade off.** A breakable weapon drives engagement with the world; a permanent weapon trivialises that engagement. There's no free option; pick one and commit.
- **A reload-friction mechanic is hostile to its own goal.** The stated goal was "strategic weapon use." The actual play behaviour was "open menu every 30 seconds." If your strategy mechanic requires menu-opening, the strategy is being eaten by the friction.
- **Defending a controversial system is a real cost — pay it deliberately.** Aonuma has spent ~7 years defending durability in interviews. The PR cost compounds. If you ship a controversial system, you're committing to the public discourse around it indefinitely.
- **A "limited" legendary item works better than a "breakable" common item.** The Master Sword's energy mechanic is *less* annoying than weapon breakage even though it's mechanically similar. The framing matters: "recharges" reads as ritual, "breaks" reads as loss.

## Patterns this exemplifies

- `weapon-degradation` — each weapon has a hidden hit-count and breaks. Uncurated; canonical case.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — every weapon found is *also* a depleting resource. Found-resource-as-cost is the structural form.

## Adjacent patterns

- `loot-as-engagement-pressure` — the broader category. Diablo's degrading rares, Dark Souls's repair-cost weapons. BOTW's version is the most aggressive and the most disliked.
