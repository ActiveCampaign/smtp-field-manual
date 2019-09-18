import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { orderBy } from 'lodash'

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
      <ul>
        {codes.map(code => (
          <li key={code.reply}>
            <Link to={`/code/${code.reply}`}>{code.reply}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
