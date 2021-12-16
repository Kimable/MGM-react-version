import React from "react";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="coming-soon-pages">
      <div className="container p-5">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="headerLine"></div>
          <h1>Page under contruction</h1>
          <p>
            Apologies! This page is still under development and will be
            available as soon as possible!
          </p>
          <p>Thank you for your patience</p>
          <Link className="btn-custom" to="/">
            Go back to the Home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
