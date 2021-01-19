import React from 'react'
import { orderBy } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'
import DividerGlitch from '../components/dividerGlitch'

export default ({ pageContext: { data } }) => {
  const { name, codes, otherProviders, domains, description, links } = data
  const codesSorted = orderBy(codes, [o => o.reply])
  const otherProvidersSorted = orderBy(otherProviders, [
    o => o.name.toLowerCase(),
  ])

  const domainList = () => {
    if (domains.length > 0) {
      return (
        <div className='jump'>
          <h4>Domain{domains.length > 1 ? 's' : ''}</h4>
          <ul className='columns-2'>
            {domains.map(domain => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
      )
    }
  }

  const responseJump = () => {
    if (codesSorted.length > 0) {
      return (
        <ResponseJump
          list={codesSorted}
          identifierKey='reply'
          identifierPrefix='code_'
          labelKey='reply'
        />
      )
    }
  }

  const descriptionLabel = () => {
    if (description !== '') {
      return (
        <p>{description}</p>
      )
    }
  }

  const linkList = () => {
    if (links.length > 0) {
      return (
        <div className="doc-list">
          <h4>Documentation</h4>
          <ul>
            {links.map(link => (
              <li key={link}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
            ))}
          </ul>
        </div>
      )
    }
  }

  const pageContent = () => {
    if (codesSorted.length > 0) {
      return (
        <ResponseList
          list={codesSorted}
          titleKey='reply'
          titleLabelKey='reply'
          titleSlugPrefix='/code'
          identifierPrefix='code_'
        />
      )
    } else {
      return (
        <div>
          <h3 className='response-list-header'>( ͡ಠ ʖ̯ ͡ಠ)</h3>
          <p>This provider doesn’t any SMTP responses documented yet. Be the first to <Link to={'/contribute'}>contribute</Link>!</p>
        </div>
      )
    }
  }

  return (
    <Layout>
      <SEO title={`${name} SMTP Error Codes`} description={description} />

      <div className='masthead'>
        <div className='container'>
          <h1 className='masthead_title'>{name}</h1>
          {descriptionLabel()}
          {domainList()}
          {linkList()}
          {responseJump()}
        </div>
      </div>
      <DividerGlitch updateOnScroll={true} />

      <div className='container u-push-top'>
        {pageContent()}

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
