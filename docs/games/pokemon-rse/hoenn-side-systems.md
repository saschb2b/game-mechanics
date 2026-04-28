---
title: "Pokémon RSE — Hoenn signature side-systems"
type: game
game: pokemon-rse
patterns:
  - parallel-meta-system
  - flavor-as-meta-narrative
---

# Hoenn signature side-systems

Hoenn shipped three side-systems that don't exist in Gen 1/2 and that form the franchise's first attempt at "more verbs alongside the main loop." All three are **opt-in** — a player can finish R/S/E without engaging any of them — and all three are **deep enough to absorb 20+ hours independently**.

| Side-system | What it is | Where it lives in the UI |
|---|---|---|
| **Contests** | A 4-stage performance evaluation per move, judged by a 5-axis Pokémon attribute profile (Cool / Beauty / Cute / Smart / Tough), fed by Pokéblocks made from Berries | Contest Halls in Verdanturf, Slateport, Fallarbor, Lilycove |
| **Secret Bases** | Personal player-built rooms in marked trees/walls/cave walls. Decorate with furniture bought from Secret Base shops | Anywhere with a "DIG HERE" tile (use Secret Power TM); access via Trainer PR Card |
| **Berry growing** | Plant Berries in Soil patches; they grow over real-world time; harvest for items + Pokéblocks | Soil patches dotted across Hoenn routes |

Each is a separate progression curve, with its own currency, judges, and leaderboards.

![CONTEST MOVES — Torchic Lv 10's same four moves, but with Contest tags: TOUGH Scratch / CUTE Growl / COOL Focus Energy / BEAUTY Ember. Each move belongs to one of five contest categories](/images/pokemon-rse/contest-moves.jpg)
*Every move has both a battle role AND a contest role. Scratch is a Normal-type physical attack in battle, AND a "Tough" performance move in contests. The same 4-slot moveset is used for both — but each context evaluates it differently. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1708).*

## Contests — performance as a parallel battle

Contests use the **same Pokémon and the same moves** as battles, but the judging is different:

- Each Pokémon has **5 contest stats** (Cool / Beauty / Cute / Smart / Tough) — independent from the 6 battle stats. These are raised by feeding Pokéblocks (made from Berries) to the Pokémon.
- Each move has a **contest category** (one of the same 5) and a contest mechanic (raises crowd hype, prevents the next contestant from acting, copies another's hype, etc.).
- A contest is **two stages**: a Visual Round (judged by stat) and a Performance Round (5 turns of move selection, where the *order* of the moves chosen by all contestants determines crowd reaction).

So a Pokémon's contest viability depends on:

1. The right *contest stat profile* for the category (build Cool by feeding red Pokéblocks, etc.).
2. The right *moveset for the contest* — a move that combos well with the previous turn's appeals.
3. *Decoration* (Cool Ribbon, Cool Trainer outfit) for hype bonuses.

This is effectively **a second 4-move loadout problem on the same Pokémon.** The moveset that wins battles (e.g. STAB damage moves) is rarely the moveset that wins Beauty contests (e.g. Sing, Sweet Kiss, Charm). Players who pursue Master Rank Beauty Ribbons commit to **separate Pokémon** for contests.

The depth: each contest category has a Master Rank tier, accessed only after winning Hyper Rank, which requires Super Rank, which requires Normal Rank. Four ranks × five categories = 20 distinct contest goals. Plus Pokéblock optimisation, plus berry-tree management to supply the Pokéblocks. Easily 30–50 hours if pursued completely.

## Secret Bases — the first player-customised space

Find a marked tree, large bush, indented wall, or vine on a route. Use the move Secret Power (taught by a TM available early in the game). The wall opens — and you have a personal hideout.

The base is yours to decorate. Currency: **Furniture** purchased from specific shops (Secret Base Shop, Lilycove Department Store) — chairs, plants, posters, dolls, mats. Place each item on the room's tile grid, where you want.

Mechanics:

- **You can have one base at a time** — moving creates a new base; the old base's contents are kept in storage.
- **Trainers visit** — friends linked to your save (via the Mix Records feature on the in-game Pokénav) can have *their* secret bases appear in *your* world, as visitable trainers you battle once per day.
- **Decorations from contests** — winning contests sometimes earns rare furniture (Trophies, etc.) that can only be displayed in a Secret Base.

This is the first time Pokémon let the player build *their own space* — not a saved-team loadout, an actual room in the world. It's also the first instance of `parallel-meta-system` in the franchise: a system whose progression is independent from the main game's level/badge axis.

## Berry growing — real-time agriculture

Berries are a Gen 3 addition that build on Gen 2's prototype. Each Berry has:

- A **growth schedule** in real-world time (some Berries grow in 12 hours; rare ones take days).
- A **flavour profile** across the 5 contest categories (a Cheri Berry is Spicy → contributes to Cool Pokéblocks).
- A **battle effect** when held by a Pokémon — Lum Berry cures status, Sitrus Berry restores HP at 50%, type-resist Berries halve a super-effective hit.

The growing system uses **soft Soil patches** scattered on routes. Plant a Berry, water it, return after the appropriate real-world wait. Wilted Berries die and can't be re-grown.

So the player has a passive farming sub-loop: plant berries before they go to bed, harvest the next morning, dump them in a Pokéblock case for contest prep, ship the rare ones to friends as gifts. This pre-dates Stardew Valley by ~12 years.

## Why ship three at once?

Gen 3 is Pokémon's "more verbs" generation. Gen 1/2 had: catch, train, battle, trade. That's it. Gen 3 added: contests, decorate, farm.

The justification (Masuda has gestured at this in interviews): the GBA was a more powerful machine, the audience was older, and "trainer journey" needed *more* than gym-grinding to hold a 25-hour campaign. So the team built three independent side-systems that target different player motivations:

- **Contests** for players who like presentation/role-play.
- **Secret Bases** for players who like building/spaces.
- **Berry growing** for players who like idle/long-term progression.

None of them are required. None of them affect main-story difficulty. All of them have their own completion goals. This is the franchise's answer to "what do players do when they're not battling?"

The Battle Frontier (Emerald-only) is the *fourth* such side-system, post-credits — see [series-evolution](./series-evolution).

## What this teaches

- **A side-system needs its own currency, judges, and completion arc.** Contests have ranks; Secret Bases have decorations; Berry growing has the grown set. None of them lean on the main game's badges or levels for their progression. Independence is the design.
- **Re-using the same units (Pokémon, moves) for different evaluations multiplies content cheaply.** Contests use the *same* moves the battles use, but evaluate them differently. So building a contest team is a real recombination problem, not a separate ruleset on separate units.
- **Real-time growth makes a mobile-style daily loop work in a 2003 cartridge.** Berry farming is a Stardew loop, decade ahead. Players check in once or twice per day; the system idles in the meantime.
- **Player-authored space is a sticky retention move.** Secret Bases drive replay. A player who's spent 30 hours decorating their base has a much higher attachment to that save than one who only has 6 Pokémon and a Pokédex. Add a base; players stay.

## Patterns this exemplifies

- `parallel-meta-system` — independent progression curves alongside the main game. Uncurated.
- `flavor-as-meta-narrative` (lighter version) — the move-as-contest-performance dual reading reframes every battle move as also a *kind of dance*, a presentation. Soft thematic richness for free.
- [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) — Contests don't unlock until ~5 hours in (you need access to Verdanturf or Slateport); Berry trees seed early but pay off late; Secret Power is mid-game.
