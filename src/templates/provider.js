import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default ({ pageContext: { data } }) => {
  const { id, name, codes, providerCodes } = data

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
        {providerCodes.map(code => (
          <Code key={code.reply} code={code}>
            {code.responses.map(item => (
              <Response key={item.status} data={item} code={code.reply} />
            ))}
          </Code>
        ))}
      </div>
    </Layout>
  )
}

const Code = ({ children, code }) => {
  const { reply } = code

  return (
    <section className='provider'>
      <h3 className='provider_name' id={reply}>
        <a href={`#${reply}`}>#</a> <a href={`/code/${reply}`}>{reply}</a>
      </h3>
      <div className='provider_responses'>{children}</div>
      <a href='#top' className='provider_top'>
        ↑ Back to top
      </a>
    </section>
  )
}

const Response = ({ data, code }) => {
  const { status, response } = data
  const identifer = `${code}-${status.replace(/\./g, '-')}`

  return (
    <div id={identifer} className='provider_response'>
      <a href={`#${identifer}`} className='provider_response-anchor'>
        <span>#</span>
      </a>
      <p className='response-label'>{response}</p>
    </div>
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
