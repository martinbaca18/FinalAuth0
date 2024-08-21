// src/components/ProductList.js
import React from 'react';
import './ProductList.css'; // Ensure correct path

const ProductList = ({ products, onAddToCart }) => {
    return (
        <div className="product-list-container">
            <h2 className="center-text">Products</h2>
            {products.map((product) => (
                <div className="product-item" key={product.id}>
                    <img src={product.img} alt={product.service} />
                    <div>
                        <h3>{product.service}</h3>
                        <p>{product.serviceInfo}</p>
                        <p>${product.price.toFixed(2)}</p>
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
