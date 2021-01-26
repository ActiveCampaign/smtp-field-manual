import React from 'react'
import { Link } from 'gatsby'

import * as helpers from '../utils/helpers'
import SeverityLabel from './severityLabel'

export default ({
  list,
  titleLabelKey,
  titleKey,
  titleSlugPrefix,
  identifierPrefix = '',
  replyCode,
  provider,
  context
}) => {
  return (
    <>
      {list.map(item => (
        <List
          key={item[titleKey]}
          identifierPrefix={identifierPrefix}
          identifier={item[titleKey]}
          label={item[titleLabelKey]}
          titleSlugPrefix={titleSlugPrefix}
        >
          {item.responses.map(response => (
            <Response
              key={response.status}
              data={response}
              code={item[titleKey]}
              identifierPrefix={identifierPrefix}
              titleSlugPrefix={titleSlugPrefix}
              identifier={item[titleKey]}
              replyCode={replyCode}
              provider={provider}
              context={context}
            />
          ))}
        </List>
      ))}
    </>
  )
}

const List = ({
  children,
  identifier,
  identifierPrefix,
  label,
  titleSlugPrefix,
}) => {
  const fullIdentifier = `${identifierPrefix}${identifier}`
  const titleHref = `#${fullIdentifier}`
  const titleSlug = `${titleSlugPrefix}/${identifier}`

  return (
    <section className='response-list'>
      <h3 className='response-list_name' id={fullIdentifier}>
        <a href={titleHref} className='response-list_name-anchor'>
          {label}
        </a>
        <Link to={titleSlug} className='response-list_name-link'>
          All {label} codes &rarr;
        </Link>
      </h3>
      <div className='response-list_items'>{children}</div>
    </section>
  )
}

const Response = ({ data, code, titleSlugPrefix, identifierPrefix, replyCode, provider, context }) => {
  const { status, response, severity } = data
  const identifer = helpers.codeAnchor({ identifierPrefix, code, status })

  // Generate URLs based on response list context
  let url = ''
  if (context === 'provider') {
    url = `/provider${provider}/${code}/${status}`
  } else if (context=== 'code') {
    url = `${titleSlugPrefix}/${code}/${replyCode}/${status}`
  } else if (context === 'spamfilter') {
    url = `/spamfilter${provider}/${code}/${status}`
  }

  return (
    <div id={identifer} className='response-list_item'>
      <p className='response-label'>{response}</p>
      <SeverityLabel ranking={severity} />
      <a href={url} className='response-list_item-anchor'> </a>
    </div>
  )
}
