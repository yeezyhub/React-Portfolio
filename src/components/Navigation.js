import { React, useState } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';

export default function Navigation() {

  //toggles navbar links when clicked on nav buttons
  const collapse = document.querySelector('.collapse');

  const handleClick = event => {
    collapse.classList.remove(
      'show'
    );
  };

  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3" >
      <div className="container-fluid" >
        <Link className="navbar-brand" onClick={handleClick} to="home">yeezyhub</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02" >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link id='first-nav-link' className="nav-link" onClick={handleClick} to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={handleClick} to="project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={handleClick} to="contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link id='last-nav-link' className="nav-link" onClick={handleClick} to="resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}