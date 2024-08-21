// src/pages/LoginPage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginPage.css'; // Ensure this path is correct

const LoginPage = () => {
    const { loginWithRedirect, isAuthenticated, isLoading, error } = useAuth0();

    if (isLoading) {
        return <div className="login-loading">Loading...</div>;
    }

    if (isAuthenticated) {
        // Redirect or show a different component if already authenticated
        return <div>Already logged in. Redirecting...</div>;
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <button onClick={() => loginWithRedirect()} className="login-button">
                    Login with Auth0
                </button>
                {error && <p className="login-error">Authentication error: {error.message}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
