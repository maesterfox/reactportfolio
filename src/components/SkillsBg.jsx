import React, { useEffect } from "react";
import htmlLogo from "../assets/img/html.png";
import cssLogo from "../assets/img/css.png";
import jsLogo from "../assets/img/js.png";
import reactLogo from "../assets/img/react.png";
import nodejsLogo from "../assets/img/node-js.png";
import scssLogo from "../assets/img/scss.png";
import linuxLogo from "../assets/img/linux.png";
import awsLogo from "../assets/img/aws.png";
import azureLogo from "../assets/img/azure.png";
import expressLogo from "../assets/img/express.png";
import nextLogo from "../assets/img/next.png";
import mongoLogo from "../assets/img/mongo.png";
import sqlLogo from "../assets/img/mysql.png";
import reduxLogo from "../assets/img/redux.png";
import restLogo from "../assets/img/rest.png";
import phpLogo from "../assets/img/php.png";

const images = [
  htmlLogo,
  cssLogo,
  jsLogo,
  nodejsLogo,
  scssLogo,
  linuxLogo,
  awsLogo,
  reactLogo,
  azureLogo,
  expressLogo,
  nextLogo,
  mongoLogo,
  sqlLogo,
  reduxLogo,
  restLogo,
  phpLogo,
];

const SkillsBg = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector("SkillsBg-container").classList.add("fade-out");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = () => {
    onLoadingComplete();
  };

  return (
    <div className="SkillsBg-container" onAnimationEnd={handleAnimationEnd}>
      <div className="SkillsBg-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Technology ${index + 1}`}
            className={`skillImg skillImg${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsBg;
