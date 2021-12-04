import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { Layout } from '../components/layout.component'
import { PageTitle } from '../components/pageTitle.component'

const title = 'Friends you should follow'
const description =
  'List of my friends I worked with and you should definitely follow'

const Friends = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
} 
`
const Friend = styled.article`
  header {
    margin-bottom: 0.7rem;
  }
  img {
    width: 100%;
    border-radius: 0.75rem;
    box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25);
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
      <PageTitle style={{ color: 'var(--header)' }}>List of friends</PageTitle>

      <p>
        Here is an uncomplete and unordered list of my web friends that you
        should follow. I had the chance to work with them on different projects.
        They support my humor, so they are wonderful people.
      </p>

      <Friends>
        {friends.map(({ node }) => (
          <Friend className="friend">
            <a key={node.id} href={node.site}>
              <header>{node.name}</header>
            </a>
            <img loading="lazy" src={node.image} alt={`${node.name} profile`} />
          </Friend>
        ))}
      </Friends>
    </Layout>
  )
}

export default FriendsYouShouldFollow
