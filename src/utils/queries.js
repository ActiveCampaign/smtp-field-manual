exports.codes = `{
  allCodesJson {
    edges {
      node {
        id
        description
        reply
        slug
        providers {
          name
          id
          responses {
            response
            status
          }
        }
        spamFilters {
          id
          name
          responses {
            response
            status
          }
        }
      }
    }
  }
}`

exports.codesOnly = `{
  allCodesJson {
    edges {
      node {
        id
        description
        reply
        slug
      }
    }
  }
}`

exports.emailProviders = `{
  allEmailProvidersJson {
    edges {
      node {
        name
        id
        slug
      }
    }
  }
}`

exports.spamFilters = `{
  allSpamFiltersJson {
    edges {
      node {
        name
        id
        slug
      }
    }
  }
}`
