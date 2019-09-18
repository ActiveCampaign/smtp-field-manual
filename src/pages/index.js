import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Search from '../components/search'
import ProviderList from '../components/providerList'
import CodeList from '../components/CodeList'
import { algoliaIndices } from '../utils/algoliaIndices'

const IndexPage = () => {
  return (
    <Layout hideSearch={true}>
      <SEO title='SMTP Field Manual' />

      <div className='hero'>
        <div className='hero_container'>
          <h2 className='hero_title'>
            A collection of raw SMTP responses spotted in the wild
          </h2>
          <p className='hero_description'>
            Find a specific SMTP code or email provider
          </p>
          <div className='hero_search'>
            <Search indices={algoliaIndices} />
          </div>
          <p className='hero_postmark'>
            Brought to you by{' '}
            <a
              href='https://postmarkapp.com'
              rel='noopener noreferrer'
              target='_blank'
              className='hero_postmark-icon'
            >
              Postmark
            </a>
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='list-section'>
          <h3>SMTP Field Manual</h3>
          <p>
            The SMTP field manual is a collection of raw STMP server responses
            from major email service providers. This serves as a troubleshooting
            tool for email professionals.
          </p>
          <p>
            We’ve open sourced the SMTP Field Manual so that anyone can add or
            edit SMTP responses. See something interesting from an email service
            provider or simply have a suggestion? Let us know.
          </p>

          <p>
            <Link to={'/contribute'}>Contribute &rarr;</Link>
          </p>
        </div>
        <div id='codes'>
          <CodeList />
        </div>

        <div id='providers'>
          <ProviderList />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
