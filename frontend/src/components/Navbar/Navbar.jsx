/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import ChatBot from "../ChatBot/ChatBot.jsx";

const Navbar = ({ setShowLogin, setShowChat, showChat }) => {
  const [menu, setMenu] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalAmount, setToken, token } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`); // Navigate to search page with query
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="nav-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to={"/"} onClick={() => setMenu("home")}>
            HOME
          </Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <Link to={"/menu"} onClick={() => setMenu("menu")}>
            MENU
          </Link>
        </li>
        <li className={menu === "order" ? "active" : ""}>
          <Link to={"/orderfood"} onClick={() => setMenu("order")}>
            ORDER
          </Link>
        </li>
        <li className={menu === "contect us" ? "active" : ""}>
          <Link to={"/about"} onClick={() => setMenu("contect us")}>
            ABOUT US
          </Link>
        </li>
      </ul>
      <div className="navbar-right">
        {/* <Link to={'/chatbot'} >
                </Link> */}
        <img
          onClick={() => setShowChat((prev) => !prev)}
          className="chatbot-icon"
          src={assets.bot1}
          alt="Chatbot Icon"
        />

        <Link to={"/search"}>
          <img src={assets.search_icon} alt="Search Icon" />
        </Link>
        {/* <form onSubmit={handleSearch} className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    <button type="submit">
                    </button>
                </form> */}
        <div className="nb-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>
            Sign up
            <div className="arrow-wrapper">
              <div className="arrow"></div>
            </div>
          </button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile Icon" />
            <ul className="navbar-profile-drop">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Bag Icon" />
                <p>My Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout Icon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
