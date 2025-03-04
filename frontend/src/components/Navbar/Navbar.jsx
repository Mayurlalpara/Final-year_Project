/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/Storecontext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const { getTotalAmount, setToken, token } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <img src={assets.logo} alt="" className="logo" />
            </Link>
            <ul className="nav-menu">
                <li className={menu === "home" ? "active" : ""}> 
                    <Link to={'/'} onClick={() => setMenu('home')}>HOME</Link>
                </li>
                <li className={menu === "menu" ? "active" : ""}>
                    <a href='/#explore-menu' onClick={() => setMenu('menu')}>MENU</a>
                </li>
                <li className={menu === "order" ? "active" : ""}>
                    <Link to={'/search'} onClick={() => setMenu('order')}>ORDER</Link>
                </li>
                <li className={menu === "contect us" ? "active" : ""}>

                    <Link to={'/about'} onClick={() => setMenu('contect us')}>ABOUT US</Link>
                </li>
            </ul>
            <div className="navbar-right">
                <Link to={'/search'}>
                    <img src={assets.search_icon} alt="" />
                </Link>
                <div className="nb-search-icon">
                    <Link to={'/cart'}>
                        <img src={assets.basket_icon} alt="" />
                    </Link>
                    <div className={getTotalAmount() === 0 ? '' : "dot"}></div>
                </div>
                {!token ?
                    <button onClick={() => setShowLogin(true)}>
                        Sign up
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button> :
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="" />
                        <ul className='navbar-profile-drop' >
                            <li onClick={() => navigate("/myorders")} ><img src={assets.bag_icon} alt="" /><p>My Orders</p></li>
                            <hr />
                            <li onClick={logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>
                }


                </div>
            </div>
    );
};

export default Navbar;