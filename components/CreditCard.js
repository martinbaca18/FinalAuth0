import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './CreditCard.css'; // Add a CSS file for styling

const CreditCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSave = () => {
        // Validate card number format (4 groups of 4 digits)
        if (/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
            localStorage.setItem('creditCard', cardNumber);
            alert('Card saved successfully!');
            navigate('/cart'); // Redirect to cart page upon successful save
        } else {
            alert('Invalid card number format. Please enter in the format: 1234 5678 9012 3456');
        }
    };

    return (
        <div className="credit-card-container">
            <h2>Enter Credit Card Information</h2>
            <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                maxLength="19" // Limit input length to 19 characters (including spaces)
                className="credit-card-input"
            />
            <button onClick={handleSave} className="save-button">Save</button>
        </div>
    );
};

export default CreditCard;
