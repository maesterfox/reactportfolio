import React, { useEffect } from "react";

const Loader = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".loader-container").classList.add("fade-out");
    }, 4000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    onLoadingComplete(); // Notify App.jsx that loading and fading out is complete
  };

  return (
    <div className="loader-container" onAnimationEnd={handleAnimationEnd}>
      <div className="spinner">
        <div className="orb1"></div>
        <div className="orb2"></div>
        <div className="orb3"></div>
        <div className="orb4"></div>
        <div className="orb5"></div>
        <div className="orb6"></div>
        <div className="orb7"></div>
        <div className="orb8"></div>
        <div className="orb9"></div>
        <div className="orb10"></div>
      </div>
    </div>
  );
};

export default Loader;
