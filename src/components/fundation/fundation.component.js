import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Logo = styled(Img)`
  flex-shrink: 0;
  display: none !important;

  @media screen and (min-width: 1024px) {
    display: inline-block !important;
  }
`

const TextWrapper = styled.div`
  flex-grow: 1;
  margin-right: 1rem;
  padding-left: 0.2rem;
`

const Blocquote = styled.blockquote`
  border: none;
  margin: 0;
`

const Link = styled(OutboundLink)`
  display: flex;
  color: var(--textNormal);
  box-shadow: none;
  transition: all 300ms ease-in;
  background: linear-gradient(to right, transparent 50%, #ea684c 50%);
  background-size: 200% 100%;
  background-position: left bottom;

  &:hover,
  &:focus {
    background-position: right bottom;
  }
`

const textByLang = {
  fr: {
    text: "Si vous aimez le contenu de ce blog, ou bien qu'il vous a aidé, s'il vous plait, considérez donner à la fondation Abbé Pierre que je soutiens personnellement.",
    quote:
      '“On n’est jamais heureux que dans le bonheur qu’on donne. Donner, c’est recevoir.”',
  },
  en: {
    text: 'If you like some content of this blog, or it has helped you, please consider donating to the Abbé Pierre Foundation which I personally support.',
    quote:
      '"We are only ever happy in the happiness we give. To give is to receive."',
  },
}

export const Fundation = ({ lang = 'en' }) => {
  const logo = useStaticQuery(graphql`
    {
      img: file(
        relativePath: { eq: "abbe_pierre.jpeg" }
        sourceInstanceName: { eq: "static_images" }
      ) {
        childImageSharp {
          fixed(quality: 60, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Link
      id="foundation"
      target="_blank"
      rel="noreferrer"
      href="https://www.fondation-abbe-pierre.fr/"
    >
      <TextWrapper>
        {textByLang[lang].text}
        <br />
        <Blocquote>{textByLang[lang].quote}</Blocquote>
      </TextWrapper>
      <Logo
        fixed={logo.img.childImageSharp.fixed}
        alt="logo de la fondation abbé pierre"
      />
    </Link>
  )
}
