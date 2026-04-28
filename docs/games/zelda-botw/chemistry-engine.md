---
title: "Breath of the Wild — The chemistry engine"
type: game
game: zelda-botw
patterns:
  - chemistry-engine
  - multiplicative-systems
---

# The chemistry engine

The signature design mechanic. **Fire, ice, wind, water, and electricity are systemic rules that propagate through the world independent of any specific encounter.** Wood catches fire; fire warms the air; warm air rises; updrafts carry the paraglider. Ice freezes water; ice melts in fire; metal weapons attract lightning during storms. None of this is scripted per-puzzle. It's the *rules* that are written, and the puzzles emerge when those rules collide with a specific terrain.

This is what programmer Takuhiro Dohta called the "**chemistry engine**" at GDC 2017 — a small set of element rules that interact with the physics engine to produce the player-felt feeling that Hyrule responds to actions consistently, everywhere, all the time.

![Magnesis in action — Link aims the rune at a metallic spear glowing yellow + a metallic box mid-air, in a Yiga Clan stronghold. Prompts at bottom: Push / Pull / Cancel / Move](/images/zelda-botw/magnesis-pull.jpg)
*Magnesis is a "metal-only attraction" rule, applied universally — every metal object in the world reacts to it the same way. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=35).*

## The element rules

The chemistry engine's elements (and their canonical behaviours):

| Element | Causes | Reacts with | Notable interactions |
|---|---|---|---|
| **Fire** | Heats air → updrafts; ignites wood, grass, oil; melts ice; cooks meat; warms Link in cold biomes | Wood, grass, oil, ice, water (extinguishes), wind (extinguishes / blows around) | Burning grass produces an updraft; the player rides that updraft with the paraglider |
| **Ice** | Freezes water; cools Link in hot biomes; reduces enemy mobility on contact | Water (forms), fire (melts), warm wind | Cryonis rune creates ice pillars on water; freezing a Lizalfos disables it briefly |
| **Wind** | Blows fire / leaves / arrows; pushes lightweight objects; carries the paraglider | Fire (extinguishes), arrows (deflects), Korok seeds (reveals) | Stand at a cliff, drop a leaf, see the wind direction → paraglide that way |
| **Water** | Conducts electricity (everyone in a wet patch gets shocked); puts out fire; soaks Link (penalty in cold) | Fire (extinguishes), ice (forms), electricity (conducts) | Toss a metal weapon into a pond with electric enemies → AoE one-shot |
| **Electricity** | Stuns enemies; conducts through water and metal; drops weapons from hands | Metal, water, wood (ignites), Link's metal weapons (drops them) | A storm + a metal sword = guaranteed lightning death. Drop the sword. |
| **Metal (with Magnesis rune)** | Attracts to the Magnesis cursor; lifts/moves; dropped during electricity | Magnesis, electricity, magnets in shrines | Almost every shrine has at least one metal object as a Magnesis target |

These rules are **universal**. There's no special logic for "this fire interacts with this grass *only in this shrine*." Burn grass anywhere in Hyrule, get an updraft anywhere in Hyrule. The consistency is the design.

## Why "multiplicative" is the load-bearing word

At GDC 2017, Fujibayashi described the team's shift from **additive** to **multiplicative** design:

> "Additive design is when you keep adding things to the game. … Multiplicative design is when objects react to the player's action, and the objects themselves also influence each other."
>
> — **Hidemaro Fujibayashi**, GDC 2017, [via Thumbsticks](https://www.thumbsticks.com/gdc-17-breath-of-the-wild-science-lies/)

The mathematical framing is real:

- **Additive:** N items × M situations = N + M useful possibilities. Each item works in roughly one context.
- **Multiplicative:** N rules × M objects × O contexts = N × M × O. Each rule applies everywhere; every situation calls in 2–4 rules at once.

A practical example. The player wants to cross a metal grate that's electrified. Approaches:

1. Throw a wooden weapon to break the grate (object → impact rule).
2. Stand a metal box on top of the grate to displace the electric Pokémon-equivalent (Magnesis + metal-conducts-electricity rule).
3. Wait for rain, drop a metal weapon into the water below the grate to short-circuit (rain + water + metal + electricity).
4. Use Stasis to freeze the electrocuted enemy mid-shock, paraglide over (Stasis rule).

None of these are *authored solutions*. They emerge from the rules.

## Where the engine shows up

The rule layer is most visible in **shrines** (where each puzzle is a controlled chemistry-engine demonstration) and in **combat encampments** (where the player improvises). It's almost invisible in the *world* because the rules are so consistent that players stop noticing them — fire-grass-updraft becomes a verb the player does without thinking, the same way a console-action player stops thinking about the dodge button.

A few canonical world-applications:

- **Korok puzzles** — many are wind-direction tests (drop a leaf or rock to see the wind, paraglide that way).
- **Storm survival** — heavy rain + metal sword = lightning danger. Drop the sword in the menu; lightning skips you.
- **Combat improvisation** — surrounded by Bokoblins on dry grass? Throw a fire arrow; the AoE burn drops 4 of them.
- **Stealth options** — Bokoblins around a campfire. Swim up the river behind, push a metal box over with Magnesis to crush them.

## The cost: emergent solutions outpace difficulty design

The trade-off Fujibayashi accepts is that **encounters cannot be balanced for any one solution.** A camp of 5 Bokoblins is supposed to be a 1-minute fight. A clever player kills them in 8 seconds via fire-on-grass. A less-clever player takes 3 minutes and breaks 2 weapons. Both are correct; the game doesn't punish either.

This produces the famous BOTW property: **two players who finish the game have had measurably different experiences.** A speedrun completes in 23 minutes (paragliding off the Great Plateau, glitching into Calamity Ganon's chamber); a full-completion player takes 200 hours. Both are using the same rule set.

## What this teaches

- **Write rules, not encounters.** A small system of universal rules generates more content than the largest content team can hand-author. The overhead is up-front design; the payoff is at-scale player surprise.
- **Consistency is the load-bearing property.** The chemistry engine works *because* fire-grass-updraft is true everywhere. Any exception makes players stop trusting the rules.
- **Pair the rule layer with a small verb-set.** Link has ~5 runes. The runes are *also* universal rules — Magnesis attracts metal *anywhere*; Cryonis freezes water *anywhere*. If the verbs were context-specific, the rule layer's consistency would not pay off.
- **Some encounters get solved in 8 seconds. That's fine.** The chemistry engine accepts that the same fight will be hard for some players and trivial for others. The expressiveness is more valuable than the difficulty curve.

## Patterns this exemplifies

- `chemistry-engine` — a small set of element rules + the physics engine, applied universally. The canonical case in commercial games. Uncurated.
- `multiplicative-systems` — Fujibayashi's framing. Uncurated; the BOTW page is the locus.

## Adjacent patterns

- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — most chemistry-engine moments are *also* drawbacks. Metal weapon = strong but lightning-magnet. Fire arrow = damage but starts a wildfire that dries out cooking ingredients. The trade is structural.
- [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) — most rule combinations are not taught. The player discovers them across 30 hours and is rewarded for the investment.
