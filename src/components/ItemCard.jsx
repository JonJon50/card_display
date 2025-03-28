import React, { useState } from 'react';
import './ItemCard.css';

const ItemCard = ({ name, description, price, image }) => { 
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => setShowDetails(!showDetails);
    const handleAddToCart = () => console.log(`Added ${name} to cart.`);

    return (
        <div className="item-card">
            <img src={image} alt={name} className="product-img" />
            <h2>{ name }</h2>
            <p className="price">${price}</p>
            <button onClick={handleToggleDetails}>
                {showDetails ? 'Hide Details' : 'View Details'}
            </button>
            {showDetails && <p className="details">{description}</p>}
            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};
export default ItemCard;