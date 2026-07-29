import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom bg-white"
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <div className="container py-2">

        <Link className="navbar-brand" to="/">
          <img
            src="media/logo.svg"
            alt="Zerodha"
            style={{ width: "130px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/support">
                Support
              </Link>
            </li>

            {/* Login */}

            <li className="nav-item ms-3">
              <Link
                className="btn btn-outline-primary"
                to="/login"
              >
                Login
              </Link>
            </li>

            {/* Open Account */}

            <li className="nav-item ms-2">
              <Link
                className="btn btn-primary"
                to="/signup"
              >
                Open Account
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;