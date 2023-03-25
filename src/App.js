import React from 'react';
import { Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header.js';
// import Footer from './components/Footer.js';
// import Navigation from './components/Navigation.js';
import Project from './components/Project.js';

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Resume from './pages/Resume.js';

// import background from "./assets/images/background.jpg";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="React-Portfolio" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Routes>

    </div>
  )
}

export default App;
