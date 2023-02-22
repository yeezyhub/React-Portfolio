import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';
import Project from './components/Project.js';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from './pages/Resume.js';

import background from "../src/assets/images/background.jpg";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
      </div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        {<Route path="project" element={<Project />} />}
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Routes>

    <Footer/>

    </div>
  )
}

export default App;
