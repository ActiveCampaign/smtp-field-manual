import React from 'react'
import { orderBy } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'
import DividerGlitch from '../components/dividerGlitch'

export default ({ pageContext: { data } }) => {
  const { name, slug, codes, otherProviders, description, links } = data
  const codesSorted = orderBy(codes, [o => o.reply])
  const otherProvidersSorted = orderBy(otherProviders, [
    o => o.name.toLowerCase(),
  ])

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
          context="spamfilter"
          provider={slug}
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
      <SEO title={`${name} codes`} description={description} />

      <div className='masthead'>
        <div className='container'>
          <h1 className='masthead_title'>{name}</h1>
          {descriptionLabel()}
          {linkList()}
          {responseJump()}
        </div>
      </div>
      <DividerGlitch updateOnScroll={true} />

      <div className='container u-push-top'>
        {pageContent()}

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
