/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';

import Auth from '../../components/Auth/Auth';
import Sidebar from '../../components/Sidebar/Sidebar';
import Add from '../Add/Add';
import List from '../List/List';
import Orders from '../Orders/Orders';
import UserList from '../UserList/UserList';
import FeedbackList from '../FeedbackList/FeedbackList';
import Login from '../Login/Login';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='home'>
            <Auth>
                <Sidebar />
            </Auth>

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
    );
};

export default Home;
