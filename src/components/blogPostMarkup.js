import React from 'react'
import { JsonLd } from './jsonLd'
import profilePic from './profile-pic.jpg'

export const BlogPostMarkup = ({ post, slug, siteUrl }) => (
  <JsonLd
    content={{
      '@context': 'http://schema.org',
      '@type': 'Article',
      headline: post.frontmatter.title,
      editor: 'Antoine Caron',
      genre: 'Tech Blog',
      wordcount: post.wordCount.words,
      url: `${siteUrl}${slug}`,
      mainEntityOfPage: `${siteUrl}${slug}`,
      datePublished: post.frontmatter.dateJson,
      dateCreated: post.frontmatter.dateJson,
      dateModified: post.frontmatter.dateJson,
      description: post.frontmatter.description,
      articleBody: post.html,
      image: [
        `${siteUrl}${post.frontmatter.hero.childImageSharp.image16x9.src}`,
        `${siteUrl}${post.frontmatter.hero.childImageSharp.image4x3.src}`,
        `${siteUrl}${post.frontmatter.hero.childImageSharp.image1x1.src}`,
      ],
      keywords: post.frontmatter.tags,
      author: {
        '@type': 'Person',
        name: 'Antoine Caron',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Antoine Caron',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}${profilePic}`,
        },
      },
    }}
  />
)
