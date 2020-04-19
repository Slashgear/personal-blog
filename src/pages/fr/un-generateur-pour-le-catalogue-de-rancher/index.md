---
title: Un générateur pour les entrées de catalogue Rancher
description: Si vous souhaitez générer votre entrée de catalogue Rancher simplement, ce générateur de yeoman est là pour vous, alors essayez-le.
date: 2016-06-20
hero: ./catalogue.png
translations: ['en', 'generator-rancher-catalog']
language: fr
---

Vous pouvez ajouter une entrée de catalogue privé dans vos instances de Rancher, mais la création
des fichiers de configuration pourraient être très difficiles.

Afin d'éviter les erreurs, j'ai créée un [générateur d'entrée de catalogue Rancher basé sur
yeoman.](https://github.com/Slashgear/generator-rancher-catalog)

```bash
npm install -g yo
npm install -g generator-rancher-catalog
```

Générez ensuite votre nouveau projet :

```bash
yo rancher-catalog
```

N'hésitez pas à contribuer, les PR sont les bienvenus.

[![asciicast](https://asciinema.org/a/644asuhwcljfkzm3j4g9j6qsg.png)](https://asciinema.org/a/644asuhwcljfkzm3j4g9j6qsg)
