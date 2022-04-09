import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://vk.com/ghoukie">
                <i class="fa fa-vk" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/r.hahays/">
                <i className="fa fa-instagram"> </i>
              </a>
              <a href="https://github.com/hahays">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text"> Roman</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <span className="profile-role-tagline">
                I study programming and dream about petite-girl.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="#contact">
              <button className="btn primary-btn">Contact me</button>
            </a>
            <a href="resume.docx" download="Roman resume.docx">
              <button className="btn highlighted-btn">Get Resume</button>
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
