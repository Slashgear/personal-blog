import React from 'react'
import { Link } from 'gatsby'
import notFound from '../assets/chou-blanc.gif'
import { Layout } from '../components/layout.component'
import { PageTitle } from '../components/pageTitle.component'

const NotFoundPage = () => (
  <Layout>
    <PageTitle>NOT FOUND</PageTitle>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      <Link to="/">Back to the website</Link>
    </p>
    <img alt="chou blanc" src={notFound} />
  </Layout>
)

export default NotFoundPage
