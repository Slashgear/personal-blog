import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

export const EditOnGithubComponent = ({ slug }) => {
  const {
    site: {
      siteMetadata: { repository },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `)

  return (
    <Wrapper>
      <a
        href={`${repository}/edit/source/src/pages${slug}index.md`}
        target="_blank"
      >
        Edit this page on Github
      </a>
    </Wrapper>
  )
}
