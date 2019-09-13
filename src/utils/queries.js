exports.fivexx = `{
  allFivehundredJson {
    edges {
      node {
        reply
        slug
        description
        providers {
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

exports.emailProviders = `{
  allEmailProvidersJson {
    edges {
      node {
        name
        id
      }
    }
  }
}`
