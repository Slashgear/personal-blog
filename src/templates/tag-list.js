import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash-es/get'
import { Link, graphql } from 'gatsby'

import { Layout } from '../components/layout.component'
import { rhythm } from '../utils/typography'
import { Footer } from '../components/footer/footer.component'
import { ListMarkup } from '../components/markup/list.markup'
import lang from '../components/lang/lang.json'
import { List, ListItem } from '../components/list.component'
import { PageTitle } from '../components/pageTitle.component'

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
      lang={pageContext.language}
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
        title={`${
          pageContext.tag.charAt(0).toUpperCase() + pageContext.tag.slice(1)
        } ${lang[pageContext.language].tagList.title}`}
      />
      <ListMarkup posts={posts} siteUrl={data.site.siteMetadata.siteUrl} />
      <main>
        <PageTitle>#{pageContext.tag}</PageTitle>
        <List>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <ListItem key={node.fields.slug}>
                <article>
                  <h2
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h2>
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
                        to={`/${pageContext.language}/${tag}`}
                      >
                        #{tag}
                      </Link>
                    ))}
                  </span>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
          }
        }
      }
    }
  }
`
