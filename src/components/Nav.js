import React from "react";
import logo from "../img/mgm-logo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand logo">
          <img src={logo} alt="Logo" />
        </div>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link active">
              Home
            </a>
            <a href="#" className="nav-item nav-link active">
              About
            </a>
            <a href="#" className="nav-item nav-link">
              Admission
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Departments
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  ICT
                </a>
                <a href="#" className="dropdown-item">
                  STEM
                </a>
                <a href="#" className="dropdown-item">
                  Science and Mathematics
                </a>
              </div>
            </div>
          </div>
          <form className="d-flex">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <button type="button" className="btn btn-custom">
                <i className="bi-search"></i>
              </button>
            </div>
          </form>
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
