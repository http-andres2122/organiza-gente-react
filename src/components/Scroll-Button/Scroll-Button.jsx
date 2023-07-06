import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import './Scroll-Button.css';


const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Cambia 100 a la posición en la que deseas mostrar el botón
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-button ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp/>
    </button>
  );
};

export default ScrollButton;