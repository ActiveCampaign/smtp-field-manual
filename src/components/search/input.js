import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchIcon, Form, Input } from './styles'

class SearchBox extends React.Component {
  timerId = null

  state = {
    value: this.props.currentRefinement,
  }

  onChangeDebounced = event => {
    const { refine, delay } = this.props
    const value = event.currentTarget.value

    clearTimeout(this.timerId)

    this.timerId = setTimeout(() => refine(value), delay)
    this.setState(() => ({
      value,
    }))
  }

  render() {
    const { value } = this.state
    const { size, ...rest } = this.props

    return (
      <Form onSubmit={e => e.preventDefault()}>
        <Input
          size={size}
          value={value}
          onChange={this.onChangeDebounced}
          type='search'
          placeholder='e.g. 550 or gmail'
          aria-label='Search'
          {...rest}
        />
        <SearchIcon size={size} />
      </Form>
    )
  }
}

export default connectSearchBox(SearchBox)
