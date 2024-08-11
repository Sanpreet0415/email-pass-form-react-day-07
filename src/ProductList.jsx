import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Failed to fetch products', error);
        }
      };

      fetchProducts();
    }
  }, [isAuthenticated]);

  return (
    <div>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
