/* eslint-disable no-unused-vars */
import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Food Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
            <NavLink to='/userlist' className="sidebar-option">
            <img src={assets.group_icon} className='userslist-icon' alt="" />
            <p>Users list</p>
            </NavLink>
            <NavLink to='/feedbacks' className="sidebar-option">
            <img src={assets.feedback_icon1} className='userslist-icon' alt="" />
            <p>Feedbacks</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
