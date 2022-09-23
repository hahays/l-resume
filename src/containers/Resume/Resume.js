import React, { useState } from "react";
import ScreenHeading from "../../components/ScreenHeading/ScreenHeading";
import ResumeHeading from "../ResumeHeading/ResumeHeading";

import "./Resume.css";

const resumeBullets = [
  {
    label: "Skills",
    logoSrc: "programming-skills.svg",
  },
  {
    label: " Education",
    logoSrc: "education.svg",
  },
  {
    label: "Interests",
    logoSrc: "interests.svg",
  },
];

const programmingSkillsDetails = [
  {
    skill: "JavaScript",
    ratingPercentage: 80,
  },
  {
    skill: "React JS",
    ratingPercentage: 70,
  },
  {
    skill: "TypeScript",
    ratingPercentage: 20,
  },
  {
    skill: "Redux",
    ratingPercentage: 45,
  },
  {
    skill: "HTML",
    ratingPercentage: 70,
  },
  {
    skill: "CSS",
    ratingPercentage: 80,
  },
];

const Resume = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const resumeDetails = (
    <React.Fragment>
      <div className="resume-screen-title">PROGRAMMING SKILLS</div>
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="resume-screen-title">EDUCATION</div>
      <div className="resume-screen-container resume-education" key="education">
        <ResumeHeading
          heading={"LYCEUM № 11, BLAGOVESHENSK"}
          subHeading={"Physics and mathematics class."}
          fromDate={"2001"}
          toDate={"2012"}
        />
        <ResumeHeading
          heading={"AMGU, BLAGOVESHENSK"}
          subHeading={"Specialist in Economics."}
          fromDate={"2012"}
          toDate={"2017"}
        />
      </div>
      <div className="resume-screen-title">INTERESTS</div>
      <div className="resume-screen-container resume-interests" key="interests">
        <ResumeHeading
          heading="LITERATURE"
          description="I like to read foreign literature, The Beat Generation authors like Kerouac and Burroughs are my favorites. Wrote more than 10 poems and two short stories myself."
        />
        <ResumeHeading
          heading="MUSIC"
          description="I'm getting really excited when i listen to Australian future-bass (Flume, WHAT SO NOT, San Holo). This genre's rhythmic pattern makes me feel a bit happier. My personal outlet is to write different electronic music. "
        />
        <ResumeHeading
          heading="SPORT"
          description="I have tried a lot of disciplines since my childhood, but breakdancing, athletics and cycling are my top three."
        />
      </div>
    </React.Fragment>
  );

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails}
      </div>
    );
  };

  return (
    <section id="about-me">
      <div className="resume-container screen-container" id="Resume">
        <div className="resume-content">
          <ScreenHeading title={"About"} subHeading={"My formal Bio Details"} />

          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
