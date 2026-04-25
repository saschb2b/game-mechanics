---
title: "Mega Man Battle Network — Lessons for my own games"
type: game
game: mega-man-battle-network
---

# Lessons for my own (Godot) games

The Battle Network series ships some of the most-stealable mechanics in handheld history. A surprising number of indie games have ported pieces of it; **almost no one has assembled the whole stack.**

## Steal: pause-to-draw inside real-time combat

The Custom Gauge is the single most-original mechanic the series produced. **A real-time-replenishing card-draw step that's also a tactical resource you attack and defend.**

This is portable to almost any real-time combat game where there's a "skill / spell / ability" deck to draw from:
- Action roguelite where you draw new abilities every N seconds.
- Survivors-likes where you draw new weapons mid-run.
- ARPGs where active skills are drawn from a small hand rather than a fixed bar.

Almost no one has tried this in modern indie design. **Don't separate menu time from combat time** — embed the menu *as a tactical resource* in the action.

## Steal: NaviCust as a genre-portable grid-inventory pattern

NaviCust is the cleanest [`grid-inventory`](/concepts/grid-inventory) implementation in the knowledge base. Tetris-shaped buff blocks on a small grid, adjacency rules, opt-in chaos via Bugs.

Direct copies in modern indie are rare. **It's been re-discovered** in Sparklite (patch board), Moonlighter 2 (backpack puzzle), Risk of Rain 2 (item interactions, less spatial), and various others — but BN3 shipped this in 2002.

For my own games: **a 4×4 grid is enough.** The constraints carry the design. Don't think you need a sprawling Sparklite 5×5 board — start with 3×3 and let the placement rules do the work.

## Steal: opt-in chaos via Bugs

NaviCust's killer feature isn't the grid — it's that **violating the rules doesn't reject the placement.** It applies the buff *and* a debuff. Players can opt into chaos to fit more.

This is universally applicable to any constraint-satisfaction system. Loot games where you can over-equip and pay a stat penalty. Spell-loadout games where you can cram in one more ability and accept randomness. **Allow rule-bending with a cost; don't enforce the rules with rejection.**

## Steal: code-constrained deckbuilding

BN's letter-code rule is a *combinatorial constraint on co-play*. Two chips combine if they share a name or share a code. That single rule determines folder shape.

This is portable to any small-hand card game. Instead of mana costs (MTG) or always-stackable (Hearthstone), give cards *tags* and let cards that share tags combine. **A simple combinatorial rule replaces mana curves entirely.**

For my own games: code-as-constraint is a much smaller mechanical surface than mana curves. Easier to balance, easier to teach.

## Steal: yearly iteration on a frozen core

Capcom shipped 6 BN games in 5 years on the same engine. The combat shell never changed; the meta-progression layer iterated every year.

Implication: **decide what your "frozen core" is.** What part of your design must not change between iterations? For BN it was 6×3 grid + Folder + Custom Gauge. For my games, what's the equivalent? Pick it deliberately. *Don't* iterate the core; iterate the layers above.

## Steal: Beast Out as bonus-with-forced-fallback

Beast Out (BN6) is one of the cleanest [`bonus-with-drawback`](/concepts/bonus-with-drawback) implementations I've seen. The trick is that the drawback is **forced**, not optional. After your super-form runs out, you're locked into a worse state for at least 1 turn.

This produces a different feel than "+stat / -stat" trades. **You commit to the burst, you eat the consequence.** The decision is "burst now or save it for later" — a real timing choice, not a math problem.

For my games: when designing super-forms or burst abilities, give them a **temporal aftermath** that makes them not freely repeatable. Spire boss relics do this with permanent costs; BN does it with timed punishments. Both work; pick the one that fits.

## Steal: depth that doesn't punish casual play

BN's depth ceiling is genuinely high. Folder optimization, PA recipe memorization, NaviCust packing, transformation system mastery. *None of it is required* to finish the campaign. The depth is opt-in for postgame.

This is rare. Most ARPGs (PoE) gate their endgame on deep system mastery. BN doesn't. Casual players can complete the campaign with a haphazard Folder; deep players unlock postgame superbosses with optimized everything.

For my games: **separate "complete the game" from "master the systems."** Don't gate completion on deep play. Let the deep play be its own opt-in reward layer.

## Cautionary lesson: yearly iteration produces messy middle entries

BN4 is universally regarded as the franchise low point. Forced multi-playthroughs, unbalanced Souls, Dark Chip morality system that didn't quite work. BN5 was structurally weird (Liberation Mission mode took half the runtime). BN6 had to clean up a lot.

If you commit to fast iteration, **expect bad ideas to ship.** The benefit of the cycle is fast feedback — but the cost is that some entries will be remembered as the bad one. Plan for this. Don't pour every BN4-equivalent's design budget into a "definitive" version that won't get superseded.

## Cautionary lesson: hidden knowledge depth has a community gradient

PA recipes and Compression Codes are great for engaged players. They're terrible for new-player onboarding. **The community knows things the game doesn't tell you, and players without access to that community are at a permanent disadvantage.**

For my games: if I'm shipping hidden-knowledge depth, I need to think about how new players discover it. Maybe in-game NPCs hint at recipes. Maybe a dedicated codex unlocks postgame. PoE delegates to NeverSink; BN delegated to magazines and now wikis. **Pick a discovery path or accept the new-player gradient.**

## Cautionary lesson: combining genres needs a dialectic, not a list

BN's "action + card" framing was a *dialectic* — both halves were load-bearing, and the Custom Gauge made them inseparable. That's why it works.

A genre fusion that's just "this game has cards AND it's an action game" wouldn't have the same structural cohesion. **The fusion needs a single mechanism that requires both halves at once.**

For my games: if I'm tempted to combine two genres, ask what the *single mechanism* is that makes the combination unavoidable. If I can't name it, the fusion will feel like a list of features, not a coherent design.
