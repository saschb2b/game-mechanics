---
title: "Currency as crafting"
type: concept
patterns:
  - currency-as-crafting
related_patterns:
  - aspirational-crafting
  - random-perfect-roll-economy
---

# Currency as crafting

> **Lemma:** Drop the abstract "gold" currency. Make every "currency" a **consumable that performs a specific operation on an item**. Trade prices are denominated in those same currencies — so every transaction is also a sink, and every drop carries real opportunity cost.

![PoE Atlas of Worlds — the endgame map graph](/images/path-of-exile/atlas-of-worlds.jpg)
*PoE's endgame: every map node is a currency tap. Maps drop currency that crafts gear *or* buys gear from other players — same Chaos Orb does both. The economy is the system. Source: [Steam](https://store.steampowered.com/app/238960/).*

## What it solves

Traditional games have **gold** — an abstract trading medium with no intrinsic effect. Monsters drop infinite gold; the only sinks are vendor purchases and gambling. Inflation is structural: gold supply grows monotonically, demand doesn't keep pace, and the in-game economy degrades over the lifetime of the game.

The currency-as-crafting move folds the sink **directly into the gameplay verb**. There is no abstract money, only consumables that *do something* — re-roll an item, add a mod, identify, upgrade rarity. Trade prices are denominated in those consumables. So every transaction is also an item-modifying operation that *could* have happened.

This produces:

1. **Built-in inflation control.** Every transaction consumes the same currency it pays. Players who hoard to buy later still spend to craft *now*. Currency leaves the economy through sinks every time someone uses it for its intrinsic purpose.
2. **Real opportunity cost on every drop.** "Do I divine my own ring or sell the divine for 60 chaos and buy a better ring?" — that question runs every time the player picks up currency.
3. **Denomination as game-design vocabulary.** Chaos = small unit, Divine = mid unit, Mirror = the asymptote. Players naturally think in tiers.

## Variants across games

| Game | The "money" replacement | Trade unit | Crafting verbs |
|---|---|---|---|
| **[Path of Exile](/games/path-of-exile/crafting-and-currency)** | Dozens of orbs, each a specific item-modifying consumable | Chaos Orb (small), Divine Orb (mid), Mirror of Kalandra (mythic) | Re-roll rare, add affix, re-roll values, remove affix, corrupt, upgrade rarity, identify, rebuild sockets/links/colours, … |
| **[Path of Exile 2](/games/path-of-exile-2/crafting-pulled-back)** | Same framework, simplified. Sockets/links removed; Bench removed. | Exalted now common (rare-upgrader); Chaos rare and *targeted* (re-rolls one mod, not the whole item) | Smaller verb set; Recombinators + rune-sockets fill some of the deterministic-craft niche |

The PoE2 case is interesting precisely because GGG **kept the framework but rebalanced what each currency means**. Chaos vs. Exalted swapped roles to restore design intent (Chaos was supposed to be a craft tool, drifted into being unit-of-trade). Sequels are the only place this kind of currency-role rebalance is possible — you can't change what Chaos *is* in a 12-year live game without breaking the economy.

The pattern is rare in the wild. **Diablo 2/3/4** all use gold + materials. Gold is a pure trading abstraction, monsters are infinite gold faucets, and the only sinks are repair / gambling. The structural inflation is the result. PoE has been the canonical counter-example for over a decade; nobody else has fully replicated it.

## When to use this pattern

- **Long-running games with player-to-player trade** where structural inflation will eventually break the economy.
- **Crafting-heavy games** where the verbs are richer than "spend money to buy an item."
- **Trade-economy games** where you want every drop to have multiple uses competing for the same instance.

Avoid when:
- Crafting is a side-system rather than the main loop. If players don't actually use 80% of currencies for their crafting role, you've added complexity without the inflation-control payoff.
- The audience expects RPG-genre defaults. "Where's my gold?" is the most common reaction from players migrating from Diablo / single-player ARPGs. Onboarding cost is real.

## Pitfalls

- **Currency drift over time.** Even with currency-as-crafting, the most-traded currency tends to lose its crafting role over the years (PoE1's Chaos Orb became unit-of-trade; its crafting use atrophied). Periodic rebalancing — or a sequel reset — is needed.
- **Onboarding cost.** A new player sees "Orb of Transmutation, Orb of Augmentation, Orb of Alteration, Regal Orb, Chaos Orb, Exalted Orb…" and bounces. The vocabulary is steep.
- **The trade UX has to be good enough that the opportunity-cost decision is real.** If trading is itself frictioned (PoE's no-AH stance), then "sell or craft?" tilts heavily toward "craft" because selling is annoying. The pattern degrades into "every drop is just a craft tool."
- **Currency tiers must scale visibly.** If the player can't *see* that Mirror is mythic and Chaos is small, the denomination intuition collapses. Drop rates and per-currency utility have to telegraph the tier structure.

## Adjacent patterns

- [`aspirational-crafting`](/concepts/aspirational-crafting) — what currency-as-crafting is *for*. The currency framework only earns its keep if the asymptote it crafts toward is actually the game's chase.
- [`random-perfect-roll-economy`](/concepts/random-perfect-roll-economy) — what the system produces. Affix RNG + currency-as-crafting + trade = mirror-tier items as market commodities.
- `dual-currency-with-trade` — the lighter version: a primary currency that sinks via gameplay + a separate one for trade. PoE doesn't bifurcate; Warframe sort of does (Platinum is a trade premium currency, Forma/Kuva are crafting currencies).

## Why this matters as a design lesson

The lesson is **structural, not cosmetic**: inflation control isn't a feature you bolt on, it's a property of the currency system itself. PoE didn't add an inflation tax to gold; PoE replaced gold with verbs. Twelve years of live operation later, the economy still functions because the same Chaos Orb that paid for someone's ring tonight will be used to re-roll someone's amulet tomorrow.

For your own games: if you want a long-running trade economy, ask whether your "money" *does anything*. If the only thing it does is be paid, your monsters are going to be infinite faucets and your economy will eventually flatten.
