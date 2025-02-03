/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Auth = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [shownav, setShownav] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token && location.pathname !== '/adminlogin') {
      navigate('/adminlogin');
    } else if (location.pathname === '/adminlogin') {
      setShownav(false);
    } else {
      setShownav(true);
    }
  }, [location, navigate]);

  return <div>{shownav && children}</div>;
};

export default Auth;
