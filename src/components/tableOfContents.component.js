import React from 'react'
import styled from 'styled-components'

const Aside = styled.aside`
  display: none;
  flex: 1;
  min-width: 300px;
  margin-left: 16px;
  height: fit-content;

  nav {
    margin-left: 0.5rem;
    overflow: auto;
    max-height: 80vh;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    ,wordwrap: normal;
    text-overflow: ellipsis;
  }

  li > ul {
    margin-top: 0;
    margin-left: 1rem;
  }

  a {
    color: currentColor;
    box-shadow: none;
  }

  a:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }

  @media screen and (min-width: 1024px) {
    & {
      display: block;
      position: sticky;
      top: 80px;
      font-size: 0.8rem;
    }
  }
`

const Heading = styled.header`
  margin-bottom: 0.8rem;
  font-weight: bold;
  font-size: 1.1rem;
`

export const TableOfContents = ({ tableOfContents }) => (
  <Aside id="table-of-content">
    <Heading>Table of content</Heading>
    <nav dangerouslySetInnerHTML={{ __html: tableOfContents }} />
  </Aside>
)
