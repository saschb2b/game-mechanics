---
title: "Expedition 33: Design tensions"
type: game
game: clair-obscur-expedition-33
---

# Design tensions

Sandfall's leads gave unusually candid interviews before and after launch. The quotes below are grouped by the tension they wrestle with. (Several were given to Edge magazine and are cited via the outlets that reported them; the Japanese and French interview quotes are translations.)

## Active defense vs turn-based purity

The founding anecdote, from creative director Guillaume Broche:

> "[I] wanted to do a turn-based game, but I was also kind of burnt out by turn-based games, so I wanted to make something that felt fresh. I was playing Sekiro on the side, and I was like, 'I love parrying. Why can't I parry in my game?'"
> — Guillaume Broche, Edge, via [GamesRadar](https://www.gamesradar.com/games/rpg/clair-obscur-expedition-33-creative-director-put-parrying-in-his-turn-based-rpg-after-playing-sekiro-and-thinking-why-cant-i-parry-in-my-game/)

Producer François Meurisse names the exact dead spot the design attacks:

> "One thing that can be frustrating in classic full turn-based games is that when it's your turn for defense, you usually cannot do anything and just take damage."
> — François Meurisse, [RPG Site](https://www.rpgsite.net/interview/17041-clair-obscur-expedition-33-interview-celebrating-turn-based-games-classic-rpg-influences-in-making-something-new)

And is disarmingly honest about where the pieces come from:

> "I don't know if we're super innovative in our gameplay mechanics. I think not, but they're just assembled in a unique and clever way."
> — François Meurisse, [PC Gamer](https://www.pcgamer.com/games/rpg/clair-obscur-expedition-33s-director-was-starving-for-new-turn-based-rpgs-and-figured-if-he-wanted-them-there-would-be-others-out-there-whod-want-to-play-his-game/)

Broche, on the "turn-based is old school" discourse the game was received as a rebuttal to:

> "I don't get this whole 'turn-based is old school' thing. I've never bought into that; I've always thought it was total nonsense."
> — Guillaume Broche, via [GamesRadar](https://www.gamesradar.com/games/rpg/clair-obscur-expedition-33-lead-says-the-idea-turn-based-rpgs-are-old-school-is-total-nonsense-because-theyre-incredibly-satisfying-in-a-way-action-games-arent/)

> "It's not like we added the parry system and built such a narrative experience because we wanted to avoid our game facing prejudice. We just did it because we wanted to do it."
> — Guillaume Broche, Denfaminicogamer, via [Automaton](https://automaton-media.com/en/news/clair-obscur-expedition-33-director-says-turn-based-rpgs-are-selling-better-lately-but-the-prejudice-is-still-there/)

## Strict timing vs accessibility

The internal design rule was a no-hit test:

> The battle system was designed around the premise of "no frustrating deaths" and "a game you can clear without taking a single hit": every boss mechanic was tested against whether it could be defeated without taking damage, and cut if not. Deaths in typical turn-based RPGs frustrate "because luck is often involved... the boss might just attack the wrong character and there's nothing the player can do."
> — Guillaume Broche (paraphrase + fragments), Denfaminicogamer, via [Automaton](https://automaton-media.com/en/news/clair-obscur-expedition-33s-battle-system-was-designed-around-the-premise-of-no-frustrating-deaths-and-a-game-you-can-clear-with/)

The pressure valve offered instead of easier timing:

> "You can build your character, for example, if you're bad at parrying but good at dodges, you can build your characters and your equipment. ... There are three difficulty settings in the game. You can also disable the attack QTEs if you want."
> — François Meurisse, [RPG Site](https://www.rpgsite.net/interview/17041-clair-obscur-expedition-33-interview-celebrating-turn-based-games-classic-rpg-influences-in-making-something-new)

What shipped didn't fully honor the first half of that promise: dodge-only play earns no AP, defensive inputs have no auto-resolve on any difficulty, and late-game one-shot patterns made parry the only economy that works ("The game stops being about using all the cool Pictos that you've found, and just becomes about whether you can consistently hit the button at exactly the right time," [TheGamer's criticism piece](https://www.thegamer.com/clair-obscur-expedition-33-too-much-parrying/)). Sandfall's concession was surgical rather than global: patch 1.3.0 widened parry/dodge windows 40% **on Story mode only**, preserving strictness as identity everywhere else. Broche, asked about the game's rough edges generally:

> "Games that try to be perfect, that try to fix all their flaws, they're usually just really boring. ... We knew when we were making them: it was going to be unbearable, people were going to lose it, but it's part of the fun."
> — Guillaume Broche, Konbini, via [OtakuKart](https://otakukart.com/clair-obscur-expedition-33-director-defends-the-games-imperfections-says-games-that-try-to-be-perfect-are-usually-just-really-boring/)

## Friction as memory

The no-minimap stand:

> "It makes it boring... I just look at the mini-map. I don't enjoy the environment. I don't remember the level design. ... That's the beauty of RPGs, missing stuff. When you stop the game and are like 'Oh, maybe I should have gone to this little pass that I saw before, maybe there was something.' Then, you remember all the game, all the level design and everything, and it makes the exploration a lot better."
> — Guillaume Broche, via [GameRant](https://gamerant.com/clair-obscur-expedition-33-no-mini-map-ceo-explanation/)

This one never got patched. Reviewers who loved the combat still dinged the disorientation (GameSpot: "mechanically uninteresting to explore"), and it stands as the game's clearest example of a deliberately kept flaw.

## Let them break it

The endgame's damage math collapsed publicly: the 9,999 cap is removed by an opt-in Lumina, and a Maelle build (Virtuose stance + the Stendhal skill, boosted pre-release "and [we] clearly overdid it," plus a bug) reached billions of damage, enough to one-shot the superboss the game builds toward. The nerf discourse resolved with an unusually clear statement of philosophy:

> "We still want you to be able to break the game, and you absolutely still can, but Stendhal was making it a bit too easy."
> — Sandfall, via [PC Gamer](https://www.pcgamer.com/games/rpg/clair-obscur-expedition-33-devs-to-issue-its-first-nerf-to-an-ability-that-does-2-billion-damage-we-gave-it-a-big-damage-boost-and-clearly-overdid-it/)

They pre-announced the nerf a day early, jokingly inviting players to abuse the build one last time, and later shipped Challenge Modifiers (self-set damage caps and enemy HP multipliers up to ×100), outsourcing endgame balance to the player. The design stance: single-player balance is a service to build diversity, not a leash.

## Boss as skill check

On Simon, the hidden superboss, and the Malenia influence:

> "When we played Elden Ring, Malenia had quite an aura, even though she had a simple design. We wanted to bring that simplicity to one of the hardest bosses. ... The idea is that he is kind of downplayed in the beginning, he seems weak, and then becomes absolute hell in phase 2."
> — Guillaume Broche, via [TheGamer](https://www.thegamer.com/clair-obscur-expedition-33-simon-based-on-malenia/)

> "What surprised me most was someone managed to beat Simon without cheesing and by taking every single hit and still win."
> — Guillaume Broche (who admitted he can't beat Simon himself), Edge, via [TheGamer](https://www.thegamer.com/clair-obscur-expedition-33-director-simon-boss-fight/)

## Small team, big surface

> "When we were creating the company, we were really inspired by games like Hellblade and A Plague Tale: Innocence, which proved that, with the right tools and teams, you can create some hits in realistic 3D with double-A teams."
> — François Meurisse, [PCGamesN](https://www.pcgamesn.com/clair-obscur-expedition-33/30-developer-response)

> "With the tech that's accessible now, it's much easier; it's still a shit ton of work, don't get me wrong, but it's easier to make a game that looks bigger than the size of the team."
> — Guillaume Broche, [PCGamesN](https://www.pcgamesn.com/clair-obscur-expedition-33/30-developer-response)

> "I'd say we basically did twice the work, because we were doing things for the first time to that scale."
> — François Meurisse (on a ~90% junior team), Edge, via [TheGamer](https://www.thegamer.com/clair-obscur-expedition-33-twice-the-work-sandfall/)

The "30 developers" framing became its own discourse after Summer Game Fest praise; the honest accounting is ~30 core plus substantial outsourcing (combat animation freelancers, QA, ports, localization), on a sub-$10M budget. The lesson isn't "30 people made this," it's that a Blueprint-heavy UE5 pipeline let a mostly-junior team ship AAA-looking surface by concentrating engineering on one system (combat) and accepting jank elsewhere (platforming, camera, invisible walls).
