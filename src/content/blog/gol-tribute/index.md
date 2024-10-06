---
title: Personal tribute to "Game of Life"
description: Trying to implement the Game of Life in Javascript in the browser and without framework.
pubDatetime: 2020-04-20
ogImage: ./gol.jpg
language: en
translations: ['fr', 'gol-hommage']
tags:
  - javascript
  - canvas
---

This end of the school year as a college professor is not very usual.
In a few days, I'm about to give my first courses to distance students through Discord.

I don't yet know in detail how it will work.
But I've tried to adapt my courses on "Design Patterns" to be easier and shorter than in previous years.
Indeed, I already imagine that it will be complicated to go at the same rhythm.

I had to redo a workshop on the _very classic_ MVC pattern.
I must confess that I was sorely lacking in ideas.
First of all, I didn't want to make a graphical interface with _JavaFx_ (Java being the best known language of my students).
Second, I wanted to use my programming language, JS.

I hope that by the time you read this article, the [Coronavirus] crisis that hit the world in early 2020 is over.
As of today, we are still in the middle of it.
I even read recently that [Jon H. Conway], the creator of the famous "Game of Life" died of this disease.

![animation by xkcd](https://imgs.xkcd.com/comics/rip_john_conway.gif)

> "Eureka !"

It didn't take me long to set up a little _game of life_ in JS and without framework.
The concept of the game is very simple.
With the _canvas_ API, in a few minutes I was able to recreate this well known game.

So here's the demo I was going to share with my students as an example:

<iframe src="https://game-of-life-demo.now.sh/" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe>

Link to the demo: https://game-of-life-demo.now.sh/

All I had to do was to put it in the shape of a workshop so Students could do it themselves.
As all my classes are open, here it is [available on Github](https://github.com/PolytechLyon/isi3-mvc-gol)

I don't know if [Jon H. Conway] had any idea (when he designed this game) that it would become such a _"reference"_ in the computer science world.
By introducing my students to it, I hope it will stay that way.

Feel free to share with me your implementations of the ["Game of Life"] in other languages or on other platforms.

[jon h. conway]: https://wikipedia.org/wiki/John_Horton_Conway
["game of life"]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
[coronavirus]: https://en.wikipedia.org/wiki/Coronavirus_disease_2019
