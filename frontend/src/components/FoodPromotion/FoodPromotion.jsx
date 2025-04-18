/* eslint-disable no-unused-vars */
import React from 'react';
import './FoodPromotion.css'; // Import CSS for improved styling
import { assets } from '../../assets/assets';

const FoodPromotion = () => {
  return (
    <div className="food-promotion">
      <div className="promo-content">
        {/* Left Image */}
        <img src={assets.hburger} alt="Burger" className="food-item left" />

        {/* Center Text */}
        <div className="promo-text">
          <h1>Better Food for More People</h1>
          <p>For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep.</p>
        </div>

        {/* Right Image */}
        <img src={assets.hpizza} alt="Pizza" className="food-item right" />
      </div>

      {/* Statistics Section */}
      <div className="statistics">
        <div className="stat-item">
          <span>100,000+</span>
          <p>Users</p>
        </div>
        <div className="stat-item">
          <span>9+</span>
          <p>Cities</p>
        </div>
        <div className="stat-item">
          <span>300,000+</span>
          <p>Orders Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default FoodPromotion;
