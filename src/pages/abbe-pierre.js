import { Helmet } from 'react-helmet'
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'
import coverImage from '../assets/abbe-pierre.jpg'
import { rhythm } from '../utils/typography'
import { Hero } from '../components/hero.component'

const title = 'Support the Abbé Pierre Foundation'
const description =
  'Support the association if the content of this blog has helped you! Help them to act!'

const DonateButton = styled(OutboundLink)`
  display: block;
  margin: 2rem auto;
  width: fit-content;
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  background: #ed6746;
  box-shadow: none;
`

const Cover = styled(Hero)`
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
      <Link to="/">Back to blog</Link>

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
            hreflang: 'fr',
            href: '/fr/abbe-pierre/',
          },
        ]}
        meta={[
          {
            property: 'og:site_name',
            content: 'Antoine Caron',
          },
          {
            name: 'description',
            content: description,
          },
          {
            property: 'og:title',
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
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:locale',
            content: 'en_US',
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
          {
            property: 'fb:app_id',
            content: '235346886871248',
          },
        ]}
      />
      <h1 style={{ color: 'var(--header)' }}>
        Support the Abbé Pierre Foundation
      </h1>

      <Cover
        loading="lazy"
        fadeIn
        fluid={img.childImageSharp.fluid}
        alt="Foundation image"
      />

      <blockquote>"We are all men of one and the same Earth."</blockquote>

      <p>
        I have been a regular supporter of the{' '}
        <OutboundLink
          target="_blank"
          rel="noreferrer"
          href="https://www.fondation-abbe-pierre.fr/"
        >
          Abbé Pierre Foundation
        </OutboundLink>{' '}
        for several years now, which fights in France (and in many other
        countries) to defend the dignity of all.
      </p>

      <p>
        Taking advantage of a growing audience and refusing to add publicity, I
        wanted to invite you to support this association whose actions are more
        than necessary unfortunately.
      </p>

      <p>
        While{' '}
        <a
          href="https://www.youtube.com/watch?v=9X0P4wOiddY"
          target="_blank"
          rel="noreferrer"
        >
          politicians make false promises
        </a>{' '}
        by letting families survive in the street every winter,{' '}
        <OutboundLink
          target="_blank"
          rel="noreferrer"
          href="https://www.fondation-abbe-pierre.fr/"
        >
          the Fondation Abbé Pierre
        </OutboundLink>
        , through its actions, is working to welcome and help.
      </p>

      <p>
        If your personal situation allows it, and if my articles have helped
        you, please consider giving to this association (even 1€).
      </p>

      <DonateButton
        id="donate-button"
        target="_blank"
        rel="noreferrer"
        href="https://don.fondation-abbe-pierre.fr/"
      >
        Donate now !
      </DonateButton>

      <p>
        Finally, I invite you to listen to Abbé Pierre's appeal of February 1,
        1954 which describes so well the action and the necessity of this
        foundation.
      </p>

      <blockquote>
        "The most constant and deadly disease, but also the most misunderstood
        in any society, is indifference."
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
        />
      </div>
    </div>
  )
}

export default Fundation
