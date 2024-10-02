import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNavbar() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">abdillahnurr</Link>
            <button className="navbar-toggler" onClick={toggleNavbar}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/experience">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/interest">Interest</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/awards">Awards</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
