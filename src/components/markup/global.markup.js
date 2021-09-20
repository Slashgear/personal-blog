/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLanguage } from '../lang/useLanguage'

const langCompleteByLang = {
  fr: 'fr_FR',
  en: 'en_US',
}

const GlobalMarkup = ({
  description,
  lang,
  meta,
  title,
  image,
  translations,
  slug,
  type = 'website',
  dateJson,
  tags = [],
}) => {
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

  const metaDescription =
    `${description} ${(tags || []).join(', ')}` || site.siteMetadata.description
  let imageTags = []
  const translationTags = []
  const metaTranslationTags = []

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
      {
        property: 'og:image:alt',
        content: title,
      },
      {
        property: 'og:image:width',
        content: 1080,
      },
      {
        property: 'og:image:type',
        content: 'image/jpeg',
      },
    ]
  }

  if (type === 'article') {
    imageTags.push({
      property: 'article:author',
      content: 'Antoine Caron',
    })
    imageTags.push({
      property: 'article:section',
      content: 'Frontend Tech',
    })

    if (tags) {
      tags.forEach((tag) => {
        imageTags.push({
          property: 'article:tag',
          content: tag,
        })
      })
    }
  }

  if (translations) {
    for (let i = 0; i < translations.length; i += 2) {
      translationTags.push({
        rel: 'alternate',
        hreflang: translations[i],
        href: `${slugByLang[translations[i]]}${translations[i + 1]}`,
      })
      metaTranslationTags.push({
        property: 'og:locale:alternate',
        content: langCompleteByLang[translations[i]],
      })
    }
    translationTags.push({
      rel: 'alternate',
      hreflang: lang,
      href: `${slug}`,
    })
  }

  if (dateJson) {
    imageTags.push({
      property: 'article:published_time',
      content: dateJson,
    })
  }

  if (tags) {
    imageTags.push({
      name: 'keywords',
      content: tags,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
        prefix:
          'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#',
      }}
      head
      title={title}
      link={translationTags}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        ...metaTranslationTags,
        {
          property: 'og:site_name',
          content: 'Antoine Caron',
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:url',
          content: `${site.siteMetadata.siteUrl}${slug}`,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:locale',
          content: langCompleteByLang[lang],
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.social.twitter,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        ...imageTags,
        {
          name: 'google-site-verification',
          content: 'h1uQ_z8fdlLI60AmxP8vjy1H-bKSDlv0n5XolWfeDIo',
        },
        {
          property: 'fb:app_id',
          content: '235346886871248',
        },
      ].concat(meta)}
    />
  )
}

GlobalMarkup.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  tags: [],
}

GlobalMarkup.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default GlobalMarkup
