import React from 'react';

export default function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home">yeezyhub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#resume">Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        );
}