import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchIcon, Form, Input } from './styles'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <Input
      type='text'
      placeholder='e.g. 550'
      aria-label='Search'
      onChange={e => refine(e.target.value)}
      {...rest}
    />
    <SearchIcon />
  </Form>
))
