import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import ProductList from './ProductList'; // Ensure this import path is correct
import list from '../data'; // Ensure this import path is correct
import './Cart.css'; // Add a CSS file for styling

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from localStorage when component mounts
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);
    }, []);

    useEffect(() => {
        // Save cart items to localStorage whenever cartItems state changes
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            // Update quantity if item already exists in cart
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...existingItem, quantity: existingItem.quantity + 1 }
                        : item
                )
            );
        } else {
            // Add new item to cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        // Remove item from cart by id
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        // Update quantity of an item in the cart
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page-container">
            <div className="product-list-section">
                <ProductList products={list} onAddToCart={addToCart} />
            </div>
            <div className="cart-section">
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>No items in cart.</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onRemove={removeFromCart}
                                onQuantityChange={updateQuantity}
                            />
                        ))}
                        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                        <Link to="/credit-card">
                            <button className="checkout-button">Proceed to Checkout</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
