/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-blur"><img src="../../assets/3.jpeg" alt="" /></div>
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
        Discover our unique menu of handcrafted meals, made with love and delivered with care.Experience the taste of home. We prepare every meal with the same care and attention you would, and deliver it right to your doorstep.
        </p>
        
<div>
  <button className="button">
  <a href="#explore-menu">View Menu</a>
  </button>
</div>

        
      </div>
    </div>
  );
};

export default Header;
