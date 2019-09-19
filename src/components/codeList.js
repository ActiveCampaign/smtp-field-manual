import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { orderBy, filter, startsWith } from 'lodash'

import * as helpers from '../utils/helpers'

export default ({ showTitle = true }) => {
  let codes = useStaticQuery(graphql`
    {
      allCodesJson {
        edges {
          node {
            id
            description
            reply
            slug
          }
        }
      }
    }
  `)
  codes = helpers.flatten(codes.allCodesJson)
  codes = orderBy(codes, [o => o.reply])

  return (
    <section className='list-section'>
      {showTitle && <h3>SMTP codes</h3>}

      <h4 className='code-title'>4.X.X Persistent transient failure</h4>
      <p>
        The mail server encountered a temporary failure. If the command is
        repeated without any change, it might be completed. Mail servers can use
        temporary failures like this to keep untrusted senders at bay.
      </p>

      <ul className='columns-3 columns-diamond'>
        {filterByCategory(codes, 4).map(code => renderCode(code))}
      </ul>

      <h4 className='code-title'>5.X.X permanent error</h4>
      <p>
        The mail server has encounted a permanent error. These errors will
        result in the SMTP connection being dropped. Re-sending will usually
        produce the same result.
      </p>

      <ul className='columns-3 columns-diamond'>
        {filterByCategory(codes, 5).map(code => renderCode(code))}
      </ul>
    </section>
  )
}

const filterByCategory = (codes, category) =>
  filter(codes, code => startsWith(code.reply, category))

const renderCode = code => (
  <li key={code.reply}>
    <Link to={`/code/${code.reply}`}>{code.reply}</Link>
  </li>
)
