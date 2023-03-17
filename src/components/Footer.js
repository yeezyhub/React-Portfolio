import React from 'react';
import githubLogo from "../assets/images/github-logo.png";
import linkedInLogo from "../assets/images/linkedin-logo.png";
import stackOverflowLogo from "../assets/images/stack-overflow-logo.png";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <Link to="https://github.com/yeezyhub" target="_blank">
                    <img className='icon zoom-footer' src={githubLogo} alt="GitHub Logo" />
                </Link>

                <Link to="https://www.linkedin.com/in/yigitbugraocak/" target="_blank">
                    <img className='icon zoom-footer' src={linkedInLogo} alt="LinkedIn Logo" />
                </Link>

                <Link to="https://stackoverflow.com/users/7948307/yeezyhub" target="_blank">
                    <img className='icon zoom-footer invert' src={stackOverflowLogo} alt="Stack Overflow Logo" />
                </Link>

                <footer className='footer-el'>Made with &#x1F90D; by yeezyhub</footer>

            </div>
        </div>
    )
}