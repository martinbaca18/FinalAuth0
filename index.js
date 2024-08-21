import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth0ProviderWithHistory from './auth0-provider';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Auth0ProviderWithHistory>
            <App />
        </Auth0ProviderWithHistory>
    </BrowserRouter>
);
