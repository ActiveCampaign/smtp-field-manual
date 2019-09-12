const queries = require('./queries')

const searchQueries = [
  {
    query: queries.fivexx,
    transformer: ({ data }) =>
      data.allFivehundredJson.edges.map(({ node }) => node),
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
