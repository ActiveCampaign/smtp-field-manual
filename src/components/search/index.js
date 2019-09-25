import React from 'react'
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import cn from 'classnames'
import { Algolia } from 'styled-icons/fa-brands/Algolia'

import Input from './Input'
import * as hitComps from './hitComps'

const IndexResults = connectStateResults(({ searchResults, children }) =>
  searchResults && searchResults.nbHits !== 0 ? children : null
)

const AllResults = connectStateResults(
  ({ allSearchResults, searching, children }) => {
    const hasResults =
      allSearchResults &&
      Object.values(allSearchResults).some(results => results.nbHits > 0)

    return !hasResults ? (
      <div className='search-hits_message'>
        {searching ? (
          <div className='search-hits_loading'>
            <h5 aria-hidden />
            <p>Searching the catacombs...</p>
          </div>
        ) : (
          <div className='search-hits_empty'>
            <h5 aria-hidden />
            <p>Couldn’t find any results!</p>
          </div>
        )}

        <Index indexName='codes' />
        <Index indexName='providers' />
        <Index indexName='spamfilters' />
        <Index indexName='responses' />
      </div>
    ) : (
      children
    )
  }
)

class Search extends React.Component {
  state = {
    query: '',
    focus: false,
  }

  constructor(props) {
    super(props)
    this.ref = React.createRef()

    const algoliaClient = algoliasearch(
      process.env.GATSBY_ALGOLIA_APP_ID,
      process.env.GATSBY_ALGOLIA_SEARCH_KEY
    )
    this.searchClient = {
      search(requests) {
        // Check if query exists or contains only whitespace

        // TODO: don't send duplicate queries
        // TODO: duplicate queries happen because of onFocus in Input
        // TODO: figure out how to access this.state.query and compare with request.every
        if (
          requests.every(({ params }) => !params.query) ||
          requests.every(
            ({ params }) => !params.query.replace(/\s/g, '').length
          )
        ) {
          // Return empty promise
          return Promise.resolve({
            results: requests.map(() => ({
              hits: [],
              nbHits: 0,
              nbPages: 0,
              processingTimeMS: 0,
            })),
          })
        }

        return algoliaClient.search(requests)
      },
    }
  }

  componentDidMount() {
    this._isMounted = true
    document.addEventListener('click', this.handleBodyClick)
  }

  componentWillUnmount() {
    this._isMounted = false
    document.removeEventListener('click', this.handleBodyClick)
  }

  handleBodyClick = event => {
    const isOutside = this.ref && !this.ref.current.contains(event.target)

    if (isOutside) {
      this.setState({ focus: false })
    }
  }

  handleSearchStateChange = ({ query }) => {
    const sanitizedQuery = query.replace(/\s/g, '').length
    const queryState = this.state.query

    // Has query text or
    // No query text and current state has a query
    // Query is different
    if (sanitizedQuery || (queryState.length && !sanitizedQuery)) {
      this.setState({ query })
    }
  }

  render() {
    const { indices, size = 'large' } = this.props
    const { query, focus } = this.state
    const ref = this.ref
    const showResults = query.replace(/\s/g, '').length > 0 && focus

    const hitsWrapperClass = cn('search-hits', {
      'search-hits--large': size === 'large',
      'search-hits--small': size === 'small',
      'is-active': showResults,
    })

    return (
      <InstantSearch
        searchClient={this.searchClient}
        indexName={indices[0].name}
        onSearchStateChange={this.handleSearchStateChange}
        root={{
          Root: 'div',
          props: { className: 'search', ref },
        }}
      >
        <Input
          size={size}
          delay={50}
          onFocus={() => this.setState({ focus: true })}
        />
        <div className={hitsWrapperClass}>
          <AllResults>
            {indices.map(({ name, title, hitComp }) => {
              return (
                <Index key={name} indexName={name}>
                  <IndexResults>
                    <h3>{title}</h3>
                    <Hits
                      hitComponent={hitComps[hitComp](() =>
                        this.setState({ focus: false })
                      )}
                    />
                  </IndexResults>
                </Index>
              )
            })}
          </AllResults>

          <p className='search_powered'>
            Powered by{` `}
            <a href='https://algolia.com'>
              <Algolia size='1em' />
              Algolia
            </a>
          </p>
        </div>
      </InstantSearch>
    )
  }
}

export default Search
