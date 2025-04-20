/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext.jsx";
//import toast from 'react-toastify'
const Login = ({ setShowLogin }) => {
  const { setToken, token,url } = useContext(StoreContext);
  const [curState, setCurState] = useState("Login");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetails((details) => ({ ...details, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newURL = url;
    if (curState === "Login") {
      newURL += "/api/user/login";
    } else {
      newURL += "/api/user/register";
    }
    const response = await axios.post(newURL, details);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.msg);
    }
  };

  return (
    <div className="login" id="login">
      <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {curState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onchangehandler}
              value={details.name}
              placeholder="Enter Your Name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            onChange={onchangehandler}
            value={details.email}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onchangehandler}
            value={details.password}
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit">
          <span>{curState === "Login" ? "Login" : "Create Account"}</span>
        </button>
        <div className="login-condition">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            <p>
              By Continuing, I agree to the terms and condition and use of
              Privacy policy.
            </p>
          </label>
        </div>
        {curState === "Login" ? (
          <p>
            Create New Account?
            <span onClick={() => setCurState("Sign up")}>Click Here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an Account?
            <span onClick={() => setCurState("Login")}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
