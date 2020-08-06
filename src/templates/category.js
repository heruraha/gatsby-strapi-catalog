import React from "react"
import { graphql } from "gatsby"
import Layout from "src/components/layout"
import Head from "src/components/head"
import Carousel from "src/components/carousel"

export const query = graphql`
  query($strapiId: Int!) {
    strapiCategories(strapiId: { eq: $strapiId }) {
      id
      title
      fields {
        slug
        strapiId
      }
      products {
        id
        title
        description
        price_nickel
        price_brass
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
`

const Category = props => {
  const products = props.data.strapiCategories.products
  console.log(`Product page:`, products)
  console.log(query)
  return (
    <Layout>
      <Head title={"title"} />
      {products.length > 0 &&
        products.map(product => (
          <div className="row">
            <div className="col-sm-6">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
    </Layout>
  )
}

export default Category
