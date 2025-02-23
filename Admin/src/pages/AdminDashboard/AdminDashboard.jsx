/* eslint-disable no-unused-vars */
import React from 'react';
import './AdminDashboard.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../../../src/components/Sidebar/Sidebar'
import Add from '../../../src/pages/Add/Add'
import List from '../../../src/pages/List/List'
import Orders from '../../../src/pages/Orders/Orders'
import UserList from '../../../src/pages/UserList/UserList'
import FeedbackList from '../../../src/pages/FeedbackList/FeedbackList'
import Auth from '../../components/Auth/Auth';
import Login from '../Login/Login';
import Navbar from '../../components/Navbar/Navbar';

const AdminDashboard = () => {
    return (
        <div className='admindashboard'>
            <Auth>
            <div className="sidebar">
            <Sidebar />
            </div>
            </Auth>
            <div className="compo">
            <Routes>
                <Route path="/adminlogin" element={<Login />} />
                <Route path="*" element={<Navigate to="/adminlogin" />} />
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/userlist' element={<UserList />} />
                <Route path='/feedbacks' element={<FeedbackList />} />
            </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
