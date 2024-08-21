import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import CreditCardForm from './components/CreditCardForm'; 

const App = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Routes>
            <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/cart" />} />
            <Route path="/credit-card" element={isAuthenticated ? <CreditCardForm /> : <Navigate to="/login" />} />
            <Route path="/cart" element={isAuthenticated ? <CartPage /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default App;
