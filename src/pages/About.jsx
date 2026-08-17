import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">About MoodMeal</h1>
          <p className="hero-subtitle">Food That Matches Your Mood</p>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&auto=format&fit=crop" alt="Delicious Food Collection" />
        </div>
      </header>

      {/* INTRO SECTION */}
      <section className="about-section">
        <div className="about-text-center">
          <p>
            MoodMeal is a simple and user-friendly food discovery platform that helps users find the perfect dish based on their current mood. Whether you are feeling hungry, relaxed, spicy, healthy, romantic, or ready to party, MoodMeal recommends food that matches your vibe.
          </p>
        </div>
      </section>

      {/* OUR IDEA */}
      <section className="about-section bg-light-section">
        <h2 className="section-title">Our Idea</h2>
        <div className="about-text-center">
          <p>
            Choosing what to eat can sometimes be difficult. MoodMeal makes this easier by connecting your mood with delicious food choices. Users can select their mood and explore dishes that suit how they feel.
          </p>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="about-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="categories-grid about-offer-grid">
          <div className="category-card">
            <span className="category-emoji">🎯</span>
            <h3>Mood-Based Recommendations</h3>
            <p className="about-card-desc">Discover dishes based on your current mood.</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">⭐</span>
            <h3>Popular Dishes</h3>
            <p className="about-card-desc">Explore popular and highly rated food items.</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">🍔</span>
            <h3>Simple Categories</h3>
            <p className="about-card-desc">Browse Pizza, Burger, Pasta, Indian, Desserts, and Drinks.</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">🛒</span>
            <h3>Easy Cart System</h3>
            <p className="about-card-desc">Add your favorite dishes to the cart easily.</p>
          </div>
          <div className="category-card">
            <span className="category-emoji">✨</span>
            <h3>Clean & Simple Experience</h3>
            <p className="about-card-desc">Enjoy a simple interface that is easy to navigate.</p>
          </div>
        </div>
      </section>

      {/* OUR MISSION & WHY MOODMEAL */}
      <section className="about-section bg-light-section">
        <h2 className="section-title">Our Mission</h2>
        <div className="about-text-center">
          <p>
            Our mission is to make food discovery simple, enjoyable, and personalized. We want every user to find something delicious that matches their mood.
          </p>
        </div>
        
        <div className="mood-recommendation-display about-tagline-box">
          <h3>Why MoodMeal?</h3>
          <p className="recommendation-text">Your Mood. Your Food. Your Choice.</p>
          <p style={{ marginTop: '15px', color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 500 }}>
            MoodMeal combines a simple food ordering experience with mood-based recommendations to make choosing your next meal more fun.
          </p>
        </div>
      </section>
    </div>
  );
}
