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
