const queries = require('./queries')

const searchQueries = [
  {
    query: queries.codes,
    transformer: ({ data }) => data.allCodesJson.edges.map(({ node }) => node),
    indexName: 'responses',
    settings: {},
  },
  {
    query: queries.emailProviders,
    transformer: ({ data }) =>
      data.allEmailProvidersJson.edges.map(({ node }) => node),
    indexName: 'email_providers',
    settings: {},
  },
]

module.exports = searchQueries
