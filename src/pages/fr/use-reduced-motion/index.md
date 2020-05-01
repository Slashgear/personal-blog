---
title: Et voici use-reduced-motion
description: Annonce de la publication d'un package open source pour la gestion de la réduction des mouvements pour l'accessibilité du web. Inspiré de mes lectures et voulant en apprendre plus sur les Hook de React.
date: 2020-05-01
hero: ./useReducedMotion.jpg
language: fr
translations: ['en', 'use-reduced-motion']
---

## Tout part toujours d'une idée

La semaine dernière, alors que je mettais en place le mode dark sur mon site perso, je me suis motivé à travailler sur un nouveau package pour a communauté React.
En effet, pour intégrer le mode dark sur mon site, j'ai pu utiliser [un _React Hook_ de la communauté](https://github.com/donavon/use-dark-mode).

> "Tiens, quelqu'un a partagé un hook pour gérer la feature `prefers-color-scheme` des navigateurs, c'est super pratique."

Je suis sûr qu'il existe encore beaucoup d'autres API web qui mériteraient un _Hook_ pour simplifier leur usage dans des applications _React_.
C'est alors que j'ai repensé à cet [article de blog génial sur une nouvelle feature pour l'accessibilité](https://web.dev/prefers-reduced-motion/).

A l'époque je découvrais que certains utilisateurs pouvaient avoir de la gène à lire et accéder à des pages web qui contiennent des animations.
En effet, des élements d'une page qui bougent, qui zoom ou changent de couleurs peuvent énormément troubler l'usage et la compréhension du contenu de nos pages.

Je vous propose un exemple avec cette très courte vidéo.
Concentrez-vous sur les personnes en blanc, et essayer de compter le nombre de passes.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ahg6qcgoay4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Vous comprenez maintenant, imaginez maintenant que certaines personnes se trouvent dans la même situation en consultant votre site.
La _"superbe animation d'onboarding"_ que vous avez réalisé est peut-être très belle, mais elle perturbe énormement certains de vos utilisateurs;
les mettant dans la même situation que vous avec cette vidéo.

Heureusement, les OS et les navigateurs ont pris conscience des sujets d'accessibilité et fournissent aujourd'hui des outils.
**Il est donc aujourd'hui de notre responsabilité (nous développeur) d'intégrer ces solutions pour éviter de mettre certains de nos utilisateurs dans une situation de handicap.**

Une _media query_ vous permets donc aujourd'hui de stopper vos animations pour les utilisateurs qui en ont besoin.

```css
@media (prefers-reduced-motion: reduce) {
  button {
    animation: none;
  }
}
```

Le [support de cette fonctionnalité](https://caniuse.com/#feat=prefers-reduced-motion) est même très correct.
Voici même la démo présenté dans [l'article cité plus haut](https://web.dev/prefers-reduced-motion/).

<div style="position:relative;height:0;padding-bottom:56.25%">
<video muted="" playsinline="" controls="" style=" position: absolute; top: 0; left: 0; width: 100%; height: 100%; ">
    <source src="https://storage.googleapis.com/web-dev-assets/prefers-reduced-motion/prefers-reduced-motion.mp4" type="video/mp4">
</video>
</div>

## Le package et comment l'utiliser

Elle est très sympa cette _media query_ mais dans certains cas, les animations que j'utilise sur mes sites sont gérée par du JS.
Heureusement, on a également des solutions pour surveiller l'usage des _media query_ dans le navigateur.

Je l'ai donc intégré dans un _Hook_ de React (le lib de composants que j'utilise/préfère le plus en ce moment).

Le voici: https://www.npmjs.com/package/use-reduced-motion

Pour l'installer dans votre projet:

```shell
npm install use-reduced-motion
# or
yarn add use-reduced-motion
```

Ensuite il vous reste à l'utiliser dans l'un de vos composant:

```jsx
import React from 'react'
import { useReducedMotion } from 'use-reduced-motion'
import { AnimatedDiv } from '../somewhere'

export const MyExampleComponent = () => {
  const prefersReducedMotion = useReducedMotion()
  return <AnimatedDiv pause={prefersReducedMotion} />
}
```

Je vous invite à tester ici avec votre navigateur/OS, l'animation suivante va s'arrêter automatiquement.

<iframe
 src="https://codesandbox.io/embed/use-reduced-motion-pi966?fontsize=14&hidenavigation=1&theme=dark&view=preview"
 style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
 title="use-reduced-motion"
 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

N'hésitez pas à partager cet article si il vous a plu, toute contribution au package est la bienvenue.

_Crédit image [unDraw](https://undraw.co/)_
