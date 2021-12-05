import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import { Bio } from '../components/bio/bio.component'
import { Layout } from '../components/layout.component'
import { rhythm, scale } from '../utils/typography'
import { TableOfContents } from '../components/tableOfContents.component'
import GlobalMarkup from '../components/markup/global.markup'
import { AvailableLanguages } from '../components/lang/availableLanguages.component'
import { EditOnGithubComponent } from '../components/editOnGithub.component'
import { PostMarkup } from '../components/markup/post.markup'
import { Foundation } from '../components/foundation/foundation.component'
import { Footer } from '../components/footer/footer.component'
import { List, ListItem } from '../components/list.component'
import { Hero } from '../components/hero.component'
import { PageTitle } from '../components/pageTitle.component'

const PostContent = styled.main`
  margin-top: 2rem;
`

const RelatedPost = styled(ListItem)`
  margin-left: 1rem;
`

const SocialFooter = styled(Footer)`
  margin: 3rem;
`

const Main = styled.main`
  display: flex;
`

export default function BlogPostTemplate({
  data,
  pageContext: { slug, language },
  location,
}) {
  const post = data.markdownRemark
  const siteBio = get(data, 'config.html')

  return (
    <Layout
      location={location}
      config={data.config}
      translations={post.frontmatter.translations}
      showHeader={false}
      lang={language}
    >
      <GlobalMarkup
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

      {post.frontmatter.hero && (
        <Hero
          fluid={post.frontmatter.hero.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
      )}

      <PageTitle style={{ color: 'var(--header)' }}>{post.frontmatter.title}</PageTitle>

      <div style={{
          ...scale(-1 / 5),
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}>
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

      <Main>
        <div style={{ flex: '3', minWidth: '70vw'}}>
          <AvailableLanguages
            language={language}
            translations={post.frontmatter.translations}
          />
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <PostMarkup
            post={post}
            slug={slug}
            siteUrl={data.site.siteMetadata.siteUrl}
          />
          <EditOnGithubComponent slug={slug} />
        </div>
        {post.headings.length > 1 && (
          <TableOfContents tableOfContents={post.tableOfContents} />
        )}
      </Main>

      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      <Bio>
        <div dangerouslySetInnerHTML={{ __html: siteBio }} />
      </Bio>
      <Foundation lang={post.frontmatter.language} />

      {data.relatedPosts.edges.length ? (
        <aside>
          <header>
            <h2>Related posts:</h2>
          </header>
          <List>
            {data.relatedPosts.edges.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <RelatedPost data-testid="related-post" key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <span>
                    <time dateTime={node.frontmatter.dateJson}>
                      {node.frontmatter.date}
                    </time>
                  </span>
                  <span style={{ margin: '0 1rem' }}>
                    <span role="img" aria-label="Time to read">
                      🕐
                    </span>
                    {node.timeToRead} min
                  </span>
                  <span>
                    {(node.frontmatter.tags || []).map((tag) => (
                      <Link
                        style={{ marginRight: '0.5rem' }}
                        key={tag}
                        to={`/${language}/${tag}`}
                      >
                        #{tag}
                      </Link>
                    ))}
                  </span>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </RelatedPost>
              )
            })}
          </List>
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
            fluid(maxWidth: 600) {
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
