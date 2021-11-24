import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import { Bio } from '../components/bio/bio.component'
import { Layout } from '../components/layout.component'
import { rhythm } from '../utils/typography'
import { Footer } from '../components/footer/footer.component'
import { ListMarkup } from '../components/markup/list.markup'
import { Foundation } from '../components/foundation/foundation.component'
import { OtherLanguage } from '../components/lang/otherLanguage.component'
import { List, ListItem } from '../components/list.component'

const BlogIndex = (props) => {
  const config = get(props, 'data.config')
  const posts = get(props, 'data.allMarkdownRemark.edges')
  const siteTitle = get(config, 'frontmatter.title')
  const description = get(config, 'frontmatter.description')
  const bio = get(config, 'html')
  const lang = props.pageContext.language

  return (
    <Layout location={props.location} config={config}>
      <Helmet
        htmlAttributes={{ lang }}
        meta={[{ name: 'description', content: description }]}
        title={siteTitle}
      />

      <ListMarkup
        posts={posts}
        siteUrl={props.data.site.siteMetadata.siteUrl}
      />

      <Bio component="header">
        <div dangerouslySetInnerHTML={{ __html: bio }} />
      </Bio>

      <OtherLanguage language={lang} />

      <Foundation lang={lang} />

      <main>
        <List>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <ListItem>
                <article key={node.fields.slug}>
                  <h2
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h2>
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
                    {(node.frontmatter.tags || []).map((tag) => (
                      <Link
                        style={{ marginRight: '0.5rem' }}
                        key={tag}
                        to={`/${props.pageContext.language}/${tag}`}
                        data-testid="tag"
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
                </article>
              </ListItem>
            )
          })}
        </List>
      </main>
      <Footer />
    </Layout>
  )
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
