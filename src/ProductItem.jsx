import React from 'react';

const ProductItem = ({ product }) => (
  <div>
    <h3>{product.title}</h3>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
    <p>${product.price}</p>
  </div>
);

export default ProductItem;
