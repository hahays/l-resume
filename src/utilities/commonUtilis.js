import Home from "../components/Home/Home";
import Resume from "../containers/Resume/Resume";
import ContactMe from "../containers/ContactMe/ContactMe";
import { AiOutlineHome } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    href: "#",
    component: Home,
    icon: AiOutlineHome,
  },
  {
    screen_name: "Resume",
    href: "#resume",
    component: Resume,
    icon: BiBook,
  },
  {
    screen_name: "Contact Me",
    href: "#contact",
    component: ContactMe,
    icon: BiMessageSquareDetail,
  },
];
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
