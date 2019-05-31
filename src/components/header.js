import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "portugal.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header
        style={{
          position: "relative",
          height: '30vh',
          marginBottom: '1.4rem'
        }}
      >
          <div
              style={{
                  position: 'absolute',
                  bottom: '1rem',
                  maxWidth: 960,
                  padding: `1.45rem 1.0875rem`,
                  zIndex:1
              }}
          >
              <h1 style={{ margin: 0 }}>
                  <Link
                      to="/"
                      style={{
                          color: `white`,
                          textDecoration: `none`,
                      }}
                  >
                      {siteTitle}
                  </Link>
              </h1>
          </div>
        <img
          alt="hero"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
              zIndex:0
          }}
          {...data.placeholderImage.childImageSharp.fluid}
          sizes="100vw"
        />

      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
