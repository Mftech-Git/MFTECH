// src/components/LoadingAnimation.js
import React, { useEffect, useState } from 'react';
import './LoadingAnimation.css'; // Ensure this file is located correctly

const LoadingAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 1000); // duration until the loading screen animation starts

    return () => clearTimeout(timeoutId);
  }, []);

  return show ? (
    <div className="loading-screen">
      <div className="mainframe-text">MAINFRAME TECH</div>
    </div>
  ) : null;
};

export default LoadingAnimation;
