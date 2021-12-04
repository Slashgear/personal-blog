import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { useLanguage } from './useLanguage'

const Container = styled.div`
  padding: 1rem;
  margin: 0.5rem 0;
  font-weight: bold;
  background-color: hsla(268, 53%, 51%, 30%);
  border-radius: 0.75rem;
  border: solid hsla(268, 53%, 51%) 1px;
`

export const AvailableLanguages = ({ language, translations }) => {
  const data = useLanguage()
  const option = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.language === language
  ).node.frontmatter.language_option

  return translations ? (
    <Container id="lang-switcher">
      {option}:{' '}
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.language === language) {
          return null
        }
        let translationLink = node.fields.slug
        if (translations) {
          const translationIndex = translations.findIndex(
            (v) => v === node.frontmatter.language
          )
          if (translationIndex !== -1) {
            translationLink += translations[translationIndex + 1]
          }
        }
        return (
          <Link
            key={translationLink}
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
            }}
            to={translationLink}
            hrefLang={node.frontmatter.language}
          >
            {node.frontmatter.language_label}
          </Link>
        )
      })}
    </Container>
  ) : null
}
