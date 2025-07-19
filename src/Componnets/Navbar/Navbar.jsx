import React from "react";

function Navbar(props) {

  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.name}
          </a>
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
              <li className="nav-item">
                <a className={`nav-link ${props.showa ? "active" : ""}`} aria-current="page" href="#"
                onClick={(e)=> {  
                  e.preventDefault();                        // toggle the state true / false
                  props.setshowa(true)
                }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${!props.showa ? "active" : "" }`} href="#"  
                onClick={(e)=> {                             // toggle the state true / false
                  e.preventDefault();
                  props.setshowa(false)
                  }}>
                  About
                </a>
              </li>
              
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
