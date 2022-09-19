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
    <nav className="navibar">
      <div className="navibar-menu">
        <Logo />
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={classNames("header-option", {
            active: selectedScreen === 0,
          })}
        >
          Home
          {/* <AiOutlineHome /> */}
        </a>
        <a
          href="#resume"
          onClick={() => setActiveNav("#resume")}
          className={classNames("header-option", {
            active: selectedScreen === 1,
          })}
        >
          Resume
          {/* <AiOutlineUser /> */}
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={classNames("header-option", {
            active: selectedScreen === 2,
          })}
        >
          Contact Me
          {/* <BiMessageSquareDetail /> */}
        </a>
      </div>
      <div className="navibar-social">
        <SocialNet />
      </div>
    </nav>
  );
};

export default Navigation;
