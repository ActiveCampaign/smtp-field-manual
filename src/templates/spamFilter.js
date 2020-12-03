import React from 'react'
import { orderBy } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'
import DividerGlitch from '../components/dividerGlitch'

export default ({ pageContext: { data } }) => {
  const { name, codes, otherProviders, documentation } = data
  const codesSorted = orderBy(codes, [o => o.reply])
  const otherProvidersSorted = orderBy(otherProviders, [
    o => o.name.toLowerCase(),
  ])

  return (
    <Layout>
      <SEO title={`${name} codes`} description={`SMTP Error Codes for ${name}`} />

      <div className='masthead'>
        <div className='container'>
          <h1 className='masthead_title'>{name}</h1>

          {documentation.length > 0 && (
            <div className='jump'>
              <h4>Documentation</h4>
              <ul>
                {documentation.map(doc => (
                  <li key={doc}><a href={doc} target='_blank' rel='noopener noreferrer' className='doc-link'>{doc}</a></li>
                ))}
              </ul>
            </div>
          )}

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

        <h3 className='response-list-header'>Other spam filter services</h3>
        <div className='sub-section'>
          <ul className='columns-3 columns-diamond'>
            {otherProvidersSorted.map(provider => (
              <li key={provider.id}>
                <Link to={`/spamfilter${provider.slug}`}>{provider.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
