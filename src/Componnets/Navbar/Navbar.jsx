import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        {/* we uses prop.mode that are comming from app.jsx that tell is wheather mode is on or not  */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.name}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* using navlinks provided by react router dom same as <a> it has href="" and navlink has to="" */}

              <li className="nav-item">
                <NavLink className="nav-link text-decoration-none" to="/">
                    Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-decoration-none" to="/about">
                  About
                </NavLink>
              </li>



            </ul>
            <form className="d-flex align-items-center gap-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
              <div className={`form-check form-switch ${props.mode === "light" ? "text-dark" : "text-light"} fw-semibold`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault"
                  onClick={props.ToggleMode}
                />
                <label className="form-check-label" htmlFor="switchCheckDefault">
                  Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
