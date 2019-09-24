import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContributePage = () => (
  <Layout invertHeader={true} hideSearch={true}>
    <SEO title='Contribute' />

    <div className='container u-push-top'>
      <h2>Contribute</h2>
      <p>Contribute to the SMTP Field Manual...</p>
    </div>
  </Layout>
)

export default ContributePage
