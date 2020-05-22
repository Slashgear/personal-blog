import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Bio from '../components/bio'
import { Layout } from '../components/layout'
import { rhythm } from '../utils/typography'
import { Socials } from '../components/socials'
import { ListItemMarkup } from '../components/listItemMarkup'

class BlogIndex extends React.Component {
  render() {
    const config = get(this, 'props.data.config')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const siteTitle = get(config, 'frontmatter.title')
    const description = get(config, 'frontmatter.description')
    const bio = get(config, 'html')

    return (
      <Layout location={this.props.location} config={config}>
        <Helmet
          htmlAttributes={{ lang: this.props.pageContext.language }}
          meta={[{ name: 'description', content: description }]}
          title={siteTitle}
        />
        <ListItemMarkup
          posts={posts}
          siteUrl={this.props.data.site.siteMetadata.siteUrl}
        />
        <Bio>
          <div dangerouslySetInnerHTML={{ __html: bio }} />
        </Bio>
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
                    to={`/${this.props.pageContext.language}/${tag}`}
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
}

export default BlogIndex

export const blogIndexFragment = graphql`
  query BlogPost($language: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    config: markdownRemark(
      frontmatter: { language: { eq: $language }, type: { eq: "language" } }
    ) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        language
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { language: { eq: $language }, type: { eq: null } }
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
