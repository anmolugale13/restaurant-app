import React, { useState } from 'react';
// Import FoodCard for reusable rendering of recommendations
import FoodCard from '../components/FoodCard';

/*
  Dashboard Component:
  Displays the user's statistics, interactive active mood state,
  personalized food cards, order history table, and favorites list.
*/
export default function Dashboard({ onAddToCart }) {
  /*
    useState Hook:
    We use state here to manage:
    - 'currentMood': stores active selection (e.g. '😌 Relaxed')
    - 'showMoodSelector': boolean flag to toggle selection buttons
    - 'favoritesList': array of objects representing favorited dishes
  */
  const [currentMood, setCurrentMood] = useState('😌 Relaxed');
  const [showMoodSelector, setShowMoodSelector] = useState(false);

  const [favoritesList, setFavoritesList] = useState([
    {
      id: "fav-1",
      name: "Creamy Alfredo Pasta",
      price: 299,
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&auto=format&fit=crop"
    },
    {
      id: "fav-2",
      name: "Smashed Avocado Salad",
      price: 189,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&auto=format&fit=crop"
    },
    {
      id: "fav-3",
      name: "Chocolate Lava Cake",
      price: 149,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop"
    }
  ]);

  // Static list of recommended dishes
  const recommendedDishes = [
    {
      id: "r1",
      name: "Garlic Butter Naan Combo",
      desc: "Butter garlic flatbreads served with creamy yellow lentils.",
      price: 249,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop"
    },
    {
      id: "r2",
      name: "Crispy Potato Wedges",
      desc: "Oven-baked potato wedges dusted with oregano seasoning.",
      price: 129,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
    },
    {
      id: "r3",
      name: "Traditional Pasta Alfredo",
      desc: "Tagliatelle cooked in creamy block parmesan cheese sauce.",
      price: 369,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop"
    },
    {
      id: "r4",
      name: "Spicy Volcano Pizza Slice",
      desc: "Spicy marinara pizza slice with ghost pepper toppings.",
      price: 189,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&auto=format&fit=crop"
    }
  ];

  const handleMoodSelect = (moodVal) => {
    setCurrentMood(moodVal);
    setShowMoodSelector(false);
  };

  // Remove favorite from state array
  const handleRemoveFavorite = (id) => {
    setFavoritesList(prev => prev.filter(item => item.id !== id));
  };

  const handleViewOrder = (orderNum) => {
    alert(`Showing details for Order ${orderNum}! Status is Delivered.`);
  };

  const handleReorder = (dishName, price) => {
    alert(`Added ${dishName} to cart for reorder!`);
    onAddToCart({ name: dishName, price: price, image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400" });
  };

  return (
    <div className="dashboard-container">
      
      {/* DASHBOARD HEADER */}
      <header className="dash-header">
        <h2>Welcome Back, Foodie! 👋</h2>
        <p>Ready to discover something delicious?</p>
      </header>

      {/* DASHBOARD STATS SUMMARY CARDS */}
      <div className="dash-stats-grid">
        <div className="stat-card">
          <h3>12</h3>
          <p>Total Orders</p>
        </div>
        <div className="stat-card">
          <h3>{favoritesList.length}</h3>
          <p>Favorites</p>
        </div>
        <div className="stat-card">
          <h3>720</h3>
          <p>Food Points</p>
        </div>
        <div className="stat-card">
          <h3>3</h3>
          <p>Rewards</p>
        </div>
      </div>

      {/* CURRENT MOOD COMPONENT */}
      <section className="dash-mood-widget">
        <div className="mood-widget-header">
          <h3>Your Current Mood: <span className="highlight-text">{currentMood}</span></h3>
          <button className="btn btn-secondary btn-sm" onClick={() => setShowMoodSelector(!showMoodSelector)}>
            {showMoodSelector ? "Close" : "Change Mood"}
          </button>
        </div>

        {/* Conditional rendering of mood selection buttons using state */}
        {showMoodSelector && (
          <div className="dash-mood-selector-buttons">
            <button className="mood-btn" onClick={() => handleMoodSelect('😋 Hungry')}>😋 Hungry</button>
            <button className="mood-btn" onClick={() => handleMoodSelect('😌 Relaxed')}>😌 Relaxed</button>
            <button className="mood-btn" onClick={() => handleMoodSelect('🔥 Spicy')}>🔥 Spicy</button>
            <button className="mood-btn" onClick={() => handleMoodSelect('🥗 Healthy')}>🥗 Healthy</button>
            <button className="mood-btn" onClick={() => handleMoodSelect('❤️ Romantic')}>❤️ Romantic</button>
            <button className="mood-btn" onClick={() => handleMoodSelect('🎉 Party')}>🎉 Party</button>
          </div>
        )}
      </section>

      {/* RECOMMENDED FOOD CARDS GRID */}
      <section className="dash-recommendations">
        <h3>Recommended For You</h3>
        <div className="popular-grid">
          {recommendedDishes.map((food) => (
            <FoodCard 
              key={food.id} 
              food={food} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>

      {/* RECENT ORDERS TABLE */}
      <section className="dash-orders">
        <h3>Recent Orders</h3>
        <div className="table-responsive">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Food</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1001</td>
                <td>Pasta</td>
                <td>₹249</td>
                <td><span className="status-badge delivered">Delivered</span></td>
                <td>
                  <button className="btn btn-secondary btn-xs" onClick={() => handleViewOrder('#1001')}>View</button>
                  <button className="btn btn-primary btn-xs" onClick={() => handleReorder('Pasta', 249)}>Reorder</button>
                </td>
              </tr>
              <tr>
                <td>#1002</td>
                <td>Pizza</td>
                <td>₹329</td>
                <td><span className="status-badge delivered">Delivered</span></td>
                <td>
                  <button className="btn btn-secondary btn-xs" onClick={() => handleViewOrder('#1002')}>View</button>
                  <button className="btn btn-primary btn-xs" onClick={() => handleReorder('Pizza', 329)}>Reorder</button>
                </td>
              </tr>
              <tr>
                <td>#1003</td>
                <td>Burger</td>
                <td>₹199</td>
                <td><span className="status-badge delivered">Delivered</span></td>
                <td>
                  <button className="btn btn-secondary btn-xs" onClick={() => handleViewOrder('#1003')}>View</button>
                  <button className="btn btn-primary btn-xs" onClick={() => handleReorder('Burger', 199)}>Reorder</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAVORITES LIST */}
      <section className="dash-favorites" id="mm-dash-favs-section">
        <h3>Your Favorites ❤️</h3>
        <div className="fav-list-grid">
          {favoritesList.length === 0 ? (
            <p className="no-favs-msg">No favorite dishes. Add some to get started!</p>
          ) : (
            favoritesList.map((fav) => (
              <div key={fav.id} className="fav-item-card">
                <img src={fav.image} alt={fav.name} className="fav-item-img" />
                <div className="fav-item-info">
                  <h4>{fav.name}</h4>
                  <p className="fav-price">₹{fav.price}</p>
                </div>
                <div className="fav-item-actions">
                  <button className="btn btn-secondary btn-xs" onClick={() => handleRemoveFavorite(fav.id)}>Remove</button>
                  <button className="btn btn-primary btn-xs" onClick={() => onAddToCart({ name: fav.name, price: fav.price, image: fav.image })}>Add to Cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

    </div>
  );
}
