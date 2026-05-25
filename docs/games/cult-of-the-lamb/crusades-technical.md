---
title: "Cult of the Lamb — Crusades: technical implementation"
type: game
game: cult-of-the-lamb
patterns:
  - handcrafted-pcg-hybrid
---

# Crusades — technical implementation

A deeper look at *how* Cult of the Lamb's generator is likely built, aimed at a dev building their own 2D dungeon-crawler (in Godot or anywhere). Massive Monster has never published a technical post-mortem and the modding scene hasn't reverse-engineered the room subsystem, so most claims here are **inferred from patch notes, modding-API source, and play observation**. Read the confidence tags carefully — they're load-bearing.

> **Confidence legend:**
> - **[CONFIRMED]** Stated by devs in interview / dev blog / patch notes, OR observable in decompiled assets / mod API source.
> - **[STRONGLY INFERRED]** Multiple consistent sources (patch-note evidence, modders, play observation) but not officially confirmed.
> - **[LIKELY]** Single source or a defensible inference from Unity convention + the screenshots.
> - **[SPECULATION]** Engine-norm guess, useful for a dev but not a claim *about CotL specifically*.

## 1. Engine and tech baseline

| Claim | Confidence | Evidence |
|---|---|---|
| Built in **Unity** | [CONFIRMED] | Unity Blog feature [^unity-blog] |
| **C# / IL2CPP** ship build — `Assembly-CSharp.dll` in `Cult of the Lamb_Data/Managed/` | [CONFIRMED] | Modding guide instructs decompiling with dnSpy / dotPeek [^modding-tips] |
| **2D art rendered in a 3D scene** — billboarded sprites that **write to depth**, rotated to face camera | [CONFIRMED] | Massive Monster Steam forum reply: *"All the art is drawn in 2D, then we put it in a 3D world. The 2D Objects are also writing to depth so we are utilising quite a few 3D world techniques. Then we rotate them towards the camera."* [^mm-rendering] |
| **Spine 2D 3.8.99** for character rigs (`*.json` + `*.atlas` + PNG sheets) | [CONFIRMED] | CotLSpineLoader modding doc [^spine-loader] |
| **Addressables** for runtime content loading | [CONFIRMED] | `COTL_API` patches `AddressablesImpl.InstantiateAsync` with paths like `Assets/Prefabs/Structures/Buildings/...` [^cotl-api-prefab] |
| Render pipeline: **Built-in (not URP)** | [LIKELY] | URP 2D Renderer doesn't compose with 3D depth-writing sprites cleanly; their hybrid technique fits Built-in. No dev confirmation. |
| Tilemaps: **not used for room interiors** — rooms are composed sprite scenes | [LIKELY] | The hidden-room mechanic uses a background-plane parallax layer ("totem in the background"), which is hand-placed prop work rather than a flat `Tilemap` grid [^wiki-tablets] |
| Unity version | [SPECULATION] | Unstated; for a 2022 ship with Addressables + Spine 3.8.99 runtime, 2020.3 LTS or 2021.3 LTS is the most likely line. |

**Transferable lesson:** the 2D-in-3D-with-depth-writing trick is the single biggest aesthetic choice. It enables parallax background gameplay (the hidden-totem mechanic), per-room lighting volumes, and the "props in front of / behind the player" feel — none of which a flat orthographic 2D approach buys you cheaply. In Godot 4 the analogue is a 3D scene with billboarded `Sprite3D` nodes; you give up some 2D-tooling ergonomics in exchange.

## 2. Two-stage generation

This is the most important architectural observation, and it's **[CONFIRMED]** by play observation cross-referenced with the wiki:

```
Crusade
├── (macro) World-map DAG  — Slay-the-Spire-style branching node graph
│        ├── nodes: Combat, Shop, Mini-boss, Boss, Hidden, Resource, Bonus, Event, Sacrifice door
│        └── 2–4 forks per layer; forced boss at the end
│
└── (micro) per-node room layout  — typically 11 rooms for a "normal gauntlet"
         ├── Entrance → Combat × N → Mini-boss / Shop / Hidden / Resource → Exit
         └── stitched from a per-biome room prefab pool
```

> Wiki: *"usually a normal gauntlet has 11 rooms"* [^wiki-crusade] — i.e., **the room count is fixed per gauntlet**, not variable. This is the strongest single tell that the inside-a-node layout is template-driven, not free-procedural.

