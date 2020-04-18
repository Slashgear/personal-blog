import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

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
              <small>{node.frontmatter.date}</small>
              <small style={{ margin: '0 1rem' }}>
                <span role="img" aria-label="Time to read">
                  🕐
                </span>
                {node.timeToRead} min
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              {node.frontmatter.hero && (
                <picture>
                  <source
                    srcSet={
                      node.frontmatter.hero.childImageSharp.fluid.srcSetWebp
                    }
                    sizes="30vw"
                    type="image/webp"
                  />
                  <source
                    srcSet={node.frontmatter.hero.childImageSharp.fluid.srcSet}
                    sizes="30vw"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    className="article-item__picture"
                    src={node.frontmatter.hero.childImageSharp.fluid.src}
                    alt={node.frontmatter.title}
                    width="100%"
                  />
                </picture>
              )}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const blogIndexFragment = graphql`
  query BlogPost($language: String!) {
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
            description
            hero {
              childImageSharp {
                fluid(maxWidth: 600) {
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
