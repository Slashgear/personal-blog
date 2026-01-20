---
title: Git TIP -  Why you should not keep a local master branch ?
description: What is a local branch, what is a remote branch ? Why keeping up to date local branch is a waste of time ?
ogImage: ./what.jpg
language: en
translations: ["fr", "pourquoi-vous-ne-devriez-pas-maintenir-une-branche-master-locale"]
pubDatetime: 2019-07-25
tags:
  - git
---

When working with `git`, I have often made the mistake of maintaining a `master` branch locally updated using these commands.

```shell script
git checkout master

git pull origin master
```

I've done this so many times. This allowed me to start a development by being up to date with recent changes.

In fact, it is not necessary to maintain local copies of the branches on which we are not working directly. We already have access to an intact local version of the remote branches.

All this time I could have just done:

```shell script
git checkout origin/master
```

And when you want to work on new stuff, just use

```shell script
git checkout -b my-feature origin/master
```

Keep in mind that this is valid for _master_ as well as all other branches on which you do not work directly/on which you will _commit_.

You could also follow my colleague advises.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In the same context you can add &quot;never rebase on your local master if you have one&quot; 😉 Personally I have a git rem alias that does &quot;git rebase origin/master&quot;, so easy to write 👌</p>&mdash; Florent Lepretre (@SuperFlaw) <a href="https://twitter.com/SuperFlaw/status/1154079231195959298?ref_src=twsrc%5Etfw">July 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In general you should keep a minimum of local branches, when you&#39;ve pushed them you have their remote image in your local repository. They won&#39;t disappear unless you prune them. Just get used to read what &#39;git fetch&#39; prints, everything is there !</p>&mdash; Florent Lepretre (@SuperFlaw) <a href="https://twitter.com/SuperFlaw/status/1154080561423691776?ref_src=twsrc%5Etfw">July 24, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Let me know if you have any other tricks with Git!