**Why two stages matter for your own design:** you almost certainly do not want one generator producing both. Macro choice (which path to take) and micro layout (how this combat room is shaped) are different problems with different correctness rules. **CotL's split** is:

- Macro: a small DAG resource (a `RunMap.tres`-equivalent), populated by a recipe (rows × forks × node-type weights).
- Micro: a small skeleton of N rooms (~11), each slot filled by a random pick from a per-biome / per-type prefab pool.

If you fuse the two, every change to either layer affects the other.

## 3. Room prefab anatomy

What is a "room" inside CotL? No mod has redefined one, so everything here is inferred.

### 3.1 The likely shape of a Room prefab

**[STRONGLY INFERRED]** from Unity convention + the modding-API patterns + the visible behaviour:

```
Room.prefab  (loaded via Addressables, key like Assets/Prefabs/Rooms/Darkwood/Combat_03)
├── floor sprites (composed, hand-placed)
├── wall / border sprites
├── decorative props (multiple parallax planes for the 2D-in-3D depth)
├── RoomBounds collider  (defines "you are inside this room")
├── EntryAnchor_N / S / E / W  (transforms — where the player lands when entering from each side)
├── DoorSlot_N / S / E / W      (anchors for door art + the trigger that fires on touch)
├── SpawnSet reference          (ScriptableObject — wave composition, enemy mix, traps)
├── LootAnchor list             (chest positions, pickup spawn points)
├── ClearTrigger                (the system that detects "all enemies dead" and unlocks doors)
└── RoomKind enum               (Combat / Shop / Hidden / MiniBoss / Boss / Resource / Bonus / ...)
```

Confidence on each slot:

| Slot | Confidence | Evidence |
|---|---|---|
| `RoomBounds` collider | [STRONGLY INFERRED] | Patch 1.4.5 "Fixed Goat getting stuck out of room bounds after entering a room" — implies a per-room bounds region [^pn-perfectly] |
| Per-side entry anchor with teleport-on-entry fallback | [STRONGLY INFERRED] | Patch 1.2.4 "Black walls blocking entry when rolling into a new room now places Lamb on correct destination if stuck" — literal evidence of a teleport-correction routine on entry [^pn-perfectly] |
| `SpawnSet` as a separate data asset | [LIKELY] | Patch 1.3.5 "Fixed issue where damned followers were not spawning inside dungeons" + 1.2.0's content-only "Added many new Combat rooms" both point at data-driven spawn tables [^pn-perfectly] |
| `RoomKind` enum | [STRONGLY INFERRED] | The wiki enumerates explicit room categories (Entrance, Combat, Tarot Shop, Gear Shop, Bonus, Bonus Chest, Offering, Cursed Tree, Hidden, Mini-boss, Boss, Teleport, plus resource-named rooms like Bones / Vegetables / Lumber / Fertilizer / Stone / Coins / Meat / Fish / Relic) [^wiki-crusade] |
| Door knows what its **neighbour** is | [CONFIRMED] | Wiki: *"Adjacent Tarot Card shop rooms are indicated by hanging stars and moons over the entrance"* + *"Adjacent Gear shop rooms are indicated by hanging swords over the entrance"* [^wiki-crusade] — the door art changes based on what's on the other side, so the generator tags doors with the destination room's type. |

### 3.2 The "shadowy borders" trick — unused exits

The single most important seam-hiding device, **[CONFIRMED]** by the wiki:

> *"the statues seem to only appear in the top exit of the room (usually the unused exits can be seen as slight recesses in the shadowy borders of the floor)."* [^wiki-crusade]

Read this carefully. The room prefab ships with **all four exits already cut into the floor geometry**. The generator chooses which ones are *open* (real door, walkable, trigger active); unused ones get a "shadowy recess" sprite mask that *visually closes* the door without changing the room's footprint.

This is exactly Edmund McMillen's Isaac trick — Boris-the-Brave summarises it well:

> *"Adjacent rooms always have a door (or destructible wall) in the exact center and every room is designed to always be accessible from a four directions. Thus, there's no special considerations required when choosing rooms — they will always work."* [^boris-isaac]

