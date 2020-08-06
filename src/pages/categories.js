import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import useGlobalState from "src/hooks/use-global-state"
import Layout from "src/components/layout"
import Head from "src/components/head"

const CategoriesPage = () => {
  const { appState, dispatch } = useGlobalState()
  const [state, setState] = useState(null)
  const data = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        edges {
          node {
            id
            title
            products {
              id
              title
            }
          }
        }
      }
    }
  `)

  console.log(data.allStrapiCategories.edges)

  return (
    <Layout>
      <Head title="Home" />
      <h3>Category</h3>
      <div className="row mt-5">
        {data &&
          data.allStrapiCategories.edges.map(e => (
            <div key={e.id} className="col-md-4">
              <h4>{e.node.title}</h4>
              <Link
                to={`/category/${e.node.id}/${e.node.title}`}
                className="btn btn-outline-primary">
                View
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default CategoriesPage
