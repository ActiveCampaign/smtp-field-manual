const queries = require('./src/utils/queries')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const fivehundreds = await graphql(queries.fivexx)

  fivehundreds.data.allFivehundredJson.edges.forEach(item => {
    const data = item.node
    createPage({
      path: data.slug,
      component: require.resolve(`./src/templates/responseCode.js`),
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
