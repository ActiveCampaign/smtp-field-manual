import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Search from '../components/search'
import { algoliaIndices } from '../utils/algoliaIndices'

const IndexPage = () => (
  <Layout>
    {/* <StaticQuery
      query={graphql`
        query EmailProvidersQuery {
          allEmailProvidersJson {
            nodes {
              id
              name
            }
          }
        }
      `}
      render={data => <ul>{getEsps(data)}</ul>}
    /> */}

    <SEO title='Home' />

    <div className='hero'>
      <h2 className='hero_title'>Your go-to field manual for SMTP</h2>
      <p className='hero_description'>Search for an SMTP code.</p>
      <div className='container'>
        <Search indices={algoliaIndices} />
      </div>
    </div>
  </Layout>
)

// const providers = await graphql(
//   `
//     {
//       allEmailProvidersJson {
//         nodes {
//           id
//           name
//         }
//       }
//     }
//   `
// )

function getEsps(data) {
  const items = []
  // console.log(data)
  data.allEmailProvidersJson.nodes.forEach(item => {
    items.push(<li key={item.id}>{item.name}</li>)
  })
  return items
}

export default IndexPage
