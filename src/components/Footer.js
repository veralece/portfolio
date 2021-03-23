import email from '../images/email.png';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
function Footer(props) {
    return (
        <footer>
            <a href="https://www.twitter.com"><img className="footer-icon" src={twitter} alt="twitter icon" /></a>
            <a href="mailto:javier.mejia.penaloza@gmail.com"><img className="footer-icon" src={email} alt="email icon" /></a>
            <a href="https://www.linkedin.com"><img className="footer-icon" src={linkedin} alt="linkedin icon" /></a>
            <p className="copyright">Copyright &copy;2021</p>
        </footer>)
}

export default Footer;