#!/usr/bin/env bash

if [ "$TRAVIS" = "true" ]
then
  # git need this, on Travis-CI nobody is defined
  git config --global user.name "Slashgear" && \
  git config --global user.email "antoine395.caron@gmail.com"
fi

cd dist && \
$(npm bin)/rimraf .git && \
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "https://github.com/Slashgear/slashgear.github.io.git" master:master