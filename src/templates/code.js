import React from 'react'
import { orderBy } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'

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

          <ResponseJump
            list={providersSorted}
            identifierKey='id'
            labelKey='name'
          />
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
