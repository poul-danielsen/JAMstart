import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function ProductPostTemplate({ data, location }) {
  const product = data.contentfulProducts;
  console.log("PRODUCT:")
  console.log(product)

  return (
    <Layout location={location}>
      <article>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </article>
    </Layout>

  )
}

export default ProductPostTemplate;

export const productPageQuery = graphql`
  query productPageQuery($slug: String!) {
    contentfulProducts(slug: {eq: $slug}) {
        name
        description
        price
        slug
      }
    }
`  