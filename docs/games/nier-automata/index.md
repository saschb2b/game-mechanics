---
title: "Nier: Automata"
type: game
studio: PlatinumGames
publisher: Square Enix
released: 2017
genre: action-RPG
business_model: premium
iconic_mechanic: "Plug-in chips replace the HUD + multi-route ABCDE structure"
core_dialectic: "Form mirrors theme — every system rereads the fiction"
patterns:
  - loadout-as-budget
  - bonus-with-drawback
  - opportunity-cost-loadout
  - late-introduced-mechanics
  - diegetic-ui
  - multi-route-replay
  - flavor-as-meta-narrative
  - meta-altruism-on-completion
tags: [action-rpg, hack-and-slash, single-player, story-driven]
og_image: images/nier-automata/chip-categories.jpg
---

# Nier: Automata

> **A 2017 action-RPG from PlatinumGames + Yoko Taro (director) + Square Enix (publisher)** in which combat android 2B and her scanner partner 9S fight machine lifeforms across a post-human Earth — and in which **the HUD itself is a Plug-in Chip** the player can uninstall, the credits roll five separate times, and the final ending asks you to delete your save data to help a stranger. Mechanics, narrative, and UI all argue the same thing: nothing in this world is what it appears to be on first read.

![Nier: Automata title screen — silhouetted ruins of an abandoned city, "NieR:Automata" logo with the colon glitched, Continue / New Game / Settings menu](/images/nier-automata/title-screen.jpg)
*Nier: Automata title screen. The glitch in the logo is intentional and recurring — the game's typography occasionally corrupts during cutscenes and menus, foreshadowing reveals about the nature of the YoRHa androids. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=150).*

## Snapshot

| | |
|---|---|
| **Director / studio / publisher** | Yoko Taro (director) · PlatinumGames (development) · Square Enix (publisher) |
| **Released** | 2017 (PS4/Steam) → 2019 (Xbox One) → 2022 (Switch, *The End of YoRHa Edition*) |
| **Genre** | Action-RPG; hack-and-slash combat with shmup, twin-stick, and side-scrolling segments |
| **Business model** | Premium one-time purchase, no MTX |
| **Iconic mechanic** | Plug-in Chips that *include* the HUD elements — your minimap is software you choose to install |
| **Core dialectic** | "Mechanics as commentary, not as content" — every system rereads the fiction |
| **Hours to credits** | ~25–30h to Ending E (the canonical complete experience requires routes A, B, C/D, E in sequence) |
| **Sales** | 7.5M+ copies as of 2023 — far outperforming Square Enix's modest projections |

## Macro loop

```
loop:
  pick route protagonist          # A: 2B → B: 9S replay → C/D: A2/9S → E: meta
  explore open-ish world (City Ruins / Desert / Forest / Amusement Park / Factory / Copied City)
  combat → drop chips + EXP + crafting mats
  loop:
    open menu → tune chip loadout under storage budget (start ~64, max 256)
    decide: more HP? more damage? show the minimap? auto-collect items? auto-fire?
    every chip equipped is a chip not equipped
  pursue main quest → cutscene → next chapter
  optional: side quests, weapon upgrades, unlock weapon-story paragraphs
on death:
  drop body in world (chips equipped at death go with it)
  recover at last save → travel to body → fight your own corpse OR retrieve chips
on credits A (~12h):
  story "ends" → game tells you to start over as 9S
on credits C/D (~25h):
  story "ends" again → unlocks Ending E
on Ending E:
  bullet-hell the credits to a chorus → game asks if you'll delete your save to help others → choose
```

## Mechanic deep-dives

- [**Plug-in chips**](./chip-system) — the loadout. Every passive ability (HP+, Auto-Heal, Combo Up) AND every HUD element (minimap, EXP bar, OS itself) is a chip. They share one storage budget. You have to choose what you can see.
- [**Multi-route ABCDE structure**](./multi-route-structure) — five "endings" but only E is the ending. A is 2B's run, B is the same content as 9S (different POV + hacking), C/D are A2/9S branching, E is the meta-finale.
- [**Genre-shifting combat**](./genre-shifting-combat) — the camera reframes from third-person hack-and-slash to twin-stick shmup to 2D side-scroller depending on the room. The verbs change with the camera, not with the mode select.
- [**Ending E + save sacrifice**](./ending-e-save-sacrifice) — bullet-hell the credits, accept help from strangers' encouragement messages, then choose whether to delete your own save to help the next player. Ludonarrative as meta-altruism.
- [**Weapon stories**](./weapon-stories) — every weapon has a four-paragraph story, with paragraphs unlocked by upgrading the weapon. Flavor text as the game's most consistent narrative voice.

## Through other lenses

- [**Ludonarrative reading**](./ludonarrative-resonance) — these mechanics read through the [resonance lens](/concepts/ludonarrative-resonance). **Verdict: structurally affirms** — the game's central claims (perception is software, replay is rereading, sacrifice is the verb of empathy) are *enacted* by the mechanics, not narrated *over* them.

## What this game teaches

- **Loadout-as-budget can include the UI.** Most games treat HUD elements as a fixed frame; Automata makes them chips. Removing the minimap to free 4 storage for an Auto-Heal chip is a real, frequent decision. The lesson: any element of the game's *frame* can become a *cost*.
- **"New Game+" is a load-bearing narrative tool, not a checkbox.** Route B isn't optional — it's mandatory and a different game. The trick is that Yoko Taro budgets accordingly. Don't promise replay; design for it.
- **A meta-altruistic ending is cheap to ship and unforgettable.** Ending E uses a tiny network feature (asynchronous co-op encouragement) and one binary save-deletion prompt. Total cost: trivial. Memorability: defining.
- **Flavor text can be the dominant narrative channel.** The four-paragraph weapon stories add up to more total prose than the cutscenes — and they're the part players quote. If your game has equippable items, the *text on them* is a free narrative budget.
- **Genre-shifting works as commentary.** When the camera collapses to 2D for the YoRHa Bunker hallway, the game is *saying* something about institutional confinement before any character speaks. The verb-set is rhetoric.

See [`lessons.md`](./lessons) for the longer take.

## See also

- [Design tensions](./design-tensions) — Yoko Taro's quotes on routes, endings, and budget
- [Patterns](./patterns) — full pattern table
- [Sources](./sources) — bibliography
