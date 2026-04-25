---
title: "Hollow Knight — Map & discovery"
type: game
game: hollow-knight
patterns:
  - map-by-discovery
  - late-introduced-mechanics
---

# Map & discovery

Hollow Knight is the canonical case of **earned cartography**: you don't have a map of a region until you find Cornifer, the wandering cartographer, hidden somewhere within that region. Then you must reach a bench (save point) to "draw it up." Then you can buy upgrades from his wife Iselda back in Dirtmouth.

![Hollow Knight world map of Hallownest — the entire interconnected metroidvania visible at once, with named regions: Forgotten Crossroads, Blue Lake, City of Tears, Soul Sanctum, Watcher's Spire, Pleasure House, Royal Waterways, Fungal Wastes, Village, King's Station, Cocoon, Vendor, Whispering Root, Sly Station, Train Station, Tower of Love, Warrior's Grave, Black Egg Temple, Dreamer, Kingdom](/images/hollow-knight/hk-world-map.jpg)
*The world map of Hallownest. ~10 connected regions, each with its own biome, music, enemies, lore. The map is *only* this clean because the player has visited each region, found Cornifer there, drawn it up, and bought every upgrade from Iselda. A new player's map is mostly empty for the first 20 hours. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=113).*

## The discovery chain

1. **Enter a new region.** No map. The Knight has Wayward Compass charm equipped (or doesn't); compass shows you on a blank background.
2. **Hear Cornifer humming.** He's *audible* before he's visible — a distinctive humming theme plays as you get close.
3. **Find Cornifer.** Buy his region's map for 30–80 Geo.
4. **Get to a Bench (save point) and rest.** This *draws* the map for the first time. Now you can see what you've already explored.
5. **The map fills in as you explore.** Rooms you walk through get drawn after the next bench.
6. **Travel back to Dirtmouth and visit Iselda** to buy:
   - Quill (lets you mark spots on the map)
   - Compass (now shows your position on the map)
   - Pin types (Bench, Vendor, Cocoon, Warp, etc. — colored pins for marking)
   - Marker (Scarab Marker, Lifeblood Marker, etc. — see Iselda screen below)

![Iselda's shop — Scarab Marker tooltip "These markers are new additions to the shop. You can use them to mark interesting spots on your map! The colour is quite soothing, don't you think?" Map markers visible at 100, 100, 100, 210 Geo each](/images/hollow-knight/hk-iselda-shop.jpg)
*Iselda's shop in Dirtmouth. The map UX is *itself* a progression chain — Cornifer for the base map, Iselda for the tooling. The "soothing colour" is one of the small writing-as-character moments that defines Hollow Knight's tone. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=113).*

## Why earned cartography works

Three things this design does that quest-marker maps don't:

1. **Exploration becomes the work.** Without a map, "where am I" is genuinely a question the player has to answer by looking at the world, not the UI. Memory of landmarks matters.
2. **Cornifer himself is a *find*.** Hearing his hum from another room and tracking him down is a small story moment per region. Players remember exactly where they found Cornifer in each biome.
3. **Iselda's tools are progression.** The map tooling isn't given; it's *bought*. Players who skip Iselda spend the game with a less-useful map; players who invest get a fully-tagged build-quality map.

## The atmospheric layer — exploration is lore

Hollow Knight has minimal explicit narrative. The lore lives in:

- **NPC dialogue** — characters say cryptic things, often only once. Rare lines fire on specific conditions.
- **Lore tablets** — scattered through the world, each with 1–3 paragraphs of in-universe text.
- **Boss arenas** — the *setting* of a boss fight tells the boss's story.
- **Hunter's Journal entries** — bestiary text that's also narrative.

![Hollow Knight Hunter's Journal entry for Elder Baldur — bestiary text reads "Bulky and covered in thick plating. Retracts into itself when attacked. As they age, these creatures become too heavy and lumpy to roll around freely. Instead, they curl up and hide from the world. What do they think of in there, wrapped up inside of themselves? More carefree times perhaps." Encountered 137/147 + Completed 110/147](/images/hollow-knight/hk-hunter-journal.jpg)
*The Hunter's Journal. Each enemy entry has *two* texts: a clinical description and a *hunter's reflection* — the second paragraph here is the lore, where the writer wonders what an old Baldur thinks about. The journal is one of the most beloved writing surfaces in the game. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=113).*

## NPC dialogue — atmospheric tone

![Hornet (a recurring NPC) speaking with the trademark atmospheric tone, dialogue reads "I won't be joining you in this. That space is built to sustain your likes. Its bindings would drain me were I to join."](/images/hollow-knight/hk-hornet-dialogue.jpg)
*Hornet — the recurring NPC who's part-mentor, part-rival, part-mystery. The dialogue is *atmospheric*: it implies a relationship and a context the player must piece together. No quest log, no quest marker. The writing trusts the player. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=113).*

The lore unfolds in **two passes**:

1. *Run-1 pass:* the player notices things, doesn't understand them, marks them on the map for later.
2. *Lore-piecing pass:* after credits, the player reads NPC dialogue logs, tablet text, and boss arenas with the full picture.

Hollow Knight's *post-credits months* are when most players actually understand the story. This is rare. Most games tell you the story; Hollow Knight makes you find it.

## Compared to other metroidvania map systems

| Game | Map shown by | Map UX |
|---|---|---|
| Super Metroid | Default visible | Showed what's been explored |
| Symphony of the Night | Default visible | Same |
| Ori and the Blind Forest | Default + spirit tree pickups | Visible always |
| Axiom Verge | Default visible | Same |
| **Hollow Knight** | **Cornifer find + bench draw + Iselda tools** | **Earned at every stage** |

Hollow Knight's earned-cartography is unusual. The cost is real (~5h of disorientation in the early game); the payoff is the rest of the game *feels* like exploration in a way maps-by-default games don't.

## Patterns this exemplifies

- `map-by-discovery` — find Cornifer, rest at a bench, buy tools from Iselda. Each region's map is its own discovery chain. (Singleton pattern; not curated.)
- [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) — Iselda's pin types and Quill/Compass/Marker tools drip across the early game. Dream Nail (lore-reading from NPC corpses) unlocks late and adds an entire second dialogue layer.
