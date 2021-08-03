import React from 'react'

// Import typefaces
import 'typeface-montserrat'

import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  margin-bottom: 2.5rem;

  * > div {
    margin-left: 0.5rem;
  }
`

const Image = styled(Img)`
  float: left;
  flex-shrink: 0;
`

export const Bio = ({ children }) => {
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
    <Wrapper>
      <Image
        fixed={picture.img.childImageSharp.fixed}
        style={{ margin: '0 1.2rem 0 0' }}
      />
      {children}
    </Wrapper>
  )
}
