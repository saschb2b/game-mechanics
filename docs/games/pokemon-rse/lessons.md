---
title: "Pokémon RSE — Lessons"
type: game
game: pokemon-rse
---

# Lessons

What I'd steal — and what I'd avoid — for my own (Godot) games.

## What I'd steal

### A 4-slot loadout from a deep pool of options

The Pokémon moveset is the cleanest small-grain `loadout-as-budget` in commercial games. **4 slots, hundreds of typed options, no respec without forgetting an existing move forever.** This produces:

- Real per-creature identity (this is the Charizard with Belly Drum, *not* the standard Charizard).
- Coverage problems (4 moves that are all Fire is a waste; you need 2–3 types).
- A constant in-fiction friction (every level-up is potentially a forced move-trade).

For a Godot game with creatures or weapons: 4 slots is a sweet spot. 6 is too many (no real opportunity cost). 2 is too few (no coverage problem). 4 forces commitment without feeling brutal.

### A permanent stat profile per individual

IVs + EVs + Natures + Abilities together produce **a fixed identity per individual creature** that the player largely cannot alter. This is the engine of competitive Pokémon's longevity: rolling for a perfect Pokémon is a goal that takes hundreds of hours per individual.

For a smaller game: one immutable trait per creature (a Nature equivalent — +10% one stat / −10% another) is enough to create real per-individual identity without exposing the deeper math. The unalterability is the key. *Re-rolling means starting over.*

### Type chart as a learnable asymmetric matrix

A 6×6 or 8×8 type matrix — *asymmetric, not derivable from a simple rule, with a few hard immunities* — is one of the highest-value design moves available for any combat-with-multiple-options system. The Pokémon chart's irregularity (Bug being weak offensively, Ghost being immune to Normal/Fighting, etc.) is what gives each type real character.

The trick is **to design the chart by hand** — not generate it from "fast vs heavy" or "magic vs physical" rules. Hand-designed asymmetry is what makes Skarmory feel like Skarmory.

### Hidden depth with no in-game UI

Pokémon's competitive math layer (IVs / EV-grinding / Nature mathematics) is **not surfaced in-game** in Gen 3. Players had to reverse-engineer it from leaks and testing. This produced:

- Casual players never saw the math and finished comfortably.
- Competitive players had a community to *figure it out together*.
- The community-knowledge layer became a moat — competitive Pokémon's social fabric is partly *the act of knowing the math*.

For a game with optional depth: don't surface the depth in tutorial / settings menus. Let players who want it find it. The hunt is part of the value.

### A "third version" as a real product

Emerald is a $30 cartridge that ships ~22 months after Ruby/Sapphire. It is not a patch, not free DLC, not a directors-cut update. It is **a full product, sold to people who already own R/S**, with new content (Battle Frontier) that justifies the second purchase.

The pattern works because:

- The most-engaged 1/3 of the audience will buy the third version.
- The new content (post-game challenge tower) is too big to retrofit into a patch.
- The story revisions (Magma + Aqua merged) require save-format changes incompatible with the original.

For an indie dev: don't dismiss the "directors cut as a separate product" model. Stardew's 1.5 update was free, but it could have been a $10 expansion — and many studios would have benefited from charging for it. The Pokémon model is older, well-understood, and still works.

## What I'd be careful about

### Two-version exclusivity is a hardware-and-trust device

Pokémon's paired versions work because:

- Cartridges are physical; sharing requires physical proximity.
- The franchise has *25 years* of trust that trade-back will work.
- The audience accepts asymmetric content as a genre convention.

A new IP cannot do this. A modern game can't ship Ruby/Sapphire-style and expect players to buy two copies. The closest viable digital analogues are: (a) friend-list-locked content (Animal Crossing's Mystery Islands), (b) seasonal MMO content (Path of Exile leagues), or (c) explicit co-op-locked side missions (Helldivers 2 etc.).

If you want to copy the *spirit* of two-version exclusivity, copy the **trade-and-return ritual** (like Pokémon's Kadabra → Alakazam, where you trade and trade back). The ritual is the bond, not the hardware.

### Hidden math creates an information moat that can be hostile

A new player in 2026 who wants to play Pokémon competitively faces a **20-year-old mountain of community-discovered math** that they have to absorb to be relevant. The hidden-depth design that worked in 2003 has compounded into an entry barrier.

Game Freak has slowly addressed this with later-generation features (Hyper Training, IV Judges visible from earlier, Mints for Nature, etc.). The lesson: hidden depth is *good design at launch* and *technical debt at scale*. Plan for the day you'll need to surface it.

### Side-systems that don't connect to the main loop tend to wilt

Hoenn's Contests, Secret Bases, and Berry growing are deep but **disconnected** from the main badge-collection loop. Many players ignore them entirely. The franchise's solution in later generations has been to ship *fewer* side-systems but make them more central (Pokémon-Amie / Refresh in Gen 6/7, the Wild Area in Gen 8).

For a smaller game: don't ship three optional side-systems. Ship one that's actually integrated. The "buffet" of optional content is a temptation that costs author energy and produces engagement-fragmentation.

### A 30-year-old engine's design constraints become the franchise's

Pokémon's design — fixed turn-based 4-move 6-stat 17-type — was decided in 1996 and has been preserved despite radical hardware shifts. This is *load-bearing for the brand* (every Pokémon player can pick up a new gen and play immediately) and *limiting for innovation* (the franchise has had real trouble breaking out of these defaults).

The lesson: be careful what you commit to in your *first* installment. If your IP's design becomes its identity, breaking it in a sequel costs you the audience. Choose your invariants deliberately.

## On Game Freak's economics

The single most useful framing in Masuda's interview corpus: **the Pokémon franchise treats the player's collection as a 25-year save state.** Every Pokémon ever caught in Gen 3+ should still be transferable to the latest game (via Pokémon Bank / Home).

This decision drives a *huge* amount of architectural cost — every generation has to support legacy Pokémon, legacy moves, legacy abilities forward-compatibly. Game Freak has paid that cost continuously for 22 years.

But the payoff is the franchise's deepest moat. A player who started in 2003 with a Torchic in Ruby can, in 2026, still have that Torchic on their team. **No other commercial game treats player progression at this scale.** Pokémon's competition (Digimon, Yo-Kai Watch, etc.) didn't make this commitment and have all faded.

For a smaller game: probably you can't afford 25 years of forward-compatibility. But thinking about your save format as *a contract with the player* rather than *a serialisation of the current build* is a useful frame even at small scale. What state should be irrevocable? What should the player be able to take with them across versions? Decide deliberately at v1.0.
