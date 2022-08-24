import React, { useState } from "react";
import ScreenHeading from "../../components/ScreenHeading/ScreenHeading";
import ResumeHeading from "../ResumeHeading/ResumeHeading";
import Projects from "../Projects/Projects";
import IGM1 from "./img/todo.png";
import IGM2 from "./img/marioQuiz.png";
import IGM3 from "./img/gameBox.png";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Resume.css";

const resumeBullets = [
  {
    label: "Education",
    logoSrc: "education.svg",
  },
  {
    label: "Programming Skills",
    logoSrc: "programming-skills.svg",
  },
  {
    label: "Projects",
    logoSrc: "projects.svg",
  },
  {
    label: "Interests",
    logoSrc: "interests.svg",
  },
];

const programmingSkillsDetails = [
  {
    skill: "JavaScript",
    ratingPercentage: 60,
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
    skill: "NES CSS",
    ratingPercentage: 75,
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

const projectsDetails = [
  {
    id: 1,
    image: IGM1,
    title: "To do app",
    description: "My do to application. Create with REACT, JS and NESS.CSS",
    source: "https://github.com/hahays/todo.app",
    live: "https://hahays.github.io/todo.app/",
  },
  {
    id: 1,
    image: IGM2,
    title: "Mario Quiz",
    description: "Mario's adventure where you need to save Princess Pitch",
    source: "https://github.com/hahays/marioQuiz",
    live: "https://hahays.github.io/marioQuiz/",
  },
  {
    id: 1,
    image: IGM3,
    title: "Game Box",
    description: "Collection of 6 classic 16bit games",
    source: "https://github.com/hahays/Game-Box",
    live: "https://hahays.github.io/Game-Box/",
  },
];

const Resume = () => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  const resumeDetails = (
    <React.Fragment>
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"LYCEUM № 11, Blagoveschensk"}
          subHeading={"Physics and mathematics class"}
          fromDate={"2001"}
          toDate={"2012"}
        />
        <ResumeHeading
          heading={"Amur State University, Blagoveschensk"}
          subHeading={"Specialist in Economics"}
          fromDate={"2012"}
          toDate={"2017"}
        />
      </div>
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
      <div className="resume-screen-container" key="projects">
        <Swiper
          className="container portfolio__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {projectsDetails.map((projectsDetails, index) => (
            <SwiperSlide key={index}>
              <Projects
                image={projectsDetails.image}
                title={projectsDetails.title}
                description={projectsDetails.description}
                source={projectsDetails.source}
                live={projectsDetails.live}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Writing poetry"
          description="Wrote more than 10 poems and two short stories."
        />
        <ResumeHeading
          heading="Create some Music"
          description="My outlet is to write different electronic music "
        />
        <ResumeHeading
          heading="Sport"
          description=" Breakdancing, athletics, cycling"
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
    <section id="resume">
      <div className="resume-container screen-container" id="Resume">
        <div className="resume-content">
          <ScreenHeading
            title={"Resume"}
            subHeading={"My formal Bio Details"}
          />
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
