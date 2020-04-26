import React from 'react'
import { rhythm } from '../utils/typography'

export const Hero = ({ hero, title }) => (
  <picture>
    <source
      srcSet={hero.childImageSharp.fluid.srcSetWebp}
      sizes={rhythm(24)}
      type="image/webp"
    />
    <source
      srcSet={hero.childImageSharp.fluid.srcSet}
      sizes={rhythm(24)}
      type="image/png"
    />
    <img
      loading="lazy"
      className="article-item__picture"
      src={hero.childImageSharp.fluid.src}
      alt={title}
      width="100%"
    />
  </picture>
)