**Why this matters for your design:** if you instead author rooms with *typed exit sockets* (small door, big gate, locked, secret) and a stitcher that does rotation + tag matching, you've taken on an enormous amount of edge-case complexity. CotL took the opposite bet: **standardise the geometry; vary the art**. The unused-exit mask carries all the visual variety the typed-socket approach would have offered, at a tiny fraction of the engineering cost.

### 3.3 Room template counts

Unknown precisely. **[LIKELY]** ballpark: ~20–40 combat-room templates per biome at launch (Aug 2022), growing toward 60+ by patch 1.4.x (Aug 2024), based on:
- Patch 1.2.0 (Apr 2023): "Added many new Combat rooms, with new traps such as rivers, swinging axes, etc. … Added Fish, Meat, and Relic rooms."
- Patch 1.4.2 (Aug 2024): "All 4 dungeons have been populated with tons of new encounters" + "16 new Minibosses." [^pn-perfectly]

Both updates added pure-content (no engine-version bump), which is only possible if rooms are **data-table prefabs**. Treat that as the design discipline: every authored room is a row in a table; no room is referenced by code.

## 4. The stitcher

### 4.1 Algorithm shape

**[LIKELY]** based on Isaac's well-documented algorithm + CotL's identical "fixed-shape, slot-filled" behaviour:

```
1. Pick a small grid (e.g., 4×4 cells).
2. Start at a centre cell (entrance).
3. Breadth-first walk: for each frontier cell, decide whether to expand into each neighbour
   based on (a) a target room count (~11), (b) "neighbour has fewer than 2 filled neighbours"
   to avoid loops/clumps.
4. Tag each placed cell with a RoomKind (entrance / combat / mini-boss / shop / hidden / boss-exit).
5. For each cell, pull a random prefab from the biome's pool whose RoomKind matches the tag.
6. Open the door slots between adjacent cells; mask the unused ones with the "shadowy recess"
   sprite.
7. Place enemy spawn waves from the room's SpawnSet asset.
```

The mini-boss / boss / shop placement is **forced by position in the skeleton**, not chosen by a constraint solver. This is the right tradeoff at small studio scale — see §6 lesson.

### 4.2 No retry / no validate

This is the most important design behaviour, **[STRONGLY INFERRED]** from the patch-notes archive: CotL appears to **trust its templates without validating placement after-the-fact**. The recurring "stuck in room" / "spawn out of bounds" / "soft lock" bug class over 3+ years tells you:

| Patch | Bug fix | Implies |
|---|---|---|
| 1.2.4 | "Fixed soft lock in the relic room" | Specific template's clear-condition broken |
| 1.2.4 | "Black walls blocking entry … places Lamb on correct destination if stuck" | Entry teleport fallback exists, can fire wrong |
| 1.3.5 | "Potential fix for a bug where the player is locked inside the resurrection room" | Another template's exit unlock condition |
| 1.4.5 | "Fixed Goat getting stuck out of room bounds after entering a room" | Spawn anchor outside collider |
| 1.5.0 | "Fixed players becoming stuck in a locked room after defeating all enemies in Anchordeep" | Biome-specific clear-detector bug |
| 1.5.0 | "Fixed The Goat spawning out of bounds when entering nodes" | World-map node spawn anchor outside collider |
| 1.5.16 | "Fixed stuck-in-room issue in Silk Cradle" | Same class, different biome [^twisted-1516] |

All [CONFIRMED] via the Perfectly-Nintendo patch-notes archive [^pn-perfectly] and TwistedVoxel's 1.5.16 writeup [^twisted-1516].

The lesson is **not** "their generator is buggy" — it's **"the alternative cost more than it was worth."** Validating placement at gen-time (retry until passable) is *much* more engineering than tight per-room QA + a "skip room" debug command. Three years of "stuck in room" patches is what that tradeoff looks like in steady state.

## 5. The DAG (world-map) generator

The outer map you see *between* room-stitched dungeons.

