---
title: Generator Rancher Catalog
description: If you want to generate your Rancher catalog entry simply, this yeoman generator is here for you, so give it a try.
pubDatetime: 2016-06-20
ogImage: ./catalogue.png
translations: ['fr', 'un-generateur-pour-le-catalogue-de-rancher']
language: en
tags:
  - rancher
  - oss
---

You can add private catalog entry in your Rancher instances, but creating
configuration files could be really hard.

In order to avoid errors, I create a [generator for Rancher catalog entry based on
yeoman.](https://github.com/Slashgear/generator-rancher-catalog)

```bash
npm install -g yo
npm install -g generator-rancher-catalog
```

Then generate your new project:

```bash
yo rancher-catalog
```

Don't hesitate to contribute, PR are welcome.

[![asciicast](https://asciinema.org/a/644asuhwcljfkzm3j4g9j6qsg.png)](https://asciinema.org/a/644asuhwcljfkzm3j4g9j6qsg)
