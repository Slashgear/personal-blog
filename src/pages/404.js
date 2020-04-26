import React from 'react'
import { Link } from 'gatsby'
import notFound from '../assets/chou-blanc.gif'
import { rhythm } from '../utils/typography'

const NotFoundPage = () => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'var(--textNormal)',
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }}
  >
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      <Link to="/">Back to the website</Link>
    </p>
    <img alt="chou blanc" src={notFound} />
  </div>
)

export default NotFoundPage
