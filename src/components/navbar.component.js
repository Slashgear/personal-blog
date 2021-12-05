import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { MaxWidthWrapper } from './maxWidthWrapper'
import { ThemeSwitcher } from './themeSwitcher/themeSwitcher.component'
import { Switcher } from './themeSwitcher/styles/switcher.component'
import { Rss } from './rss.component'

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
  
  @media print {
   display: none;
  }
`

const Brand = styled.div`
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--header);
  padding: 0 10px;
  box-shadow: none;

  @media screen and (min-width: 375px) {
    font-size: 1.125rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.625rem;
  }
`

const Nav = styled.nav``

const List = styled.ul`
  display: none;
  align-items: center;
  margin: 0;
  padding: 0;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

const NavItem = styled.li`
  display: block;
  margin: 0;
  padding: 0 ${rhythm(0.25)};
  font-weight: 600;
`

const ExtendLink = styled(Link).attrs({
  activeClassName: 'active'
})`
  text-decoration: none;
  box-shadow: none;

  &.active {
    box-shadow:0 1px 0 0 currentColor;
  }
`

const RssLink = styled(ExtendLink)`
  height: 24px;
  color: var(--header);
  opacity: 0.4;
  padding: 0 20px;
  
  &:hover, &:focus {
    opacity: 1;
  }
`

const i18n = {
  en: {
    home: 'Latest post',
    resume: 'Resume',
    conference: 'Conferences',
    translation: 'FR',
    hrefLang: 'fr',
    target: '/',
    translatedTarget: '/fr'
  },
  fr: {
    home: 'Derniers articles',
    resume: 'CV',
    conference: 'Conférences',
    translation: 'EN',
    hrefLang: 'en',
    target: '/fr',
    translatedTarget: '/'
  }
}

export const Navbar = ({ lang=  'en' }) => (
  <Wrapper as="header">
    <Brand as={Link} to={i18n[lang].target}>Antoine Caron</Brand>
    <Nav>
      <List>
        <NavItem>
          <ExtendLink to={i18n[lang].target}>{i18n[lang].home}</ExtendLink>
        </NavItem>
        <NavItem>
          <ExtendLink to="/resume">{i18n[lang].resume}</ExtendLink>
        </NavItem>
        <NavItem>
          <ExtendLink to="/conferences">{i18n[lang].conference}</ExtendLink>
        </NavItem>
        <NavItem >
          <ExtendLink to={i18n[lang].translatedTarget} hrefLang={i18n[lang].hrefLang}>{i18n[lang].translation}</ExtendLink>
        </NavItem>
      </List>
    </Nav>
    <ThemeSwitcher />
    <RssLink to="/rss.xml">
      <Rss />
    </RssLink>
  </Wrapper>
)
