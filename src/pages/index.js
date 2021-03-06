import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import useGlobalState from "src/hooks/use-global-state"
import Layout from "src/components/layout"
import Head from "src/components/head"

const IndexPage = () => {
  const { appState, dispatch } = useGlobalState()
  const [state, setState] = useState(null)
  const data = useStaticQuery(graphql`
    query {
      allStrapiProducts {
        edges {
          node {
            id
            title
            description
            price_nickel
            price_brass
            fields {
              slug
              strapiId
            }
            categories {
              id
              title
            }
            images {
              formats {
                medium {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.allStrapiProducts.edges)

  return (
    <Layout>
      <Head title="Home" />
      <h3>All Products</h3>
      <div className="row mt-5">
        {data &&
          data.allStrapiProducts.edges.map(e => (
            <div key={e.id} className="col-md-4">
              <h4>{e.node.title}</h4>
              <p>{e.node.description}</p>
              <Link
                to={`/product/${e.node.fields.strapiId}/${e.node.fields.slug}`}
                className="btn btn-outline-primary">
                View
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default IndexPage
