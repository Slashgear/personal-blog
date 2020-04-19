import { graphql, useStaticQuery } from 'gatsby'

export const useLanguage = () =>
  useStaticQuery(graphql`
    query LanguageSwitcherQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "language" } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              language
              language_label
            }
          }
        }
      }
    }
  `)
