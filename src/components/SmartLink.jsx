"use client";

import React from 'react';
import { Link } from '@/compat/react-router-dom';
import useNavigationClick from '../hooks/useNavigationClick';

/**
 * SmartLink component that wraps React Router's Link component
 * Supports Ctrl+Click (Windows/Linux) or Cmd+Click (Mac) to open in new tab
 * Regular clicks navigate normally within the same page
 * 
 * @param {object} props - All standard Link props (to, className, style, children, etc.)
 */
const SmartLink = ({ to, children, onClick, ...rest }) => {
    const handleNavigationClick = useNavigationClick(to);

    const handleClick = (event) => {
        // Call the navigation click handler
        handleNavigationClick(event);

        // Call any additional onClick handler passed as prop
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <Link to={to} onClick={handleClick} {...rest}>
            {children}
        </Link>
    );
};

export default SmartLink;
