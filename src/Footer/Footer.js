import "./Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="custom-footer text-light">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-3">
              <div className="d-flex align-items-center mb-3">
                <img src="images/logo.png" className="footer-logo"></img>
                <span className="footer-logo">Booking</span>
              </div>
              <p>
                Departure defective arranging rapturous did believe him all had
                supported.
              </p>
              <p>
                <i className="fa-solid fa-phone me-2"></i>+1234 568 963
              </p>
              <p>
                <i className="fa-solid fa-envelope me-2"></i>example@gmail.com
              </p>
            </div>

            <div className="col-md-2">
              <h6 className="fw-bold">Page</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
                <li>
                  <a href="/blog">News and Blog</a>
                </li>
                <li>
                  <a href="/about">Meet a Team</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h6 className="fw-bold">Link</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Sign up</a>
                </li>
                <li>
                  <a href="#">Sign in</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Cookie</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h6 className="fw-bold">Global Site</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">India</a>
                </li>
                <li>
                  <a href="#">California</a>
                </li>
                <li>
                  <a href="#">Indonesia</a>
                </li>
                <li>
                  <a href="#">Canada</a>
                </li>
                <li>
                  <a href="#">Malaysia</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h6 className="fw-bold">Booking</h6>
              <div>
                <div
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-hotel me-2"></i>Hotel
                </div>
              </div>
              <div>
                <div
                  onClick={() => navigate("/flight")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-plane me-2"></i>Flight
                </div>
              </div>
              <div>
                <div
                  onClick={() => navigate("/tour")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-earth-asia me-2"></i>Tour
                </div>
              </div>
              <div>
                <div
                  onClick={() => navigate("/cabs")}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-car me-2"></i>Cabs
                </div>
              </div>
            </div>
          </div>

          <div className="top">
            <div className="t1">
              <h6 className="fw-bold">Payment & Security</h6>
              <div className="payment-icons">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                  alt="Visa"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                  alt="Mastercard"
                />
              </div>
            </div>
            <div className="ff">
              <h6 className="fw-bold">Follow Us On</h6>
              <div className="social-icons">
                <a href="#" style={{ backgroundColor: "#5475BC" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" style={{ backgroundColor: "#AF2767" }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={{ backgroundColor: "#3AACDD" }}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ backgroundColor: "#207EB4" }}>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 d-flex flex-wrap justify-content-between align-items-center nnn">
            <div className="footer-bottom">
              Copyrights ©2024 Booking. Build by Webestica.
            </div>

            <div className="footer-links d-flex gap-4">
              <a href="#">Privacy policy</a>
              <a href="#">Terms and conditions</a>
              <a href="#">Refund policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
