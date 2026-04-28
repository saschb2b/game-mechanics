---
title: "Nier: Automata — Ending E + save sacrifice"
type: game
game: nier-automata
patterns:
  - meta-altruism-on-completion
  - diegetic-ui
---

# Ending E + save sacrifice

The first four endings (A, B, C, D) are not the ending. **Ending E is the ending** — and it is the part of Nier: Automata that's discussed most often, including by people who never played the game.

Ending E happens after Ending D. The game prompts the player to reload, then begins what looks like the credits sequence — and turns it into a small playable game.

## The shape of the sequence

Mechanically, Ending E is a **bullet-hell twin-stick shmum** (the same engine as the hacking minigame), played to a chorus version of "Weight of the World," sung in a constructed language and then in English.

The screen fills with the rolling credits — staff names move across the screen as bullets that the player must dodge or shoot. The player controls one of three small ship-icons (representing 2B / 9S / A2). The bullet density rises until the screen is essentially impossible.

The game is designed so that **the player will die.** Multiple times. With each death, the screen displays a one-line **encouragement message from another player who has previously beaten the sequence.** Examples (real, drawn from in-game messages):

- *"Don't give up!"*
- *"Don't give up. Believe in yourself!"*
- *"Sometimes it's okay to walk away from your screen for a minute."*

After enough deaths, the game offers a choice: **accept help from other players.** If accepted, ghost-icons of strangers' previous successful runs join the player on-screen, shooting bullets the player can't reach, absorbing damage. With this help, the level is finishable.

## The save-deletion prompt

After the credits clear, the game ends. Then it asks one question.

> *"Do you want to save someone? Even if it means losing all of your data?"*

Yes deletes the player's entire save file. Trophies/achievements remain; the save is gone. The player's chip inventory, level, completion data, weapon-story unlocks — all of it. The next time they open the game, it shows "Continue" greyed out and "New Game" highlighted.

What this does for *another* player: somewhere in the world, another player will encounter Ending E and be offered help, and the encouragement messages they see will include the message **you** wrote during your save-deletion prompt, and the ghost-icons assisting them will include yours.

Saying yes is a one-way trade. You delete your save so a stranger can finish.

## Why the design is structurally sharp

Three small mechanical decisions carry the entire weight:

1. **Asynchronous co-op.** No real-time networking, no matchmaking. Just: the server stores encouragement messages and ghost-runs from past players; the game streams them in. This is cheap to ship.
2. **A binary save-deletion prompt.** No tiers, no opt-out, no "are you sure (3/3)" softeners. One prompt, one button. The player feels the cost.
3. **The cost is ludic, not narrative.** The game does not delete your save and then tell you "this represents sacrifice." It deletes your save *and* shows that someone else benefits. The mechanic *is* the metaphor; nothing is being symbolised.

This is the game's most committed instance of **`ludonarrative-resonance`** — the form is the content. Ending E doesn't *say* "shared sacrifice creates the future"; the player *does* it, in the only verb the game has left.

## The deletion is reversible — but the game doesn't tell you

A player who saves their PS4/Steam save manually before reaching Ending E can restore it. Cloud saves often back up automatically. So technically the deletion isn't permanent for everyone.

The design choice not to mention this is deliberate. The decision is meant to feel irrevocable. For the *vast* majority of players, who don't preemptively back up saves before a credits sequence they've never seen, **it is irrevocable.**

This is a `bonus-with-drawback` move at the game design layer: Yoko Taro takes a risk that some technical players will route around the cost. He bets that the *intended* experience — the cost is real — is worth a leak in the airlock.

## Yoko Taro's framing

> "I think this is the first time I've been able to do this kind of happy ending. … I don't think I'll have a happy ending."
>
> — **Yoko Taro**, [Game Informer interview, 2017](https://gameinformer.com/b/features/archive/2017/11/24/yoko-taro-nier-automata-interview-game-informer.aspx)

The "happy ending" framing is significant — every prior Yoko Taro game (the Drakengard trilogy, the original Nier) ends grimly. Ending E is intentionally the first time he's offered the player a victory, and he's structured the cost so the victory has a price the player chooses to pay.

## What this teaches

- **Asynchronous network features can deliver synchronous emotional payload.** Dark Souls established the technique (encouragement messages, bloodstains); Automata adapted it as the *load-bearing* mechanic of an ending rather than ambient texture.
- **A binary prompt with a real cost is sharper than a multi-step ritual.** "Are you sure?" loops dilute the choice. One prompt, one button, one consequence.
- **The most expensive save data to delete is the player's, but the cheapest cost to ship is asking them to.** Server-side, the deletion is one boolean and one row in your encouragement table. Player-side, it's the most memorable choice in the game.
- **A "true ending" earns its title by changing the relationship between the player and the game.** Endings A–D end the story. Ending E ends the *save file*. There's nowhere left to go.

## Patterns this exemplifies

- `meta-altruism-on-completion` — the game asks the player to pay a cost (their save) for the benefit of strangers they will never meet. Uncurated.
- `diegetic-ui` (extended) — the credits, normally a flat overlay, become the playable surface. The frame is the game.

## Adjacent

- The Dark Souls message system is the lineage. Automata's contribution is making the messages *load-bearing* rather than decorative.
