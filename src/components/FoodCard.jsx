import React from 'react';

/* 
  FoodCard Component:
  Displays details of a single dish (image, name, description, rating, price).
  Props:
  - 'food': an object containing individual food item details.
  - 'onAddToCart': a callback function to add this food to the cart state.
*/
export default function FoodCard({ food, onAddToCart }) {
  // Destructure properties from the food object for easy access
  const { name, desc, price, rating, image } = food;

  return (
    <div className="food-card">
      <div className="food-card-img-wrapper">
        <img src={image} alt={name} className="food-card-img" />
      </div>
      
      <div className="food-card-content">
        <h3 className="food-name">{name}</h3>
        <p className="food-desc">{desc}</p>
        
        <div className="food-meta">
          <span className="food-rating">⭐ {rating}</span>
          <span className="food-price">₹{price}</span>
        </div>

        {/* Add to Cart button triggers onAddToCart prop function */}
        <button className="add-to-cart-btn" onClick={() => onAddToCart(food)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
