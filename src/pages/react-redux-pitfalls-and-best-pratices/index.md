---
title: "React/Redux: pitfalls and best practices"
description:
  We use React and Redux for almost 4 years at Bedrock on our video platform named 6play.
  Good practices and mistakes to be avoided have been gathered in this article.
date: 2020-04-04
hero: ./redux.jpg
language: en
---

After 2 years using React with Redux for the video platform [6play](https://6play.fr), I was able to identify good practices and pitfalls to avoid at all costs.
The [Bedrock](https://www.bedrockstreaming.com/) team (to which I currently belong) kept the technical stack of the project up to date to take advantage of the new features of `react`, `react-redux` and `redux`.

So here are my tips for maintaining and using React and Redux in your application without going crazy.

_This article is not an introduction to React or Redux. I recommend [this documentation](https://redux.js.org/basics/usage-with-react) if you want to see how to implement it in your applications._

## Eviter d'avoir qu'un seul reducer

Le `reducer` est la fonction qui est en charge de construire à chaque `action`.
On pourrait être tenté de manipuler qu'un seul reducer.
Dans le cas d'une petite application, ce n'est pas un problème.
Pour des applications exprimant un métier complexe et qui évolue beaucoup, il faut mieux opter pour la solution `combineReducers`.

Cette feature de `redux` permet de manipuler, non pas un mais plusieurs `reducer` qui agissent respectivement sur le state.

> Quand et comment découper son application ?

Ce que je recommande, c'est un découpage fonctionel de l'application.
Un dossier _modules_ qui regroupe les différents dossiers associées au feature de votre application.

```txt
app/
  modules/
    user/
      __tests__/
        user.reducer.spec.js
      components/
      user.reducer.js
    product/
      __tests__/
        product.reducer.spec.js
      components/
      product.reducer.js
    account/
      __tests__/
      account.reducer.spec.js
      components/
      account.reducer.js
  store.js
  index.js
```

Ainsi dans `store.js` il suffit de combiner vos différents reducers.

```js
import { createStore, combineReducers } from "redux"
import { user } from "./modules/user/user.reducer.js"
import { product } from "./modules/user/product.reducer.js"
import { account } from "./modules/user/account.reducer.js"

export const store = createStore(combineReducers({ user, product, account }))
```

En suivant ce pattern, vous pourrez:

- conserver des reducer lisibles car ayant un scope moins large
- structurer et définir les fonctionnalités de ton application
- faciliter le testing de vos reducers

Historiquement, ce découpage nous a permis de supprimer des pans d'application complet sans avoir des imapcts sur toute la codebase.
Il suffit de supprimer le dossier du `module` associées à la feature.

### Proxyfier les accès au state

Vos reducers ainsi placés dans les `module` fonctionel, il faut maintenant permettre à vos composants d'accéder au state par le biais de `selector`.
Un `selector` est une fonction qui a en paramètres, le `state` et qui récupère les informations.

```js
export const getUserName = ({ user: { lastName }) => lastName
```
On peut également passer des paramètres à un `selector` en le wrappant par une fonction;

```js
export const getProduct = productId => ({ product: { list }) => list.find(product => product.id === productId)
```
Cela vous permettra de les utiliser dans vos composants grâce au hook [`useSelector`](https://redux.js.org/recipes/usage-with-typescript#typing-the-useselector-hook).

```js

const MyComponent = () => {
    const product = useSelector(getProduct(12))
    return <div>{product.name}</div>
}
```

### Nommer ses actions

- nommer leur impacte dans le state
- préfixer par le nom du store

### Tester vos reducers

Les `reducer` sont les porteurs du métier de votre application.
Ils manipulent l'état de votre application ainsi que modifications qu'on peut lui apporter.

**Ce code est donc _sensible_**

➡️ une modification peut avoir beaucoup d'impacte sur votre application.

**Ce code est riche de règles métier**

➡️ il faut s'assurer que celles-ci sont correctement implémentées.

Bonne nouvelle, ce code est relativement facile à tester. Un `reducer`, c'est une unique fonction qui prend 2 paramètres.
Cette fonction va retourner un nouveau `state` en fonction du type d'action et de ces paramètres.

Voilà la structure standard de test de `reducer` avec Jest:

```js
describe("ReducerName", () => {
  beforeEach(() => {
    // Init a new state
  })
  describe("ACTION", () => {
    // Group tests by action type
    it("should test action with some params", () => {})
    it("should test action with other params", () => {})
  })
  describe("SECOND_ACTION", () => {
    it("should test action with some params", () => {})
  })
})
```

Je vous recommande également d'utiliser le package [deep-freeze](https://www.npmjs.com/package/deep-freeze) sur votre `state` afin de vous assure que toutes les actions retourne des nouvelles références.

Enfin, tester vos reducers vous permettra de facilement refactor la structure interne de leur state sans risquer d'introduire des régressions.

## Conserver des reducers lisibles

Un `reducer` est une fonction qui doit retourner une nouvelle version du state contenant ses nouvelles valeurs tout en conservant les mêmes références des objets qui n'ont pas changés.
Cela permet de profiter au maximum du _Structural sharing_ qui vous évite d'exploser votre usage mémoire.
L'usage du _spread operator_ est donc plus que conseillé.

Cependant, dans le cas ou le `state` a une structure compliquée et profonde, il peut être verbeux de modifier le state sans détruire les références qui ne doivent pas changer.

```js
const state = {
  a: {
    z: {
      A: "A",
    },
    y: {
      A: "A",
    },
  },
  b: {
    z: {
      A: "A",
    },
  },
}

// When you want tu change nested state value
const newState = {
  ...state,
  a: {
    ...state.z,
    y: {
      A: "B",
    },
  },
}
```

Pour éviter cela, la team Bedrock a publié un package qui permet de `set` un attribut imbriqué tout en garantissant l'immutabilité: [immutable-set](https://www.npmjs.com/package/immutable-set)

```js
import set from "immutable-set"

const newState = set(state, "a.y.A", "B")
```

## Ne pas utiliser le cas `default`

L'implémentation d'un reducer `redux` consiste très souvent en un `switch` où chaque `case` correspond à une `action`.
Un `switch` doit toujours définir le cas `default`.

Imaginons le reduce suivant:

```js
const initialState = {
  value: "bar",
  index: 0,
}

function reducer(initialState, action) {
  switch (action.type) {
    case "FOO":
      return {
        value: "foo",
      }
    default:
      return {
        value: "bar",
      }
  }
}
```

On peut naïvement se dire, ce reducer gère deux actions différentes. C'est ok.
Si on isole ce reducer, il n'y a que deux type d'`action` qui peuvent modifier ce state; l'action `FOO` et n'importe quel autre action.

Cependant si vous avez suivi le [conseil de découper vos reducers](#eviter-davoir-quun-seul-reducer), vous n'avez pas qu'un seul reducer qui agit sur votre store.

Et c'est là que le reducer précédent pose problème.
En effet, n'importe quelle autre action va modifier ce state et rentrer dans le cas `default`.
Une action `dispatch` passe dans chacun des `reducer` associés à celui-ci.
Une action à l'autre bout de votre application pourrait ainsi affecter ce state sans que le code l'exprime.
Il faut donc éviter ça.

Si on veut modifier le state avec un action d'un autre module, on le faire en ajoutant un `case` sur cette action.

```js
function reducer(state = initialState, action) {
  switch (action.type) {
    case "FOO":
      return {
        value: "foo",
      }
    case "otherModule/BAR":
      return {
        value: "bar",
      }
    default:
      return state
  }
}
```

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
const store = createStore(exampleApp, applyMiddleware(http))
```

Ainsi les deux action précendentes pourrait s'écrire bien plus simplement:

```js
export const foo = () => ({ type: "FOO", http: "https://example.com/api/foo" })

export const bar = () => ({ type: "BAR", http: "https://example.com/api/bar" })
```

Les gros avantages de l'utilisation des middlewares dans une application complexe:

- Evite la duplication de code
- Permet de définir des comportements commun entre vos actions
- Standardiser des "meta" action redux

[Redux documentation about middlewares](https://redux.js.org/api/applymiddleware)

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
