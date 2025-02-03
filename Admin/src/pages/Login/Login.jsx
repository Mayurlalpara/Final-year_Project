import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', { name, password });
            localStorage.setItem('token', response.data.token);
            // Redirect to admin panel
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default AdminLogin;
