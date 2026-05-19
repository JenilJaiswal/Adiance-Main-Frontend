"use client";

import { useNavigate } from '@/compat/react-router-dom';

/**
 * Custom hook to handle navigation with Ctrl/Cmd+Click support
 * @param {string} to - The path to navigate to
 * @returns {function} Click handler function
 */
const useNavigationClick = (to) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        // Check if Ctrl (Windows/Linux) or Cmd (Mac) key is pressed
        const isModifierClick = event.ctrlKey || event.metaKey;

        if (isModifierClick) {
            // Open in new tab
            event.preventDefault();
            window.open(to, '_blank');
        } else {
            // Normal navigation - let React Router handle it
            // Don't prevent default, let the Link component handle it
        }
    };

    return handleClick;
};

export default useNavigationClick;
