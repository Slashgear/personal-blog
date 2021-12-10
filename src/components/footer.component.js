import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import map from 'lodash-es/map'

import { MaxWidthWrapper } from './maxWidthWrapper'

const FooterWrapper = styled.footer`
  color: var(--header);

  @media print {
    display: none;
  }
`

const Nav = styled.nav`
  flex: 0 1;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 20px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;

    ${Nav} {
      flex-basis: 300px;
    }
  }
`

const Heading = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1rem;
  margin-top: 0;
`

const Header = styled(Heading)`
  margin-left: auto;
  width: max-content;
`

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  font-size: 0.75rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: block;
`
const SOCIAL_LINKS = {
  Github: 'https://github.com/Slashgear',
  Twitter: 'https://twitter.com/Slashgear_',
  LinkedIn: 'https://www.linkedin.com/in/antoine-caron-7089788a',
  DevTo: 'https://dev.to/slashgear_',
  Medium: 'https://medium.com/@Slashgear_',
  HackerNoon: 'https://hackernoon.com/u/antoinecaron',
  RSS: '/rss.xml',
}

const i18n = {
  en: {
    heading: 'Made with love by myslelf with Gatsby',
    categories: {
      social: 'Socials',
      links: 'Links',
    },
    links: {
      '/pictures': 'Best shots/pictures',
      '/conferences': 'Conferences',
      '/friends-you-should-follow': 'Friends',
      '/abbe-pierre': 'Foundation',
      '/resume': 'Resume',
    },
  },
  fr: {
    heading: 'Fait par moi-même avec amour',
    categories: {
      social: 'Réseaux sociaux',
      links: 'Lien utiles',
    },
    links: {
      '/pictures': 'Mes meilleurs photos',
      '/conferences': 'Conférences',
      '/friends-you-should-follow': 'Amis que vous devriez suivre',
      '/abbe-pierre': 'Asso que je soutiens',
      '/resume': 'CV',
    },
  },
}

export const Footer = ({ className, lang = 'en' }) => (
  <MaxWidthWrapper>
    <FooterWrapper className={className}>
      <Flex>
        <Nav>
          <Heading>{i18n[lang].categories.social}</Heading>
          <LinkList>
            {Object.keys(SOCIAL_LINKS).map((key) => (
              <ListItem key={key}>
                <a href={SOCIAL_LINKS[key]}>{key}</a>
              </ListItem>
            ))}
          </LinkList>
        </Nav>

        <Nav>
          <Heading>{i18n[lang].categories.links}</Heading>
          <LinkList>
            {map(i18n[lang].links, (text, link) => (
              <ListItem key={link}>
                <Link to={link}>{text}</Link>
              </ListItem>
            ))}
          </LinkList>
        </Nav>
      </Flex>
      <Header>{i18n[lang].heading}</Header>
    </FooterWrapper>
  </MaxWidthWrapper>
)
