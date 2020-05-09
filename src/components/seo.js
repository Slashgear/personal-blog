/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLanguage } from './useLanguage'

const SEO = ({ description, lang, meta, title, image, translations, slug }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
          }
        }
      }
    `
  )
  const langs = useLanguage()
  const slugByLang = langs.allMarkdownRemark.edges.reduce(
    (accumulator, { node }) => {
      accumulator[node.frontmatter.language] = node.fields.slug
      return accumulator
    },
    {}
  )

  const metaDescription = description || site.siteMetadata.description
  let imageTags = []
  let translationTags = []

  if (image) {
    imageTags = [
      {
        property: 'og:image',
        content: site.siteMetadata.siteUrl + image.src,
      },
      {
        name: 'twitter:image',
        content: site.siteMetadata.siteUrl + image.src,
      },
    ]
  }

  if (translations) {
    for (let i = 0; i < translations.length; i += 2) {
      translationTags.push({
        rel: 'alternate',
        hreflang: translations[i],
        href: `${slugByLang[translations[i]]}${translations[i + 1]}`,
      })
    }
    translationTags.push({
      rel: 'alternate',
      hreflang: lang,
      href: `${slug}`,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      link={translationTags}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:locale',
          content: lang,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...imageTags,
        {
          name: 'google-site-verification',
          content: 'h1uQ_z8fdlLI60AmxP8vjy1H-bKSDlv0n5XolWfeDIo',
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
}

export default SEO
