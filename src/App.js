import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Resume from "./containers/Resume/Resume";
import ContactMe from "./containers/ContactMe/ContactMe";
import Footer from "./containers/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <Projects />
      <Resume />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
}
export default App;
