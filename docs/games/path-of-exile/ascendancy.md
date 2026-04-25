---
title: "Path of Exile — Ascendancy"
type: game
game: path-of-exile
patterns:
  - bonus-with-drawback
  - earned-identity-gating
---

# Ascendancy

PoE's sub-class system, added in the 2.2 expansion (2016). **Mid-campaign you complete the Labyrinth — a trap-filled multi-room dungeon with a boss (Izaro) — and unlock an Ascendancy class with its own small skill tree (~8 points).**

## Structure

Each base class has 3 ascendancies. PoE1 currently has **19 ascendancies across 7 base classes**:

| Base class | Ascendancies |
|---|---|
| Marauder | Juggernaut, Berserker, Chieftain |
| Duelist | Slayer, Gladiator, Champion |
| Templar | Inquisitor, Guardian, Hierophant |
| Witch | Necromancer, Elementalist, Occultist |
| Shadow | Assassin, Saboteur, Trickster |
| Ranger | Deadeye, Raider, Pathfinder |
| Scion | Ascendant (one option, hybrid) |

The ascendancy tree is small — typically 8 nodes for a 4-times-completed Lab — but the nodes are **dense.** A single ascendancy notable can do what 4–5 main-tree notables would: "Inquisitor: Inevitable Judgement — your hits ignore enemy elemental resistances." Builds are *defined* by ascendancy.

## Why Ascendancy is the cleanest gating in PoE

Of all the gating in the game (RNG drops, RNG sockets, RNG affixes, RNG influenced bases, RNG league mechanics), **ascendancy unlock is the only major gate that's a pure skill check.** You don't roll for it. You don't trade for it. You run the Labyrinth, you fight Izaro, you survive his trap rooms, you take your points.

The community has a long-running love-hate with the *vehicle* (the Labyrinth is widely disliked — repetitive traps, randomized layout, no relevant loot beyond ascendancy points), but the *payoff* is universally praised. The first time your character takes their second ascendancy point and a build clicks together — that's the moment most builds become themselves.

## Identity over flexibility

PoE1 lets you re-run Normal Lab + spend respec currency to swap ascendancy. It costs effort, but it's possible. **PoE2 explicitly removed this flexibility** — once you pick, you're committed for that character. GGG's stated reason: ascendancy *should* be identity, and identity that's swappable isn't identity.

This is a clear case of GGG seeing PoE1's drift (everyone respecs ascendancies between metas) and walking it back in the sequel. See [PoE2 design tensions](/games/path-of-exile-2/design-tensions) for the broader pattern.

## Compared to other ARPG sub-class systems

| Game | Sub-class moment | Cost |
|---|---|---|
| Diablo 3 | None — class skills with rune slots | n/a |
| Diablo 4 | None at sub-class level; Paragon board is post-campaign | n/a |
| Last Epoch | Mastery at level 20+; one-way commit, no Lab-style trial | Pure level gate |
| Grim Dawn | Pick second mastery at any time; tree-based | Free at any level |
| **PoE 1** | Labyrinth completion mid-campaign, 4 stages of difficulty | Skill check (Izaro + traps) |
| **PoE 2** | Trial of the Sekhemas (skill check) or Trial of Chaos (rng); 3 ascendancies per class | Skill or RNG, depends on trial |

PoE's "earn it through a skill check" framing is unusual. It's the *only* major gate in the game where a 30-hour casual player will fail and a 30-hour skilled player will succeed — and the player can *tell* which they are.

## Patterns this exemplifies

- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — committing to an ascendancy forecloses 2 others; the build ramifications are large.
- `earned-identity-gating` — the gate is skill-based, not RNG. A small but distinct pattern: "the most identity-defining decision in the game is the one you genuinely earn."
