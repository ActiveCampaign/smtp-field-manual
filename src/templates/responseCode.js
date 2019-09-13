import React from 'react'
import { orderBy } from 'lodash'

import Layout from '../components/layout'
import SEO from '../components/seo'

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
        {providersSorted.map(provider => (
          <Provider key={provider.id} provider={provider}>
            {provider.responses.map(item => (
              <Response key={item.status} data={item} provider={provider.id} />
            ))}
          </Provider>
        ))}
      </div>
    </Layout>
  )
}

const Provider = ({ children, provider }) => {
  const { id, name } = provider

  return (
    <section className='provider'>
      <h3 className='provider_name' id={id}>
        <a href={`#${id}`}>{name}</a>
      </h3>
      <div className='provider_responses'>{children}</div>
      <a href='#top' className='provider_top'>
        ↑ Back to top
      </a>
    </section>
  )
}

const Response = ({ data, provider }) => {
  const { status, response } = data
  const identifer = `${provider}-${status.replace(/\./g, '-')}`

  return (
    <div id={identifer} className='provider_response'>
      <a href={`#${identifer}`} className='provider_response-anchor'>
        <span>#</span>
      </a>
      <p className='response-label'>{response}</p>
    </div>
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
