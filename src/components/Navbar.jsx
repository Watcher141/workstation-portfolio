import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Check localStorage for the user's preferred mode
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') !== 'light-mode'
  );

  // Function to toggle dark/light mode
  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('light-mode', newMode);
    localStorage.setItem('theme', newMode ? 'light-mode' : 'dark-mode');
  };

  // Apply the saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
      document.body.classList.add('light-mode');
      setIsDarkMode(false);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo on the Left */}
        <h1 className="logo">Workstation</h1>

        {/* Nav Links and Toggle Button Grouped on the Right */}
        <div className="nav-actions">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* Dark/Light Mode Toggle Button */}
          <button className="mode-toggle" onClick={toggleMode}>
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;