// import './App.css';

// export default function App() {

//   fetch ('http://127.0.0.1:8000/api/products/get/1'{

//   })
//   return <>hello</>;
// }

import React, { useEffect, useState } from 'react';
import { getPaginatedProducts } from './apiService';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPaginatedProducts(1)
      .then(response => {
        setProducts(response.response.data); 
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          product.id
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
