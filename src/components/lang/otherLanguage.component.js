import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const buttonListByLang = [
  {
    code: 'fr',
    title: 'Articles en Français',
    path: '/fr/',
  },
  {
    code: 'en',
    title: 'Articles in English',
    path: '/',
  },
]

const Wrapper = styled.div`
  display: flex;
  margin-right: auto;
  margin-bottom: 2.5rem;
`

const LinkAsButton = styled.a`
  display: block;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  background-color: #7e40c4;
  border-radius: 4px;
  box-shadow: none;
`

export const OtherLanguage = ({ language = 'fr' }) => {
  const buttons = buttonListByLang.filter(({ code }) => code !== language)

  return (
    <Wrapper>
      {buttons.map((button) => (
        <LinkAsButton
          as={Link}
          key={button.code}
          to={button.path}
          hrefLang={button.code}
        >
          {button.title}
        </LinkAsButton>
      ))}
    </Wrapper>
  )
}
