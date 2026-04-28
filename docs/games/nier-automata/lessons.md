---
title: "Nier: Automata — Lessons"
type: game
game: nier-automata
---

# Lessons

What I'd steal — and what I'd be careful about — for my own (Godot) games.

## What I'd steal

### Put the HUD in the loadout

The chip system's central trick is that the HUD elements (minimap, HP bar, damage numbers, EXP bar) are themselves equippable items in the same storage budget as the combat power-ups. This is *cheap to ship* and produces several effects at once:

- **Accessibility:** players who find the HUD overwhelming can hide pieces of it without hunting through an Options menu. The disable is a normal in-game interaction.
- **Build identity:** a "minimalist combat" build that sacrifices the minimap for an Auto-Heal feels different than a full-HUD build, even though combat math is the same.
- **Thematic load:** if the fiction allows it (cyborgs, hackers, simulations, wizards reading reality from a grimoire), the diegetic framing is free.

Engineering note: in Godot, this is one extra system that swaps `CanvasLayer` children based on a simple `equipped_chips` array. Not expensive.

### Reread instead of New Game+

Most games treat replay as optional. Yoko Taro budgets it as Act 2 and *requires* it. The trick is that Route B is shorter than Route A, reuses environments and many cutscenes, but is **re-paced and re-edited** with new information. The player isn't replaying for higher difficulty or extra modes; they're replaying because the *story is incomplete* without it.

For my own games: if a story has a "second-reading" reveal, **build the second reading as content**, not as flavor text in the credits.

### Asynchronous co-op as a finale device

Ending E uses a small server-side feature (encouragement messages + ghost-run snapshots) as the load-bearing trick of the game's most quoted moment. Cost to ship: trivial. Cost to player: their save. Memory: defining.

A small game can do this with a server endpoint that stores 2,000 short text messages tagged by completion state, and a save-state-snapshot blob played back as a ghost. The technical bar is low; the design choice is the part most people skip.

### Flavor text in installments

Weapon stories revealed across upgrade tiers turns equipment-text into a 5–25h drip-feed. Most games ship flavor text as a one-time read on pickup. Releasing it across upgrade gates couples narrative reveal to player engagement at a much higher rate.

For an item-heavy game, this single decision can roughly *quadruple* the felt prose volume without writing more total words.

### Mandatory ≠ unequippable

The OS Chip lets the player do the wrong thing — uninstall their own operating system — and immediately punishes it. The lesson: **don't grey out interactions just because they have catastrophic consequences.** Letting the player make the choice and feel the cost is more interesting than blocking the choice.

This is `bonus-with-drawback` taken to its limit: the drawback is *the entire game*, but the choice is yours.

## What I'd be careful about

### Multi-route only works if you can budget for it

Yoko Taro's "use the same content twice" trick requires that the second pass be **substantively re-authored**. Route B isn't asset reuse; it's encounter remix + new cutscenes + new mechanic (hacking). The reuse is the *frame*, not the content.

If I tried this without the budget for re-authoring, Route B would feel like a tedious second playthrough with extra cutscenes — the failure mode of every game that's tried "see the story from the antagonist's POV" as DLC.

**The technique requires authorial energy, not just engineering.**

### Save deletion is a player-trust transaction

Ending E's save-deletion prompt is unforgettable for the player who chose Yes the first time, and a *moderately bad day* for the player who hit Yes on autopilot and lost 25 hours. Yoko Taro accepts that risk; Square Enix QA pushed back and added a cloud-backup escape hatch that the in-game prompt does not mention.

For a smaller game, the brand cost of a player losing their save by accident may not be worth the design payoff. **Make sure your community can survive the players who chose wrong.**

### Genre-shift camera framing only works if your input language stays consistent

The 2D-to-3D-to-shmum transitions in Automata feel seamless because **the controls don't change** — just what they do in space changes. If a 2D platformer used different buttons for jump than its 3D mode, the genre-shift would feel like a different game. The shifts are diegetic *because* the controls are constant.

For my own games: shifting genre is allowed, shifting *button language* is much more expensive than it looks.

### Yoko Taro's tonal palette is not a default

Most weapon stories in Automata are bleak. Most quests resolve grimly. The game's central reveal is a war between two manufactured purposes. **This works because Yoko Taro maintains the tonal palette consistently for 25 hours.**

If I lift the weapon-story-as-meta-narrative technique without a comparable tonal commitment, the result is incoherent: cute fantasy weapons with grim child-soldier backstories produce a tone clash. The technique requires tonal consistency, not just narrative ambition.

### "Late-introduced mechanics" only works at this scale

Automata can introduce a major systems layer 12 hours in because it has 25+ hours of total content. A 6-hour game that introduces hacking at hour 4 leaves only 2 hours for the new system to land. **This pattern is gated by total content runway.**

For a shorter game, late-introduced *content* (new enemies, locations, cutscenes) works at any scale; late-introduced *mechanics* (new verbs, new menus, new resources) needs a long tail to pay off.

## On Yoko Taro's economics

The single most useful framing in Yoko Taro's interview corpus: **constraints become design.** The multi-route structure was a Square Enix budget demand. The chip system replaced what would have been Easy/Normal/Hard difficulty selectors. The save-deletion ending was rejected and partially reinstated.

The lesson: **a publisher constraint is also a brief.** "Add more content" became "add more endings." "Make it accessible" became "make accessibility a build choice." "Don't truly delete saves" became "ask for save deletion as a binary prompt and let cloud backup do its thing silently."

For an indie dev: when budget or platform constraints arrive, look at them as briefs, not blockers. The Automata structure is what falls out when you take that posture seriously.
