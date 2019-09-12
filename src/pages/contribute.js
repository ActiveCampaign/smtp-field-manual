import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContributePage = () => (
  <Layout>
    <SEO title='Contribute' />
    <h1>Contribute</h1>
    <p>Contribute to the SMTP Field Guide...</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default ContributePage
