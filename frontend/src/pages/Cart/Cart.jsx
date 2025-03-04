/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = ({ setShowLogin }) => {
    const { cartItems, food_list, removeFromCart, getTotalAmount,url, token } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className="cart" id="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className="cart-items-title cart-items-item">
                                    <img src={`${url}/images/` + item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className="cross">×</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-promocode">
                    <div>
                        <p>Have a discount code? Type it here and save!👇👇</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="Promo code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Sub total</p>
                            <p>{getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalAmount() === 0 ? 0 : 80}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b><b>{getTotalAmount() === 0 ? 0 : getTotalAmount() + 80}</b>
                        </div>
                    </div>
                    <button onClick={!token ?() => setShowLogin(true):() => navigate("/order")}>Proceed To Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;