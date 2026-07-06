---
title: "Expedition 33: Reactive combat"
type: game
game: clair-obscur-expedition-33
patterns:
  - reactive-turn-based
  - timed-hits
  - enemy-intent-telegraph
---

# Reactive combat

The system the whole game is sold on: classic menu-driven turn-based combat where **both halves of the turn cycle demand execution.** On your turn, attacks and skills carry timed inputs that boost damage. On the enemy's turn, you actively defend every single hit with one of four real-time verbs. Nothing resolves while you watch.

## Turn structure: the Timeline

Turn order is a visible queue on the left edge of the screen, ordered by each combatant's Speed stat. Fast builds literally play more often; Speed is a first-class offensive stat because it buys more turns.

![Timeline tutorial showing turn-order portraits on the left edge](/images/clair-obscur-expedition-33/timeline-tutorial.jpg)
*The Timeline. Persona-style stacked portraits show exactly who acts next; Speed manipulation (buffs, the Agility attribute, Picto stat lines) reorders it. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Your turn: the Battle Wheel

Each active character picks from four options, presented as a diegetic brush-stroke wheel rather than a menu list:

![Battle Wheel tutorial: Aim, Items, Skills, Attack](/images/clair-obscur-expedition-33/battle-wheel-tutorial.jpg)
*The Battle Wheel. Attack and Parry generate AP; Skills consume it. The whole combat economy is stated in two tutorial sentences. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

- **Attack**: the base attack. Free, modest damage, **generates 1 AP**. Never a dead choice because it funds everything else.
- **Aim**: free-aim mode, a reticle over the full 3D scene. Shots cost AP and can hit **weak points** highlighted on enemy bodies, breaking armor parts and staggering. This is the system's pressure valve for positional damage in a genre with no movement.
- **Skills**: the AP spenders, six equipped per character (see [skills](./weapons-attributes-skills#skill-trees)).
- **Items**: healing/energy/revive tints (see [AP & Gradient](./ap-and-gradient#items-tints)).

![First Strike banner at the start of an ambush battle](/images/clair-obscur-expedition-33/first-strike-ambush.jpg)
*Encounters are visible in the field; hitting one before it notices you opens the fight with First Strike (a free opening turn). The same rule runs in reverse if they catch you. Fleeing is also on the table. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Timed hits on offense

Attacks and most skills embed button prompts mid-animation. Hitting them boosts damage per hit; missing them still lands the attack at reduced effect. Multi-hit skills chain several prompts.

![QTE ring with the A prompt mid-attack animation](/images/clair-obscur-expedition-33/timed-hit-qte.jpg)
*The timed-hit ring. Press on the beat for bonus damage. This is Paper Mario / Lost Odyssey lineage, acknowledged by the devs, and it can be disabled ("Auto QTE") for accessibility, at the cost of the bonuses. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

![Multi-hit skill resolving with damage numbers per hit](/images/clair-obscur-expedition-33/multi-hit-damage.jpg)
*Per-hit damage numbers during a multi-hit skill. Crits and elemental reactions (the burn flame icon) report inline. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## The enemy's turn: four defensive verbs

Every enemy attack is survivable by hand. The verbs, in ascending order of risk and reward:

1. **Dodge** (B): generous window, avoids damage on success. A frame-tighter **Perfect Dodge** exists inside it (and Pictos like Dodger convert Perfect Dodges into AP).
2. **Jump**: certain low sweeps and shockwaves must be jumped instead; jumping the final hit of some strings opens a jump counterattack.
3. **Parry** (RB): much tighter window, per incoming hit. Each successful parry **generates AP**, and parrying an entire attack string triggers a cinematic **party counterattack**.
4. **Gradient Counter**: attacks marked with a special flash can't be parried normally; countering them spends [Gradient charge](./ap-and-gradient#the-gradient-gauge).

![Dodge tutorial in the prologue](/images/clair-obscur-expedition-33/dodge-tutorial.jpg)
*The game teaches dodge first, parry second, and lets the AP economy make the argument for graduating. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

![Party counterattack banner: "Expedition 33 performs a Counter."](/images/clair-obscur-expedition-33/party-counter-parry.jpg)
*The payoff for parrying a full string: everyone hits back. The counter banner names the whole expedition, not the character, a small ludonarrative touch. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

### Telegraphs that are honest about *what* and hostile about *when*

This is the game's twist on [`enemy-intent-telegraph`](/concepts/enemy-intent-telegraph). Attack *types* are always legible (parryable, jumpable, Gradient-marked), but the *timing* is deliberately theatrical: delayed wind-ups, mid-swing pauses, off-beat multi-hit rhythms. The animation is the entire information channel; there is no timing bar or indicator flash. Timing literacy is the skill ceiling, and enemy movesets are the difficulty curve. The cost of that choice is documented in [design tensions](./design-tensions): reviewers loved the mastery arc, accessibility critics flagged that surreal enemy anatomy plus deceptive rhythm locks some players out entirely, and the Story-mode patch that widened windows by 40% was Sandfall conceding the point at the low end while defending it everywhere else.

## Break, stagger, and elements

Skills tagged **Can Break** and weak-point Aim shots fill a hidden stagger track; Breaking an enemy interrupts it and opens a damage window. Weapons and skills carry one element each (Physical, Fire, Ice, Lightning, Earth, Light, Dark, Void) against per-enemy resistances and immunities, plus status effects (Burn damage-over-time, Freeze, Stun, Mark, and buff/debuff pairs). None of this is novel in isolation; it exists so builds have levers beyond raw damage.

## Post-battle report

![Victory screen with battle stats](/images/clair-obscur-expedition-33/victory-screen.jpg)
*Victory screens itemize Chroma loot, XP, and, tellingly, your Successful Parries and Successful Dodges count. The stats screen tells you what the game thinks matters. The continue button reads "We Continue," the expedition motto. Source: [Game UI Database](https://www.gameuidatabase.com/gameData.php?id=2060).*

## Patterns this exemplifies

- `reactive-turn-based`: the lemma. Turn-based selection, real-time execution, on both offense and defense.
- `timed-hits`: Mario-RPG-lineage offense QTEs, here with a disable toggle.
- [`enemy-intent-telegraph`](/concepts/enemy-intent-telegraph): pushed to its limit; the telegraph is honest in kind and adversarial in rhythm.
