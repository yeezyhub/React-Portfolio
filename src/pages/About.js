import React from 'react';
import ProfilePhoto from "../assets/images/profile-photo.jpg";

export default function About() {
    return (
        <div>
            <h1 class='text-middle section-header'>About Me</h1>
            <div class='about-me-section'>

                <img src={ProfilePhoto} alt="profile" className="profile-photo" />

                <div class='about-me-text'>
                    <p>
                        My name is Yigit Ocak. I am 25 years old and I am from Turkey. I lived in Turkey until July 2020 and now I currently live in Austin, TX in the United States.
                    </p>

                    <p>
                        I've studied electrical and electronics engineering in TED University, mechatronics technician bootcamp in Vincennes University and I recently earned a certificate for web developing bootcamp from Michigan State University. I have built broad knowledge in terms of web development during the bootcamp which includes; HTML, CSS, JavaScript, APIs, Node.js, OOP, Express.js, SQL, NoSQL, PWA, React and MERN.
                    </p>

                    <p>
                        I have some experience in the engineering field, but I work as a maintenance technician in Target since April 2022.
                    </p>

                    <p>
                        On a normal day, I enjoy coding, joining social activities, playing video games, traveling, cooking, being creative such as making music and graphical designs etc.
                    </p>
                </div>
            </div>
        </div>
    )

}