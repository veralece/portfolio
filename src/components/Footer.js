import email from '../images/email.png';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
function Footer(props) {
    return (
        <footer>
            <a href="https://www.twitter.com"><img src={twitter} alt="twitter icon"/></a>
            <a href="mailto:javier.mejia.penaloza@gmail.com"><img src={email} alt="email icon"/></a>
            <a href="https://www.linkedin.com"><img src={linkedin} alt="linkedin icon"/></a>
        </footer>)
}

export default Footer;