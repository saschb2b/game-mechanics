---
title: "Warframe — Monetization model"
type: game
game: warframe
patterns:
  - dual-currency-with-trade
---

# Monetization model

The cleverness most often praised in design discourse. Worth understanding because it inverts the usual F2P assumptions.

![Premium store / Platinum purchase screen](/images/warframe/premium-store.jpg)
*The Platinum store. Real-money purchases mint new Platinum. Player-to-player trades move it without minting. Sinks (cosmetics, instant builds, trade tax) destroy it permanently. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=192).*

## The triangle

- **Platinum** — the premium currency. Bought with real money. Spent on cosmetics, slots, instant builds, *and* trades with other players.
- **Prime parts** — the strongest equipment. **Cannot be bought** with Platinum directly from DE. Can only be farmed via the Void Relic system, or **traded between players**.
- **Free players** grind Prime parts. **Paying players** buy Platinum. Players trade Prime parts to free players in exchange for Platinum.

Net effect:
- A free player can grind their way to every premium item without spending a cent.
- A paying player can skip every grind by trading Platinum for parts.
- DE makes money from both populations.
- **Free players are *content* for paying players** — their farming generates the supply that paying players' demand consumes.

See `dual-currency-with-trade`.

## Why it doesn't collapse into pay-to-win

**You cannot trade Warframes themselves**, modded gear, regular blueprints, most cosmetics, Forma/Reactor/Catalyst (mostly). So whales can't simply *buy* the game — they still have to play it.

What Platinum *can* buy:
- Cosmetics (skins, color palettes, weapon decorations).
- Inventory slots (frame slots, weapon slots — the real recurring revenue source).
- Instant Foundry skips.
- Player-listed Prime parts and Rivens.

The grind itself is mostly intact for paying players. They pay to *skip waits*, not to *skip play*.

## Platinum sinks — the inflation cap

Real money mints new Platinum. **Some Platinum gets destroyed** along the way:

- Market purchases from DE.
- Instant Foundry builds.
- Trade tax (a small Platinum cost per trade).

Player-to-player trades of Platinum don't mint or destroy any — Platinum just moves between players' wallets. So the **net Platinum supply only grows when real money is spent and only shrinks when DE-side sinks fire.** This caps inflation.

If trades didn't have a tax, the economy would slowly drift. The tax is small enough to not feel onerous, large enough to keep the system bounded.

## What this teaches

- **Letting players trade premium currency is counter-intuitive but powerful.** It removes the zero-sum framing of "F2P vs paying" and replaces it with a marketplace.
- **Free players become supply.** This is genuinely the design — DE wants free players, because their grind output is what paying players are buying.
- **Sinks matter.** Every premium currency needs ways to leave the economy that aren't just "transferred to another player."
- **Anything that defeats the grind too easily is non-tradable.** Forma, Reactors, Catalysts gate the long-term build progression and stay outside the trade economy by design.

## Patterns this exemplifies

- `dual-currency-with-trade`
