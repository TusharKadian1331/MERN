import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!formData.name.trim()) newErrors.name = 'Full name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const { confirmPassword, ...userData } = formData;
            onSubmit(userData);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
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
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Create a password (min 6 characters)"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'error' : ''}
                />
                {errors.confirmPassword && (
                    <span className="error-message">{errors.confirmPassword}</span>
                )}
            </div>
            
            <button type="submit" className="btn-primary">
                Create Account
            </button>
            
            <div className="form-footer">
                Already have an account? <Link to="/login">Sign in</Link>
            </div>
        </form>
    );
};

export default SignupForm;