import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import './CartPage.css'; 

const CartPage = ({ products = [], onAddToCart, onRemoveFromCart, onQuantityChange, cartItems = [] }) => {
    const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

    if (!Array.isArray(cartItems)) {
        
        cartItems = [];
    }

    return (
        <div className="cart-page">
            <div className="auth-tabs">
                {isAuthenticated ? (
                    <button className="auth-button" onClick={() => logout({ returnTo: window.location.origin })}>
                        Logout
                    </button>
                ) : (
                    <button className="auth-button" onClick={() => loginWithRedirect()}>
                        Login
                    </button>
                )}
            </div>

            <h2 className="page-title">Cart</h2>

            <ProductList products={products} onAddToCart={onAddToCart} />
            <Cart
                cartItems={cartItems}
                onRemoveFromCart={onRemoveFromCart}
                onQuantityChange={onQuantityChange}
            />

            {isAuthenticated && cartItems.length > 0 && (
                <Link to="/credit-card">
                    <button className="credit-card-button">Enter Credit Card Information</button>
                </Link>
            )}
        </div>
    );
};

export default CartPage;
