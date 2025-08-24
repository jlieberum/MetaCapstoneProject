import './App.css';
import logo from './FooterLogo.png';

function Footer() {
  return (
    <footer>
        <>
        <img src={logo} alt="Little Lemon Restaurant" width="172" height="279" />
        </>

        <>
        <h3>Doormat Navigation</h3>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        </>

        <>
        <h3>Contact</h3>
        <p>1113 Pittsburgh St, Scottdale PA 15683</p>
        <p>724-516-9451</p>
        </>

        <>
        <h3>Social Media Links</h3>
        <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </ul>
        </>
    </footer>
  );
}

export default Footer;