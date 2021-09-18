import React from 'react'
import { rhythm } from '../utils/typography'
import { Helmet } from 'react-helmet/es/Helmet'
import { graphql, Link, useStaticQuery } from 'gatsby'
import coverImage from '../assets/conferences/conference.jpg'
import styled from 'styled-components'
import Img from 'gatsby-image'

const title = `Conferences`
const description = `You can find here all the conferences I gave to different events.`

const Cover = styled(Img)`
  margin-bottom: 1rem;
`

const Conferences = () => {
  const {
    site,
    img,
    allConferencesJson: { edges: conferences },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      img: file(
        relativePath: { eq: "conferences/conference.jpg" }
        sourceInstanceName: { eq: "static_images" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      allConferencesJson(sort: { fields: event___date, order: DESC }) {
        edges {
          node {
            id
            title
            speakers {
              name
              site
            }
            lang
            link
            iframe
            event {
              date
              name
              site
            }
          }
        }
      }
    }
  `)
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
            property: 'og:image',
            content: site.siteMetadata.siteUrl + coverImage,
          },
          {
            name: 'twitter:image',
            content: site.siteMetadata.siteUrl + coverImage,
          },
          {
            property: `og:title`,
            content: title,
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
      <h1 style={{ color: 'var(--header)' }}>Conferences</h1>

      <Cover
        loading="lazy"
        fadeIn
        fluid={img.childImageSharp.fluid}
        alt="Conference room photography"
      />

      {conferences.map((conference) => (
        <article key={conference.node.id} className="conference">
          <h2>
            <a href={conference.node.link}>{conference.node.title}</a>
            <a href={conference.node.event.site}>
              {' '}
              - {conference.node.event.name}
            </a>
          </h2>

          <p>
            {new Date(conference.node.event.date).toLocaleDateString()}
            {conference.node.speakers ? ' with the help of ' : null}
            {conference.node.speakers
              ? conference.node.speakers.map((speaker) => (
                  <a href={speaker.site}>{speaker.name}</a>
                ))
              : null}
          </p>
          {conference.node.iframe ? (
            <div
              dangerouslySetInnerHTML={{ __html: conference.node.iframe }}
            ></div>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export default Conferences
