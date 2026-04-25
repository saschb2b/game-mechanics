---
title: "Slay the Spire — Deckbuilding"
type: game
game: slay-the-spire
patterns:
  - subtractive-deckbuilding
  - card-draft-with-skip
  - pity-system-anti-streak
---

# Deckbuilding

The actual loadout system. Fills the role that the patch board plays in Sparklite, or that mods/Forma play in Warframe.

![Card compendium showing Red (Ironclad) cards in a grid](/images/slay-the-spire/compendium-cards.jpg)
*The card compendium — a slice of the ~75 Red (Ironclad) cards. Each card is hand-tuned; the run-time question is which 15–20 you can stitch into a coherent deck. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*

## Card rarities and rewards

- **Common, Uncommon, Rare** + special unlocks.
- Card-reward draft post-fight: 3 cards, **pick 1 or skip.**
- Rarity distribution depends on what you just did:
  - Normal monster: mostly Commons, some Uncommons, occasional Rare.
  - Elite: more Uncommons + Rares.
  - Boss: 3 Rares (always).

## Pity system

A hidden "rare drift" counter:

- Starts at -5%.
- Every common rolled bumps the rare chance by +1%.
- Rolling a rare resets the counter.

Result: you can't go too long without seeing a rare. Same anti-streak philosophy as Unknown node resolution. See `pity-system-anti-streak`.

## Card upgrades

Almost every card has a **+ version** with better stats / extra effect.

Where upgrades come from:
- **Rest Site smith** option (1 per rest, the alternative to healing).
- Specific events.
- Whetstone / War Paint potions.
- Some boss rewards let you upgrade in one shot.

Note that the smith vs heal choice at every campfire is *itself* a small risk-vs-reward decision. Heal now (survive the next fight) or upgrade (snowball longer). See the recurring pattern.

## Deck thinning — the canonical strategy

You start with **10 starter cards** (mostly basic Strikes/Defends). The new-player intuition is *"more cards = more power."* The actual best play, almost always, is **fewer, better cards.**

A 15-card deck cycles fast and reliably draws its synergies. A 35-card deck dilutes everything.

Tools for thinning:

![Merchant shop with Card Removal Service panel visible on the right](/images/slay-the-spire/shop-card-removal.jpg)
*The merchant shop. The "Card Removal Service" on the right is the canonical thinning tool — pay gold to remove a card from your deck. Cost escalates per visit, capped per shop. Source: [Steam](https://store.steampowered.com/app/646570/Slay_the_Spire/).*

- **Shop card-removal** (escalating cost, capped per shop visit).
- **Events** that exhaust/transform/remove cards.
- **Exhaust mechanics** (Ironclad's whole archetype: cards that one-shot themselves out of the run, generating value as they do).
- **Innate** cards always start in your opening hand → effectively reduce the random draw.

This makes deckbuilding **subtractive, not just additive.** You're not stacking power on top of stuff, you're carving out a tight loop. **That's the inversion that defines the genre.**

See [`subtractive-deckbuilding`](/concepts/subtractive-deckbuilding).

## Card draft with skip

Each post-fight draft: pick 1 of 3 cards **or skip.** Skipping has real value — fewer cards is better, but you need *some* cards. So every draft is a question: "is this card better than nothing?"

Skip is a first-class option, not a punishment. That changes the entire shape of decision-making vs. games where you must pick. See `card-draft-with-skip`.

## Archetypes

Each character has a few well-known archetype templates competent players recognize:

- **Ironclad** — Strength scaling, Heavy Blade, Limit Break / Exhaust, Corruption, Feel No Pain / Block, Barricade, Body Slam.
- **Silent** — Poison ramp, Shivs, Thousand Cuts, Footwork-scaling, Discard synergies.
- **Defect** — Frost-block, Lightning-volley, Focus scaling, Claw spam.
- **Watcher** — Wrath/Calm stance dance, Retain, mid-combat card generation.

**Archetypes aren't strictly defined.** They emerge from the cards/relics you happen to find. The skill is in *recognizing* what archetype the game is offering you 5 cards into Act 1 and **committing.**

This is a deliberate design call — Mega Crit explicitly rejected letting players pre-pick a starting rare card to direct their deck. *Forcing players to react* to what's offered is the design principle. See [design tensions](./design-tensions.md).

## Patterns this exemplifies

- [`subtractive-deckbuilding`](/concepts/subtractive-deckbuilding)
- `card-draft-with-skip`
- `pity-system-anti-streak`