| Claim | Confidence | Evidence |
|---|---|---|
| Slay-the-Spire-style branching DAG | [CONFIRMED] | Wiki: *"players follow set paths that lead to various types of nodes"* [^cvgs] [^wiki-crusade] |
| Forced boss at end of final gauntlet | [CONFIRMED] | Wiki: *"Boss Area … at the end of this area there is a boss room"* [^wiki-crusade] |
| Three mini-bosses must be cleared before the Bishop spawns | [CONFIRMED] | Wiki: *"You have to fight a mini-boss, or the Bishops (if all 3 mini-bosses have been defeated)"* [^wiki-crusade] |
| Node weights are tunable per biome | [CONFIRMED] | Patch 1.3.5: "Increased odds of meat room" [^pn-1.3.5] |
| Run-modifiers (Fleeces) mutate the node-type roll | [CONFIRMED] | Patch 1.3.5: "Relic room will now show in dungeon when the player is wearing Fleece of the Fates" [^pn-1.3.5] |
| All bosses and mini-bosses are content-table entries | [CONFIRMED] | Patch 1.4.2 added "16 new Minibosses" + "4 new Bishop transformations" with no engine change [^pn-perfectly] |
| Post-game biome doors require sacrificing a Follower of a certain level | [CONFIRMED] | Sacrifice-door mechanic, confirmed in late-game content [^cvgs] |
| Run seed surfaced to player | [SPECULATION] | Not visible in UI; daily-run / shareable-seed equivalents not present |

**Authoring insight:** the world-map is almost certainly a small `BiomeConfig` ScriptableObject with fields like:
```
rows_per_gauntlet: int
forks_per_row: range
node_weights: { Combat: 0.55, Shop: 0.10, MiniBoss: 0.05, ... }
fleece_overrides: { FleeceOfFates: { Relic: +1.0 } }
```
That's the only shape that explains how patch 1.3.5 could be a one-line content change.

## 6. Seam-hiding — the "looks integrated" trick

Five techniques the game uses, layered on top of each other:

1. **Unused exits as shadowy recesses [CONFIRMED]** — the geometry slot exists; the art masks it. (§3.2)
2. **2D-in-3D with depth-writing sprites [CONFIRMED]** — parallax background planes hide tile repetition because the player's eye is drawn through depth, not across a flat plane. [^mm-rendering]
3. **Spine-distorted character animation [CONFIRMED]** — meshes that warp on each animation cycle pull the eye onto characters, off the seam-bearing static backgrounds. [^mm-rendering]
4. **Per-room camera bounds + entry-anchor teleport + fade-to-black transition [STRONGLY INFERRED]** — patch 1.2.4 ("places Lamb on correct destination if stuck") is the smoking gun: there's a hard scene cut on door-cross, sold by a short fade. You don't need clever blending if you have a 100ms cut. [^pn-perfectly]
5. **Per-room "lit floor / dark borders" lighting volume [LIKELY]** — visible in every screenshot. Bakes the visual vignette that the wiki calls "shadowy borders," doing double duty as gameplay framing AND seam hiding.

The composite effect is what feels "integrated" — but **none of the individual tricks are clever**. They're all engineering-cheap. The integration comes from layering five cheap tricks, not from one expensive blender.

![Crusade room — note the vignette dimming at the edges and the parallax background depth, plus the framed entry door at the bottom](/images/cult-of-the-lamb/crusade-chest-darkwood.jpg)
*The Darkwood "Acquired Hay Pile" room. Look at the screen edges: the dark vignette is the per-room lighting volume; the parallax greenery is the 2D-in-3D depth play; the entry door at the bottom is one of the four candidate exit slots dressed with the biome's archway sprite. The unused side / top exits would, in a 4-exit template, be the "shadowy recesses" the wiki mentions. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

## 7. The modding-scene evidence

A negative-space observation worth flagging: **no mod on Thunderstore or Nexus adds new rooms or biomes** [CONFIRMED by absence]. The community `COTL_API` has helper categories for `CustomEnemy`, `CustomRelics`, `CustomRituals`, `CustomStructures`, `CustomTarotCard`, `CustomTraits` — but **no `CustomRoom` or `CustomDungeon`** [^cotl-api-folders].

Two readings:
- The room/dungeon system is internally cohesive enough that no modder has cracked it open in 3+ years.
- OR: it's heavily intertwined with the Addressables key namespace and decompiled-asset patching is harder than for standalone gameplay items.

Both readings point at the same architectural recommendation: **keep your room/biome subsystem tightly bounded — don't let it cross-reference half the codebase.** CotL's modding scene has mapped most of the gameplay layer but bounced off the crusade subsystem; that's a sign of well-contained design.

## 8. Lessons for your Godot dungeon-crawler

The transferable architectural decisions, each with the design question and CotL's answer where evidence supports it.

