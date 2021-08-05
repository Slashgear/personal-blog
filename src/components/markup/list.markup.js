import React from 'react'
import { JsonLd } from './jsonLd'

export const ListMarkup = ({ posts = [], siteUrl }) => (
  <JsonLd
    content={{
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}${post.node.fields.slug}`,
      })),
    }}
  />
)
