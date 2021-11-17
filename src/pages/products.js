import React from 'react';
import Layout from '../components/layout';
import Product from '../components/Product';
import { graphql } from 'gatsby';

function generateProducts(products) {
  return products.map(product => <Product product={product}/>);
};

function Products ({ data, location }) {
  const products = data.allContentfulProducts.nodes;

  return (
    <Layout location={location}>
      {generateProducts(products)}
    </Layout>
  );
};

export default Products;

export const productsPageQuery = graphql`
  query productsPageQuery {
    allContentfulProducts {
      nodes {
        name
        description
        price
        slug
      }
    }
  }
`