### 8.1 Split macro and micro generation into separate systems
- **Question:** one generator for the whole run, or one for the route and one for the rooms?
- **CotL's answer:** two distinct systems. The Slay-the-Spire DAG knows nothing about which combat rooms exist; the room-stitcher knows nothing about which node it lives under.
- **In Godot:** `RunMap` Resource for the DAG, `RoomLayout` Resource for the per-node skeleton, a thin `Stitcher` script that owns the handoff. Don't fuse them.

### 8.2 Standardise the geometry, vary the art
- **Question:** typed exit sockets with rotation + tag matching, or fixed canonical door positions everywhere?
- **CotL's answer:** fixed positions. Every room has all 4 candidate doors at identical world offsets; unused doors get a "shadowy recess" sprite. [CONFIRMED]
- **In Godot:** every `Room.tscn` has `DoorSlot_N/S/E/W` as child `Node2D`s at the same offsets. The stitcher toggles their `visible` and `monitoring` based on whether the slot is used. **Do not** write a 4-way socket matcher. It's the worst kind of accidental complexity.

### 8.3 Make rooms composite prefabs, not Tilemap chunks
- **Question:** Tilemap-cell rooms or scene-composed prefabs?
- **CotL's answer:** scene-composed. The 2D-in-3D depth play, parallax props, per-room lighting volumes, and the hidden-totem-in-background mechanic require composite scenes. [LIKELY based on screenshots + the hidden-totem mechanic]
- **In Godot:** a `Room.tscn` with handauthored child nodes for floor / walls / props / spawn anchors / loot points. You give up Tilemap's broad-stroke productivity but gain hand-tuned room feel.

### 8.4 Ship room content as data tables (folders + Resources)
- **Question:** rooms hardcoded by code, or pulled from a folder + weighted table?
- **CotL's answer:** data-driven. Patch 1.2.0 and 1.4.2 added rooms in pure content updates. [CONFIRMED]
- **In Godot:** `res://rooms/<biome>/<kind>/Room_01.tscn`, `res://rooms/<biome>/<kind>/Room_02.tscn`, plus a `BiomeConfig.tres` Resource holding weights per RoomKind. Adding a new room is a file-system operation; no script edit.

### 8.5 Make biome AND run-modifier both affect the node weights
- **Question:** is the node-type roll fixed per biome, or also mutated per run modifier (Fleece, relic, etc.)?
- **CotL's answer:** both. Patch 1.3.5 changed biome odds globally AND added a Fleece-specific override. [CONFIRMED]
- **In Godot:** `BiomeConfig.tres` holds base weights; the current `RunModifier` (Fleece-equivalent) holds override deltas; the stitcher composes them at generation time.

### 8.6 Per-room camera bounds + hard cut + entry anchor
- **Question:** smooth camera blending across rooms or hard cut?
- **CotL's answer:** hard cut with a fade. Per-room camera bounds. Entry-anchor teleport with a "you got stuck, here's the correct destination" fallback. [STRONGLY INFERRED from patch 1.2.4]
- **In Godot:** a `RoomBounds : Area2D` per room; the camera clamps to it; transition triggers fade-to-black + scene-switch + position-snap to the destination's `EntryAnchor_<side>`. The "if stuck, teleport to correct spot" fallback is the kind of thing you write on day one and thank yourself for in month six.

### 8.7 Trust your templates; do not retry-and-validate
- **Question:** validate placement at gen-time (retry until passable), or trust the templates and patch bugs as they surface?
- **CotL's answer:** trust the templates. Three years of "stuck in room" patches is what this tradeoff looks like in steady state. [STRONGLY INFERRED from patch cadence]
- **In Godot:** save yourself a month of retry/backtrack code. Spend it on per-room QA + an editor-time validator that warns if a `SpawnMarker` is outside the `RoomBounds` collider. Ship a debug "skip room" command for the inevitable.

### 8.8 Boss / mini-boss placement is by *position in the skeleton*, not by generator choice
- **Question:** "where should the boss go?" as a generator decision, or hardcoded as "end of last gauntlet"?
- **CotL's answer:** hardcoded. Mini-bosses end intermediate gauntlets; the Bishop ends the final one. [CONFIRMED via wiki]
- **In Godot:** skip the boss-placement logic. The skeleton's last cell is the boss cell; the generator just picks *which* boss from the biome's boss pool.

