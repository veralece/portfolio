import { Link } from 'react-router-dom';
import logoImg from '../logo_wordmark.svg';
import { useState } from 'react';

function Navigation(props) {
    //TODO This is a neat feature about making the current page selected
    // const [currentPage, setCurrentPage] = useState();

    // const handleClick = (e) => {
    //     const { target } = e;
    // }
    const about = <Link className="link" to="./about">About</Link>
    const resume = <Link className="link" to="./resume">Resume</Link>
    const projects = <Link className="link" to="./projects">Projects</Link>
    const logo = <Link to="./about" className="logo" ><img alt="logo link" src={logoImg} /></Link>
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
                <ul>
                    <li>{about}</li>
                    <li>{resume}</li>
                    <li>{projects}</li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;