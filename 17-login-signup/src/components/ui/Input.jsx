import React from 'react';
import '../../styles/components/input.css';

const Input = ({ type, placeholder, value, onChange, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`input ${className}`}
        />
    );
};

export default Input;