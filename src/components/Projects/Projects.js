import React, { useState } from "react";
import ScreenHeading from "../ScreenHeading/ScreenHeading";
import Project from "../../containers/Project/Project";
import IGM1 from "./img/todo.png";
import IGM2 from "./img/marioQuiz.png";
import IGM3 from "./img/gameBox.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./Projects.css";

const projectsDetails = [
  {
    id: 1,
    image: IGM2,
    title: "MARIO QUIZ",
    description: (
      <span>
        Join Mario on his adventure and help him to save Princess Peach. Created
        with <span className="used-react"> REACT</span>,
        <span className="used-js"> JS</span> and
        <span className="used-nes"> NES.CSS</span>
      </span>
    ),
    source: "https://github.com/hahays/marioQuiz",
    live: "https://hahays.github.io/marioQuiz/",
  },

  {
    id: 2,
    image: IGM3,
    title: "GAME BOX",
    description: (
      <span>
        Hello straight from the 90s. A collection of 6 classic 16bit games.
        Created with
        <span className="used-react"> REACT</span>,
        <span className="used-js"> JS</span> and
        <span className="used-nes"> NES.CSS</span>
      </span>
    ),
    source: "https://github.com/hahays/Game-Box",
    live: "https://hahays.github.io/Game-Box/",
  },
  {
    id: 3,
    image: IGM1,
    title: "TODO APP",
    description: (
      <span>
        Classic TODO Application. TODO's are saved locally in your browser.
        Created with <span className="used-react"> REACT</span>,
        <span className="used-js"> JS</span> and
        <span className="used-paper"> PAPER.CSS</span>
      </span>
    ),
    source: "https://github.com/hahays/todo.app",
    live: "https://hahays.github.io/todo.app/",
  },
];

function Projects() {
  const renderProjects = (
    <div className="projects-screen-container" key="projects">
      <Swiper
        className="container portfolio__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {projectsDetails.map((projectsDetails, index) => (
          <SwiperSlide key={index}>
            <Project
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
  );

  return (
    <section id="projects">
      <div className="projects-container screen-container" id="Projects">
        <div className="projects-content">
          <ScreenHeading title={"Projects"} subHeading={"My pet-projects"} />

          <div className="empty-box">
            <div className="projects-card-main">{renderProjects}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
