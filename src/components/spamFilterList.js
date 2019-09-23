import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { orderBy } from 'lodash'

import * as helpers from '../utils/helpers'

export default () => {
  let spamFilters = useStaticQuery(graphql`
    query getAllSpamFilters {
      allSpamFiltersJson {
        edges {
          node {
            name
            id
            slug
          }
        }
      }
    }
  `)
  spamFilters = helpers.flatten(spamFilters.allSpamFiltersJson)
  spamFilters = orderBy(spamFilters, [o => o.name.toLowerCase()])

  return (
    <section className='list-section'>
      <div className='list-section_title'>
        <h3>Spam filters</h3>
      </div>
      <div className='list-section_content'>
        <p>View SMTP responses for a specific spam filter service.</p>

        <ul className='columns-3 columns-diamond'>
          {spamFilters.map(provider => (
            <li key={provider.id}>
              <Link to={`/spamfilter/${provider.id}`}>{provider.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