### 8.9 Use the background layer as gameplay surface
- **Question:** is the parallax background purely decorative, or does gameplay cross visual layers?
- **CotL's answer:** crosses. The hidden-room mechanic places one totem in the playable plane and one in the background layer — the player has to look at the parallax. [CONFIRMED via wiki]
- **In Godot:** if you're already doing 2D-in-3D (`Sprite3D` billboards), this comes nearly free. If you're flat 2D, the only analogue is `ParallaxBackground` layers that hold occasional interactive elements.

### 8.10 Doors know their neighbour's type
- **Question:** does a door know what's on the other side?
- **CotL's answer:** yes — the door art changes if the neighbour is a Tarot shop (stars/moons) vs. a Gear shop (swords). [CONFIRMED via wiki]
- **In Godot:** during stitch-time, after pairing rooms, write back the neighbour's `RoomKind` to each `DoorSlot` so the slot's art can swap. Costs nothing; reads as "the game knows what it's doing."

## Closing — the meta-lesson

CotL's generator looks polished because **none of its individual mechanisms are clever**, but five or six engineering-cheap tricks are layered on top of each other:

- Fixed door geometry + art masking (Isaac trick).
- Two-stage macro/micro split.
- 2D-in-3D for depth without engine cost.
- Per-room camera bound + fade-cut transition.
- Data-driven room pool that scales with content patches.
- Trust-the-templates + teleport fallback on entry.

If you're a small team, **steal all six.** None of them require a tech specialist; all of them compound into the integrated feel. The thing that doesn't transfer cheaply is the *art volume* — CotL ships dozens of room templates per biome, hand-decorated. That's the actual budget line.

## See also

- [Crusades — dungeon generation & structure](./crusades.md) — the player-facing analysis.
- [Dungeon map — DAG node types](./dungeon-map.md) — the macro-layer node taxonomy.

## Footnotes & sources

[^unity-blog]: Unity Blog, "Creepy, cute, compelling: The recipe for smash hit, Cult of the Lamb" (Fergus Baird, 2022-10-28) — <https://unity.com/blog/games/recipe-behind-smash-hit-cult-of-the-lamb>
[^modding-tips]: Cult of the Lamb Modding Tips (HackMD) — <https://hackmd.io/wWzM_C5aRD-U0qYnJowfjg>
[^mm-rendering]: Massive Monster Steam forum reply: "Is the game made in 2D or 3D?" — <https://steamcommunity.com/app/1313140/discussions/0/3448087385671383167/>
[^spine-loader]: Custom Spine Loader guide (HackMD) — <https://hackmd.io/ibSfcJnbTaqnQr0dfgLrbQ>
[^cotl-api-prefab]: `COTL_API/Prefabs/CustomPrefabManager.cs` — <https://raw.githubusercontent.com/Khaomi/COTL_API/main/COTL_API/Prefabs/CustomPrefabManager.cs>
[^cotl-api-folders]: `COTL_API` folder listing — <https://api.github.com/repos/Khaomi/COTL_API/contents/COTL_API>
[^wiki-crusade]: Fandom — Crusade — <https://cult-of-the-lamb.fandom.com/wiki/Crusade>
[^wiki-tablets]: Fandom — Ancient Tablets — <https://cult-of-the-lamb.fandom.com/wiki/Ancient_Tablets>
[^cvgs]: Critical Video Game Studies — Cult of the Lamb and the Roguelike Debate — <https://criticalvideogamestudies.com/cult-of-the-lamb-and-the-roguelike-debate/>
[^pn-perfectly]: Perfectly Nintendo — Cult of the Lamb Switch software updates (collated patch notes) — <https://www.perfectly-nintendo.com/cult-of-the-lamb-switch-software-updates/>
[^pn-1.3.5]: Steam — Cult of the Lamb v1.3.5 patch notes — <https://steamcommunity.com/games/1313140/announcements/detail/3984064573340422714>
[^twisted-1516]: TwistedVoxel — Patch 1.5.16 writeup (2026-01-26) — <https://twistedvoxel.com/cult-of-the-lamb-patch-1-5-16-fixes-achievements-and-soft-locks/>
[^boris-isaac]: Boris the Brave — Dungeon Generation in Binding of Isaac (2020) — <https://www.boristhebrave.com/2020/09/12/dungeon-generation-in-binding-of-isaac/>
