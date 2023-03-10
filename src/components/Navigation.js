import React from 'react';
import { Link } from "react-router-dom";


export default function Navigation() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home">yeezyhub</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="project">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}