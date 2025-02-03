/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home';
import Auth from './components/Auth/Auth';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Auth>
        <Navbar />
      </Auth>
      <hr />
      <div className="app-compo">
        <Home />
      </div>
    </div>
  );
};

export default App;
