import React from 'react'
import { Link } from 'gatsby'
import { useLanguage } from './useLanguage'

export const LanguageSwitcher = ({ language, translations }) => {
  const data = useLanguage()

  return (
    <ul style={{ listStyle: `none`, marginBottom: 0 }}>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.language == language) {
          return
        } else {
          let translationLink = node.fields.slug
          if (translations) {
            const translationIndex = translations.findIndex(
              v => v == node.frontmatter.language
            )
            if (translationIndex !== -1) {
              translationLink += translations[translationIndex + 1]
            }
          }
          return (
            <li
              key={translationLink}
              style={{ display: `inline-block`, margin: `0 1rem 0 0` }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                }}
                to={translationLink}
                hrefLang={node.frontmatter.language}
              >
                {node.frontmatter.language_label}
              </Link>
            </li>
          )
        }
      })}
    </ul>
  )
}
