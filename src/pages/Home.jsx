import React, { useState } from 'react';
// Import FoodCard component
import FoodCard from '../components/FoodCard';

/*
  Home Page Component:
  Displays the hero banner, mood-based interactive section,
  list of popular food cards, and visual categories.
*/
export default function Home({ onAddToCart }) {
  /*
    React useState Hook:
    We use it here to store the user's selected mood, and the corresponding recommended text.
    - 'mood' stores the selected mood keyword (e.g., 'Spicy')
    - 'recommendation' stores the recommendation string that is rendered below
  */
  const [mood, setMood] = useState('Relaxed');
  const [recommendation, setRecommendation] = useState('Try our Creamy Alfredo Tagliatelle Pasta 🍝');

  // Hardcoded array of 6 popular dishes for the Popular Food Section
  const popularDishes = [
    {
      id: "p1",
      name: "Spicy Pepperoni Pizza",
      desc: "Fresh baked crust loaded with mozzarella cheese and spicy slices.",
      price: 389,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&auto=format&fit=crop"
    },
    {
      id: "p2",
      name: "Creamy Alfredo Pasta",
      desc: "Rich butter-cream parmesan sauce tossed over penne pasta.",
      price: 299,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop"
    },
    {
      id: "p3",
      name: "Double Cheese Burger",
      desc: "Juicy twin patties, melted cheddar, lettuce, and secret house dressing.",
      price: 199,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop"
    },
    {
      id: "p4",
      name: "Smashed Avocado Salad",
      desc: "Fresh sliced avocados, cherry tomatoes, sweet corn, and lime juice.",
      price: 189,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop"
    },
    {
      id: "p5",
      name: "Butter Chicken Rice Bowl",
      desc: "Charred tandoori chicken chunks cooked in signature sweet tomato gravy.",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop"
    },
    {
      id: "p6",
      name: "Chocolate Lava Cake",
      desc: "Warm chocolate cake with a rich liquid fudge core and vanilla bean ice cream.",
      price: 149,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop"
    }
  ];

  // Visual Category cards list
  const categories = [
    { name: "Pizza", emoji: "🍕" },
    { name: "Burger", emoji: "🍔" },
    { name: "Pasta", emoji: "🍝" },
    { name: "Indian", emoji: "🍛" },
    { name: "Desserts", emoji: "🍰" },
    { name: "Drinks", emoji: "🥤" }
  ];

  // Function called when a user clicks on any mood button
  const handleMoodSelect = (moodName, recommendationText) => {
    setMood(moodName);
    setRecommendation(recommendationText);
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      
      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">What’s Your Mood Today?</h1>
          <p className="hero-subtitle">Find the perfect food for your mood.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleScrollToMenu}>Explore Menu</button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('mood-section').scrollIntoView({ behavior: 'smooth' })}>
              Find Food
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop" alt="Delicious Food Platter" />
        </div>
      </header>

      {/* MOOD INTERACTIVE SECTION */}
      <section className="mood-section" id="mood-section">
        <h2 className="section-title">Choose Your Mood</h2>
        <p className="section-subtitle">How do you feel? Let us choose the dish!</p>
        
        <div className="mood-buttons-grid">
          <button 
            className={`mood-btn ${mood === 'Hungry' ? 'active' : ''}`}
            onClick={() => handleMoodSelect('Hungry', 'Try our Loaded Double Cheese Burger 🍔')}
          >
            😋 Hungry
          </button>
          <button 
            className={`mood-btn ${mood === 'Relaxed' ? 'active' : ''}`}
            onClick={() => handleMoodSelect('Relaxed', 'Try our Creamy Alfredo Tagliatelle Pasta 🍝')}
          >
            😌 Relaxed
          </button>
          <button 
            className={`mood-btn ${mood === 'Spicy' ? 'active' : ''}`}
            onClick={() => handleMoodSelect('Spicy', 'Try our Spicy Chicken Pizza 🌶️')}
          >
            🔥 Spicy
          </button>
          <button 
            className={`mood-btn ${mood === 'Healthy' ? 'active' : ''}`}
            onClick={() => handleMoodSelect('Healthy', 'Try our Smashed Avocado Salad 🥗')}
          >
            🥗 Healthy
          </button>
          <button 
            className={`mood-btn ${mood === 'Romantic' ? 'active' : ''}`}
            onClick={() => handleMoodSelect('Romantic', 'Try our Flame-Grilled Atlantic Salmon 🍣')}
          >
            ❤️ Romantic
          </button>
          <button 
            className={`mood-btn ${mood === 'Party' ? 'active' : ''}`}
            onClick={() => handleMoodSelect('Party', 'Try our Extra Large Volcano Crust Pizza 🍕')}
          >
            🎉 Party
          </button>
        </div>

        {/* Dynamic Display showing the state recommendation */}
        <div className="mood-recommendation-display">
          <h3>Your Current Vibe: <span className="highlight-text">{mood}</span></h3>
          <p className="recommendation-text">{recommendation}</p>
        </div>
      </section>

      {/* POPULAR FOOD SECTION */}
      <section className="popular-section" id="menu-section">
        <h2 className="section-title">Popular Dishes</h2>
        
        {/* 
          React Array .map():
          We map over the popularDishes array to dynamically render a FoodCard component 
          for each dish, passing the 'food' object and 'onAddToCart' callback as props.
        */}
        <div className="popular-grid">
          {popularDishes.map((dish) => (
            <FoodCard 
              key={dish.id} 
              food={dish} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>

      {/* SIMPLE CATEGORIES (VISUAL ONLY) */}
      <section className="categories-section">
        <h2 className="section-title">Simple Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-card" onClick={() => alert(`Navigating to ${cat.name} Category!`)}>
              <span className="category-emoji">{cat.emoji}</span>
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
