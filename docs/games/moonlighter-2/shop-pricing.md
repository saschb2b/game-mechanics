---
title: "Moonlighter 2 — Shop & pricing"
type: game
game: moonlighter-2
---

# Shop & pricing

The night-time half of the dual-life loop. Where the dungeon's loot becomes gold.

![Active shop with browsing customers, price tags above relics, "Day 26" counter](/images/moonlighter-2/shop-active-customers.jpg)
*The shop in operation. Customers browse, prices are visible above each display case, "Tip Value" tracks bonus gold. Note the day counter at the bottom — the loop runs in real-time within the shop. Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*

## How pricing works

The original Moonlighter's pricing was a **price-discovery minigame**: you'd guess a value, watch for customer reactions (😀 too cheap → 🙂 fine → 😐 expensive → 😡 too high), and refine over multiple sales. **The sequel keeps the customer-reaction signal but adds layers above and below it:**

1. **Quality multiplier** comes from the [backpack puzzle](./backpack-puzzle.md) — you've already partly determined the price *before* the customer sees the item.
2. **Popularity** — relics from a specific biome / category have a popularity stat that fluctuates per day (see "themed days" below).
3. **Customer reaction** — the showcased item's *current price* against an internal ideal price. Faces tell you to raise or lower.
4. **Showcase tier** — Modest Display Case is plain; better display furniture multiplies further.

The final sale price is roughly:

```
base × quality_multiplier × popularity × showcase_bonus + tip_value
```

So the merchant sim is **less guess-the-number, more layer-the-modifiers.**

## Themed days

Some days have themed bonuses:
- "Uncommon-rarity day" → uncommon relics get +popularity.
- "Kalina-region day" → relics from the Kalina biome get +popularity.

Effect: **decisions in the dungeon are downstream of decisions in the shop calendar.** Knowing tomorrow is "Kalina day" means you're farming Kalina relics today.

This couples the two halves of the loop tighter than the original. Reviewers have mixed feelings — some find it elegant, others find it makes the original's "free price exploration" feel mathy by comparison.

## Decorations & furniture

![Decorations menu — Exhibit / Antique furniture selection screen](/images/moonlighter-2/shop-decorations.jpg)
*Decoration furniture menu. Displays affect popularity and quality multipliers; antiques are passive boosts. Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*

Furniture isn't just cosmetic — display cases and antiques actively modify sale price. **Shop layout becomes part of the build.** This is the third axis of optimization (after dungeon path + backpack placement).

## End-of-day summary

![Day 11 end-of-day summary listing each relic sold and its sale price](/images/moonlighter-2/day-end-summary.jpg)
*End-of-day relic-sale summary. Shows what sold, for how much, and the day's total (27,941 gold). Source: [Steam](https://store.steampowered.com/app/2350790/Moonlighter_2_The_Endless_Vault/).*

The day-end is the **dopamine pinch point** — see your packing/pricing decisions paid out in concrete numbers. Same shape as a Spire post-run score screen, or a Hades House of Hades return.

## Critique surfaced in reviews

- **The pricing minigame lost some charm.** Original-game fans liked figuring out base prices from scratch; the sequel front-loads more of that work into the backpack puzzle, leaving the live-shop part more passive.
- **The math can feel impenetrable early.** Quality % × popularity × showcase × tip is a lot of unseen multipliers, and reviewers note new players "see numbers but don't understand them."

## Pattern angles

The shop-pricing system is best read as a **separate-but-coupled mini-game** to the dungeon-roguelite. It's not strictly part of any single cross-game pattern, but the *coupling* — same items move through both games, with each game judging them differently — is part of `dual-life-loop`.
