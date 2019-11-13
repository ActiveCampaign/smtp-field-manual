const queries = require('./src/utils/queries')
const _ = require('lodash')
const helpers = require('./src/utils/helpers')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Create response code pages
  const codes = await graphql(queries.codes)
  codesFlat = helpers.flatten(codes.data.allCodesJson)
  codesFlat.forEach(item => {
    const data = {
      ...item,
      otherCodes: _.reject(codesFlat, { reply: item.reply }),
    }

    createPage({
      path: `/code${item.slug}`,
      component: require.resolve(`./src/templates/code.js`),
      context: { data },
    })
  })

  // Create provider pages
  const providers = await graphql(queries.emailProviders)
  providersFlat = helpers.flatten(providers.data.allEmailProvidersJson)
  providersFlat.forEach(item => {
    let data = {
      ...item,
      codes: [],
      otherProviders: _.reject(providersFlat, { id: item.id }),
    }

    // Gather codes for this provider
    codesFlat.map(code => {
      code.providers.map(provider => {
        if (provider.id === data.id) {
          data.codes.push({
            description: code.description,
            reply: code.reply,
            responses: provider.responses,
          })
        }
      })
    })

    createPage({
      path: `/provider${data.slug}`,
      component: require.resolve(`./src/templates/provider.js`),
      context: { data },
    })
  })

  // Create spam filter pages
  const spamFilters = await graphql(queries.spamFilters)
  spamFiltersFlat = helpers.flatten(spamFilters.data.allSpamFiltersJson)
  spamFiltersFlat.forEach(item => {
    let data = {
      ...item,
      codes: [],
      otherProviders: _.reject(spamFiltersFlat, { id: item.id }),
    }

    // Gather codes for this provider
    codesFlat.map(code => {
      code.spamFilters.map(provider => {
        if (provider.id === data.id) {
          data.codes.push({
            description: code.description,
            reply: code.reply,
            responses: provider.responses,
          })
        }
      })
    })

    createPage({
      path: `/spamfilter${data.slug}`,
      component: require.resolve(`./src/templates/spamFilter.js`),
      context: { data },
    })
  })

  // Create redirects
  const redirects = await graphql(queries.redirects)
  const redirectsFlat = helpers.flatten(redirects.data.allRedirectsJson)
  redirectsFlat.forEach(item => createRedirect(item))
}
