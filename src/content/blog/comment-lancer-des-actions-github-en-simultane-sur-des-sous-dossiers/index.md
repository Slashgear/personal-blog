---
title: "Github Action : Comment paralléliser ses tests dynamiquement par dossier ?"
description: Encore une fois, je joue avec les Github Action pour voir si elles peuvent répondre aux problématiques de CI que je peux rencontrer dans mon travail.
pubDatetime: 2020-12-01
ogImage: ../how-to-split-test-by-folder-with-github-action/github-actions.jpg
language: fr
translations: ["en", "how-to-split-test-by-folder-with-github-action"]
tags:
  - github
  - action
  - CI
  - tutoriel
---

Encore une fois, je me suis donné un challenge pour apprendre à utiliser Github Action.
J'ai essayé de voir s'il était possible de lancer dynamiquement un job pour chaque dossier dans un répertoire.

On est souvent amené à vouloir paralléliser l'exécution des tests pour réduire le temps de l'intégration continue.
Souvent les outils comme `Jest` ou `CucumberJS` possèdent des fonctionnalités de parrallélisation mais celles-ci confrontent souvent les limites de la puissance des machines sur lesquelles on souhaite les lancer.

```
tests/
  user/
    foo.feature
    bar.feature
  account/
    example.feature
  live/
    a.feature
    video.feature
```

Je me suis demandé si il ne serait pas plus performant de paralléliser le lancement des tests directement grâce à l'outil de CI pour n'avoir besoin que de petits _runners_.
Dans l'exemple précédent, j'aimerais pouvoir lancer en parallèle sur un _runner_ distinct pour chaque dossier dans `test/`.

## Une Solution avec les _Github action_

```yaml
name: CI

on:
  push:
    branches: [main]

jobs:
  directories: # Job that list subdirectories
    runs-on: ubuntu-latest
    outputs:
      dir: ${{ steps.set-dirs.outputs.dir }} # generate output name dir by using inner step output
    steps:
      - uses: actions/checkout@v2
      - id: set-dirs # Give it an id to handle to get step outputs in the outputs key above
        run: echo "::set-output name=dir::$(ls -d */ | jq -R -s -c 'split("\n")[:-1]')"
        # Define step output named dir base on ls command transformed to JSON thanks to jq
  loop:
    runs-on: ubuntu-latest
    needs: [directories] # Depends on previous job
    strategy:
      matrix:
        dir: ${{fromJson(needs.directories.outputs.dir)}} # List matrix strategy from directories dynamically
    steps:
      - run: echo ${{matrix.dir}}
```

À vous de l'adapter à vos besoins !
