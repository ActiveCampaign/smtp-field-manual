exports.fivexx = `{
  allFivehundredJson {
    edges {
      node {
        reply
        description
        responses {
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
      }
    }
  }
}`
