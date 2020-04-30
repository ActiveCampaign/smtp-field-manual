import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { orderBy } from 'lodash'

import * as helpers from '../utils/helpers'

export default () => {
  let providers = useStaticQuery(graphql`
    query getAllEmailProviders {
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
        <h2>Email Providers</h2>
      </div>
      <div className='list-section_content'>

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
