import React from "react";
import RESUME from "../../../assets/Resume/resume.pdf";
import "./Profile.css";

const linksInfo = [
  {
    name: "instagram",
    source: "https://www.instagram.com/r.hahays/",
    classname: "fa fa-instagram",
  },
  {
    name: "vk",
    source: "https://vk.com/ghoukie",
    classname: "fa fa-vk",
  },
  {
    name: "github",
    source: "https://github.com/hahays",
    classname: "fa fa-github",
  },
];

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {linksInfo.map((link) => {
                return (
                  <a href={link.source}>
                    <i className={link.classname} aria-hidden="true"></i>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">HELLO! </span>
          </div>
          <div className="profile-details-role">
            <p className="profile-role-tagline">
              My name is Roman, i am a web-developer. Love create some
              interesting disign for web sites.There is a little information
              about me and my pet-projects.
            </p>
          </div>

          <div className="profile-options">
            <a href="#contact">
              <button className="btn primary-btn">SEND</button>
            </a>
            <a href={RESUME} download="Roman resume.pdf">
              <button className="btn highlighted-btn">GET RESUME</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
