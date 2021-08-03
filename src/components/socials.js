import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`

const SOCIAL_LINKS = {
  Github: 'https://github.com/Slashgear',
  Twitter: 'https://twitter.com/Slashgear_',
  LinkedIn: 'https://www.linkedin.com/in/antoine-caron-7089788a',
  DevTo: 'https://dev.to/slashgear_',
  Medium: 'https://medium.com/@Slashgear_',
}

export const Socials = () => (
  <Footer>
    <div>
      {Object.keys(SOCIAL_LINKS)
        .map((key) => (
          <a key={key} href={SOCIAL_LINKS[key]}>
            {key}
          </a>
        ))
        .reduce((prev, curr) => [prev, ' • ', curr])}
    </div>

    <div>
      <Link to="/rss.xml">RSS</Link>
    </div>
  </Footer>
)
