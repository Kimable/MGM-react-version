import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/mgm-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid p-4 text-white">
        <div className="footer-content row align-items-center">
          <div className="footer-links col-lg-4 col-sm-12">
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/admission">Addmission</Link>
          </div>
          <div className="footer-logo col-lg-4 col-sm-12">
            <img src={logo} alt="MGM Logo" />
          </div>
          <div className="footer-social col-lg-4 col-sm-12">
            <span className="icon-text">
              <i className="bi bi-facebook"></i>
              <a href="/contact">Facebook</a>
            </span>

            <span className="icon-text">
              <i className="bi bi-whatsapp"></i>
              <a href="/contact">WhatsApp</a>
            </span>
          </div>
        </div>
        <hr />
        <p>Copyright &copy; 2022 | MGM Boys Academy</p>
      </div>
    </footer>
  );
}
