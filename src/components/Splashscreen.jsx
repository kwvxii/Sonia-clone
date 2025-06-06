import React, { useEffect, useState } from 'react';
import './Splashscreen.css';
import loadingImg from "src/assets/logosoniabora.svg";

function SplashScreen({ onAnimationEnd }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start the animation
    setAnimate(true);

    // Set a timeout to end the animation after 3 seconds
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={`splash-screen ${animate ? 'animate' : ''}`}>
      <img src={loadingImg} alt="Sonia Logo" className="splash-logo" />
    </div>
  );
}

export default SplashScreen;
