import React, { useState } from "react";
import { Link } from 'react-router-dom';
import chevron from '../images/chevron-white.png'

function Navigation(props) {
    //TODO This is a neat feature about making the current page selected
    // const [currentPage, setCurrentPage] = useState();

    // const handleClick = (e) => {
    //     const { target } = e;
    // }
    const about = <Link className="link" onClick={handleMobileMenuClick} to="./about">About</Link>
    const resume = <Link className="link" onClick={handleMobileMenuClick} to="./resume">Resume</Link>
    const projects = <Link className="link" onClick={handleMobileMenuClick} to="./projects">Projects</Link>
    const logo = <Link to="./about" className="logo" onClick={handleMobileMenuClick}><div></div></Link>

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    function handleMobileMenuClick(e) {
        e ? setDisplayMobileMenu(e.target.checked) : setDisplayMobileMenu(false);
        document.getElementById('mobile-menu').classList.toggle('active');
        document.getElementById('mobile-nav-btn').classList.toggle('active');
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
                    />
                </label>
                <ul id="mobile-menu">
                    <li>{about}</li>
                    <li>{resume}</li>
                    <li>{projects}</li>
                </ul>

            </nav>
        </>
    );
}

export default Navigation;