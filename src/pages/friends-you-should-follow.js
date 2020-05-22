import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { Helmet } from 'react-helmet/es/Helmet'
import { graphql, Link, useStaticQuery } from 'gatsby'

const title = `Friends you should follow`
const description = `List of my friends I worked with and you should definitely follow`

const Friends = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`

const Friend = styled.article`
  header {
    margin-bottom: 0.7rem;
  }
`

const FriendsYouShouldFollow = () => {
  const {
    allFriendsJson: { edges: friends },
  } = useStaticQuery(graphql`
    {
      allFriendsJson {
        edges {
          node {
            id
            name
            image
            site
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
      <h1 style={{ color: 'var(--header)' }}>List of friends</h1>

      <p>
        Here is an uncomplete and unordered list of my web friends that you
        should follow. I had the chance to work with them on different projects.
        They support my humor, so they are wonderful people.
      </p>

      <Friends>
        {friends.map(({ node }) => (
          <Friend>
            <a key={node.id} href={node.site}>
              <header>{node.name}</header>
            </a>
            <img
              loading="lazy"
              src={node.image}
              alt={`${node.name} profile picture`}
            />
          </Friend>
        ))}
      </Friends>
    </div>
  )
}

export default FriendsYouShouldFollow
