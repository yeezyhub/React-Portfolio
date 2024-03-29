import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

import rescuePets from "../assets/images/rescue-pets.jpg";
import travelNiche from "../assets/images/travel-niche.jpg";
import javascriptQuiz from "../assets/images/javascript-quiz.jpg";
import scheduler from "../assets/images/scheduler.jpg";
import squeezy from "../assets/images/squeezy.jpg";
import weatherDashboard from "../assets/images/weather-dashboard.jpg";
import githubLogo from "../assets/images/github-logo.png";
import background from "../assets/images/background.jpg";



export default function Project() {
    return (
        <div className='page-div'>

            {/* Background Image */}
            <div className='bg-project' style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh'
            }}>
            </div>

            <h1 className='text-middle section-header'>Projects</h1>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="https://squeezy-citrus.herokuapp.com/" target="_blank">
                            <img src={squeezy} className="d-block w-100 blur zoom" alt="Squeezy" />
                        </Link>
                        <div className="carousel-caption d-md-block">
                            <div className='project-title-div'>
                                <Link to="https://github.com/Bootcamp-Buddies/Squeezy" target="_blank">
                                    <img className='icon zoom-footer project-title-icon' src={githubLogo} alt="GitHub Logo" />
                                </Link>
                            </div>
                            <h5>Squeezy</h5>
                            <p className='project-text'>Tangy and sour flavors.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="https://travelniche.github.io/TravelNiche-App/" target="_blank">
                            <img src={travelNiche} className="d-block w-100 blur zoom" alt="Travel Niche" />
                        </Link>
                        <div className="carousel-caption d-md-block">
                            <div className='project-title-div'>
                                <Link to="https://github.com/TravelNiche/TravelNiche-App" target="_blank">
                                    <img className='icon zoom-footer project-title-icon' src={githubLogo} alt="GitHub Logo" />
                                </Link>
                            </div>
                            <h5>Travel Niche</h5>
                            <p className='project-text'>Your favorite bar locator.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="https://powerful-ravine-90978.herokuapp.com/" target="_blank">
                            <img src={rescuePets} className="d-block w-100 blur zoom" alt="Rescue Pets" />
                        </Link>
                        <div className="carousel-caption d-md-block">
                            <div className='project-title-div'>
                                <Link to="https://github.com/Bootcamp-Buddies/Rescue-Pets" target="_blank">
                                    <img className='icon zoom-footer project-title-icon' src={githubLogo} alt="GitHub Logo" />
                                </Link>
                            </div>
                            <h5>Rescue Pets</h5>
                            <p className='project-text'>Save pets finding them home.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="https://yeezyhub.github.io/JavaScript-Quiz/" target="_blank">
                            <img src={javascriptQuiz} className="d-block w-100 blur zoom" alt="Javascript Quiz" />
                        </Link>
                        <div className="carousel-caption d-md-block">
                            <div className='project-title-div'>
                                <Link to="https://github.com/yeezyhub/JavaScript-Quiz" target="_blank">
                                    <img className='icon zoom-footer project-title-icon' src={githubLogo} alt="GitHub Logo" />
                                </Link>
                            </div>
                            <h5>JavaScript Quiz</h5>
                            <p className='project-text'>Test your knowledge.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="https://yeezyhub.github.io/Scheduler/" target="_blank">
                            <img src={scheduler} className="d-block w-100 blur zoom" alt="Scheduler" />
                        </Link>
                        <div className="carousel-caption d-md-block">
                            <div className='project-title-div'>
                                <Link to="https://github.com/yeezyhub/Scheduler" target="_blank">
                                    <img className='icon zoom-footer project-title-icon' src={githubLogo} alt="GitHub Logo" />
                                </Link>
                            </div>
                            <h5>Scheduler</h5>
                            <p className='project-text'>Never miss a task again.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <Link to="https://yeezyhub.github.io/Weather-Dashboard/" target="_blank">
                            <img src={weatherDashboard} className="d-block w-100 blur zoom" alt="Weather Dashboard" />
                        </Link>
                        <div className="carousel-caption d-md-block">
                            <div className='project-title-div'>
                                <Link to="https://github.com/yeezyhub/Weather-Dashboard" target="_blank">
                                    <img className='icon zoom-footer project-title-icon' src={githubLogo} alt="GitHub Logo" />
                                </Link>
                            </div>
                            <h5>Weather Dashboard</h5>
                            <p className='project-text'>Daily and 5-Day forecast.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='project-footer'>
            <Footer/>
            </div>
        </div>
    )

}