import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreditCardForm.css'; // Import the CSS for styling

const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        const cardPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
        if (cardPattern.test(cardNumber)) {
            localStorage.setItem('creditCard', cardNumber);
            alert('Card saved successfully!');
            navigate('/cart'); // Redirect to Cart page after saving
        } else {
            setError('Invalid card number format. Please enter in the format 1234 5678 9012 3456.');
        }
    };

    return (
        <div className="credit-card-container">
            <h2 className="center-text">Enter Your Credit Card Information</h2>
            <div className="input-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default CreditCardForm;
