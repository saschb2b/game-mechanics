---
title: "Breath of the Wild — Lessons"
type: game
game: zelda-botw
---

# Lessons

What I'd steal — and what I'd avoid — for my own (Godot) games.

## What I'd steal

### Write rules, not encounters

The chemistry engine is the highest-leverage design move in BOTW. Five element rules (fire, ice, wind, water, electricity) + the physics engine produces emergent solutions across hundreds of encounters. The team didn't author "5 Bokoblins on dry grass at this camp"; they authored **fire ignites grass** as a universal rule and let it apply everywhere.

For a smaller game, the lesson is: **invest in rules over content**. A small system of universal rules generates more emergent content than a large team can hand-author. The overhead is up-front design; the payoff is at-scale player surprise.

### One resource, multiple verbs

The stamina ring governs sprint + climb + swim + glide + charge-attack. Five verbs, one meter. The player learns the resource once and applies it everywhere — no new tutorial for any new traversal verb.

For my own designs: **before adding a new resource, see if an existing one can carry the load.** Two resources are usually enough; three is rarely better.

### Front-load the verb-set; deepen with context

BOTW gives the player almost the entire mechanical vocabulary in the first 90 minutes, then adds *no new primitives* across 30+ hours. Mastery curves are monotonic; the game *trusts* the player to recombine. Most open-world games drip new gadgets across the campaign, which means players spend the late game retraining instead of mastering.

For a smaller game with a 5–10 hour runtime, this is even more important. Don't drip; front-load.

### Climb-anywhere is one rule with massive consequences

The decision to make almost every surface climbable means the player can break the encounter designer's lines of approach for *every* combat in the game. Counterintuitively, this makes the game *easier to balance* — you can't enforce one-true-route, so you have to design for many approaches, which produces the multiplicative design property.

For a Godot game: if your terrain has any meaningful verticality, **try the climb-anywhere rule**. The cost is tuning; the payoff is player agency at every encounter.

### Weather as a real planning constraint

Rain blocks climbing. Cold drains hearts. Storms strike metal. The player checks the sky before committing to a route. This is **one environmental layer doing five design jobs** — encounter pacing, traversal pacing, equipment choice, resource planning, and atmosphere.

For a smaller game: **a single dynamic environmental rule is high-ROI**. Weather doesn't need to be elaborate; it needs to *gate something the player wants to do*.

### Bite-sized puzzle nodes alongside long-form

120 shrines × 10 minutes = 20 hours of puzzle content, completable in any order, at any pace. The shrine-as-unit is the right size for "I have 20 minutes before bed." This is the pacing format most modern players actually have time for.

For my own games: a dozen 10-minute puzzle nodes is more valuable than three 1-hour ones, *for adult-audience pacing*. The bite-size unit respects the player's attention budget.

### A meta-progression fork that forces commitment

Heart vs Stamina at every Goddess Statue is irreversible. Players become *kinds* of players — climbers vs fighters — through accumulated commitments. This is the *opposite* of "respec freely" design and produces stronger player identity.

For my own designs: **at least one major meta-progression decision should be permanent**. Not all of them; one is enough to give the run a felt identity.

## What I'd be careful about

### Weapon durability needs a partner system

BOTW's durability mechanic produces real engagement-with-camps but also real menu-juggling friction. The player's *optimal* play is to avoid combat to preserve weapons — the inverse of the stated design goal.

Tears of the Kingdom's Fuse mechanic is the team's correction: weapons still break, but you can extend them via crafting. The single-system version is incomplete; durability *needs* an extending system to be psychologically tolerable.

For my own designs: if you ship breakable equipment, **ship a maintenance/extension system alongside it from day one**. Don't make the player feel they're losing things they care about.

### The "no quest markers" stance is brave but expensive in QA

BOTW's main quests use vague directional cues ("look toward Death Mountain"). Many players spend *hours* searching for the next objective. The team accepted this because it forces players to engage with the field; the cost is real testing burden and mixed reception from less-patient players.

For a smaller game with a smaller QA team: probably ship quest markers, with a toggle. The brave version requires confidence in your guidance design.

### Fast travel via shrines is a soft contradiction with the slow fiction

The first 40% of BOTW is spent walking; the last 40% is spent fast-travelling. The fiction doesn't change, but the play texture does. The game's atmosphere is best in the early-mid game when the player is *moving through* the world.

For my own designs: **delay fast travel as long as you can**, or gate it heavily, or make it cost something in the late game. Free instantaneous warps undo the slowness work the rest of the game does.

### A 60 km² world with 120 nodes is a Nintendo-scale budget

The shrine count math (60 km² ÷ 5-min-radius = 120 nodes) is the right *math*, but the implementation requires authoring 120 short puzzles. That's 120 unique puzzle designs, 120 prefab shrine interiors, 120 names, 120 chest rewards. A small team cannot replicate this scale.

The lesson is to scale the math to your team. **At a 5 km² world with a 5-minute radius, you need ~10 nodes**, not 120. Pick the size you can actually fund.

### Climb-anywhere has a chemistry cost

Letting the player climb everything means *every* encounter has 20 viable approaches, which means combat balance has to assume *the worst* approach (most-cheesed) is acceptable. The team accepts this. A team that wants tightly-tuned encounter design (Soulslike, fighting-game) shouldn't ship climb-anywhere.

The traversal freedom and the difficulty curve trade off. Pick a stance.

## On Nintendo's economics

The framing that's most useful from BOTW's development: **constraints became design**. The Wii U / Switch dual-launch limited the team's tech footprint, which **forced** the rule-over-content approach. With unlimited hardware, the team has acknowledged they would have been tempted to add more content, which would have diluted the rule-systems' clarity.

For an indie dev: the *limitations of your platform* are not a cost; they're a brief. A 2D pixel-art Switch game cannot do BOTW's chemistry engine, but it can do something equivalent at its own scale — fewer rules, simpler interactions, the same multiplicative principle.

The structural lesson: **don't try to scale up; scale to your team**. The chemistry engine works at any size, with any number of elements. Ship a 3-element version of it for a 5-hour game; the design move is the same.

## On the "Aonuma defends durability" pattern

A meta-lesson worth flagging: **shipping a controversial mechanic commits you to the public discourse around it indefinitely**. Aonuma has spent 7+ years defending weapon durability. That's 7+ years of interview time spent on a single mechanic.

If you're going to ship a mechanic that you know will be divisive, *budget the PR cost*. The conversation will not go away. Either commit to defending it, or commit to evolving it (TotK's Fuse), or budget for the alternative system you'll ship later.

The lesson isn't "don't ship controversial mechanics" — it's "ship them on purpose." Aonuma did. The result: BOTW's weapon system is one of the most-discussed design decisions of the 2010s. Whether or not the durability is right, the *commitment to the system-level argument* is exemplary.
