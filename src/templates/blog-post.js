import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/bio'
import { Layout } from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import { TableOfContents } from '../components/tableOfContents'
import SEO from '../components/seo'
import { AvailableLanguages } from '../components/availableLanguages'
import Img from 'gatsby-image'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, `data.config.frontmatter.title`)
    const language = get(this.props, `data.config.frontmatter.language`)
    const siteBio = get(this, 'props.data.config.html')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        config={this.props.data.config}
        translations={post.frontmatter.translations}
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          lang={post.frontmatter.lang}
          translations={post.frontmatter.translations}
          image={
            post.frontmatter.hero
              ? post.frontmatter.hero.childImageSharp.image
              : null
          }
        />
        <h1 style={{ color: 'var(--header)' }}>{post.frontmatter.title}</h1>
        {post.headings.length > 1 && (
          <TableOfContents tableOfContents={post.tableOfContents} />
        )}
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <AvailableLanguages
          language={language}
          translations={post.frontmatter.translations}
        />

        {post.frontmatter.hero && (
          <Img
            fluid={post.frontmatter.hero.childImageSharp.fluid}
            alt={post.frontmatter.title}
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio>
          <div dangerouslySetInnerHTML={{ __html: siteBio }} />
        </Bio>

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String!) {
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      headings {
        value
      }
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        translations
        description
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
`
