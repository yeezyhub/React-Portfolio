import React from 'react';
import githubLogo from "../assets/images/github-logo.png";
import linkedInLogo from "../assets/images/linkedin-logo.png";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div class='footer-div'>
            <footer class='footer-el'>Made with &#x1F90D; by yeezyhub</footer>
            <Link to="https://github.com/yeezyhub" target="_blank">
                <img class='icon' src={githubLogo} alt="GitHub Logo" />
            </Link>

            <Link to="https://www.linkedin.com/in/yigitbugraocak/" target="_blank">
                <img class='icon' src={linkedInLogo} alt="LinkedIn Logo" />
            </Link>
        </div>
    )
}