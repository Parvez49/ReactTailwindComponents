import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    );
  };
  
  export default ThemeToggle;