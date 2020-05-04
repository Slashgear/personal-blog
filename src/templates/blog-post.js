import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Bio from '../components/bio'
import { Layout } from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import { TableOfContents } from '../components/tableOfContents'
import SEO from '../components/seo'
import { AvailableLanguages } from '../components/availableLanguages'
import { EditOnGithub } from '../components/editOnGithub'

const PostContent = styled.div`
  margin-top: 2rem;
`

export default function BlogPostTemplate({
  data,
  pageContext: { previous, next, slug },
  location,
}) {
  const post = data.markdownRemark
  const siteTitle = get(data, `config.frontmatter.title`)
  const language = get(data, `config.frontmatter.language`)
  const siteBio = get(data, 'config.html')
  const siteDescription = post.excerpt

  return (
    <Layout
      location={location}
      config={data.config}
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

      <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />

      <EditOnGithub slug={slug} />

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

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String!) {
    site {
      siteMetadata {
        repository
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
            image: fixed(fit: COVER, width: 1080, jpegProgressive: true) {
              src
            }
          }
        }
      }
    }
  }
`
