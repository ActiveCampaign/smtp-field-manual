import React from 'react'
import { orderBy } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'

export default ({ pageContext: { data } }) => {
  const { name, codes, otherProviders } = data
  const otherProvidersSorted = orderBy(otherProviders, [
    o => o.name.toLowerCase(),
  ])

  return (
    <Layout>
      <SEO title={`${name} codes`} />
      <div className='masthead'>
        <div className='container'>
          <h2 className='masthead_title'>{name}!</h2>
          <p className='masthead_desc'>Such wow! So amaze!</p>

          <ResponseJump
            list={codes}
            identifierKey='reply'
            identifierPrefix='code_'
            labelKey='reply'
          />
        </div>
      </div>

      <div className='container'>
        <ResponseList
          list={codes}
          titleKey='reply'
          titleLabelKey='reply'
          titleSlugPrefix='/code'
          identifierPrefix='code_'
        />

        <div>
          <h3>Other email providers</h3>
          <ul>
            {otherProvidersSorted.map(provider => (
              <li>
                <a href={`/provider${provider.slug}`}>{provider.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
