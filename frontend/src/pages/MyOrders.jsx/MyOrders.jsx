/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/Storecontext";
import axios from "axios";
import { assets } from "../../assets/assets";
import FeedBack from "../../components/FeedBack/FeedBack";

const MyOrders = () => {
  const { token, userId, url } = useContext(StoreContext);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State for managing the loader

  useEffect(() => {
    // Store userId in local storage
    if (userId) {
      localStorage.setItem("userId", userId);
    }
  }, [userId]);

  const fetchOrders = async () => {
    try {
      setLoading(true); // Show loader when fetching starts
      const storedUserId = localStorage.getItem("userId"); // Retrieve userId from local storage
      const response = await axios.post(
        `${url}/api/order/userorders`,
        { userId: storedUserId },
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError("Failed to fetch orders. Please try again later.");
    } finally {
      setLoading(false); // Hide loader once fetching is done
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="myorders">
      <h2>My Orders</h2>
      <div className="container">
        {loading ? (
          <p>Loading orders...</p> // Display loader when `loading` is true
        ) : error ? (
          <p>{error}</p>
        ) : data && data.length > 0 ? (
          data.map((order, index) => (
            <div key={index} className="myorders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>₹{order.amount}</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))
        ) : (
          <p>No Orders found.</p>
        )}
      </div>
      <FeedBack />
    </div>
  );
};

export default MyOrders;
