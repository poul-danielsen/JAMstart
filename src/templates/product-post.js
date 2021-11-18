import React, {useEffect, useState} from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function ProductPostTemplate({ data, location }) {
  const product = data.contentfulProducts;
  const [quantity, setQuantity] = useState('Loading...');
  console.log("PRODUCT:")
  console.log(product)
    
  useEffect(() => {
    fetch('/.netlify/functions/getProductQuantity', {
      method: 'POST',
      body: JSON.stringify({ slug: product.slug })
    })
      .then(res => res.json())
      .then(datafied => setQuantity(datafied.quantity))
      .then(res => console.log(res));
  }, [])

  return (
    <Layout location={location}>
      <article>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>Quantity: {quantity}</p>
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