---
title: "Nier: Automata — Multi-route ABCDE structure"
type: game
game: nier-automata
patterns:
  - multi-route-replay
  - late-introduced-mechanics
---

# Multi-route ABCDE structure

Nier: Automata's marketing line was "26 endings." That's misleading. There are **5 main endings (A through E) plus 21 joke endings** triggered by deliberately failing. The five main endings form a single intended sequence — and only one of them, **E, is the ending of the game.**

The structure is the load-bearing trick of Nier: Automata's design.

## The route sequence

| Route | Protagonist | Time | What's actually different |
|---|---|---|---|
| **A** | 2B (combat android) | ~12h | First playthrough. Open world, main story arc. Credits roll. |
| **B** | 9S (scanner android) | ~10h | **Same content as Route A**, but from 9S's POV. Adds: hacking minigame replaces some combat encounters; cutscenes you didn't see in A; new dialogue; the same world feels different because 9S can read things 2B couldn't. |
| **C / D** | 2B → A2 (rogue android) / 9S | ~6h each branch | New content. Branches at a critical decision; one path produces Ending C, the other Ending D. **Both are required to unlock E.** |
| **E** | 2B + 9S + A2 (the meta-protagonist: you) | ~30 min | Bullet-hell credits sequence. Network-supported. Save-deletion prompt. *The* ending. |

So the canonical "complete" experience is A → B → C → D → E, in that order, ~25–30h total.

## Route B is the load-bearing trick

If routes B/C/D were just unlock cutscenes after Ending A, the game would be a normal action-RPG. It's not. **Route B re-runs Route A's story** — but the game *trusts* you've seen it. Specifically:

- **Cutscenes you've already seen are skippable** with a button hold (a feature added because Yoko Taro knew the structure required it).
- **Encounters are remixed for 9S's verbs.** 9S has weaker melee but a hacking ability that turns some enemies into one-shot puzzles. The same boss is differently shaped.
- **Information you didn't have in Route A is revealed.** A pivotal cutscene that played as one character's tragedy in A becomes a duet in B with 9S's reaction.

This is *not* a New Game+. It is the second half of Act 1, designed and budgeted as a separate playthrough with shared assets. Yoko Taro's Drakengard 1 used the same structure; he describes it as a way to get more story out of a fixed budget.

> "The route system was, well, that was a product of our budget from Square Enix. We couldn't really make all that much content … we ended up trying to make those route shifts and try to use the same content as much as possible."
>
> — **Yoko Taro**, [2023 interview](https://www.gamesradar.com/games/action-rpg/yoko-taro-says-nier-automata-has-so-many-endings-because-square-enix-told-us-to-add-more-content/)

The constraint became the design.

## Routes C/D split — and why both are required

After 9S's run ends, the game proceeds into new content. At a structural climax, the player is asked to commit to one of two protagonists for a final confrontation: **2B or 9S** (the prompt is in-fiction, framed as A2's choice). One leads to Ending C, the other to Ending D.

Picking C does *not* lock out D. After Ending C, the game prompts the player to start route D from the same decision point. The endings are **branching, not exclusive.** Both must be seen for Ending E to unlock.

This is `late-introduced-mechanics` operating at the route-structure layer: Automata teaches the player that an ending is just a chapter break by *re-using* the credits sequence as a chapter header five times.

## What the player learns about their relationship to the game

The structural argument made by ABCDE is something like:

- After route A, you think you understand the story.
- Route B reveals that your interpretation was incomplete in *important* ways. A cutscene you read as "2B betrays a comrade out of duty" reads as "2B is forced to repeatedly do this" once you see 9S's data logs.
- Routes C/D destabilise the cast — your favourite character's perspective may not be available, and you have to play someone else.
- Ending E asks: now that you've done all that work, will you give it up?

This works because the game *enforces* the rereading. If routes B/C/D were optional epilogue DLC, the structural trick collapses. The reread is mandatory. So is the new perspective.

## What this teaches

- **Replay can be required, not optional, if you budget it as content.** Most games treat replay as bonus mode. Yoko Taro budgets it as Act 2.
- **A structural twist must be enforced by the systems, not just promised by the writing.** Ending A reads as a complete story unless you keep playing. The game's "Continue" prompt is the entire device.
- **Reusing assets is not cheap if you re-author them.** Route B uses Route A's environments, encounter layouts, and many cutscenes — but every encounter is *re-paced*, every cutscene is *re-edited*, and 9S's hacking turns combat into something else. Reuse-as-frame; new-as-content.
- **Skip features earn their keep when route structure is non-linear.** Yoko Taro's team explicitly added cutscene-skip with full voice-acting context-aware skipping because the structure required it. If you're going to make players watch the same scene from multiple angles, give them the skip button — and don't take it personally when they use it.

## Patterns this exemplifies

- `multi-route-replay` — the game requires replay to reach the canonical ending. Uncurated; Yoko Taro's other works (Drakengard, the 2010 Nier) follow the same template, but they aren't yet in this knowledge base.
- [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) — 9S's hacking, A2's berserk mode, and most of the philosophical reveals all arrive after Ending A. The first 12 hours are the *tutorial*.
