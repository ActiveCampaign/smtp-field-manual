import React from 'react'
import { orderBy } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'

export default ({ pageContext: { data } }) => {
  const { reply, description, providers } = data
  const providersSorted = orderBy(providers, [o => o.name.toLowerCase()])

  return (
    <Layout>
      <SEO title={`${reply} SMTP code`} />
      <div className='masthead'>
        <div className='container'>
          <h2 className='masthead_title'>Reply code {reply}</h2>
          <p
            className='masthead_description'
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          <ProviderJump providers={providersSorted} />
        </div>
      </div>

      <div className='container'>
        <ResponseList
          list={providersSorted}
          titleKey='id'
          titleLabelKey='name'
          titleSlugPrefix='/provider'
        />
      </div>
    </Layout>
  )
}

const ProviderJump = ({ providers }) => {
  return (
    <div className='provider-jump'>
      <h4>Jump to ↓</h4>
      <ul>
        {providers.map(provider => (
          <li>
            <a href={`#${provider.id}`}>{provider.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
