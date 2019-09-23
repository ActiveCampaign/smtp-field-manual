import React from 'react'
import { Highlight } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import * as helpers from '../../utils/helpers'

export const CodeHit = clickHandler => ({ hit }) => {
  const { slug } = hit

  return (
    <Link to={`/code${slug}`} onClick={clickHandler}>
      <h4>
        <Highlight attribute='reply' hit={hit} tagName='mark' />
      </h4>
    </Link>
  )
}

export const ResponseHit = clickHandler => ({ hit }) => {
  const { codeSlug, providerId, status } = hit
  const anchor = helpers.codeAnchor({
    identifierPrefix: providerId,
    status,
  })

  return (
    <Link to={`/code${codeSlug}#${anchor}`} onClick={clickHandler}>
      <code>
        <Highlight attribute='response' hit={hit} tagName='mark' />
      </code>
    </Link>
  )
}

export const ProviderHit = clickHandler => ({ hit }) => {
  const { slug } = hit

  return (
    <Link to={`/provider${slug}`} onClick={clickHandler}>
      <h4>
        <Highlight attribute='name' hit={hit} tagName='mark' />
      </h4>
    </Link>
  )
}

export const SpamFilterHit = clickHandler => ({ hit }) => {
  const { slug } = hit

  return (
    <Link to={`/spamfilter${slug}`} onClick={clickHandler}>
      <h4>
        <Highlight attribute='name' hit={hit} tagName='mark' />
      </h4>
    </Link>
  )
}
