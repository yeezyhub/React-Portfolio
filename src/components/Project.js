import React from 'react';
import rescuePets from "../assets/images/rescue-pets.jpg";
import travelNiche from "../assets/images/travel-niche.jpg";
import javascriptQuiz from "../assets/images/javascript-quiz.jpg";
import scheduler from "../assets/images/scheduler.jpg";
import passwordGenerator from "../assets/images/password-generator.jpg";
import weatherDashboard from "../assets/images/weather-dashboard.jpg";


export default function Project() {
    return (
        <div>
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
                        <a href="https://travelniche.github.io/TravelNiche-App/">
                            <img src={travelNiche} className="d-block w-100 blur zoom" alt="Travel Niche" />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Travel Niche</h5>
                            <p>Your favorite bar locator.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://powerful-ravine-90978.herokuapp.com/">
                            <img src={rescuePets} className="d-block w-100 blur zoom" alt="Rescue Pets" />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Rescue Pets</h5>
                            <p>Save pets finding them home.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://yeezyhub.github.io/JavaScript-Quiz/">
                            <img src={javascriptQuiz} className="d-block w-100 blur zoom" alt="Javascript Quiz" />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Javascript Quiz</h5>
                            <p>Test your knowledge.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://yeezyhub.github.io/Scheduler/">
                            <img src={scheduler} className="d-block w-100 blur zoom" alt="Scheduler" />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Scheduler</h5>
                            <p>Never miss a task again.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://yeezyhub.github.io/Password-Generator/">
                            <img src={passwordGenerator} className="d-block w-100 blur zoom" alt="Password Generator" />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Password Generator</h5>
                            <p>Generate a strong password.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <a href="https://yeezyhub.github.io/Weather-Dashboard/">
                            <img src={weatherDashboard} className="d-block w-100 blur zoom" alt="Weather Dashboard" />
                        </a>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Weather Dashboard</h5>
                            <p>Daily and 5-Day forecast.</p>
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
        </div>
    )

}