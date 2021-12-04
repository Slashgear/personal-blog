import React from 'react'
import { Helmet } from 'react-helmet/es/Helmet'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import coverImage from '../assets/conferences/conference.jpg'
import { Hero } from '../components/hero.component'
import { Layout } from '../components/layout.component'
import { PageTitle } from '../components/pageTitle.component'

const title = 'Conferences'
const description =
  'You can find here all the conferences I gave to different events.'

const Cover = styled(Hero)`
  margin-bottom: 1rem;
  max-height: 300px;
`

const ConferenceImage = styled(Hero)`
  height: auto;
  max-width: 320px;
`

const Conferences = () => {
  const {
    site,
    img,
    conferenceImg,
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
      conferenceImg: allFile(
        filter: { relativeDirectory: { in: "conferences" } }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 320) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
            name
          }
        }
      }
      allConferencesJson {
        edges {
          node {
            id
            title
            imageName
            description
            events {
              name
              date
              site
              link
              video
            }
            cospeakers {
              name
              site
            }
            lang
          }
        }
      }
    }
  `)
  return (
    <Layout>
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
            name: 'description',
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
            property: 'og:title',
            content: title,
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

      <Cover
        loading="lazy"
        fadeIn
        fluid={img.childImageSharp.fluid}
        alt="Conference room photography"
      />

      <PageTitle style={{ color: 'var(--header)' }}>Conferences</PageTitle>

      {conferences.map((conference) => (
        <article key={conference.node.id} className="conference">
          <h2>{conference.node.title}</h2>

          <p>{conference.node.description}</p>

          {conference.node.cospeakers ? (
            <p>
              With co-speaker help of{' '}
              {conference.node.cospeakers.map((speaker) => (
                <a href={speaker.site}>{speaker.name}</a>
              ))}
            </p>
          ) : null}

          <ConferenceImage
            loading="lazy"
            fadeIn
            fixed={
              conferenceImg.edges.find(
                ({ node }) => node.name === conference.node.imageName
              ).node.childImageSharp.fixed
            }
            alt={conference.node.title}
          />

          <ul>
            {conference.node.events.map((event) => (
              <li>
                <a href={event.link}>
                  <h3>
                    {event.name} on {new Date(event.date).toLocaleDateString()}
                  </h3>
                </a>

                {event.video ? <a href={event.video}>Video recording</a> : null}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Layout>
  )
}

export default Conferences
