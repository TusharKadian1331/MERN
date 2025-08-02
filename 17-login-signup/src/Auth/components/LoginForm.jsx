import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
                <div className="d-flex justify-content-between">
                    <label htmlFor="password">Password</label>
                    <Link to="/forgot-password" className="forgot-password">
                        Forgot password?
                    </Link>
                </div>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            
            <button type="submit" className="btn-primary">
                Sign In
            </button>
            
            <div className="form-footer">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
        </form>
    );
};

export default LoginForm;