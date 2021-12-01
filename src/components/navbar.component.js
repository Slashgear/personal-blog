import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { MaxWidthWrapper } from './maxWidthWrapper'
import { ThemeSwitcher } from './themeSwitcher/themeSwitcher.component'
import { Switcher } from './themeSwitcher/styles/switcher.component'

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg);
  height: 60px;

  ${Switcher} {
    margin-left: auto;
  }
`

const Brand = styled.div`
  font-weight: 800;
  font-size: ${rhythm(1.1)};
  color: var(--header);
  padding: 0 10px;
`

const Nav = styled.nav``

const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  display: block;
  margin: 0;
  padding: 0 ${rhythm(0.25)};
`

export const Navbar = () => (
  <Wrapper as="header">
    <Brand>Antoine Caron</Brand>
    <Nav>
      <List>
        <NavItem>
          <Link to="/">Latest</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Tags</Link>
        </NavItem>
        <NavItem>
          <Link to="/resume">Resume</Link>
        </NavItem>
      </List>
    </Nav>
    <ThemeSwitcher />
  </Wrapper>
)
