---
title: 'Github Action: How to parallelize tests dynamically by folder?'
description: Once again, I play with Github Action to see if it can answer the CI problems I may encounter in my work.
date: 2020-12-01
hero: ./github-actions.jpg
language: en
translations:
  ['fr', 'comment-lancer-des-actions-github-en-simultane-sur-des-sous-dossiers']
tags:
  - github
  - action
  - CI
  - tutorial
---

Once again, I gave myself a challenge to learn how to use Github Action.
I tried to see if it was possible to dynamically launch a job for each folder in a directory.

We often want to run tests in parallel to reduce the time of continuous integration.
Often tools like `Jest` or `CucumberJS` have parallelization features, but these often face the limits of the power available on the machines on which you want to run them.

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

I wondered if it wouldn't be more efficient to run the tests in parallel directly with the CI tool so that only small _runners_ would be needed.
In the previous example, I would like to be able to run in parallel on a separate _runner_ for each folder in `test/`.

## A Solution with _Github action_

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

It's up to you to adapt it to your needs!
