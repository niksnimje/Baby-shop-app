import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products/getproduct")
      .then((res) => {
        console.log(res.data.product);
        setProductData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>This is Product Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {productData.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
            
            <a href="/product">
            <img src={product.img} alt={product.title} style={{ width: '100%', height: 'auto' }} />
            </a>
            <h2>{product.title}</h2>
            <p><strong>Price:</strong> Rs. {product.price}</p>
            <p><strong>Category:</strong> {product.catagory}</p>
            <p><strong>Description:</strong> {product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;





  // axios.get(`${import.meta.emv.VITE_BASEURL}products/getproduct`)
  // axios.get("https://shopping-web-kid-s-be.onrender.com/products/getproduct")