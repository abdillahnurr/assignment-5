import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';  // Ensure you have a CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="social-media-links">
                <a href="https://www.linkedin.com/in/abdillah-nur-ridho-766285208/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/abdillahnurr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            <p className='rights'>&copy; {new Date().getFullYear()} Abdillah Nur Ridho. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
