import React from 'react'
import { orderBy } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'
import DividerGlitch from '../components/dividerGlitch'

export default ({ pageContext: { data } }) => {
  const { name, codes, otherProviders } = data
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

          <ResponseJump
            list={codesSorted}
            identifierKey='reply'
            identifierPrefix='code_'
            labelKey='reply'
          />
        </div>
      </div>
      <DividerGlitch updateOnScroll={true} />

      <div className='container push-top'>
        <ResponseList
          list={codesSorted}
          titleKey='reply'
          titleLabelKey='reply'
          titleSlugPrefix='/code'
          identifierPrefix='code_'
        />

        <div className='push-top'>
          <h3>Other email providers</h3>
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
