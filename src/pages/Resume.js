import React from 'react';
import resume from '../assets/resume/yigit-bugra-ocak-resume.pdf';
import background from "../assets/images/background.jpg";


export default function Resume() {
    return (
        <div>

            {/* Background Image */}
            <div className='bg-resume' style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh'
            }}>
            </div>

            <h1 class='text-middle section-header'>Resume</h1>
            <div className='horizontal-box-top'>
                <h4>Front-End Skills</h4>

                <div className='tag-div'>
                    <span className="tag">JavaScript</span>
                    <span className="tag">React</span>
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">Bootstrap</span>
                    <span className="tag">JQuery</span>
                    <span className="tag">Handlebars.js</span>
                    <span className="tag">JSON</span>
                    <span className="tag">AJAX</span>
                    <span className="tag">APIs</span>
                    <span className="tag">The DOM</span>
                </div>
            </div>
            <div className='horizontal-box-bottom'>
                <div className='tag-div'>
                    <h4>Back-End Skills</h4>
                    <span className="tag">Node.js</span>
                    <span className="tag">Express.js</span>
                    <span className="tag">GraphQL</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">Sequelize</span>
                    <span className="tag">NoSQL</span>
                    <span className="tag">MongoDB</span>
                    <span className="tag">Mongoose</span>
                    <span className="tag">Testing</span>
                    <span className="tag">Heroku</span>
                </div>
            </div>
            <a href={resume} download className="download">
                Download Yigit Bugra Ocak - Resume
                <button className="btn btn-light download-btn" type="submit">Download</button>
            </a>
        </div>
    )

}