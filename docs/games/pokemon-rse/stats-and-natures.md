---
title: "Pokémon RSE — Stats: IVs + EVs + Natures + Abilities"
type: game
game: pokemon-rse
patterns:
  - permanent-stat-profile
  - bonus-with-drawback
  - loadout-as-budget
---

# Stats: IVs + EVs + Natures + Abilities

Gen 3 is the generation where competitive Pokémon's math was finalised. Every individual Pokémon now has a **permanent stat profile** assembled from four orthogonal layers:

| Layer | What it does | When set | Visibility |
|---|---|---|---|
| **Base stats** | The species' baseline in each of 6 stats (HP, Atk, Def, SpA, SpD, Spe) | Fixed at species design time — Charizard is Charizard | Pokédex entry |
| **IVs (Individual Values)** | Hidden 0–31 per stat — genetic variation within a species | At capture / hatch — random | Hidden until much later in the series |
| **EVs (Effort Values)** | 0–252 per stat, max 510 total — earned by defeating opponents | Accumulates through play, capped | Hidden — visible only via in-game judges |
| **Nature** | One of 25; gives +10% to one stat / −10% to another (or neutral) | At capture / hatch — random | Visible on Trainer Memo |
| **Ability** | Passive effect (Blaze, Levitate, Drought, etc.) | Random between species' 1–2 options at capture | Visible on Pokémon Info screen |

The combination produces a profile that is **fixed for that individual Pokémon** and very rarely manipulable after the fact. The Pokémon you have *is* the Pokémon you have.

![POKéMON SKILLS panel — Torchic Lv 10. ITEM: NONE / RIBBON: NONE. Stats: HP 29/29, ATTACK 18, DEFENSE 13, SP. ATK 20, SP. DEF 17, SPEED 12. EXP. POINTS 733, NEXT LV. 9](/images/pokemon-rse/pokemon-skills.jpg)
*The visible stat panel — six stats, integer values, current/max HP. Behind these numbers, four hidden layers (Base + IV + EV + Nature) determined the result. The player sees the final number; only competitive players go looking for the layers underneath. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1708).*

## The stat formula

Each stat is computed:

```
Stat = floor((2 × Base + IV + EV/4) × Level / 100) + Level + 10   (HP)
Stat = floor((2 × Base + IV + EV/4) × Level / 100 + 5) × Nature   (others)
```

So at Lv 100:
- A 31-IV vs 0-IV difference: up to **31 stat points**.
- A maxed 252-EV stat vs 0-EV: up to **63 stat points**.
- A +10% Nature: up to ~**30 stat points** depending on base.

Total: a "perfect IV / max EV / +Nature" Pokémon can have ~**125 more in one stat** than a "trash IV / 0 EV / −Nature" one. This is the gap that motivates competitive breeding.

## Abilities — the species-defining layer

![POKéMON INFO panel — Torchic. PROFILE: OT/Edd, IDNo.27459. **TYPE: FIRE.** **ABILITY: BLAZE — "Ups FIRE moves in a pinch."** TRAINER MEMO: "**SASSY** nature, met at Lv 5, ROUTE 101."](/images/pokemon-rse/pokemon-info.jpg)
*The Gen 3 signature shot. Type, Ability, and Nature are all introduced here on one screen. Each one is set at capture and effectively unchangeable. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1708).*

Abilities are passive effects that fire automatically. Most species have **two possible Abilities**, and the one a specific Pokémon has is rolled when it's caught. Three categories:

