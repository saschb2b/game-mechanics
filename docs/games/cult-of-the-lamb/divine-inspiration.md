---
title: "Cult of the Lamb — Divine Inspiration (tech tree)"
type: game
game: cult-of-the-lamb
patterns:
  - nested-progression-graph
---

# Divine Inspiration — the building tech tree

The hub doesn't grow buildings the way a city-builder does (place foundation → wait for build). It grows them the way an RPG learns abilities — via a **tech tree** with prerequisite links. The currency is **Divine Inspiration**.

## How Divine Inspiration is earned

Two parallel funnels:
- **Devotion accumulation at the Shrine.** Followers worship at the central Shrine, ticking up a Devotion meter. When the meter fills, you spend it for one **Divine Inspiration point**.
- **In-world Divine Inspiration drops.** Light beams spawn at the hub (often after Crusades or when the cult passes a milestone). Walk over to claim:

![Light beam at the hub temple — "Collect Divine Inspiration" prompt; "Declare Doctrine" tracker pinned right](/images/cult-of-the-lamb/hub-divine-inspiration-beam.jpg)
*A Divine Inspiration beam. The right-side tracker — "Declare a new Doctrine from the Altar in your Temple" — is the game's nudge that the new point should fork your cult's policy. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

Once you have a point, you spend it at the Shrine, one node at a time. **One point unlocks one building blueprint.** The blueprint can then be built (multiple times if it's stackable) using raw materials in the Build menu.

## The tree itself

![The Divine Inspiration tech tree — Shelter row at top, with Sleeping Bags → Tent → Shelters → Houses; a parallel Temple branch at right with Temple-II red-bordered (current unlock); paths in teal (unlocked) and red (locked-prereq)](/images/cult-of-the-lamb/divine-inspiration-tree.jpg)
*The Divine Inspiration tree. The visual grammar: **teal paths** are unlocked / available, **red paths** indicate the prerequisite path; nodes show small icons (the building's silhouette). The currently-targeted node is the **Temple II** upgrade — a tier-2 Temple, *which itself unlocks more Doctrine slots and more Ritual capacity.* The tree is laid out in rough categories (Shelter, Food, Decoration, Refining, Faith, Health) running top-to-bottom. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

The tree is shaped like the [`nested-progression-graph`](/concepts/nested-progression-graph) pattern: short prerequisite chains, multiple parallel categories, and a hard upper gate on each row that requires a **Cult Level** raised through Sermons. So progression is two-axis:

- **Horizontal** — pick a category to push (Food first if Hunger is climbing; Decoration if you need morale; Refining if you keep running out of refined lumber).
- **Vertical** — Cult Level gates rows; you can't reach the second tier of *any* category until your overall cult has matured.

### A node, in detail

![Divine Inspiration tooltip — "Sleeping Bags: A place for a Follower to sleep. Very unstable, will often collapse"](/images/cult-of-the-lamb/divine-inspiration-sleeping-bags.jpg)
*A node tooltip — Sleeping Bags. Each node previews **what the building does** plus a small flavour note ("Very unstable, will often collapse" — a warning that this is the **floor-tier** option in this branch, and you should plan to replace it). Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

### Building a blueprint

After unlocking, build it from the Build menu:

![Build menu — Follower / Faith / Decorations tabs; Cooking Fire selected (1/16 General buildings collected) showing wood + stone cost](/images/cult-of-the-lamb/build-menu-cooking-fire.jpg)
*The Build menu. Tabs separate **Follower** (work / shelter / food), **Faith** (rituals / props), **Decorations**. Cooking Fire selected; cost displayed as ramp (current cost shown / next-tier cost in parens). The "1/16 General buildings collected" counter doubles as an unlock-collection meta. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

## The unlock-build separation as a design choice

Many colony sims fuse "unlock" and "build" — once you have the materials, you can place. Cult of the Lamb deliberately **separates** them:

- **Unlock** costs Divine Inspiration (one-time, gated by Sermons / Crusades).
- **Build** costs raw materials (repeated, gated by Crusade loot).

This creates **two pacings**:
- A *fast* pacing for placing things (you go on a Crusade, return with lumber, build five things).
- A *slow* pacing for *what kinds of things you can place* (you ascend Doctrines / Sermons / quests to spend a Divine Inspiration on the new building category).

The trade is that you can specialise hard. A cult that pushes Food → Refining gets a self-sustaining feed loop early but lacks Health buildings when the first sickness wave hits. The Divine Inspiration tree forces the player to make *meta* decisions on top of *immediate* ones.

## How the tree gates dungeon depth

The wire-up to Crusades is one step removed but real:

- Better **Food** → followers stay alive longer → cult population higher → unlock the next Bishop's Land sooner.
- Better **Shelter** → fewer dissent events → fewer hub fires to put out → more time available for Crusades.
- Better **Faith** buildings → bigger Sermon Faith ticks → faster Doctrine declarations → bigger run-modifying Sermon upgrades.
- Better **Health** → less Sickness → less time spent on hub damage control → more time available for Crusades.

The tree is not "DPS upgrades for the dungeon." It's "infrastructure that **buys you time** to be on the dungeon side." This is structurally different from a Hades-style mirror that just makes the run easier; it makes the *hub side cheaper*, which indirectly funds the *dungeon side*.

## Patterns this exemplifies

- [`nested-progression-graph`](/concepts/nested-progression-graph) — prerequisite chains across category branches, gated by Cult Level rows.
