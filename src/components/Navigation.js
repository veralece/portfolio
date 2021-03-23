import React, { useState } from "react";
import { Link } from 'react-router-dom';
import chevron from '../images/chevron-white.png'

function Navigation(props) {
    const about = <Link className="link" onClick={handleMobileMenuClick} to="./about">About</Link>
    const resume = <Link className="link" onClick={handleMobileMenuClick} to="./resume">Resume</Link>
    const projects = <Link className="link" onClick={handleMobileMenuClick} to="./projects">Projects</Link>
    const logo = <Link to="./about" onClick={handleMobileMenuClick} className="logo"><div></div></Link>

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    function handleMobileMenuClick(e) {
        const { target } = e;
        
        target.checked ? setDisplayMobileMenu(target.checked) : setDisplayMobileMenu(false);
        
        if (target.checked) {
            document.getElementById('mobile-nav-btn').classList.add('active');
            document.getElementById('mobile-menu').classList.add('active');
        }
        else {
            document.getElementById('mobile-nav-btn').classList.remove('active');
            document.getElementById('mobile-menu').classList.remove('active');
        }
    }
    return (
        <>
            <nav id="nav-full">
                {logo}
                {about}
                {resume}
                {projects}
            </nav>
            <nav id="nav-mobile">
                {logo}
                <label id="mobile-nav-btn" htmlFor="nav-chkbox">
                    <img alt="" src={chevron} />
                    <input
                        style={{ display: 'none' }}
                        id="nav-chkbox"
                        type="checkbox"
                        onChange={handleMobileMenuClick}
                        value={displayMobileMenu}
                        checked={displayMobileMenu}
                    />
                </label>
                <ul id="mobile-menu">
                    <li key='1'>{about}</li>
                    <li key='2'>{resume}</li>
                    <li key='3'>{projects}</li>
                </ul>

            </nav>
        </>
    );
}

export default Navigation;