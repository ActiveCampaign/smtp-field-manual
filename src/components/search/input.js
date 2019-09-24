import React from 'react'
import cn from 'classnames'
import { Search } from 'styled-icons/fa-solid/Search'
import { connectSearchBox } from 'react-instantsearch-dom'

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
    const { size, onFocus } = this.props
    const inputClass = cn('search_input', {
      'search_input--small': size === 'small',
      'search_input--large': size === 'large',
    })
    const iconClass = cn('search-icon', {
      'search-icon--small': size === 'small',
      'search-icon--large': size === 'large',
    })

    return (
      <form className='search_form' onSubmit={e => e.preventDefault()}>
        <input
          className={inputClass}
          value={value}
          onChange={this.onChangeDebounced}
          type='search'
          placeholder='e.g. 550 or gmail'
          aria-label='Search'
          onFocus={() => onFocus()}
        />
        <Search className={iconClass} />
      </form>
    )
  }
}

export default connectSearchBox(SearchBox)
