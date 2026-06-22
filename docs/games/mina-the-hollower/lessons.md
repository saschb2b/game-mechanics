---
title: "Mina the Hollower: Lessons"
type: game
game: mina-the-hollower
---

# Lessons: what I'd steal

Opinionated takeaways for my own (Godot) projects. Mina gets a lot from a little: one verb, two currencies, a handful of slots, and a hard-but-fair death loop.

## Steal these

### 1. Build the game on one verb, then make everything *extend* it
The single most transferable idea here. [Hollowing](./hollowing.md) is dodge + traversal + opener, and every upgrade *deepens that verb* instead of adding a parallel one (Seismic Belt fires through it; Wallower's Gauntlets change where it goes). For a solo Godot project this is gold: **one polished core ability beats five mediocre ones.** Pick the verb, then make enemies, levels, and items all pose questions *about that verb*. You get coherence for free and your scope stays sane.

> Implementation note: a burrow is cheap to build, it's an i-frame state plus a "can I exist on this tile" check plus a reskin of a dash. The *design* work (every enemy answers it) is where the value is, and that's authoring, not engineering.

### 2. Graduate the death penalty
The [Spark system](./death-and-sparks.md) is the part I'd lift wholesale. A buffer resource that absorbs early deaths (you keep your currency while Sparks remain), a recoverable drop, and a **level-up auto-forgiveness rule**, that's a Souls loop minus the cruelty. It keeps tension (run out of Sparks and the next death is real) while refusing to punish learning. Far better for retention than "lose everything on the second death," and trivial to implement: a counter, a dropped pickup with a position, and a hook on level-up that reclaims all drops.

### 3. Make the stat screen diegetic
The [Tenebrous Times newspaper](./world-and-newspaper.md) reframes Time / Deaths / Steps / Heals as a gossip-column "Facts Corner," folds in lore and quests, and even hides cipher puzzles. It costs almost nothing extra over a normal stats menu but does enormous tone work. **Any menu you have to build anyway is a chance to build the world instead of a spreadsheet.** I'd apply this to shops, save screens, and option menus too.

### 4. Ration power with slots, not just numbers
Weapon (1), shield (1), sidearm (1), trinkets (a few of 60). Mina almost never hands you raw power, it hands you a *slot decision*. That's what keeps a 30-hour game from collapsing into a kitchen-sink build, and it's the [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) pattern done with discipline. Cheaper to balance than open stat-stacking, and it generates build identity automatically.

### 5. Let a hardware constraint do your art-direction *and* your readability
The [GBC palette and chunky grid](./world-and-newspaper.md#the-constraint-as-a-feature) aren't nostalgia, they force clean silhouettes and legible telegraphs, which is exactly what timing-based combat needs. A self-imposed constraint (limited palette, fixed tile size, small sprite count) is a solo dev's friend: it bounds the art workload *and* improves clarity. Pick the constraint that also solves a design problem.

### 6. One fictional noun, many mechanical hats
The **Spark** is the MacGuffin, the gating system, the checkpoint, *and* the death-buffer. Reusing one fiction-object across four systems is most of why the game feels [coherent rather than assembled](./ludonarrative-resonance.md). When designing a system, ask "is there an existing story-noun this could *be*, instead of a new abstract resource?"

## Cautionary lessons

### Hard defaults need a real floor, or you lose players
Mina ships Castlevania-hard and several reviewers flagged "very high difficulty" and "lack of guidance." It gets away with it because of the [Spark buffer *and* an accessibility menu](./death-and-sparks.md#difficulty-accessibility). If you want punishing defaults, budget for the systemic softeners and the toggles *first*, difficulty without a floor reads as "broken," not "hardcore." For a smaller audience than Yacht Club's, I'd tune the default gentler and let players opt *into* the pain.

### A one-verb game lives or dies on enemy/level authoring
The flip side of lesson 1: if the verb is the whole game, then **thin enemy design is fatal.** Mina works because the bestiary keeps asking new burrow questions for hours. That's a lot of authoring, not a lot of code, don't under-budget the content side just because the systems side is small.

### Big build freedom is a balancing tax
60 trinkets × multiple sidearms × multiple weapons is a combinatorial surface that took Yacht Club extra tooling and a *six-month delay* to tame. As a solo dev, I'd cap the loadout breadth I can actually balance, fewer, more distinct trinkets beats sixty that need a spreadsheet to keep from breaking.

### "Retro" is a promise about feel, not just pixels
The GBC look sets an expectation. If the *game feel* (input latency, animation snap, audio punch) doesn't match the fidelity of the reference, the homage curdles. The pixels are the cheap part; the feel is the expensive part, and it's the part players actually notice.
