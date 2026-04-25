---
title: "Xenoblade — Class & Ouroboros (XC3)"
type: game
game: xenoblade-chronicles
patterns:
  - loadout-as-budget
  - nested-progression-graph
  - late-introduced-mechanics
---

# Class & Ouroboros (XC3)

XC3's signature systems. **Every party member can master every class, and any two party members can interlink into a fusion form called an Ouroboros.** The result is a combat system with more loadout permutations than any prior Xenoblade entry.

![XC3 combat with multiple party members and chain-attack overlay](/images/xenoblade-chronicles/xc3-combat-chain.jpg)
*XC3 combat. Six party members on screen, each with class-driven art palettes. The chain-attack callout (top right) and the floating "Daze" damage number (centre) are part of XC3's much heavier combat HUD compared to earlier entries. Source: [Wikipedia](https://en.wikipedia.org/wiki/Xenoblade_Chronicles_3).*

## The class system

Six base party members. Each starts with a **base class** locked in (Noah is a Swordfighter, Mio a Zephyr, etc.). But over the course of the campaign, the party meets **Heroes** — NPC seventh members who join temporarily — and *each Hero unlocks their class as a swappable option for the entire main party.*

By endgame:

- ~20 classes available across the party.
- Any party member can equip **any class** they've inherited from a Hero quest.
- A class brings: **arts palette**, **skills**, **role** (Attacker / Tank / Healer), **stat curve**, **fashion** (the visual armor changes).
- Mastering a class on one character unlocks the option to equip its arts on a *different* class.

So the loadout decision is: pick a class for each character, pick which 3 arts of that class are active, and pick which arts from *other mastered classes* are slotted as the alt set. Combinatorially huge.

This is **the most XC3-original system** — XC1 and XC2 had fixed character roles; XC3 explodes them.

## Ouroboros — the interlink

XC3 has **six** main party members (vs. 3 in XC1, 3 in XC2). They're paired into three duos. Each duo can **interlink** mid-combat into an **Ouroboros**:

- Two characters merge into one giant mech-form humanoid.
- The Ouroboros has its own **dedicated arts palette** (built from the duo's combined arts).
- It has a **heat gauge** — Ouroboros mode is time-limited.
- Triggering Ouroboros at the right moment is an offensive burst; using it defensively is a survival tool.

There are three Ouroboros pairings (Noah+Mio, Lanz+Sena, Eunie+Taion), each with a distinct mech-form and combat identity. Each pairing has its own **Ouroboros tree** of upgradeable abilities and a relationship-driven story arc.

## Chain attacks — the heavy XC3 version

XC3 chain attacks are a **multi-stage menu sequence**:

1. Pick which character starts (each has a different bonus).
2. Pick a **Tactic** card from that character's deck (each tactic has a target multiplier and a hit count).
3. Score points by clearing tactic targets — extending the chain or finishing it.
4. The longer the chain extends, the more damage the final hit does.

The chain attack is **the centerpiece of XC3's late-game combat.** Bosses have ~5× more HP than they would in XC1. The intended encounter rhythm is *survive 3–5 minutes of normal combat, then chain-attack for 60–90 seconds and delete a third of the boss's HP, then survive another 3 minutes.*

This is also where XC3 reveals systems late: **the chain-attack scoring rules, multi-character bonuses, hero-card interactions, and chain-extension multipliers** are introduced over ~30 hours of campaign. A player at hour 10 sees chain attacks; a player at hour 40 has a different game.

## Heroes and Hero Quests

The other layer XC3 layers on top of class. Throughout the campaign, the party meets **20+ Hero NPCs**, each of which:

- Joins as a temporary 7th party member.
- Has a unique class.
- Has a personal Hero Quest revealing their backstory.
- Once their quest completes, **their class unlocks** for the main 6 to learn.

Heroes are how XC3 paces class introduction. You can't dump 20 classes on a player at hour 5; you drip them across 80 hours of campaign through encounter-driven hero arcs. Each new class is *narratively earned* before being mechanically equipped.

This is one of the cleanest examples of [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) — using the campaign structure as a system-reveal pacing tool.

## What XC3 borrows and adds

| System | Predecessor | XC3 evolution |
|---|---|---|
| Auto-attack + arts | XC1, XC2, XCX | Same shape, with class-swappable palettes |
| Break → Topple → Launch → Smash → Burst | XC2's | Inherited; combined with class-driven arts that own different chain steps |
| Chain attacks | All prior entries | Most elaborate version — full menu game inside combat |
| 6-character party | New | Doubles XC1/XC2's party-of-3 |
| Class system | New | The defining XC3 system; no direct precedent in series |
| Ouroboros (pair interlink) | New | Distantly related to XCX Skell mode (vehicle form), but mechanically distinct |

## Patterns this exemplifies

- [`loadout-as-budget`](/concepts/loadout-as-budget) — pick class (1 of ~20), pick 3 arts from that class, pick alt arts from *another* mastered class. Permutations explode.
- [`nested-progression-graph`](/concepts/nested-progression-graph) — main character XP + class mastery + Hero affinity + Ouroboros tree are 4 orthogonal axes.
- [`late-introduced-mechanics`](/concepts/late-introduced-mechanics) — Heroes as a 30+ hour drip of class options; chain attack rules unfold across the campaign.
