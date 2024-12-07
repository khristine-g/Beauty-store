import React, { useState } from 'react';
import '../NewsletterModal.css';

const NewsletterModal = ({ onClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        onClose(); // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>×</button>
                <div className="modal-image">
                    <img src=" https://www.advancedcosmeceuticals.com.au/cdn/shop/articles/IWD_2024_AC_Skin_Journal_banner_2200x880_df5a52ae-adfe-4b9a-9b12-9fc2571648fa_2500x.jpg?v=1709506912" alt="Newsletter" />
                </div>
                <div className="modal-text">
                    <h2 className='modal-header'>Sign Up to Our Newsletter</h2>
                    <p className='modal-paragraph'>Be the first to get the latest news about trends, promotions, and much more!</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" className="join-button">Join</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterModal;
