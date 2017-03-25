#!/usr/bin/env bash
GIT_DEPLOY_REPO=${GIT_DEPLOY_REPO}

if [ "$TRAVIS" = "true" ]
then
  # git need this, on Travis-CI nobody is defined
  git config --global user.name "Travis CI" && \
  git config --global user.email "travis@travis-ci.org"
fi

cd dist && \
$(npm bin)/rimraf .git && \
git init && \
git add . && \
git commit -m "Deploy to GitHub Pages" && \
git push --force "${GIT_DEPLOY_REPO}" master:master