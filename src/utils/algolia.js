const queries = require('./queries')
const helpers = require('./helpers')

const searchQueries = [
  {
    query: queries.codesOnly,
    transformer: ({ data }) => helpers.flatten(data.allCodesJson),
    indexName: 'codes',
    settings: {},
  },
  {
    query: queries.emailProviders,
    transformer: ({ data }) => helpers.flatten(data.allEmailProvidersJson),
    indexName: 'providers',
    settings: {},
  },
  {
    query: queries.spamFilters,
    transformer: ({ data }) => helpers.flatten(data.allSpamFiltersJson),
    indexName: 'spamfilters',
    settings: {},
  },
  {
    query: queries.codes,
    transformer: ({ data }) => {
      const dataFlat = helpers.flatten(data.allCodesJson)
      let newData = []

      dataFlat.map(item => {
        item.providers.map(provider =>
          // Push email provider responses
          provider.responses.map(response =>
            newData.push({
              ...response,
              code: item.reply,
              codeSlug: item.slug,
              providerName: provider.name,
              providerId: provider.id,
            })
          )
        )

        // Push spam filter responses
        item.spamFilters.map(spamFilter =>
          spamFilter.responses.map(response =>
            newData.push({
              ...response,
              code: item.reply,
              codeSlug: item.slug,
              providerName: spamFilter.name,
              providerId: spamFilter.id,
            })
          )
        )
      })

      return newData
    },
    indexName: 'responses',
    settings: {},
  },
]

module.exports = searchQueries
