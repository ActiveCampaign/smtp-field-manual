import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'

export default ({ pageContext: { data } }) => {
  const { name, providerCodes } = data

  return (
    <Layout>
      <SEO title={`${name} codes`} />
      <div className='masthead'>
        <div className='container'>
          <h2 className='masthead_title'>{name}!</h2>
          <p className='masthead_desc'>Such wow! So amaze!</p>

          <Jump codes={providerCodes} />
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

const Jump = ({ codes }) => {
  return (
    <div className='provider-jump'>
      <h4>Jump to ↓</h4>
      <ul>
        {codes.map(code => (
          <li>
            <a href={`#${code.reply}`}>{code.reply}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
