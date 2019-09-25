import React from 'react';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume'
import Contact from './components/Contact';
import './App.css';
import { Element } from "react-scroll";

function App() {

  return (
    <div className="App">
      <Navigation/>
      <Element name="landing" className="element"> <Landing /> </Element>
      <Element name="aboutme" className="element"> <AboutMe /> </Element>
      <Element name="projects" className="element"> <Projects /> </Element>
      <Element name="resume" className="element"> <Resume /> </Element>
      <Element name="contact" className="element"> <Contact /> </Element>
    </div>
    );
}


export default App;
