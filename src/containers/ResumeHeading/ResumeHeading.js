import React from "react";
import "./ResumeHeading.css";

function ResumeHeading(props) {
  return (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        {props.heading && (
          <div className="resume-heading">
            <span>{props.heading}</span>
          </div>
        )}
        {props.fromDate && props.toDate && (
          <div className="heading-date">
            <span>{props.fromDate + " - " + props.toDate}</span>
          </div>
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
