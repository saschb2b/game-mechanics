---
title: "Cult of the Lamb: Doctrines & rituals"
type: game
game: cult-of-the-lamb
patterns:
  - bonus-with-drawback
---

# Doctrines & rituals

The Temple is where the Lamb's authority becomes *policy*. Three verbs converge here: **Sermon** (generate Faith), **Doctrine** (declare permanent cult-wide rules), and **Rituals** (one-shot ceremonies that cost Bones and pay something specific).

![The Temple's four-icon ritual menu, Sermon, Crown, Rituals, Doctrine, Sermon selected with the caption "Perform a sermon, drawing energy from your followers to bolster the power of the Red Crown"](/images/cult-of-the-lamb/temple-ritual-menu.jpg)
*The Temple. Four large icons radiate from the centre: **Sermon** (Faith generator + Sermon-tree upgrades), **Crown** (equip Tarot perks, Crown abilities, Fleeces), **Rituals** (bone-fuelled one-shots), **Doctrine** (declare a permanent cult-wide rule). One building, four mutually-reinforcing systems. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

## Sermons: the daily Faith pump

A Sermon is a free, once-per-day, ~30-second cutscene where the Lamb preaches from a pulpit and followers worship. It produces:
- a chunk of **Faith** (the bigger the cult, the bigger the chunk);
- a tiny progress tick toward the next **Sermon-tree upgrade**: the Sermon screen is itself a small skill tree with run-modifier nodes (reroll weapon, extra Tarot slot, +½ Heart Container, etc.);
- a notification entry ("You gave a Sermon. +5 Faith").

Sermons are the *only* free Faith generator. Everything else (rituals, doctrines, levelled-up followers) compounds them. Skipping a day costs *nothing* directly, but you're leaving a free 20–40 Faith on the floor.

## Doctrines: the binary cult-wide forks

Doctrines are **permanent cult-wide policy choices**. You unlock a Doctrine slot by spending Faith via the Temple; each slot then presents a *binary fork* (rarely a trinary) with mutually exclusive options.

![Doctrines book open on the Possessions–I branch ("Preach on the value of earthly goods"); Extort Tithes selected, "Unlocks the Extort Tithes Follower Action. Collect gold from a Follower once a day"](/images/cult-of-the-lamb/doctrines-possessions-book.jpg)
*The Doctrines tome. Tabs at the top: **Death** (skull) / **Worship** (kneeling figure) / **Law & Order** (gavel) / **Possessions** (open palm). Possessions–I is the first slot of the gold/Faith branch. Two cards visible: **Extort Tithes** (Follower Command: Collect gold from a Follower once a day) selected, with the alternative ✕ option faded. Below: locked future slots awaiting more Faith. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

### The four launch branches

| Branch | Theme | Sample slots |
|---|---|---|
| **Possessions** | Coin, Faith, tithing | Extort Tithes vs. Inspire Devotion; "the cult is wealthy" vs. "the cult is humble" |
| **Work & Worship** | Devotion + labour rules | "Sermons feed the soul" vs. "Sermons feed the body" |
| **Law & Order** | Crime, dissent, punishment | "Imprison dissenters" vs. "Sacrifice dissenters" |
| **Death** | Funeral, afterlife, decay | "The dead are food" vs. "Cremation" |

Post-launch updates added more (Sustenance, Festival, Sins of the Flesh), see [post-launch evolution](./post-launch-evolution.md).

### Why each fork is real

Doctrines are designed so **neither option is strictly correct**. The "the dead are food" fork is the classic example:

- **The dead are food**: corpses become Follower Meat (cheap, plentiful, +Hunger). Slashes the food cost of the cult.
- **Cremation**: corpses are dignified, +Faith on funeral, no food bonus. Easier to keep Faith high.

The first is a *resource exploit*; the second is a *Faith exploit*. Picking one closes the other forever (no respec in the base game, Sins of the Flesh later added partial reset).

This makes Doctrines a **macro-scale [`bonus-with-drawback`](/concepts/bonus-with-drawback)**, each one trades a different system's pressure relief for a different system's debt. Bishop fights drop Doctrine Stones to unlock slots, so the act-clear *includes* a new policy fork.

### Doctrine-unlocked verbs

Many Doctrines unlock new *verbs* in the world rather than passive effects:

![Doctrine card "Read Mind", Follower Command Unlock, "Interact with Followers to read their thoughts, as well as see how hungry, tired or sick they are"](/images/cult-of-the-lamb/doctrine-read-mind.jpg)
*A Doctrine unlocks a follower-interaction verb. **Read Mind** adds a new option to the per-follower wheel: see hunger/sleep/sickness numerically rather than guessing from poop-on-the-floor signals. The doctrine system isn't only about cult-wide modifiers; some of its most impactful slots add *quality-of-life* verbs. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

## Rituals: bone-fuelled ceremonies

Rituals are *one-shots* paid for in **Bones**, the currency you harvest from defeated enemies. The tutorial card spells it out:

![Tutorial card 2/3, "Rituals are performed using the bones of your fallen enemies"](/images/cult-of-the-lamb/tutorial-rituals-bones.jpg)
*The bone economy tutorial. Rituals require Bones: Bones drop from enemies, therefore *more Crusades* enables *more Rituals* enables *more cult control*. The currency loop is visible to the player from the third tooltip. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=1549).*

