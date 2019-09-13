import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

export const ReplyHit = clickHandler => ({ hit }) => {
  const { slug } = hit

  return (
    <div>
      <Link to={slug} onClick={clickHandler}>
        <h4>
          <Highlight attribute='reply' hit={hit} tagName='mark' />
        </h4>
      </Link>
      <Snippet attribute='description' hit={hit} tagName='mark' />
    </div>
  )
}
