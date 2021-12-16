import React from "react";
import { Link } from "react-router-dom";
import pnf from "../img/pnf.png";

function NotFound() {
  return (
    <div className="container-fluid p-5">
      <div className="section row">
        <div className="col-lg-7">
          <img className="img-fluid" src={pnf} alt="Page not found" />
        </div>
        <div className="col-lg-5 text-center d-flex flex-column justify-content-center align-items-center">
          <h3>OOOPs! Sorry! Page not Found</h3>
          <p>The page you are looking for appears to be missing.</p>
          <Link className="btn-custom" to="/">
            Go back to the Home page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
