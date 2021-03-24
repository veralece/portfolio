import email from '../images/email.png';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
function Footer(props) {
    return (
        <footer>
            <a href="https://twitter.com/javy_script"><img className="footer-icon" src={twitter} alt="twitter icon" /></a>
            <a href="mailto:javier.mejia.penaloza@gmail.com"><img className="footer-icon" src={email} alt="email icon" /></a>
            <a href="https://www.linkedin.com/in/javier-penaloza-14ab48181/"><img className="footer-icon" src={linkedin} alt="linkedin icon" /></a>
            <p className="footer-col-3">Coffee and my cat helped create this site.</p>
            <p className="footer-col-3"><a href="https://github.com/veralece/portfolio">View Source</a></p>
            <p className="footer-col-3">&copy; Javier Penaloza 2021. </p>
        </footer>)
}

export default Footer;