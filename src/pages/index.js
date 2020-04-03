import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`posts/${node.fields.slug}`}>
                  {node.frontmatter.lang === 'en' ? '🇬🇧' : '🇫🇷' } {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              {node.frontmatter.hero && (
                <picture>
                  <source
                    srcSet={node.frontmatter.hero.childImageSharp.fluid.srcSetWebp}
                    sizes="30vw"
                    type="image/webp"
                  />
                  <source
                    srcSet={node.frontmatter.hero.childImageSharp.fluid.srcSet}
                    sizes="30vw"
                    type="image/png"
                  />
                  <img
                    className="article-item__picture"
                    src={node.frontmatter.hero.childImageSharp.fluid.src}
                    alt={title}
                    width="100%"
                  />
                </picture>
              )}
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            lang
            hero {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
          }
        }
      }
    }
  }
`
