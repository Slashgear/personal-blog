import { Helmet } from 'react-helmet'
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

import coverImage from '../../assets/abbe-pierre.jpg'

const title = 'Soutenez la fondation Abbé Pierre'
const description =
  "Soutenez l'association si le contenu de ce blog vous a aidé ! Aidez-les à agir !"

const DonateButton = styled(OutboundLink)`
  display: block;
  margin: 2rem auto;
  width: fit-content;
  font-size: 2rem;
  font-weight: bolder;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  background: #ed6746;
  box-shadow: none;
`

const Cover = styled(Img)`
  margin-bottom: 1rem;
`

const Fundation = () => {
  const { site, img } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        img: file(
          relativePath: { eq: "abbe-pierre.jpg" }
          sourceInstanceName: { eq: "static_images" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'var(--textNormal)',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Link to="/">Retour au blog</Link>

      <Helmet
        htmlAttributes={{
          lang: 'en_US',
          prefix:
            'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#',
        }}
        title={title}
        link={[
          {
            rel: 'alternate',
            hreflang: 'en',
            href: `/abbe-pierre/`,
          },
        ]}
        meta={[
          {
            property: 'og:site_name',
            content: 'Antoine Caron',
          },
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: 'og:image',
            content: site.siteMetadata.siteUrl + coverImage,
          },
          {
            name: 'twitter:image',
            content: site.siteMetadata.siteUrl + coverImage,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: 'website',
          },
          {
            property: 'og:locale',
            content: 'en_US',
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
          {
            property: 'fb:app_id',
            content: '235346886871248',
          },
        ]}
      />
      <h1 style={{ color: 'var(--header)' }}>
        Soutenez la fondation Abbé Pierre
      </h1>

      <Cover
        loading="lazy"
        fadeIn
        fluid={img.childImageSharp.fluid}
        alt="Foundation image"
      />

      <blockquote>
        "Nous sommes tous des hommes d'une seule et même Terre."
      </blockquote>

      <p>
        Je soutiens régulièrement depuis plusieurs années{' '}
        <OutboundLink
          target="_blank"
          rel="noreferrer"
          href="https://www.fondation-abbe-pierre.fr/"
        >
          la Fondation Abbé Pierre
        </OutboundLink>
        , qui se bat en France (et dans de nombreux autres pays) pour défendre
        la dignité de tous.
      </p>

      <p>
        Profitant d'une audience croissante et refusant d'ajouter de la
        publicité, je voulais vous inviter à soutenir cette association dont les
        actions sont plus que nécessaires malheureusement.
      </p>

      <p>
        Alors que{' '}
        <a
          href="https://www.youtube.com/watch?v=9X0P4wOiddY"
          target="_blank"
          rel="noreferrer"
        >
          les politiques font de fausses promesses
        </a>{' '}
        en laissant des familles survivre dans la rue chaque hiver,{' '}
        <OutboundLink
          target="_blank"
          rel="noreferrer"
          href="https://www.fondation-abbe-pierre.fr/"
        >
          la Fondation Abbé Pierre
        </OutboundLink>
        , par ses actions, œuvre pour accueillir et tendre la main.
      </p>

      <p>
        Si votre situation personnelle le permet, et si mes articles vous ont
        aidé, pensez à donner à cette association (même 1€).
      </p>

      <DonateButton
        id="donate-button"
        target="_blank"
        rel="noreferrer"
        href="https://don.fondation-abbe-pierre.fr/"
      >
        Donner maintenant !
      </DonateButton>

      <p>
        Enfin, je vous invite à écouter l'appel de l'Abbé Pierre du 1er février
        1954 qui décrit si bien l'action et la nécessité de cette fondation.
      </p>

      <blockquote>
        "La maladie la plus constante et la plus mortelle, mais aussi la plus
        méconnue dans toute société, est l'indifférence."
      </blockquote>

      <div
        style={{ position: 'relative', height: 0, 'padding-bottom': '56.25%' }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/qVyspn7nH1o"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '0',
          }}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Fundation
