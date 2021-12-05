import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/layout.component'
import { PageTitle } from '../components/pageTitle.component'

const QUERY = graphql`
{ 
   allFile(filter: {sourceInstanceName: {eq: "pictures"}, extension: {eq: "jpg"}}) {
    edges {
      node {
        id
        name
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`

const Mansonery = styled.ul`
  list-style-type: none;
  margin: 0;
  --gap: 16px;
  column-count: 2;
  column-gap: var(--gap);
`

const MansoneryItem = styled.li`
  padding: 0;
  margin: 0;
  break-inside: avoid;
`
const Pictures = () => {
  const images = useStaticQuery(QUERY)


  return <Layout>
    <Helmet>
      <html lang="en" />
      <title>My best pictures</title>
      <meta name="description" content="Small selection of photos of landscapes and places that I am proud of and that I share with you freely." />
    </Helmet>

    <PageTitle style={{ color: 'var(--header)' }}>My best pictures</PageTitle>

    <Mansonery>
      {images.allFile.edges.map(({node}) => <MansoneryItem key={node.id}>
        <Img fluid={node.childImageSharp.fluid} style={{ marginBottom: 'var(--gap)'}} alt={node.name} loading="lazy"/>
      </MansoneryItem>)}
    </Mansonery>
  </Layout>
}

export default Pictures