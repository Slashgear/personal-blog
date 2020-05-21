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
import { BlogPostMarkup } from '../components/blogPostMarkup'

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
        type="article"
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang={post.frontmatter.language}
        translations={post.frontmatter.translations}
        image={
          post.frontmatter.hero
            ? post.frontmatter.hero.childImageSharp.image
            : null
        }
        slug={slug}
        dateJson={post.frontmatter.dateJson}
      />
      <h1 style={{ color: 'var(--header)' }}>{post.frontmatter.title}</h1>
      {post.headings.length > 1 && (
        <TableOfContents tableOfContents={post.tableOfContents} />
      )}
      <time
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
        dateTime={post.frontmatter.dateJson}
      >
        {post.frontmatter.date}
      </time>

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
      <BlogPostMarkup
        post={post}
        slug={slug}
        siteUrl={data.site.siteMetadata.siteUrl}
      />
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      headings {
        value
      }
      wordCount {
        words
      }
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dateJson: date(formatString: "YYYY-MM-DD")
        translations
        description
        language
        hero {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            image: fixed(fit: COVER, width: 1080, jpegProgressive: true) {
              src
            }
            image16x9: fixed(width: 1080, height: 608) {
              src
            }
            image4x3: fixed(
              width: 1080
              height: 810
              cropFocus: CENTER
              fit: CONTAIN
              background: "white"
            ) {
              src
            }
            image1x1: fixed(
              width: 800
              height: 800
              cropFocus: CENTER
              fit: CONTAIN
              background: "white"
            ) {
              src
            }
          }
        }
      }
    }
  }
`
