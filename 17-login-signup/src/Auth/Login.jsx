import React from 'react';
import LoginForm from './components/LoginForm';
import '../styles/auth.css';

const Login = () => {
    const handleLogin = (credentials) => {
        console.log('Login credentials:', credentials);
        // Add your login logic here
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
};

export default Login;