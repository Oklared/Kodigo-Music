import { Link } from "react-router-dom";
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3 className="footer-title">Kodigo Music</h3>
          <p className="footer-description">
          Your ultimate digital music platform. Dive into a world of endless melodies, discover new artists, and immerse yourself in the rhythm of life. Stream, explore, and experience music like never before!
          </p>
        </div>

        <div className="footer-section footer-links">
          <h5 className="footer-subtitle">Shortcuts</h5>
          <ul className="footer-list">
            <li>
              <Link to="/home" className="footer-link">Home</Link>
            </li>
            <li>
              <Link to="/library" className="footer-link">Library</Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h5 className="footer-subtitle">Follow Us</h5>
          <div className="social-icons">
            <Link to="https://facebook.com" className="social-icon">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="https://twitter.com" className="social-icon">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link to="https://instagram.com" className="social-icon">
              <i className="bi bi-instagram"></i>
            </Link>
          </div>
        </div>
      </div>

      
    </footer>
  );
};
