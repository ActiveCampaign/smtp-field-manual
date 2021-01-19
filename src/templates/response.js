import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import DividerGlitch from '../components/dividerGlitch'
import SeverityLabel from '../components/severityLabel'

export default ({ pageContext: { responsePageData } }) => {
  console.log(responsePageData)

  const { description, links, response, severity } = responsePageData.response

  const descriptionLabel = () => {
    if (description !== '') {
      return (
        <p className='masthead_description' dangerouslySetInnerHTML={{ __html: description }}></p>
      )
    }
  }

  const blankState = () => {
    if (!description && links.length === 0) {
      return (
        <p className='masthead_description'>This provider doesn’t any information yet. Be the first to <Link to={'/contribute'}>contribute</Link>!</p>
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

  return (
    <Layout>
      <SEO title={`${responsePageData.provider.name}: ${response}`} description={description || response} />

      <div className='masthead'>
        <div className='container'>
          <h2 className="masthead_subtitle">
            <Link to={`/provider/${responsePageData.provider.id}`}>{responsePageData.provider.name}</Link> <span className='masthead_slash'>/</span> SMTP error code <Link to={`/code/${responsePageData.code.reply}`}>{responsePageData.code.reply}</Link>
          </h2>
          <h1 className='masthead_title'>{response}</h1>
          <SeverityLabel ranking={severity} />

          {descriptionLabel()}
          {linkList()}
          {blankState()}
        </div>
      </div>
      <DividerGlitch updateOnScroll={true} />

    </Layout>
  )
}
