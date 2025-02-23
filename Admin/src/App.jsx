/* eslint-disable no-unused-vars */
import React from "react";
import { ToastContainer } from "react-toastify";
import Auth from "./components/Auth/Auth";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Auth>
        {/* <Navbar /> */}
      </Auth>
      <AdminDashboard />
      <ToastContainer />
    </div>
  );
};

export default App;
