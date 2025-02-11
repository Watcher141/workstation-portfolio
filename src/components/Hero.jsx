import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const words = ['business', 'website designs', 'apps', 'brands', 'experiences'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeSound = new Audio('');
    const typingInterval = setInterval(() => {
      if (charIndex < 'Welcome to Workstation'.length) {
        setTypedText((prev) => prev + 'Welcome to Workstation'[charIndex]);
        setCharIndex((prev) => prev + 1);
        typeSound.currentTime = 0;
        typeSound.play();
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [charIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Word stays visible for 3 seconds
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="hero">

      <div className="container">
        
        <div className="text-container">
          <motion.h1 className="hero-title">
            {typedText}
            <motion.span
              className="cursor"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
            >
              |
            </motion.span>
          </motion.h1>

          <div className="hero-subtitle">
            We build your &nbsp;
            <motion.span
              key={currentWordIndex}
              className="highlight rotating-box"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {words[currentWordIndex]}
            </motion.span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="hero-button"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
