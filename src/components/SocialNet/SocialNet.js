import React from "react";
import "./SocialNet.css";
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

const getSocials = () => {
  return socialDetails.map((social, index) => (
    <a rel="noopenar noreferrer" key={index} href={social.link} target="_blank">
      <FontAwesomeIcon className="social-icon" icon={social.icon} />
    </a>
  ));
};

function SocialNet() {
  return <div className="main-footer-socials">{getSocials()}</div>;
}

export default SocialNet;
