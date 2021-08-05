import React from 'react'

export const JsonLd = ({ content }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(content) }}
  />
)
