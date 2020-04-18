import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

export const Socials = () => <Footer>
  <div>
    <a href="https://github.com/Slashgear">Github</a>•<a href="https://twitter.com/Slashgear_">Twitter</a>•<a href="https://www.linkedin.com/in/antoine-caron-7089788a">Linkedin</a>
  </div>

  <div><a href="/rss.xml">RSS</a></div>
</Footer>