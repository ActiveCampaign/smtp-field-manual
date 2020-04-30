import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Search from '../components/search'
import ProviderList from '../components/providerList'
import SpamFilterList from '../components/spamFilterList'
import CodeList from '../components/codeList'
import DividerGlitch from '../components/dividerGlitch'
import { algoliaIndices } from '../utils/algoliaIndices'

const IndexPage = () => {
  return (
    <Layout hideSearch={true}>
      <SEO description='A collection of raw SMTP error responses from major email service providers and spam filters.' />

      <div className='hero'>
        <div className='hero_container'>
          <h1 className='hero_title'>
            A collection of raw SMTP errors spotted in the wild
          </h1>
          <p className='hero_description'>
            Find a specific SMTP code or email provider
          </p>
          <div className='hero_search'>
            <Search indices={algoliaIndices} />
          </div>
        </div>
      </div>
      <DividerGlitch updateOnScroll={true} />

      <div className='container-index'>

        <section className='list-section u-push-top'>
          <div className='list-section_title'>
            <h2>What is this?</h2>
          </div>
          <div className='list-section_content'>
            <p>
              The SMTP Field Manual is a collection of raw SMTP error responses
              from major email service providers and spam filter services. The
              data is open source so anyone make contributions. Even you! See
              something interesting from an email service provider or simply
              have a suggestion? <Link to='/contribute'>Let us know</Link>.
            </p>
            <p>
              <Link to='/why'>Why we built this &rarr;</Link>
            </p>
          </div>
        </section>

        <div className='divider'></div>

        <div id='codes'>
          <CodeList />
        </div>

        <div className='divider'></div>

        <div id='providers'>
          <ProviderList />
        </div>

        <div className='divider'></div>

        <div id='spamfilters'>
          <SpamFilterList />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
