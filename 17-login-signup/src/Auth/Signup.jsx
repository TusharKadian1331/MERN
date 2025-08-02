import React from 'react';
import SignupForm from './components/SignupForm';
import '../styles/auth.css';

const Signup = () => {
    const handleSignup = (credentials) => {
        console.log('Signup credentials:', credentials);
        // Add your signup logic here
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <SignupForm onSubmit={handleSignup} />
        </div>
    );
};

export default Signup;