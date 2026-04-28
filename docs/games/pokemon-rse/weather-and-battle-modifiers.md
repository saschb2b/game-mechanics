---
title: "Pokémon RSE — Weather, doubles, and held items"
type: game
game: pokemon-rse
patterns:
  - weather-as-global-modifier
  - bonus-with-drawback
---

# Weather, doubles, and held items

Three battle layers Gen 3 either introduced or reworked. They look small individually; together they doubled the surface area of the combat system and locked in the modern competitive shape.

![Battle scene — wild Mudkip Lv 5 (top-left HP bar) vs the player's Torchic Lv 7 (bottom-right with HP 11/23 + EXP bar). Bottom action menu: FIGHT / BAG / POKéMON / RUN. Background: simple striped sky/ground](/images/pokemon-rse/battle-hud.jpg)
*The default battle layout: two Pokémon, four actions (FIGHT / BAG / POKéMON / RUN). Everything weather, doubles, and held items add operates inside this frame. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1708).*

## Weather as a global state

Weather existed in Gen 2 (Sunny Day, Rain Dance, Sandstorm as 5-turn moves you cast yourself). Gen 3 made it a **persistent ability-driven layer**:

| Weather | Boosts | Reduces | Ongoing effect |
|---|---|---|---|
| **Sun** | Fire 1.5× | Water 0.5× | Solar Beam fires in 1 turn (was 2) |
| **Rain** | Water 1.5× | Fire 0.5× | Thunder accuracy 100% (was 70%) |
| **Sandstorm** | Rock SpD ×1.5 | — | Damages all non-Rock/Ground/Steel for 1/16 HP each turn |
| **Hail** | (none — Gen 4 added Blizzard 100% acc.) | — | Damages all non-Ice for 1/16 HP each turn |

The change in Gen 3: legendaries Groudon and Kyogre have **abilities that summon their weather permanently** (Drought / Drizzle). And Tyranitar's **Sand Stream** does the same for sandstorm.

So weather stops being a 5-turn move you spend a slot on — it becomes a *team identity*. Build a Drizzle team (Kyogre + Water-type teammates) and every turn of every battle is rain. Build a Sand team and your Tyranitar is +50% Special Defense for free. The rest of the team is *built around the abilities*.

Competitive Pokémon's first major meta — **Weather Wars** — runs from Gen 3 (when Drought / Drizzle were introduced) until Gen 6 (when they were nerfed to 5-turn duration). Three full generations of competitive play structured around an emergent property of three abilities.

## Double Battles

Gen 3 introduced **2v2 battles**. Each side has two active Pokémon simultaneously. New mechanics:

- **Spread moves** — Earthquake hits both opponents AND your ally. Surf hits both opponents (and any ally, in Gen 3). Hyper Voice and similar hit both opponents only.
- **Targeted moves** — most single-target moves now require choosing a target. New depth: hit the partner instead of the threat to set up a switch?
- **Helping abilities** — Helping Hand (boost ally's next move), Follow Me (redirect attacks to self), Wide Guard (block spread moves), introduced or extended in Gen 3.

The standard mainline tournament format from Gen 3 onwards is **VGC — Doubles**. Single battles are widely played casually but Nintendo's official competitive format has been Doubles for over 20 years.

The key design payoff: doubles forces the player to *think two units at a time*, which makes positioning, sacrifice, redirect, and protect all real verbs. Single battles are tactical; doubles are positional.

## Held items as a sub-loadout

Each Pokémon can hold **one item**. Gen 2 introduced this; Gen 3 expanded it dramatically.

The categories that became competitive standards in Gen 3:

| Item type | Examples | Effect |
|---|---|---|
| **Choice items** | Choice Band | +50% Attack, but locked to the first move used |
| **Type-boost items** | Charcoal, Mystic Water, Magnet | +10% damage with one type's moves |
| **Status restorers** | Lum Berry, Chesto Berry | Auto-heal a status condition once |
| **HP/recovery** | Leftovers | Restore 1/16 HP per turn |
| **Switch/escape** | Smoke Ball, Shed Shell | Always escape battle / switch through Trapping abilities |
| **Damage-reducer** | Focus Sash (Gen 4) | Survive a one-shot KO at full HP |
| **Stat-rolls** | Macho Brace | 2× EV gain (with stat penalty) |

Choice Band is the canonical Gen 3 add: **+50% Attack, but you can only use the first move you select until you switch out**. A textbook `bonus-with-drawback`. Pokémon designed around Choice Band (Heracross, Salamence) become extreme physical attackers — at the cost of being locked into one move.

Held items effectively introduce a second 1-slot loadout per Pokémon. So the per-individual loadout becomes:

- **Moveset:** 4 slots, hundreds of options.
- **Held item:** 1 slot, hundreds of options.
- **Nature:** 1 of 25 (set at capture).
- **Ability:** 1 of 1–2 (set at capture).
- **EVs:** 510 across 6 stats.

Five orthogonal loadout decisions per Pokémon, before you've thought about your other five teammates.

## Why this generation specifically

Why did all three of these (weather-as-ability, doubles, expanded items) ship together in Gen 3?

The simplest explanation: **Game Freak was rebuilding the engine for GBA**. Going from Game Boy / Game Boy Color (Gen 1/2) to Game Boy Advance (Gen 3) gave them the headroom to add layers. Once they had Abilities (a new infrastructure for "passive effects"), weather-as-ability and Intimidate-on-switch-in fell out for free.

Junichi Masuda has framed Gen 3 as the engine generation — a clean rewrite that future gens would build on. Gen 4 added the physical/special split; Gen 5 added more weather (hail-Snow Warning, etc.); Gen 6 added Mega Evolutions and Fairy. But the *architecture* is Gen 3's.

## What this teaches

- **A "global state" layer multiplies the design surface cheaply.** Weather adds one parameter to the battle loop and reshapes the entire metagame. The cost to the engine is small; the cost to the metagame is enormous.
- **Per-unit single-slot items create a sub-loadout for free.** Held items are 1 slot, but with hundreds of options, they're a real decision — and the decision is *per Pokémon*, so the team's items are six independent picks.
- **Multi-target combat opens a positioning game inside a turn-based system.** Doubles lets you trade tempo, redirect aggression, and sacrifice — verbs that don't exist in single battles. The tactical depth roughly doubles.
- **Engine generations are real.** Pokémon's "decade-defining" mechanics (Abilities, weather-as-ability, doubles) all shipped in one generation because that's when the engine could carry them. Plan for the discontinuity; don't try to bolt every feature into the next minor revision.

## Patterns this exemplifies

- `weather-as-global-modifier` — turn-based combat with a cross-board state (weather) that boosts/reduces moves and triggers abilities. Uncurated; Pokémon is the canonical case.
- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — Choice Band (+50% Attack / locked to one move), Macho Brace (2× EV gain / halved Speed), Toxic Orb (badly poisons holder, but enables Guts / Poison Heal / Quick Feet abilities). Gen 3 introduced or popularised most of these.