### The launch ritual menu

| Ritual | Cost | Effect | Cooldown |
|---|---|---|---|
| **Sermon** | Free | Faith pump | Daily |
| **Wedding** | Bones | Marry a follower; unlocks Smooch (added later) | 3 days |
| **Funeral** | Bones | +20 Faith, +loyalty buff, corpse dignified | Per body |
| **Sacrifice of the Flesh** | Free | Kill a follower → Bones + Follower Meat + Faith | Cooldown |
| **Brainwashing** | Bones | Force loyalty up, +20 Faith | 3 days |
| **Resurrection** | Many Bones | Bring back a dead follower | Long |
| **Inauguration / Indoctrination** | Free | Onboard new follower | Per arrival |
| **Eternal Sleep** | Bones | Euthanize an elderly follower (positive Faith outcome) | Cooldown |
| **Alms / Tax / Feast** | Bones | Cult-wide economic lever | 3 days |

Post-launch additions include the **Blood Moon Ritual** (40 Pumpkins, summons dead spirits for 3 days), Mating Ritual (Sins of the Flesh), and several others.

### Rituals as the pressure-release valve

Rituals exist because Doctrines are *permanent* and *broad*; Rituals are *temporary* and *targeted*. When the cult catches a sickness spike, you don't need to declare a new doctrine, you spend Bones on a Sustenance Ritual to push it back. When Faith dips before a sermon's ready, you sacrifice a low-loyalty follower for the immediate Faith spike.

This is the same architectural shape as Doctrines being structural law and Rituals being executive orders, and the bone cost makes them legible: *every time you light a candle, an enemy died for that candle*. The ludonarrative loop tightens around the cost.

## Why the Temple is the load-bearing building

Every other building in the cult specialises (Refectory feeds, Cooking Fire cooks, Outhouse cleans, Healing Bay cures). The Temple does *four* things and they cross-reference each other:

- **Sermon** generates the Faith you need to **Declare a Doctrine**.
- **Doctrines** unlock new **Rituals** and new follower-interaction verbs.
- **Rituals** consume the Bones you bring back from **Crusades** and feed **Faith** back up.
- The **Crown** menu equips the Tarot Cards / Fleeces / Crown abilities you've collected: *modifying the next Crusade.*

This is the central nervous system of the dual-life loop. Every other system either feeds the Temple or is fed by it.

## Patterns this exemplifies

- [`bonus-with-drawback`](/concepts/bonus-with-drawback): Doctrines are the macro version of the pattern: every binary fork closes another fork forever.
