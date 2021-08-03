import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Bio } from '../components/bio.component'
import { Layout } from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import { TableOfContents } from '../components/tableOfContents'
import SEO from '../components/seo'
import { AvailableLanguages } from '../components/availableLanguages'
import { EditOnGithub } from '../components/editOnGithub'
import { BlogPostMarkup } from '../components/blogPostMarkup'
import { Fundation } from '../components/fundation.component'

const PostContent = styled.div`
  margin-top: 2rem;
`

const RelatedPost = styled.div`
  margin-left: 1rem;
`

export default function BlogPostTemplate({
  data,
  pageContext: { previous, next, slug, language },
  location,
}) {
  const post = data.markdownRemark
  const siteTitle = get(data, `config.frontmatter.title`)
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
        tags={post.frontmatter.tags}
      />
      <h1 style={{ color: 'var(--header)' }}>{post.frontmatter.title}</h1>
      {post.headings.length > 1 && (
        <TableOfContents tableOfContents={post.tableOfContents} />
      )}
      <div
        style={{
          ...scale(-1 / 5),
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        <time dateTime={post.frontmatter.dateJson}>
          {post.frontmatter.date}
        </time>
        <small style={{ marginLeft: '1rem' }}>
          {(post.frontmatter.tags || []).map((tag) => (
            <Link
              style={{ marginRight: '0.5rem' }}
              key={tag}
              to={`/${language}/${tag}`}
            >
              #{tag}
            </Link>
          ))}
        </small>
      </div>

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

      <Fundation lang={post.frontmatter.language} />

      {data.relatedPosts.edges.length ? (
        <aside>
          <header>
            <h2>Related posts:</h2>
          </header>
          {data.relatedPosts.edges.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <RelatedPost key={node.fields.slug}>
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
                  {(node.frontmatter.tags || []).map((tag) => (
                    <Link
                      style={{ marginRight: '0.5rem' }}
                      key={tag}
                      to={`/${language}/${tag}`}
                    >
                      #{tag}
                    </Link>
                  ))}
                </small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </RelatedPost>
            )
          })}
        </aside>
      ) : null}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String!, $tags: [String]) {
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
        tags
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
    relatedPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: {
          language: { eq: $language }
          type: { eq: null }
          tags: { in: $tags }
        }
      }
      limit: 4
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
          }
        }
      }
    }
  }
`
