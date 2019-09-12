import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

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
    <p>Welcome to your new Gatsby site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to='/contribute/'>Contribute</Link>
    <Link to='/page-2/'>Go to page 2</Link>
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
  console.log(data)
  data.allEmailProvidersJson.nodes.forEach(item => {
    items.push(<li key={item.id}>{item.name}</li>)
  })
  return items
}

export default IndexPage
