import React from "react";
import contact from "../img/contact-sm.png";

function Contact() {
  return (
    <>
      <div className="container-fluid p-5 text-center">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="headerLine"></div>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center flex-column p-3">
            <span className="d-flex contact-info-item">
              <i className="bi bi-telephone"></i>
              <p>
                Call us: <span>0719849455</span>
              </p>
            </span>
            <span className="d-flex contact-info-item">
              <i className="bi bi-envelope"></i>
              <p>
                Email us: <span>info@mgmboys.ac.ke</span>
              </p>
            </span>
            <span className="d-flex contact-info-item">
              <i className="bi bi-geo-alt"></i>
              <p>
                Visit us: <span>Kangundo Rd, Malaa, Machakos County</span>
              </p>
            </span>
          </div>
          <div className="col-lg-6 contact-img">
            <img className="img-fluid" src={contact} alt="Call us" />
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="headerLine"></div>
          <h2>Send us a Quick Message</h2>
        </div>
        <form id="contactForm" className="contact-form-container">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
            />
            Name
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="d-grid">
            <button className="btn-custom" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
