import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { orderBy } from 'lodash'

import * as helpers from '../utils/helpers'

export default () => {
  let providers = useStaticQuery(graphql`
    query Something {
      allEmailProvidersJson {
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
  providers = helpers.flatten(providers.allEmailProvidersJson)
  providers = orderBy(providers, [o => o.name.toLowerCase()])

  return (
    <section className='list-section'>
      <div className='list-section_title'>
        <h3>Email providers</h3>
      </div>
      <div className='list-section_content'>
        <p>
          See all of the collected SMTP responses for a specific email service
          provider.
        </p>

        <ul className='columns-3 columns-diamond'>
          {providers.map(provider => (
            <li key={provider.id}>
              <Link to={`/provider/${provider.id}`}>{provider.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
