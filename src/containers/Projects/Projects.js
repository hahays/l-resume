import React from "react";
import Button from "../../components/Button/Button";
import "./Projects.css";

function Projects({ image, title, description, source, live }) {
  return (
    <div className="projects-container">
      <div className="projects-title">{title}</div>
      <div className="projects-heading">
        <div className="projects-image">
          <img src={image} />
        </div>
        <div className="projects-button">
          <a target="_blank" href={source}>
            <Button
              className={
                source ? "btn primary-btn" : "btn disabled-btn disabled"
              }
              disabled={!source}
              name="SOURCE"
            />
          </a>
          <a target="_blank" href={live}>
            <Button
              className={
                live ? "btn highlighted-btn" : "btn disabled-btn disabled"
              }
              disabled={!live}
              name="LIVE"
            />
          </a>
        </div>
      </div>

      <div className="projects-discription">{description}</div>
    </div>
  );
}

export default Projects;
