---
pubDatetime: 2022-05-10
title: How to automatically merge dependabot pull requests with Github Actions ? 
description: Example with this blog implementation where dependabot PR automatically merge on default branch if e2e tests pass.
ogImage: ./markus-winkler-cxoR55-bels-unsplash.jpg
language: en
tags:
- tutorial
- github
- gatsby
- action
- dependabot
---

Recently, I've been working a lot on industrializing this blog _(maybe even a little too much)_. 
This blog is my playground, I experiment, I play, I test things. 
I admit that it's over-engineered but I'm having a lot of fun with it. 😅

Since its release, I tried to use [dependabot] from github on my repositories. 
At the beginning without much conviction.
As much as I thought it was great in principle, the noise generated by the dozens of open PRs per day was really annoying.
As a maintainer of various open-source projects, I have been victim of dependabot PR flood several times. _A real nightmare_.

I had foolishly made no effort to configure it.
Recently, I thought I should give it another chance.
So I set up [this configuration that allowed me to update my JS dependencies and used github actions](https://github.com/Slashgear/slashgear.github.io/blob/72f2575bcc4c9eedf4c61a7cf734e54eceee1241/.github/dependabot.yml) in my workflows.

```yaml
version: 2
updates:
  - package-ecosystem: 'npm' # See documentation for possible values
    directory: '/' # Location of package manifests
    open-pull-requests-limit: 25
    schedule:
      interval: 'daily'
  - package-ecosystem: 'github-actions' # See documentation for possible values
    directory: '/' # Location of package manifests
    open-pull-requests-limit: 25
    schedule:
      interval: 'daily'
```

No lie, with this configuration, on this blog developed with Gatsby, [Dependabot] was opening up to 20 Pull Requests per week.

## ⚠️ Limits

At the beginning, when you see all the PRs opening with all the dependencies updates, you are quite happy.
However, managing this every week is really time consuming.
Moreover, when we merge these PRs in a chain, we generate in cascade conflicts on the `package.json` file which prevents the merge 😒.
It is therefore often necessary to wait for dependabot to rebase the PR by itself, for the tests to pass and then wait for the Pull Request to merge.

![Animation of a hand clicking frantically](./click.gif)

## ♻️ Let's merge it automatically!

Having set up E2E tests on this blog, the check ✅ given by my continuous integration workflow is very reassuring.
[You can have a look at this article which describes how I set up these tests](/how-to-setup-e2e-tests-with-webdriverio/)

With this automation, I'm pretty serene when I merge the dependabot update PR.
So I thought, _"Why not automatically merge the PRs that pass the E2E tests?"_

To do this, in my continuous integration workflow, I just had to add a new job configured this way.

```yaml
 dependabot:
    name: 'Dependabot'
    needs: [build, e2e] # After the E2E and build jobs, if one of them fails, it won't merge the PR.
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' && github.event_name == 'pull_request'}} # Detect that the PR author is dependabot
    steps:
      - name: Enable auto-merge for Dependabot PRs
        run: gh pr merge --auto --merge "$PR_URL" # Use Github CLI to merge automatically the PR
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

[If you want to see the real example, take a look at this blog workflow.](https://github.com/Slashgear/slashgear.github.io/blob/72f2575bcc4c9eedf4c61a7cf734e54eceee1241/.github/workflows/continuous-integration.yml)

## 👮‍ In the end, is it really safer?

Without explaining what [dependabot] is, one could think that all this could bring more security.
Indeed, as soon as security patches are available, they would be automatically applied and deployed on my blog without any manual manipulation being necessary.

My availability to merge the PRs of dependabot being limited, one could say that setting up automation improves things.
A good E2E testing strategy ensuring that I don't break anything too important on my site seems really convenient.

But in the end, who controls the updates and what they contain?
Who makes sure that they don't contain malicious code?
This blog is not a sandbox for me, so it's not very problematic.
So think carefully before setting it up.

[dependabot]: https://docs.github.com/en/code-security/dependabot