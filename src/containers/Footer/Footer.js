import React from "react";
import "./Footer.css";
import {
  faVk,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let socialDetails = [
  { icon: faVk, link: "https://vk.com/ghoukie" },
  { icon: faGithub, link: "https://github.com/hahays" },
  { icon: faInstagram, link: "https://www.instagram.com/r.hahays/" },
];

let currentYear = "2022";

const getSocials = () => {
  return socialDetails.map((social, index) => (
    <a rel="noopenar noreferrer" key={index} href={social.link} target="_blank">
      <FontAwesomeIcon className="social-icon" icon={social.icon} />
    </a>
  ));
};

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span>All rights reserved © Ghoukie {currentYear}</span>
        </div>
        <div className="main-footer-socials">{getSocials()}</div>
      </div>
    </div>
  );
};

export default Footer;
