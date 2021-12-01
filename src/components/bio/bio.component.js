import React from 'react'

// Import typefaces
import 'typeface-montserrat'

import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  min-height: 150px;
  margin-bottom: 2.5rem;

  * > div {
    margin-left: 0.5rem;
  }
`

const Image = styled(Img)`
  float: left;
  flex-shrink: 0;
  border-radius: 50%;
  box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25);
`

export const Bio = ({ children, component = 'div' }) => {
  const picture = useStaticQuery(graphql`
    {
      img: file(
        relativePath: { eq: "picture_of_me.jpg" }
        sourceInstanceName: { eq: "static_images" }
      ) {
        childImageSharp {
          fixed(quality: 60, height: 150, width: 150, cropFocus: NORTH) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="bio" as={component}>
      <Image
        fixed={picture.img.childImageSharp.fixed}
        style={{ margin: '0 1.2rem 0 0' }}
      />
      {children}
    </Wrapper>
  )
}
