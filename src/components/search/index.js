import React from 'react'
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults,
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

import { Root, HitsWrapper, PoweredBy } from './styles'
import Input from './Input'
import * as hitComps from './hitComps'

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) => {
    return res && res.nbHits > 0 ? children : ''
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
  }

  componentWillUnmount() {
    this._isMounted = false
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

    return (
      <InstantSearch
        searchClient={this.searchClient}
        indexName={indices[0].name}
        onSearchStateChange={this.handleSearchStateChange}
        root={{ Root, props: { ref } }}
      >
        <Input
          size={size}
          delay={50}
          onFocus={() => this.setState({ focus: true })}
          onBlur={() => {
            setTimeout(() => {
              if (this._isMounted) {
                this.setState({ focus: false })
              }
            }, 200)
          }}
          {...{ focus }}
        />

        <HitsWrapper show={showResults} size={size}>
          {indices.map(({ name, title, hitComp }) => {
            return (
              <Index key={name} indexName={name}>
                <Results>
                  <h3>{title}</h3>
                  <Hits
                    hitComponent={hitComps[hitComp](() =>
                      this.setState({ focus: false })
                    )}
                  />
                </Results>
              </Index>
            )
          })}
          <PoweredBy />
        </HitsWrapper>
      </InstantSearch>
    )
  }
}

export default Search
