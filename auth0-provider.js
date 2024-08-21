// src/auth/AuthProvider.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider = ({ children }) => {
    return (
        <Auth0Provider
            domain="dev-yw8r35siun0zuvcw.us.auth0.com" // Replace with your actual Auth0 domain
            clientId="o3erqXUGTUqWl8uWW7J8h6UUtgkMFbre" // Replace with your actual Auth0 client ID
            authorizationParams={{ redirect_uri: window.location.origin }} // Updated parameter
        >
            {children}
        </Auth0Provider>
    );
};

export default AuthProvider;
