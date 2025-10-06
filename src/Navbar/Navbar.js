import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
      <div className="container-fluid px-4 ms-5">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center fw-bold" href="/">
          <img src="/images/logo.png" className="img1 ms-5" alt="Logo" />
          Booking
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavDropdown"
        >
          {/* Left Links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/offers">
                Offers
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex flex-wrap align-items-center nav-icons me-5">
            <div className="box2">
              <i className="fas fa-hotel"></i>
              <a href="/" className="text-dark text-decoration-none">
                Hotel
              </a>
            </div>
            <div className="box1">
              <i className="fas fa-plane"></i>
              <a href="/flight" className="text-dark text-decoration-none">
                Flight
              </a>
            </div>
            <div className="box1">
              <i className="fas fa-globe-americas"></i>
              <a href="/tour" className="text-dark text-decoration-none">
                Tour
              </a>
            </div>
            <div className="box1 me-4">
              <i className="fas fa-car"></i>
              <a href="/cabs" className="text-dark text-decoration-none">
                Cab
              </a>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <button
                className="btn dropdown-toggle d-flex align-items-center"
                type="button"
                id="authDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* ✅ Show Google profile pic if logged in, else fallback */}
                <img
                  src={
                    currentUser?.picture
                      ? currentUser.picture
                      : "/images/profile1.jpeg"
                  }
                  alt="profile"
                  className="rounded-circle me-2"
                  style={{ width: "35px", height: "35px", objectFit: "cover" }}
                />
                <h6 className="mt-1">
                  {currentUser
                    ? currentUser.username || currentUser.name
                    : ""}
                </h6>
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="authDropdown"
              >
                {currentUser ? (
                  <>
                    <li>
                      <a className="dropdown-item" href="/profile">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          logout(); // ✅ clear currentUser + localStorage
                          navigate("/"); // ✅ redirect to signin page
                        }}
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a className="dropdown-item" href="/signup">
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/signin">
                        Sign In
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
