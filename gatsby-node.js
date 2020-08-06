const path = require("path")
const slugify = require("slugify")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "StrapiProducts") {
    console.log(node)
    createNodeField({
      node,
      name: "slug",
      value: slugify(node.title),
    })

    createNodeField({
      node,
      name: "strapiId",
      value: node.strapiId,
    })
  }

  if (node.internal.type === "StrapiCategories") {
    console.log(node)
    createNodeField({
      node,
      name: "slug",
      value: slugify(node.title),
    })

    createNodeField({
      node,
      name: "strapiId",
      value: node.strapiId,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("./src/templates/product.js")
  const productRes = await graphql(`
    query {
      allStrapiProducts {
        edges {
          node {
            fields {
              slug
              strapiId
            }
          }
        }
      }
    }
  `)

  productRes.data.allStrapiProducts.edges.forEach(e => {
    createPage({
      component: productTemplate,
      path: `/product/${e.node.fields.strapiId}/${e.node.fields.slug}`,
      context: {
        slug: e.node.fields.slug,
        strapiId: e.node.fields.strapiId,
      },
    })
  })

  const categoryTemplate = path.resolve("./src/templates/category.js")
  const categoryRes = await graphql(`
    query {
      allStrapiCategories {
        edges {
          node {
            fields {
              slug
              strapiId
            }
          }
        }
      }
    }
  `)

  categoryRes.data.allStrapiCategories.edges.forEach(e => {
    createPage({
      component: categoryTemplate,
      path: `/category/${e.node.fields.strapiId}/${e.node.fields.slug}`,
      context: {
        slug: e.node.fields.slug,
        strapiId: e.node.fields.strapiId,
      },
    })
  })
}
