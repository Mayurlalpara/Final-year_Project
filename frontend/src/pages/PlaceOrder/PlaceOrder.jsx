/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/Storecontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FeedBack from '../../components/FeedBack/FeedBack';

const PlaceOrder = () => {
    const navigate = useNavigate();
    const { getTotalAmount, token, food_list, cartItems,url } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        phone: ""
    });
    const [orderError, setOrderError] = useState(null);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const placeOrder = async (event) => {
        event.preventDefault();
        setOrderError(null);

        let orderItems = [];
        food_list.forEach((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = { ...item, quantity: cartItems[item._id] };
                orderItems.push(itemInfo);
            }
        });

        let orderdata = {
            address: data,
            items: orderItems,
            amount: getTotalAmount() + 20
        };

        try {
            let response = await axios.post(`${url}/api/order/place`, orderdata, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            } else {
                setOrderError(response.data.msg);
            }
        } catch (error) {
            console.error("Error placing order:", error);
            setOrderError("An error occurred while placing the order. Please try again.");
        }
    };

    useEffect(() => {
        if (!token || getTotalAmount() === 0) {
            navigate("/cart");
        }
    }, [token, getTotalAmount, navigate]);

    return (
        <form onSubmit={placeOrder} className="order">
            <div className="order-content">
                <div className="order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-filds">
                        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Enter Your Firstname' />
                        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Enter Your Last name' />
                    </div>
                    <div className="two-fields">
                    <input required name='email' onChange={onChangeHandler} type="email" value={data.email} placeholder='Enter Your Email Address' />
                    </div>
                    <input required name='street' onChange={onChangeHandler} type="text" value={data.street} placeholder='Enter Your Street' />
                    <div className="multi-filds">
                        <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='Enter Your City' />
                        <input required type="text" placeholder='state' name='state' onChange={onChangeHandler} value={data.state} />
                    </div>
                    <div className="multi-filds">
                        <input required name='pincode' onChange={onChangeHandler} value={data.pincode} type="text" placeholder='Enter Your Pincode' />
                        <input required type="text" placeholder='Enter Your Country' name='country' onChange={onChangeHandler} value={data.country} />
                    </div>
                    <input required type="number" placeholder='Enter Your Phone' name='phone' onChange={onChangeHandler} value={data.phone} />
                </div>
                <div className="order-right">
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
                        {orderError && <p className="error-message">{orderError}</p>}
                        <button type='submit'>Proceed To Payment</button>
                    </div>
                </div>
            </div>
            <FeedBack/>
        </form>
    );
};

export default PlaceOrder;
