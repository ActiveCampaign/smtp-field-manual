import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProviderList from '../components/providerList'
import CodeList from '../components/codeList'

const NotFoundPage = () => (
  <Layout invertHeader={true}>
    <SEO title='404: Page not found' />

    <div className='container u-push-top'>
      <h1 className='u-center'>
        ಥ_ಥ
        <br />
        This page has gone missing.
      </h1>

      <div className='divider u-push-top'></div>
      <CodeList />
      <ProviderList />
    </div>
  </Layout>
)

export default NotFoundPage
