import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const TagList = styled.aside`
  display: none;
  margin-top: 1rem;
  padding: 24px;
  flex: 1 0 30%;
  
  @media screen and (min-width: 768px) {
    display: block;
  }
`
const Heading = styled.h2`
  margin-top: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;
  column-gap: 8px;
`

const Tag = styled(Link)`
  padding: 0.1rem 0.3rem;
  background: var(--bg-secondary);
  border-radius: 4px;
  font-weight: 600;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  gap: 8px;
`

const TOP_TAGS = ['javascript', 'webpack', 'github', 'react', 'bundler', 'action', 'git', 'CI'];

const i18n = {
  fr: {
    heading: 'Catégories'
  },
  en: {
    heading: 'Top categories'
  }
}

export const TopTag = ({ lang = 'en' }) => <TagList>
    <Heading>{i18n[lang].heading}</Heading>

    <Flex>
      {TOP_TAGS.map(tag => <Tag key={tag} to={`/${lang}/${tag}`}>#{tag}</Tag>)}
    </Flex>
  </TagList>