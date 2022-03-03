import {Link} from 'react-router-dom';
const Footer = () => {
    return ( 
        <div className="footer__container">
            <ul className="footer__items">
              <Link to = '/about'>  <li className="footer__links"><a href="">About</a></li></Link>
                <li className="footer__links"><a href="">Service</a></li>
                <li className="footer__links"><a href="">Membership</a></li>
                <li className="footer__links"><a href="">Let's Talk</a></li>
            </ul>
        </div>
     );
}
 
export default Footer;