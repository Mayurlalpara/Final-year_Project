/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/admin/login', { name, password });
            localStorage.setItem('token', response.data.token);
            navigate('/add'); // Redirect to admin panel
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleLogin} className="login-button">Login</button>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
