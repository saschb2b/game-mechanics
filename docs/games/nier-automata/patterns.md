---
title: "Nier: Automata — Patterns"
type: game
game: nier-automata
---

# Patterns Nier: Automata exemplifies

| Pattern | How Nier: Automata uses it |
|---|---|
| [`loadout-as-budget`](/concepts/loadout-as-budget) | Plug-in chips share one Storage budget (starts ~64, max 256). Each chip costs storage; same chip exists at multiple costs depending on quality. Three saved Sets (A/B/C) for fast role-swap. |
| [`bonus-with-drawback`](/concepts/bonus-with-drawback) | Emergent from the budget — every chip equipped is a chip not equipped. The standout per-chip case is the OS Chip: removing it instantly kills the character. The accidental case is dying with HUD chips equipped — they drop with the corpse, and dying again before recovery loses them permanently. |
| [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) | Show the minimap or take an Auto-Heal? Show damage numbers or get +20% Last Stand? The HUD competes for storage with combat power. The frame and the action are in the same budget. |
| [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) | The first 12 hours are tutorial. Route B reveals 9S's hacking minigame as a major systems layer. Route C/D introduces A2's berserk mode. Ending E adds bullet-hell credits + asynchronous co-op + save-deletion. The "real" game is what unlocks after the first credits. |
| `diegetic-ui` | Chips include the HUD elements: HP bar, EXP bar, minimap, damage numbers, enemy HP bar. Removing them removes the rendering. The frame is part of the loadout. (Singleton in the knowledge base — Automata is the canonical case.) |
| `multi-route-replay` | Routes A → B → C → D → E. Route B re-runs Route A's content from a different POV with a new mechanic (hacking) and additional cutscenes. Replay is mandatory for the canonical ending, not optional bonus mode. |
| `flavor-as-meta-narrative` | Every weapon has a four-paragraph story unlocked across upgrade levels. The collected weapon stories form a thematic spine that predicts the main-plot reveals before the cutscenes deliver them. |
| `meta-altruism-on-completion` | Ending E asks the player to delete their save data so a stranger can finish their own Ending E. Asynchronous co-op via encouragement messages and ghost-runs. (Singleton — Automata is the canonical case.) |
| `genre-shifting-camera` | Camera framing changes verb-set — third-person hack-and-slash, twin-stick shmup, 2D side-scroller, top-down, bullet-hell. Player doesn't pick a mode; rooms shape the verbs. |
| `fusion-economy` | Adjacent: chip duplicates fuse 3-into-1 to produce a higher-tier chip with smaller storage cost. Same as `fusion-economy` at the inventory layer, but specifically applied to *budget compression* rather than power growth. |
