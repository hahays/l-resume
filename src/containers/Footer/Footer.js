import React from "react";
import "./Footer.css";

let releaseDate = "2022";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span>Developed By Roman Zhukov, {releaseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
