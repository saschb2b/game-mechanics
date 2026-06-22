---
title: "Mina the Hollower — World, map & the Tenebrous Times"
type: game
game: mina-the-hollower
patterns:
  - diegetic-stats-newspaper
  - retro-constraint-aesthetic
---

# World, map & the Tenebrous Times

Mina is set on **Tenebrous Isle**, an 1700s gothic-horror island of anthropomorphic animals. Mina — an inventor-mouse of the Hollower guild — returns to investigate the **Spark Generators** she co-built with the philanthropist **Lionel** a decade earlier, which have begun to malfunction and warp the island. The structure is Zelda-shaped: an interconnected overworld of named regions, each with towns, dungeons, a boss, and a Generator to restore.

## Region & completion structure

The island is divided into regions you progressively light up and clear. The world map tracks completion at the region grain:

![The world map of Tenebrous Isle — Western Wilds region highlighted, "Total 64%" completion, a central blighted citadel](/images/mina-the-hollower/world-map-western-wilds.jpg)
*The overworld. A central corrupted citadel anchors a ring of biome regions (wilds, ice, swamp, town). "Total 64%" is the headline completion figure — the game keeps an explicit, visible counter of how much of the island you've uncovered. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

Drill into a region and the game shows a **per-category collectible checklist** — the completionist's contract, stated plainly:

![Region map — Backwaters — "Found 13/19" with a right-hand checklist of collectible categories (3/4, 2/2, 1/1, 0/1, 2/4, 1/2…)](/images/mina-the-hollower/world-map-backwaters-checklist.jpg)
*Backwaters at 13/19 found. Each icon is a collectible *category* (trinkets, Spark containers, key items, etc.) with its own count. This is how a single-player adventure sustains a long completion tail — the map itself is a to-do list, legible at a glance. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

Restoring a region's **Spark Generator** is the gating verb: it re-lights the map, opens sealed routes, and serves as the [checkpoint](./death-and-sparks.md). Combined with [traversal sidearms](./sidearms-and-joules.md) (raft, drill) and [the wall-burrow trinket](./trinkets.md), the world opens in the Metroidvania way — old areas yield new things once you own new verbs.

![Top-down outdoor traversal — Mina in a grassy field threaded with boulders and fencing](/images/mina-the-hollower/gameplay-outdoor-boulders.jpg)
*Field traversal. The chunky tile grid and limited palette are doing combat-design work as much as art: clean silhouettes and high-contrast hazards keep telegraphs readable, which a [timing-based combat game](./combat-and-weapons.md) lives or dies by. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

The island is dense with optional contraptions and environmental puzzles, like vault-style lock mechanisms you solve from clues found elsewhere:

![A nixie-tube counter/vault contraption puzzle, dials showing "234" and "100"](/images/mina-the-hollower/nixie-vault-puzzle.jpg)
*A combination-lock contraption. Puzzles like this send you reading the world for the code — which is exactly what the in-world newspaper exists to feed. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

## The Tenebrous Times — a diegetic stat screen

The **Tenebrous Times** is an in-world Victorian newspaper that triples as lore delivery, quest board, *and* your stats screen. Your progress is printed as news rather than shown in a menu:

![The Tenebrous Times newspaper masthead — "Volume 1, 18XX" — headline "Queensbury Crypt calls to grave robbers" over a gothic engraving](/images/mina-the-hollower/newspaper-tenebrous-times-cover.jpg)
*The masthead. Period dressing ("Volume 1, 18XX"), woodcut-style art, and headlines that double as quest hooks ("Queensbury Crypt calls to grave robbers"). The newspaper is the connective tissue between the player's actions and the island's reaction to them. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

The **Facts Corner** formats your run statistics as a newspaper sidebar:

![Newspaper "Facts Corner" sidebar listing run stats — Time 0:45:26, Deaths 7, Bones Found 1760, Heals 14, Conversations 31, Jumps 1468, Steps 2274](/images/mina-the-hollower/newspaper-facts-corner-stats.jpg)
*"Facts Corner" — Time, Deaths, Bones Found, Heals, Conversations, Jumps, Steps. These are exactly the numbers a normal game buries in a stats submenu, here published as gossip-column trivia. Reframing the stat screen as *diegetic print* makes a dry readout feel like part of the world's voice. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

And the paper carries **substitution-cipher puzzles** — blocks of encrypted text the player decodes using a cipher learned in-world, turning the newspaper into an actual puzzle artifact rather than flavour text:

![Newspaper interior — "Fell in Mirror?!" story over blocks of substitution-cipher glyphs](/images/mina-the-hollower/newspaper-mirror-cipher.jpg)
*"Fell in Mirror?!" — readable headline, enciphered body. Decoding the cipher rewards lore and hints (some feeding puzzles like the vault above). The newspaper threads back into the town NPCs, whose dialogue references the same stories. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

![Town dialogue — an Orphan NPC: "My sister swore a creature lived in that mirror. Now she's gone… so spooky! I'm not going near it."](/images/mina-the-hollower/town-dialogue-orphan-mirror.jpg)
*The "Fell in Mirror?!" headline isn't isolated — an Orphan in town tells you the same rumour. The newspaper, the NPCs, and the dungeons cross-reference one another, so reading the paper is genuinely *informative*, not decorative. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2438).*

## The constraint as a feature

Mina commits to a **Game Boy Color-style** presentation — limited palette, chunky tiles, sprite-flicker aesthetics — but cheats the hardware's *limits* deliberately:

> *"We definitely packed way more backgrounds and sprites on screen than was capable, even by the best Game Boy programmers."* — David D'Angelo

The constraint does real design work. A restricted palette forces high-contrast, readable silhouettes; a chunky grid forces clean hazard and telegraph shapes; a small UI vocabulary pushes the team toward diegetic solutions like the newspaper instead of HUD clutter. For a game whose combat is built on *reading* attacks and *timing* a burrow, the rule "everything must be legible at GBC resolution" pushes in exactly the right direction. The gothic palette also does genre work, selling the horror tone that "2D Dark Souls" needs.

## Patterns this exemplifies

- `diegetic-stats-newspaper` *(uncurated)* — the stat screen, quest log, and lore codex are unified into an in-world newspaper, with run stats as a gossip column and cipher puzzles as real content. UI as worldbuilding. Candidate for a curated concept page if a second game on the site does something comparable.
- `retro-constraint-aesthetic` *(uncurated)* — adopting a specific historical hardware's visual grammar (here GBC) as a *design constraint that improves legibility*, while selectively breaking its technical limits. Shares DNA with [Pokémon RSE](/games/pokemon-rse/) and [Mega Man Battle Network](/games/mega-man-battle-network/) as "design under a deliberate platform pastiche."
