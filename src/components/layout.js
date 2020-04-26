import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'
import { SwitchTheme } from './switchTheme'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Container = ({ children }) => (
  <Wrapper>
    {children}
    <SwitchTheme />
  </Wrapper>
)

export const Layout = ({ location, config, children }) => {
  let header

  if (`${__PATH_PREFIX__}${config.fields.slug}` === location.pathname) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
          color: 'var(--header)',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
          }}
          to={config.fields.slug}
        >
          {config.frontmatter.title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          marginBottom: rhythm(-1),
          color: 'var(--header)',
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {config.frontmatter.title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Container>{header}</Container>
      {children}
    </div>
  )
}
