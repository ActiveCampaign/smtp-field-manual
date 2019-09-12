// const queries = require('./src/utils/queries')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.createPages = async ({ graphql, actions, reporter }) => {
// const { createPage } = actions
//   const fivehundreds = await graphql(
//   `
//     {
//       all500Json {
//         nodes {
//           id
//           name
//         }
//       }
//     }
//   `
// )
// // pull in or use whatever data
// const dogData = [
//   {
//     name: 'Fido',
//     breed: 'Sheltie',
//   },
//   {
//     name: 'Sparky',
//     breed: 'Corgi',
//   },
// ]
// dogData.forEach(dog => {
//   createPage({
//     path: `/${dog.name.toLowerCase()}`,
//     component: require.resolve(`./src/templates/dog-template.js`),
//     context: { dog },
//   })
// })
// }

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
