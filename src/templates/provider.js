import React from 'react'
import { orderBy } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'
import DividerGlitch from '../components/dividerGlitch'

export default ({ pageContext: { data } }) => {
  const { name, codes, otherProviders, vendors } = data
  const codesSorted = orderBy(codes, [o => o.reply])
  const otherProvidersSorted = orderBy(otherProviders, [
    o => o.name.toLowerCase(),
  ])

  return (
    <Layout>
      <SEO title={`${name} codes`} />
      <div className='masthead'>
        <div className='container'>
          <h2 className='masthead_title'>{name}</h2>

          <div className='jump'>
            <h4>Domain{vendors.length > 1 ? 's' : ''}</h4>
            <ul className='columns-2'>
              {vendors.map(vendor => (
                <li key={vendor}>{vendor}</li>
              ))}
            </ul>
          </div>

          <ResponseJump
            list={codesSorted}
            identifierKey='reply'
            identifierPrefix='code_'
            labelKey='reply'
          />
        </div>
      </div>
      <DividerGlitch updateOnScroll={true} />

      <div className='container u-push-top'>
        <ResponseList
          list={codesSorted}
          titleKey='reply'
          titleLabelKey='reply'
          titleSlugPrefix='/code'
          identifierPrefix='code_'
        />

        <h3 className='response-list-header'>Other email providers</h3>
        <div className='sub-section'>
          <ul className='columns-3 columns-diamond'>
            {otherProvidersSorted.map(provider => (
              <li key={provider.id}>
                <Link to={`/provider${provider.slug}`}>{provider.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
