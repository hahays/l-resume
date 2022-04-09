import React, { useState, useEffect } from "react";
import { GET_SCREEN_INDEX } from "../../utilities/commonUtilis";
import ScrollSerivce from "../../utilities/ScrollService";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./navigation.css";

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

  const getHeaderOptionsClass = (index) => {
    let classes = "header-option ";
    if (selectedScreen === index) classes += "active ";

    return classes;
  };

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={getHeaderOptionsClass(0)}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#resume"
        onClick={() => setActiveNav("#resume")}
        className={getHeaderOptionsClass(1)}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={getHeaderOptionsClass(2)}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navigation;
