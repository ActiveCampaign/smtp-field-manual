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
            severity
            description
            links
          }
        }
        spamFilters {
          id
          name
          responses {
            response
            status
            severity
            description
            links
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
        description
        links
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
        domains
        description
        links
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
        description
        links
      }
    }
  }
}`

exports.redirects = `{
  allRedirectsJson {
    edges {
      node {
        fromPath
        toPath
        isPermanent
      }
    }
  }
}`
