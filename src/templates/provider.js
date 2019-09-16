import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'

export default ({ pageContext: { data } }) => {
  const { name, providerCodes } = data

  return (
    <Layout>
      <SEO title={`${name} codes`} />
      <div className='masthead'>
        <div className='container'>
          <h2 className='masthead_title'>{name}!</h2>
          <p className='masthead_desc'>Such wow! So amaze!</p>

          <ResponseJump
            list={providerCodes}
            identifierKey='reply'
            identifierPrefix='code_'
            labelKey='reply'
          />
        </div>
      </div>

      <div className='container'>
        <ResponseList
          list={providerCodes}
          titleKey='reply'
          titleLabelKey='reply'
          titleSlugPrefix='/code'
          identifierPrefix='code_'
        />
      </div>
    </Layout>
  )
}
