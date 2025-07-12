import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        {/* Column 1: Brand Info */}
        <div className="footer-column">
          <p className="ft-title">
            Ivory <span className="ft-sign">Standard</span>
          </p>
          <p className="ft-description">
            Ivory Standard – The Cleaning Company delivers premium, professional cleaning services 
            with a focus on care, consistency, and customer satisfaction. We help homes and businesses 
            maintain spotless spaces with ease and confidence.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="footer-column">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li><a href="#services">Home Cleaning</a></li>
            <li><a href="#services">Deep Cleaning</a></li>
            <li><a href="#services">Sofa & Carpet</a></li>
            <li><a href="#services">Move-In/Move-Out</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="footer-column">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <p className="ft-list-title">Contact</p>
          <ul className="ft-list-items">
            <li><a href="mailto:support@ivorystandard.com">support@ivorystandard.com</a></li>
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li><a href="tel:+919123456789">+91 91234 56789</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="ft-bottom">
        <p>© 2025 Ivory Standard. All rights reserved.</p>
        <ul className="ft-social-links">
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.34 7h4.66v2.56h.07c.65-1.23 2.24-2.56 4.6-2.56 4.92 0 5.83 3.24 5.83 7.45V24h-5v-8.1c0-1.93-.03-4.41-2.69-4.41-2.69 0-3.1 2.1-3.1 4.27V24h-5V7z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.337v21.326C0 23.4.597 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.1 2.795.143v3.24h-1.918c-1.504 0-1.794.716-1.794 1.763v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.403 24 24 23.4 24 22.663V1.337C24 .6 23.403 0 22.675 0z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" rel="noreferrer" title="Twitter / X">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656c-.793.352-1.644.59-2.538.697.913-.547 1.613-1.414 1.945-2.448a9.03 9.03 0 0 1-2.865 1.096 4.517 4.517 0 0 0-7.69 4.116A12.825 12.825 0 0 1 3.086 4.81a4.514 4.514 0 0 0 1.398 6.025 4.49 4.49 0 0 1-2.046-.565v.057a4.514 4.514 0 0 0 3.623 4.423 4.53 4.53 0 0 1-2.04.078 4.517 4.517 0 0 0 4.212 3.13A9.066 9.066 0 0 1 2 19.542a12.783 12.783 0 0 0 6.92 2.03c8.303 0 12.844-6.878 12.844-12.843 0-.196-.004-.392-.013-.586a9.185 9.185 0 0 0 2.254-2.342z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
