const queries = require('./src/utils/queries')
const _ = require('lodash')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Create response code pages
  const codes = await graphql(queries.codes)

  codes.data.allCodesJson.edges.forEach(item => {
    const data = item.node
    createPage({
      path: `/code${data.slug}`,
      component: require.resolve(`./src/templates/code.js`),
      context: { data },
    })
  })

  // Create provider pages
  const providers = await graphql(queries.emailProviders)
  const providerCodes = codes.data.allCodesJson.edges.map(({ node }) => node)

  providers.data.allEmailProvidersJson.edges.forEach(item => {
    const data = item.node
    data.providerCodes = []

    providerCodes.map(code => {
      code.providers.map(provider => {
        if (provider.id === data.id) {
          data.providerCodes.push({
            description: code.descroption,
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
}

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
// const pokemons = [
//   { name: 'Pikachu', type: 'electric' },
//   { name: 'Squirtle', type: 'water' },
// ]
// pokemons.forEach(pokemon => {
//   const node = {
//     name: pokemon.name,
//     type: pokemon.type,
//     id: createNodeId(`Pokemon-${pokemon.name}`),
//     internal: {
//       type: 'Pokemon',
//       contentDigest: createContentDigest(pokemon),
//     },
//   }
//   actions.createNode(node)
// })
// }
