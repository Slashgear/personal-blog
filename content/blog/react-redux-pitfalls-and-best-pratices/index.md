---
title: "React/Redux: pitfalls and best practices"
description:
  We use React and Redux for almost 4 years at Bedrock on our video platform named 6play.
  Good practices and mistakes to be avoided have been gathered in this article.
date: 2020-04-04
hero: ./redux.jpg
lang: en
---

After 2 years using React with Redux for the video platform [6play](https://6play.fr), I was able to identify good practices and pitfalls to avoid at all costs.
The [Bedrock](https://www.bedrockstreaming.com/) team (to which I currently belong) kept the technical stack of the project up to date to take advantage of the new features of `react`, `react-redux` and `redux`.

So here are my tips for maintaining and using React and Redux in your application without going crazy.

_This article is not an introduction to React or Redux. I recommend [this documentation](https://redux.js.org/basics/usage-with-react) if you want to see how to implement it in your applications._

## Utilise des middlewares custom

J'ai souvent pu voir des comportements d'`action` redux se copier-coller, d'action en action.
Quand on est développeur, "copier-coller" n'est jamais la bonne voie.

L'exemple le plus commun, c'est la gestion des appels HTTP lors d'une action qui utilise `redux-thunk`.

```js
export const foo = () =>
  fetch("https://example.com/api/foo")
    .then(data => ({ type: "FOO", data }))
    .catch(error => {
      // Do something
    })

export const bar = () =>
  fetch("https://example.com/api/bar")
    .then(data => ({ type: "BAR", data }))
    .catch(error => {
      // Do something
    })
```

Ces deux action font globallement la même chose, on pourrait très bien faire une factory qui ferait le code en commun.
Si ce pattern se répètait que deux fois, ce serait probablement la meilleure chose à faire.

Globalement la _"meta"_ action qu'on souhaite représenter ici lorsqu'elle est `dispatch`:

```
Fetch something
-- return action with the result
-- in case or error, do something
```

On pourrait très bien définir un middleware qui s'occuperait de ce comportement en commun.

```js
const http = store => next => async action => {
  if (action.http) {
    try {
      action.result = await fetch(action.http)
    } catch (error) {
        // Do something
    }
  }
  return next(action)
}

// in redux store init
const exampleApp = combineReducers(reducers)
const store = createStore(
  exampleApp,
  applyMiddleware(
    http,
  )
)
```

Ainsi les deux action précendentes pourrait s'écrire bien plus simplement:

```js
export const foo = () => ({ type: "FOO", http: 'https://example.com/api/foo' })

export const bar = () => ({ type: "BAR", http: 'https://example.com/api/bar' })
```

Les gros avantages de l'utilisation des middlewares dans une application complexe:
* Evite la duplication de code
* Permet de définir des comportements commun entre vos actions
* Standardiser des "meta" action redux

[Redux documentation about middlewares](https://redux.js.org/api/applymiddleware)

## Eviter d'avoir qu'un seul reducer

- combiner les reducers
- découpage fonctionel de votre application
- On a pu supprimer du store du code mort fonctionellement

## Tester vos reducers

- deep-freeze
- facile à tester
- simplify le refactoring de la structure du state

## Le `set` immutable

- présentation de `immutable-set`

## Nommer ses actions

- nommer leur impacte dans le state
- préfixer par le nom du store

## Proxyfier les accès au state

- usage des _selectors_

## Le cas `default`

- ne pas muter le state dans le cas default

## Eviter les rerender

### le piège avec useSelector

#### default values

#### appeler `filter` ou `reduce`

### transformer des données dans le rendu

La donnée dans le state doit être directement à afficher

### Normaliser vos données

- présentation rapide du normaliser

## useReducer !== redux

Les nouveaux hooks sont cool, on est parfois tenté de faire un store grâce à `useReducer`.
Redux est mieux car Devtools, middlewares,

## Manipuler un seul store Redux

- Possible d'avoir plusieurs store
- Chiant à débugger
