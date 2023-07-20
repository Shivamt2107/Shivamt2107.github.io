import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { createContext } from "react";
import GitHubStats from "./components/Github/GitHubStats";
import Testimonials from "./components/Testimonials/Testimonials";
import MainSkill from "./components/MainSkill/MainSkill";
import TechSkill from "./components/TeckSkills/TechSkill";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const body = document.getElementsByTagName("BODY")[0];

  const changeTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  //282d3f
  useEffect(() => {
    if (theme === "dark") {
      body.style.background = "#282d3f";
      body.style.color = "#dddddd";
    } else {
      body.style.background = "#ffff";
      body.style.color = "#656d72";
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="App" id={theme}>
        <Navbar />
        <Home />
        <About />
        <TechSkill />
        {/* <MainSkill/> */}
        <Resume />
        <Projects />
        <GitHubStats />
        {/* <Testimonials/> */}
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}




export default App;
