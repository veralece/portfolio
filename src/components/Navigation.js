import { Link } from 'react-router-dom';
import logoImg from '../logo_wordmark.svg';
function Navigation(props) {

    const about = <Link to="./about">About</Link>
    const resume = <Link to="./resume">Resume</Link>
    const projects = <Link to="./projects">Projects</Link>
    const logo = <Link to="./about" id="logo" ><img alt="logo link" src={logoImg} /></Link>
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