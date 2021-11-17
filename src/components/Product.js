import React from 'react';
import { Link } from 'gatsby';

function Product ({ product }) {
  return (
    <article>
      <Link to={`/products/${product.slug}`}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price}</span>
      </Link>
    </article>
  )
}

export default Product;