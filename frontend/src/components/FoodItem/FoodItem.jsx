/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="fooditem">
      <div className="fooditem-img-container">
        <img className="fooditem-img" src={`${url}/images/` + image} alt="" />
        {!cartItems?.[id] ? (
          <div tabIndex="0" onClick={() => addToCart(id)} className="plusButton add">
            <svg className="plusIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <g mask="url(#mask0_21_345)">
                <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
              </g>
            </svg>
          </div>
        ) : (
          <div className="fooditem-counter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="fooditem-info">
        <div className="fooditem-name">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="fooditem-desc">{description}</p>
        <p className="fooditem-price">₹ {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
