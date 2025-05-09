/* eslint-disable no-unused-vars */
import React from "react";
import "./Orders.css";
import { useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from "react";
import { assets,url } from "../../assets/assets";


const Orders = () => {

  const [orders,setOrders] = useState([]);
  

  const fetchAllOrders = async ()=>{
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data);
      //console.log(response.data.data)
    } else {
      toast.console.error("error");
      
    }
  }

  const handleStatus = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        console.log("Error: " + response.data.msg);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  
  useEffect(()=>{
    fetchAllOrders();
  },[])

  return <div className="order add">
    <h3>Oredr Page</h3>
    <div className="order-list">
      {orders.reverse().map((order,index)=>(
        <div className="order-item" key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
              {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName+" "+order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street+","}</p>
                <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.pincode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>₹ {order.amount}</p>
            <select onChange={(event)=>handleStatus(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
        </div>

      ))}
    </div>
  </div>;
};

export default Orders;
