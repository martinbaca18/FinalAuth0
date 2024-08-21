// src/pages/CreditCardPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreditCardPage.css'; // Ensure you create this CSS file for styling

const CreditCardPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 16); // Remove non-digits and limit length
        let formattedValue = value;

        // Format card number as 1234 5678 9012 3456
        if (value.length > 4) {
            formattedValue = `${value.substring(0, 4)} ${value.substring(4, 8)} ${value.substring(8, 12)} ${value.substring(12, 16)}`;
        }

        setCardNumber(formattedValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate card number length
        if (cardNumber.replace(/\s/g, '').length !== 16) {
            setError('Please enter a valid 16-digit card number.');
            return;
        }

        // Save card information to localStorage (this is for demo purposes)
        localStorage.setItem('creditCard', cardNumber);
        // Redirect back to cart page
        navigate('/cart');
    };

    return (
        <div className="credit-card-container">
            <h2>Enter Your Credit Card Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="cardNumber">Credit Card Number:</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreditCardPage;
