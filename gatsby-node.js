var path = require("path")
const { graphql } = require("graphql")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const ProductCategoryTemplate = path.resolve("src/templates/productCategories.js")
    const StoreTemplate = path.resolve("src/templates/details.js")
    const BlogTemplate = path.resolve("src/templates/blogDetails.js")
    
    resolve(
      graphql(`
        {
        allContentfulProduct {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulBlogs {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulProductCategories {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulProduct.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        result.data.allContentfulProductCategories.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: ProductCategoryTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        result.data.allContentfulBlogs.edges.forEach(data => {
          createPage({
            path: data.node.slug,
            component: BlogTemplate,
            context: {
              slug: data.node.slug
            }
          })
        })
        return
      })
    )
  })
}
