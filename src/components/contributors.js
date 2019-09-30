import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Twitter } from 'styled-icons/fa-brands/Twitter'
import { Heart } from 'styled-icons/typicons/Heart'

import * as helpers from '../utils/helpers'

export default () => {
  let data = useStaticQuery(graphql`
    {
      allContributorsJson {
        edges {
          node {
            name
            twitter
          }
        }
      }
    }
  `)
  data = helpers.flatten(data.allContributorsJson)

  return (
    <>
      <h3 className='response-list-header'>
        We <Heart size='22px' /> email
      </h3>
      <p>
        Thanks to all the fine folks who have contributed to the SMTP Field
        Manual.
      </p>

      <ul className='columns-diamond'>
        {data.map(person => (
          <li className='slim' key={person.name.replace(' ', '')}>
            {person.name}{' '}
            {person.twitter && (
              <a
                href={`https://twitter.com/${person.twitter}`}
                target='_blank'
                rel='noopener noreferrer'
                className='twitter-handle'
              >
                <Twitter size='12' />
                <span>@{person.twitter}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
