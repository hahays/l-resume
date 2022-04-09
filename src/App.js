import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Resume from "./containers/Resume/Resume";
import ContactMe from "./containers/ContactMe/ContactMe";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Resume />
      <ContactMe />
      <Footer />
    </div>
  );
}
export default App;
