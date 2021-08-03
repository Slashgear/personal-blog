import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from '../components/layout'
import { rhythm } from '../utils/typography'
import { Socials } from '../components/socials'
import { ListItemMarkup } from '../components/listItemMarkup'
import lang from '../components/lang'

const TagList = ({ location, pageContext, data }) => {
  const posts = get(data, 'allMarkdownRemark.edges')

  return (
    <Layout
      location={location}
      config={{
        fields: {
          slug: pageContext.slug,
        },
        frontmatter: {
          title: `#${pageContext.tag}`,
        },
      }}
    >
      <Helmet
        htmlAttributes={{ lang: pageContext.language }}
        meta={[
          {
            name: 'description',
            content: `${lang[pageContext.language].tagList.description} ${
              pageContext.tag
            }`,
          },
        ]}
        title={`${pageContext.tag.charAt(0).toUpperCase() +
          pageContext.tag.slice(1)} ${
          lang[pageContext.language].tagList.title
        }`}
      />
      <ListItemMarkup posts={posts} siteUrl={data.site.siteMetadata.siteUrl} />
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>
              <time dateTime={node.frontmatter.dateJson}>
                {node.frontmatter.date}
              </time>
            </small>
            <small style={{ margin: '0 1rem' }}>
              <span role="img" aria-label="Time to read">
                🕐
              </span>
              {node.timeToRead} min
            </small>
            <small>
              {(node.frontmatter.tags || []).map(tag => (
                <Link
                  style={{ marginRight: '0.5rem' }}
                  key={tag}
                  to={`/${pageContext.language}/${tag}`}
                >
                  #{tag}
                </Link>
              ))}
            </small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            {node.frontmatter.hero && (
              <Img
                fluid={node.frontmatter.hero.childImageSharp.fluid}
                alt={node.frontmatter.title}
              />
            )}
          </div>
        )
      })}
      <Socials />
    </Layout>
  )
}

export default TagList

export const tagListFragment = graphql`
  query TagList($language: String!, $tag: [String]) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          language: { eq: $language }
          type: { eq: null }
          tags: { in: $tag }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            dateJson: date(formatString: "YYYY-MM-DD")
            description
            tags
            hero {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
                image: fixed(
                  fit: COVER
                  width: 1080
                  jpegProgressive: true
                  jpegQuality: 60
                  height: 1080
                ) {
                  src
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`
