import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Logo = styled(Img)`
  flex-shrink: 0;
  display: none !important;
  border-radius: 50%;

  transition: border-radius 300ms ease-in;

  @media screen and (min-width: 1024px) {
    display: inline-block !important;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin: 0 1rem;
  padding-left: 0.2rem;
  font-weight: 600;
`

const Blocquote = styled.blockquote`
  border: none;
  margin: 0;
`

const StyledLink = styled(Link)`
  display: flex;
  color: var(--textNormal);
  box-shadow: none;
  transition: all 200ms ease-in;
  border-radius: 0.75rem;

  &:hover,
  &:focus {
    background: #ea684c;
    box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25);
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

export const Foundation = ({ lang = 'en' }) => {
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
    <StyledLink
      id="foundation"
      to={`${lang === 'en' ? '' : '/fr'}/abbe-pierre`}
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
    </StyledLink>
  )
}
