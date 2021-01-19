import React from 'react'
import { orderBy } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResponseList from '../components/responseList'
import ResponseJump from '../components/responseJump'
import DividerGlitch from '../components/dividerGlitch'

export default ({ pageContext: { data } }) => {
  const { reply, description, providers, otherCodes, spamFilters } = data
  const providersSorted = orderBy(providers, [o => o.name.toLowerCase()])
  const spamFiltersSorted = orderBy(spamFilters, [o => o.name.toLowerCase()])
  const codesSorted = orderBy(otherCodes, [o => o.reply])
  const providersAndFiltersSorted = orderBy(
    [...providers, ...spamFilters],
    [o => o.name.toLowerCase()]
  )

  return (
    <Layout>
      <SEO title={`${reply} SMTP Error Code`} description={description} />

      <div className='masthead'>
        <div className='container'>
          <h1 className='masthead_title'>SMTP Error Code {reply}</h1>
          {description !== '' && (
            <p
              className='masthead_description'
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          )}

          <ResponseJump
            list={providersAndFiltersSorted}
            identifierKey='id'
            labelKey='name'
          />
        </div>
      </div>

      <DividerGlitch updateOnScroll={true} />

      <div className='container u-push-top'>
        {providersSorted.length > 0 && (
          <>
            <h2 className='response-list-header'>Email service providers</h2>
            <ResponseList
              list={providersSorted}
              titleKey='id'
              titleLabelKey='name'
              titleSlugPrefix='/provider'
              context="code"
              replyCode={reply}
            />
          </>
        )}

        {spamFiltersSorted.length > 0 && (
          <>
            <h2 className='response-list-header u-push-top'>
              Spam filters services
            </h2>
            <ResponseList
              list={spamFiltersSorted}
              titleKey='id'
              titleLabelKey='name'
              titleSlugPrefix='/spamfilter'
              context="code"
              replyCode={reply}
            />
          </>
        )}

        <h3 className='response-list-header u-push-top'>Other SMTP codes</h3>
        <div className='sub-section'>
          <ul className='columns-3 columns-diamond'>
            {codesSorted.map(code => (
              <li key={code.reply}>
                <Link to={`/code${code.slug}`}>{code.reply}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}
