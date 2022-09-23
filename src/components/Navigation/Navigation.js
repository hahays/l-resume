import React, { useState, useEffect } from "react";
import { GET_SCREEN_INDEX } from "../../utilities/commonUtilis";
import ScrollSerivce from "../../utilities/ScrollService";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import classNames from "classnames";
import "./navigation.css";
import Header from "../Home/Header/Header";
import SocialNet from "../SocialNet/SocialNet";
import Logo from "../Logo/Logo";

const Navigation = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [activeNav, setActiveNav] = useState("#");

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;

    setSelectedScreen(screenIndex);
  };
  let currentScreenSubscription =
    ScrollSerivce.currentScreenBroadCaster.subscribe(updateCurrentScreen);

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);
  return (
    <div className="navibar">
      {/* className="navibar-menu" */}
      <div className="navibar-menu">
        <Logo />
        <input className="side-menu" type="checkbox" id="side-menu"></input>
        <label className="hamb" for="side-menu">
          <span className="hamb-line"></span>
        </label>
        <nav className="nav">
          <ul className="menu">
            <li>
              <a
                href="#"
                onClick={() => setActiveNav("#")}
                className={classNames("header-option", {
                  active: selectedScreen === 0,
                })}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={classNames("header-option", {
                  active: selectedScreen === 1,
                })}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={() => setActiveNav("#about-me")}
                className={classNames("header-option", {
                  active: selectedScreen === 2,
                })}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={classNames("header-option", {
                  active: selectedScreen === 3,
                })}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navibar-social">
        <SocialNet />
      </div>
    </div>
  );
};

export default Navigation;
