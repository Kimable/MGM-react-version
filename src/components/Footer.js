import React from "react";
import logo from "../img/mgm-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container-fluid p-4 text-white">
        <div className="footer-content row align-items-center">
          <div className="footer-links col-lg-4 col-sm-12">
            <a href="/contact.php">Contact</a>
            <a href="/about.php">About</a>
            <a href="/admission.php">Addmission</a>
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
              <a href="#">WhatsApp</a>
            </span>
          </div>
        </div>
        <hr />
        <p>Copyright &copy; 2021 | MGM Boys Academy</p>
      </div>
    </footer>
  );
}