- **Stat-modifiers:** *Huge Power* (doubles Attack), *Pure Power*, *Marvel Scale* (1.5× Defense when statused), *Guts* (1.5× Attack when statused).
- **Status-immunities:** *Levitate* (Ground immunity), *Water Absorb*, *Volt Absorb*, *Flash Fire*, *Lightning Rod*.
- **Effect-on-event:** *Intimidate* (drops opponent's Attack on switch-in), *Sturdy* (survives KO from full HP), *Rough Skin* (returns damage on contact).

The most important Gen 3 abilities are the **weather summoners**:

- **Drought** (Groudon): summons permanent sun → Fire moves 1.5×, Water moves 0.5×.
- **Drizzle** (Kyogre): summons permanent rain → Water 1.5×, Fire 0.5%.
- **Sand Stream** (Tyranitar): summons permanent sand → Rock SpD +50%, all non-Rock/Ground/Steel take chip damage.

These changed competitive Pokémon overnight. **Weather Wars** — the multi-year competitive era of teams built around one of these abilities — started in Gen 3 and dominated through Gen 6. See [weather-and-battle-modifiers](./weather-and-battle-modifiers).

## Natures — the cute drawback

There are **25 natures** in a 5×5 grid:

| Nature | +10% | −10% |
|---|---|---|
| Adamant | Attack | Sp.Atk |
| Modest | Sp.Atk | Attack |
| Jolly | Speed | Sp.Atk |
| Timid | Speed | Attack |
| Bold | Defense | Attack |
| Calm | Sp.Def | Attack |
| Impish | Defense | Sp.Atk |
| Careful | Sp.Def | Sp.Atk |
| **Hardy / Docile / Bashful / Quirky / Serious** | (neutral) | (neutral) |

Five natures are neutral; the other twenty trade. The trade is small — ~10% in one stat for −10% in another — but on a stat that's already been maximised by IVs and EVs, it's the difference between out-speeding an opponent or being outsped.

Functionally, each Pokémon's nature is **`bonus-with-drawback`** baked in at the individual level. A Modest Charizard is a special attacker; an Adamant Charizard is a physical attacker; the *same species* plays differently depending on which one you caught. And you can only catch one nature at a time.

The player-facing UI shows the nature explicitly ("SASSY nature") on the Trainer Memo. The +/- mapping is *not* shown in-game. The competitive community had to reverse-engineer the nature chart from leaks and testing — a formative moment in the still-young competitive scene.

## EVs — the only accumulated layer

EVs are the only piece of this profile that's not random at capture. They accumulate through play:

- Defeat a Zubat → +1 Speed EV.
- Defeat a Tentacruel → +2 Sp.Def EV.
- Defeat a Geodude → +1 Defense EV.
- (Each species awards specific EVs to specific stats, on a fixed table.)

So **where you grind matters.** A casual player who levels their Charizard against random encounters ends up with a Charizard with chaotic EVs (some Atk from Mankeys, some HP from Wooper, some Speed from Zubat). A competitive player goes to Route 113 to fight Slugmas (+1 Sp.Atk per kill) for ~250 kills to max out one stat.

The cap is **252 per stat / 510 total**, so the optimal allocation is **252 + 252 + 6** across two priority stats. The 6-EV "leftover" is a famous edge case that competitive players spend on a third stat for tiny benchmarks.

This is `loadout-as-budget` operating on the individual level: 510 EVs is the budget, six stats are the slots, the player decides where to spend.

## The 4-move slot — the visible loadout

At any time, a Pokémon knows **at most 4 moves**. Pokémon have a learnset (~30+ moves over their lifetime), but only 4 are equipped. Adding a 5th means **forgetting** an existing move, permanently.

![BATTLE MOVES — Torchic Lv 10's full moveset visible: Scratch, Growl, Focus Energy, Ember. Three are Normal-type, one is Fire (Ember). PP gauges show usage budget per battle: 35/35, 40/40, 30/30, 25/25](/images/pokemon-rse/battle-moves.jpg)
*The 4-slot moveset is the most visible loadout-as-budget in the franchise. PP (Power Points) is a per-move use limit — strong moves have low PP. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1708).*

The 4-slot constraint is the most-felt ongoing decision. Every level-up that offers a new move forces a real trade: **drop coverage, drop status, drop a finisher, or skip the new move.** This is why moveset advice is a core competitive activity — every Pokémon's "set" is a 4-move recipe.

It is also one of the cleanest examples of [`loadout-as-budget`](/concepts/loadout-as-budget) at the smallest possible grain: 4 slots, hundreds of moves, type-tagged. The constraint is the design.

## What this teaches

- **A permanent profile per individual is a 25-year-old design that still works.** Every modern monster-collector copies this template. The trick is the *unalterability*: re-rolling means starting over with that creature, which is a cost players will absorb when the upside is a build that beats theirs.
- **Hidden layers reward the curious without punishing the casual.** A child can finish Emerald with no awareness of IVs or EVs. A competitive player obsesses. The game scales smoothly between modes because the depth is *invisible* unless sought.
- **A 4-slot loadout is enough.** Pokémon's 4-move limit has not been raised in 27 years. The constraint is what makes coverage interesting.
- **Natures are a clean version of `bonus-with-drawback`.** +10% / −10% is small enough to feel like personality and big enough to matter at the top end. The bilingual phrasing as a personality trait ("Sassy nature") softens what is, mechanically, a stat tradeoff.

## Patterns this exemplifies

- `permanent-stat-profile` — the four immutable layers per individual. Uncurated; canonical case in this knowledge base.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — Natures (+10%/−10%) and Choice items (boost one stat, lock to one move) are explicit. Most Abilities are pure upside; some are tradeoffs (Slow Start, Truant).
- [`loadout-as-budget`](/concepts/loadout-as-budget) — at two grains: the 4-move moveset (per Pokémon) and the 510 EVs across 6 stats (per Pokémon). Both produce real opportunity cost.
