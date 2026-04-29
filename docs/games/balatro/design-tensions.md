---
title: "Balatro — Design tensions"
type: game
game: balatro
---

# Design tensions

What the developer wrestled with, in his own words.

LocalThunk is pseudonymous and has done a small number of long-form interviews. The available material is enough to triangulate the design philosophy.

## Solitaire with a poker coat of paint

> "It's my modern indie take on solitaire with a poker coat of paint. Despite the poker theme, the game has almost no mechanical similarities to actual poker apart from the hand rankings."
>
> — **LocalThunk** ([Rogueliker interview](https://rogueliker.com/balatro-interview/))

The framing is precise. Balatro is not a poker game. It uses poker hand rankings as **a familiar input format** — players already know what a Flush is, what a Pair beats, what a Royal Flush implies. The depth lives elsewhere: in joker chains, deck mutation, scoring engines.

> "The intention was never to make a game for poker players. I was expecting people unfamiliar with poker to be able to interface with it."
>
> — **LocalThunk**

This is the right framing. Poker players bring *bluffing* and *betting* expectations to the table; Balatro has neither. The game uses poker the way a calculator uses Arabic numerals — as a notation, not a logic.

## Avoiding deckbuilder influence

> "I avoided playing deckbuilders to avoid taking ideas from these games. I only played Slay the Spire near the end of development to understand its control scheme."
>
> — **LocalThunk** (paraphrased; recurring across interviews)

The deliberate ignorance is unusual and the result is interesting. Balatro shares structural shape with Spire (run-based, shop-between-fights, build-an-engine, boss-debuffs) but the *texture* is completely different — chip×mult math instead of energy-and-block, poker hands instead of attacks-and-skills.

If LocalThunk had played Spire deeply during dev, Balatro would probably have inherited Spire's energy-economy framing. Avoiding the genre let him **rediscover the loop independently**, with poker as the input format that Spire never considered.

The "Spire-like" framing applied to Balatro is therefore a *retrospective* analogy, not a development source.

## Big Two as the seed

> "I started by making an online version of Big Two, a Cantonese card-shedding game I played with friends during the pandemic. As I worked on it, I saw roguelike deckbuilders on Steam and watched videos of Luck Be a Landlord. I shifted to make Big Two into a single-player roguelike deckbuilder."
>
> — **LocalThunk** (paraphrased from [TouchArcade interview](https://toucharcade.com/2024/03/18/balatro-interview-mobile-port-localthunk-dlc-plans-updates-new-jokers-demo-feedback/))

The actual seed was **Big Two**, a Chinese card-shedding game. Big Two uses standard playing cards and poker-like hand rankings as part of its play (you must beat the previous play with a higher hand of the same type or a higher type).

So Balatro's poker hands aren't from poker. They're from Big Two, refracted through the roguelike-deckbuilder genre that LocalThunk *saw on Steam* and decided to build toward.

This is a useful pattern to flag: the closest-feeling game is rarely the actual influence. Designers' true influences are upstream.

## Balance as feel, not math

> "When you're hanging a picture on a wall, you don't want it to be perfectly level — you want it to *look* level. If you measure with a level and it's perfectly straight but feels askew, that's worse than if it feels level but technically isn't."
>
> — **LocalThunk** (paraphrased; recurring metaphor from interviews)

This is the **balance-by-feel** philosophy. LocalThunk doesn't run statistical balance passes; he plays the game and tunes by intuition.

The risk is that some Jokers turn out broken (Triboulet was nerfed multiple times post-launch). The benefit is that the *aesthetic* of each Joker stays consistent — every Joker has a clear identity, even when its numbers shift.

Most studios with a balance team end up with technically-balanced cards that all feel similar. LocalThunk's solo balance produced 150 distinctive Jokers, some of which are over-tuned. Aesthetic variance > numerical fairness.

## The "Joker Poker" working title

> "Balatro was almost called 'Joker Poker.'"
>
> — **LocalThunk** ([Game Informer interview](https://gameinformer.com/interview/2024/03/21/balatro-was-almost-called-joker-poker-and-other-details-from-its-creator))

The change to "Balatro" — an obscure word for "comic actor / jester" — was a late-stage decision. "Balatro" is more evocative, less searchable, and ties into the court-jester theme that runs through the Legendary Jokers (Triboulet, Chicot, Yorick, Perkeo are all historical jesters).

The naming change matters for marketing: "Joker Poker" reads as a casino product; "Balatro" reads as a curiosity worth investigating.

## Cards as emergent-game-design medium

> "Standard playing cards are special as a medium for emergent game design because people love organizing and arranging cards. I wanted to leverage that familiar approach to information-dense strategy games."
>
> — **LocalThunk**

The deeper claim: **the 52-card deck is the right substrate for combinatorial design** because every player has fluency with it. They can sort by suit, sort by rank, count remaining cards, calculate odds — all operations they've internalized from years of solitaire, poker, bridge.

So when Balatro presents a Full Deck reference page (the 4×13 grid), the player immediately knows what to do with it. No tutorial needed.

This is a strong argument for using *familiar substrates* for novel mechanics. The more the player already knows about the input format, the more design surface you can stack on top.

## What the team chose not to do

A few decisions known from interviews and developer notes:

- **No multiplayer.** LocalThunk has stated repeatedly he has no plans for online multiplayer. The game's depth doesn't translate to PvP — Balatro is a single-player optimization puzzle, not a competitive card game.
- **No microtransactions.** Premium one-time purchase, no DLC at launch (the *Friends of Jimbo* DLC is free crossover Jokers). LocalThunk has stated he wants the game to be a "buy-it-once" product, not a service.
- **No achievement-grind reward design.** The Stake / Deck completion grid is voluntary completionism, not a Steam achievement chase. The grid uses in-game UI, not Steam metadata.
- **No randomized Joker rarity adjustment.** Some players asked for "rare Jokers in early shops" toggles; LocalThunk declined. The fixed rarity tiers preserve build identity — a Common Joker should feel different from a Rare one.

The pattern: **single-author authority, scope discipline, no service ambitions.** Balatro is finite. The DLC adds Jokers; it doesn't add modes.

## See also

- [Patterns](./patterns) — full pattern table
- [Sources](./sources) — full interview citations
