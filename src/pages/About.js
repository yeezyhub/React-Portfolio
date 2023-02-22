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
                        Hello, my name is Yigit Ocak, and I am 25 years old. I am originally from Turkey, where I lived until July 2020. Since then, I have been living in the United States and moved to Austin, TX starting April 2022.
                    </p>

                    <p>
                        I studied electrical and electronics engineering at TED University and completed a mechatronics technician boot camp at Vincennes University. More recently, I earned a certificate in web development from Michigan State University. During the web development boot camp, I acquired a diverse skill set, which includes HTML, CSS, JavaScript, APIs, Node.js, OOP, Express.js, SQL, NoSQL, PWA, React, and MERN.
                    </p>

                    <p>
                        Although I have some experience in the engineering field, I am currently working as a maintenance technician at Target, where I started in April 2022.
                    </p>

                    <p>
                        In my free time, I enjoy coding, participating in social activities, playing video games, traveling, cooking, and exploring my creative side by making music and designing graphical content, among other things.
                    </p>
                </div>
            </div>
        </div>
    )

}