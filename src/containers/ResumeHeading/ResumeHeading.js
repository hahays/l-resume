import React from "react";
import "./ResumeHeading.css";

function ResumeHeading(props) {
  return (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        {props.image && <img className="project-image" src={props.image} />}
        <span>{props.heading ? props.heading : ""}</span>
        {props.fromDate && props.toDate ? (
          <div className="heading-date">
            {props.fromDate + "-" + props.toDate}
          </div>
        ) : (
          ""
        )}
      </div>
      {props.subHeading && (
        <div className="resume-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      )}
      {props.description && (
        <div className="resume-heading-description">
          <span>{props.description}</span>
        </div>
      )}
    </div>
  );
}

export default ResumeHeading;
