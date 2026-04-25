---
title: "Hades — Boons & gods"
type: game
game: hades
patterns:
  - bonus-with-drawback
  - card-draft-with-skip
  - opportunity-cost-loadout
---

# Boons & gods

The signature run-time loadout system across both entries. **Each cleared chamber may offer a Boon — pick 1 of 3 from a rotating roster of ~12 Olympian gods. The boons stack. By the end of a 30-minute run you're carrying a deck of ~10 boons; the *combination* is the build.**

![Boons of Apollo — three options shown: Nova Strike (Attacks deal more damage in a larger area, +40%), Blinding Rush (Sprint faster + Daze), Lucid Gain (restore Magick when Casts expire)](/images/hades/h2-boons-of-apollo.jpg)
*The boon-draft moment. Apollo offers three Common boons; the player picks one and exits. The text on each option is precise — exact percentage, exact stat affected, the slot it modifies (Attack / Sprint / Cast). The right-side tooltip explains what *Attacks* are, in case the player forgot. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2192).*

## The draft

Every god offers boons that modify a specific *slot* of your kit:

| Slot | What it is |
|---|---|
| **Attack** | Your basic-attack button |
| **Special** | Your alt-attack button |
| **Cast** (H1) / **Cast + Hex** (H2) | A magick-based ability |
| **Sprint / Dash** | The mobility/dodge button |
| **Magick / Mana** (H2 only) | The resource pool that fuels Cast and Hex |

Each god has a *flavor* — Zeus does chain-lightning, Poseidon knocks back, Aphrodite Charms enemies, Demeter chills, Apollo deals AoE light, Hera links enemies, Hephaestus deals Blast damage on cooldown. So a Zeus + Poseidon combo *electrifies-then-knocks-into* enemies; an Aphrodite + Demeter combo charms *and* freezes.

This means the build identity is **emergent from the random god roster you encountered**. You don't pick a class; you pick a *direction in the boon graph the run offered you*.

## Rarity tiers

Boons roll at a rarity tier:

| Tier | Effect |
|---|---|
| **Common** | Base value |
| **Rare** | ~1.3× base |
| **Epic** | ~1.6× base |
| **Heroic** (H1) / **Mythic** (H2) | ~2× base |
| **Legendary** | Unique effects, requires prerequisites |
| **Duo** | Combo effect from 2 specific gods, requires conditions |

The rarity is rolled at *boon offer* time, modified by purple Pomegranates / hammer-upgrades / certain mirror talents. Players hunt rare-or-better at every offer.

![Pom of Power — three owned boons being upgraded: Wave Strike Lv1→Lv2, Passion Rush Epic Lv1→Lv2, Extra Dose Rare Lv1→Lv2](/images/hades/h2-pom-of-power.jpg)
*A Pom of Power upgrades 3 of your owned boons by one level. Visible in this screen: rarity colors (purple = Epic, blue = Rare, white = Common) and the *level* axis on top of the rarity axis. So a "Common Lv 5" boon outperforms a "Rare Lv 1" — the loadout is two-dimensional. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2192).*

## Duo boons — bonus-with-drawback synergies

A **Duo boon** is unlocked when the player carries 2 specific god's boons of certain types simultaneously. Examples:

| Duo | From | Effect |
|---|---|---|
| **Lightning Rod** | Zeus + Artemis | Static lightning strikes on top of Crit damage |
| **Cold Fusion** | Demeter + Zeus | Chill stacks proc lightning |
| **Curse of Longing** | Aphrodite + Artemis | Charmed enemies take crit |

Duos are **bonus-with-drawback** in a soft sense: each Duo locks you into 2 specific gods, so taking it forecloses options to drop one of those gods later for a better synergy. The build commits.

## Legendary boons

Each god has 1–2 **Legendary** boons — a tier above Heroic. They require specific prerequisites:

- *Apollo's Sun Worshipper:* requires 4 other Apollo boons.
- *Demeter's Frigid Sweep:* requires having a Demeter Cast boon already.
- *Zeus's Thunder Forge:* requires 5 Zeus boons.

Legendaries are *commitment rewards* — they pay off players who specialize in one god rather than spreading across many.

## Hammer of Daedalus — the rare weapon-altering offer

Once or twice per run, a **Hammer** chamber appears: pick 1 of 2 (or 3) hammer upgrades that *fundamentally alter* your weapon. Examples for Sister Blades (Hades II):

- *Greater Twin Strike:* +50% damage but slower swings
- *Quick Spin:* twirling Special instead of throwing
- *Vicious Skewer:* Attack is a forward lunge instead of stab

Hammers are **build-defining** — they often dictate which boon types to prioritize for the rest of the run. Take a Hammer that converts your Attack to a multi-hit and you suddenly want every "on-hit" boon you can find.

This is structural [`bonus-with-drawback`](/concepts/bonus-with-drawback): each hammer trades a property of your weapon for a different one.

## Why pick-1-of-3 lands so hard

The structure is identical to Slay the Spire's `card-draft-with-skip` pattern transposed to real-time action combat. **The genius of Hades is that the same draft mental-model that works for Spire's tactical combat works for Hades's frantic action combat — because the offer happens *between* combats, in a slow chamber, with full text and tooltip support.**

Spire taught players the language of "pick 1 of 3 with implicit skip"; Hades repays that mental model in a different genre, and it's *immediately readable* because the framing is identical.

The skip is implicit but present — you can take a boon's *third option* (the worst one) and effectively skip the offer, but most players have learned to skim hard for synergy.

## What this teaches

- **The pick-1-of-3 draft generalizes outside deckbuilding.** If you have a clean per-encounter offer flow, you can ship Spire-grammar reward selection in any genre.
- **Two-axis rarity (rarity + level) gives a long progression curve from a small option pool.** ~12 gods × 5 slots × 5 rarity tiers × N levels per slot = thousands of combinations from a small underlying matrix.
- **Synergy commitment (Duos, Legendaries) gives the optimizer something to chase past round 1.** A run that only offered Common boons would feel flat; the chase for a Heroic + the chase for a Duo are what make boon offers exciting at hour 50.

## Patterns this exemplifies

- [`bonus-with-drawback`](/concepts/bonus-with-drawback) — Hammers, Duos, and certain Legendaries close off other options.
- `card-draft-with-skip` — pick-1-of-3 with implicit skip, transposed to action combat.
- [`opportunity-cost-loadout`](/concepts/opportunity-cost-loadout) — every boon taken is the slot a *different* god's boon could have filled. Build commits matter.
