import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import "./Home.css";

function Home() {
  return (
    <div id="Home" className="home-container">
      <Header />
      <Profile />
    </div>
  );
}

export default Home;
