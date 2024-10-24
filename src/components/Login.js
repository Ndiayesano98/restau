import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={onChange} 
                    placeholder="Email" 
                    className="w-full p-2 mb-4 border rounded"
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={onChange} 
                    placeholder="Password" 
                    className="w-full p-2 mb-4 border rounded"
                />
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
