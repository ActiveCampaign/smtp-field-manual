import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProviderList from '../components/providerList'
import CodeList from '../components/CodeList'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Page not found' />

    <div className='container' css={'margin-top: 50px;'}>
      <h2>
        ಥ_ಥ <br></br>This page has gone missing.
      </h2>
      <p>
        Arrive from a broken link?{' '}
        <a
          href='https://github.com/wildbit/smtp-field-manual/issues/new'
          target='_blank'
          rel='noreferrer noopener'
        >
          Let us know
        </a>
        .
      </p>

      <CodeList />
      <ProviderList />
    </div>
  </Layout>
)

export default NotFoundPage
