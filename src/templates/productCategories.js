import React, {Fragment} from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StarRatingComponent from "react-star-rating-component"
import { graphql } from "gatsby"


const ProductCategory = data => (
  <Layout>
    <Fragment>
    {data.data.allContentfulProductCategories.edges.map(item => (
      <SEO
        title={item.node.name}
        keywords={[`${item.node.name}`,`gatsby`, `application`, `react`]}
      />
    ))}

      <div className="row product-main  col-sm-12 center">
        {data.data.allContentfulProduct.edges.map(items => (
          <div
            className="Catalogue__item col-sm-12 col-md-6 col-lg-4"
            key={items.node.id}
          >
            <div className="details_List">
              {items.node.image === null ? (
                <div className="no-image">No Image</div>
              ) : (
                <Img sizes={items.node.image.fluid} />
              )}

              <div className="details_inner">
                <h2>
                  <Link to={`/${items.node.slug}`}>{items.node.name}</Link>
                </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={items.node.rating}
                  />

                <div className="row">

                  <div className="col-sm-12 text-right align-self-center">
                  <a                  
                      href={items.node.slug}
                      className="Product method-payment"
                      rel="noopener noreferrer"
                      >
                      <i className="fas fa-shopping-bag" />
                      Lihat Produk
                      </a>
                      &nbsp;
                    <a                      
                      href={`/checkout`}
                      className="Product snipcart-add-item"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-item-id={items.node.slug}
                      data-item-image={
                        items.node.image === null
                          ? ""
                          : items.node.image.fluid.src
                      }
                      data-item-name={items.node.name}
                      data-item-url={`/`}
                    >
                      <i className="fas fa-shopping-cart" />
                      Beli
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  </Layout>
)
export default ProductCategory;

export const query = graphql`
  query ProductCategoryQuery($slug: String!) {
    allContentfulProduct(filter: {category: {slug: {eq: $slug}}}, sort: { fields: name, order: ASC }) {
      edges {
        node {
          id
          name
          rating
          slug
          image {
            fluid(maxWidth: 350) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    allContentfulProductCategories(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          name
        }
      }
    }
  }
`
