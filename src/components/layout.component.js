import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'
import { SwitchTheme } from './themeSwitcher/switchTheme.component'

const StyledSwitchTheme = styled(SwitchTheme)``

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  ${StyledSwitchTheme} {
    margin-left: auto;
  }
`

const Container = ({ children }) => (
  <Wrapper>
    {children}
    <StyledSwitchTheme />
  </Wrapper>
)

export const Layout = ({ location, config, children, showHeader = true }) => {
  let header

  if (showHeader) {
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
        <h1
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
            to="/"
          >
            {config.frontmatter.title}
          </Link>
        </h1>
      )
    }
  }

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'var(--textNormal)',
        background: 'var(--bg)',
        transition: 'var(--bg-transition)',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Container>{header}</Container>
      {children}
    </div>
  )
}
