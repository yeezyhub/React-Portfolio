import React from 'react';
import { Link } from "react-router-dom";


export default function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="home">yeezyhub</Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="project">Projects</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="resume">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}