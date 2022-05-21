import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              DNA
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    <strong>Headlines</strong>
                  </Link>
                </li>
                <li className="cl-1 nav-item">
                  <Link className="nav-link" aria-current="page" to="/business">
                    <strong>Business</strong>
                  </Link>
                </li>
                <li className="cl-2 nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/entertainment"
                  >
                    <strong>Entertainment</strong>
                  </Link>
                </li>
                <li className="cl-3 nav-item">
                  <Link className="nav-link" aria-current="page" to="/health">
                    <strong>Health</strong>
                  </Link>
                </li>
                <li className="cl-4 nav-item">
                  <Link className="nav-link" aria-current="page" to="/sports">
                    <strong>Sports</strong>
                  </Link>
                </li>{" "}
                <li className="cl-5 nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/technology "
                  >
                    <strong>Technology</strong>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
