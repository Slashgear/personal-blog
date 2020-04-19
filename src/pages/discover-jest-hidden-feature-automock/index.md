---
title: 'Discover Jest hidden feature: Automock'
description: Testing is quite complicated. Even for JS app, libraries. But Jest helps a lot.
hero: ./jest.png
date: 2019-07-29
language: en
---

The subject of this article will be about Jest and the mocks. **I do not wish to advocate the use of "unit tests" here. Everyone is also free to define what is for him/her what is unitary.** I just want to show you how Jest manages its _mock_ and how _automocking_ could be useful to you on a daily basis. **It is important to know the basics of jest in order to understand the purpose of this article.**

# TL;DR

Jest _automock_ is fast and will help you add test easily. Consider using _automock_ when you always want to isolate your tests. This will simplify the use of mock by harmonizing the way they are created.

## Context

For several years now, I have been working in contexts that allow time and encourage people to write tests. For more than two years now, I have been working in the technical teams of the M6 group.

We are using two _"kind"_ of tests for our web platform:

- **"Unit tests"** with Jest and _automock_: To test our services and components in an isolated context. Each test will only focus on a specific module considering that all the others are mocked.

- **"Feature/Functional tests"** with CucumberJS and WebdriverIo: To test the product's functionality, using user actions in a semi-real context.

The testing context is quite specific. You probably don't have the same way of doing them. But this context explains a lot our interest in _automocking_. We do use `mocks` a lot, and _Jest_ is automatically mocking things for us which is great.

If you are interested in the subject of testing, I can recommend this great conference by Kent C. Dodds at the last Assert(JS).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Fha2bVoC8SE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you have listened to Kent's talk, he proposes to do mainly integration tests.

However, by following the TDD principle, the tests are really a great development tool for me to structure my design and move forward step by step. I still have difficulty today in designing my development based on integration tests.

Moreover, by using "unit tests", I can more easily refactor my code and thus gain more flexibility on the implementation. In my use, an implementation change in a module will only impact the associated test, unless the contract is modified.

## How to ?

To activate the _automock_, it's very simple. Just define this in the _jest_ configuration.

```js
module.exports = {
  automock: true,
}
```

Now, all the _import_ you do in your tests will automatically be mocked. Therefore, you will need _unmock_ the module you want to test. With this technique, you no longer need to define 10 lines of _mock_ at the beginning of your file.

```js
import dependency from 'dependency'
import { myMethod } from '../module/foo.js'

//the lines below are not necessary with automock activated
jest.mock('../module/foo.js')
jest.mock('dependency')
```

In the case of a _React_ component test, all the components on which you depend will be mocked. No more risk of breaking several test files when modifying a single component.

When your module depends on _asynchronous functions_, you can easily stub their error or success behavior with `mockResolveValue` and `mockRejectValue`.

## What happens when you call `jest.mock` ?

Before explaining why I love using automock, let's see what _Jest_ does when he is asked to mock a module.

When you use `jest.mock` on a module. Every exported values will be transformed like this (recursively):

- `Function` will be transformed to _spy_ function doing `noop` (like, the `jest.fn()`)
- `Array` will be transformed to empty array.
- `ES6 Class` will be transformed like function
- `Number`, `Object`, `String` won't be affected.

To summarize, we can say that the default mock does what we would hope if we wanted to isolate our test from all existing modules.

`Automock` is working just like `jest.mock` but for all the imported module of your test. It'll save you a lot of time.

# What is great with _automock_ ?

For me, activating Jest's automock means taking full advantage of jest's ability to generate a mocked version of a module.

No need to wonder if the module or dependency you are importing is mocked. Absolutely everything is mocked.

The only "noise" in your test will be from `unmock` the file you want to test.

Some may think that enabling this option will slow down your tests. Don't worry about it. On the project I'm working on, we have more than 3000 tests that run in less than 4 minutes.

## Tips

- Switching to `automock` on a huge project with many tests will be hard and dangerous.
- When your test behave strangely, maybe you forgot to `unmock` the module your are testing. It's going to drive you crazy.

- Try to outsource in `__mocks__` files as soon as you are forced to duplicate a mock.

- Don't forget `jest` is auto mocking `Array` by an empty `Array`.

If you liked this article, don't hesitate to share it! If you do your tests differently, share your tips with us.

Feel free to share your _tips_ with Jest.
