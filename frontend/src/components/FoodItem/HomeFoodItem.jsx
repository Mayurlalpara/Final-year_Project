/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext.jsx";
import "./ItemCard.css"; // New CSS file for styling

const HFoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="item-card">
      <div className="item-image-container">
        <img className="item-image" src={`${url}/images/${image}`} alt={name} />
        {!cartItems?.[id] ? (
          <button onClick={() => addToCart(id)} className="add-button">
            Add to Cart
          </button>
        ) : (
          <div className="item-counter">
            <button onClick={() => removeFromCart(id)} className="counter-decrement">-</button>
            <span className="counter-quantity">{cartItems[id]}</span>
            <button onClick={() => addToCart(id)} className="counter-increment">+</button>
          </div>
        )}
      </div>
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">₹ {price}</p>
      </div>
    </div>
  );
};

export default HFoodItem;
