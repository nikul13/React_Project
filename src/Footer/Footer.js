import "./Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <div class="custom-footer text-light">
      <div class="container">
        <div class="row gy-4">
          <div class="col-md-3">
            <div class="d-flex align-items-center mb-3">
              <img src="images/logo.png" class="footer-logo"></img>
              <span class="footer-logo">Booking</span>
            </div>
            <p>
              Departure defective arranging rapturous did believe him all had
              supported.
            </p>
            <p>
              <i class="fa-solid fa-phone me-2"></i>+1234 568 963
            </p>
            <p>
              <i class="fa-solid fa-envelope me-2"></i>example@gmail.com
            </p>
          </div>

          <div class="col-md-2">
            <h6 class="fw-bold">Page</h6>
            <ul class="list-unstyled">
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

          <div class="col-md-2">
            <h6 class="fw-bold">Link</h6>
            <ul class="list-unstyled">
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

          <div class="col-md-2">
            <h6 class="fw-bold">Global Site</h6>
            <ul class="list-unstyled">
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

          <div class="col-md-3">
            <h6 class="fw-bold">Booking</h6>
            <p>
              <div onClick={()=>navigate("/")} style={{cursor:"pointer"}}><i class="fa-solid fa-hotel me-2" ></i>Hotel</div>
            </p>
            <p>
              <div onClick={()=>navigate("/flight")} style={{cursor:"pointer"}}><i class="fa-solid fa-plane me-2" ></i>Flight</div>
            </p>
            <p>
              <div onClick={()=>navigate("/tour")} style={{cursor:"pointer"}}><i class="fa-solid fa-earth-asia me-2" ></i>Tour</div>
            </p>
            <p>
              <div onClick={()=>navigate("/cabs")} style={{cursor:"pointer"}}><i class="fa-solid fa-car me-2" ></i>Cabs</div>
            </p>
          </div>
        </div>

        
        <div class="top">
          <div className="t1">
            <h6 class="fw-bold">Payment & Security</h6>
            <div class="payment-icons">
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
            <h6 class="fw-bold">Follow Us On</h6>
            <div class="social-icons">
              <a href="#" style={{ backgroundColor: "#5475BC" }}>
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" style={{ backgroundColor: "#AF2767" }}>
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" style={{ backgroundColor: "#3AACDD" }}>
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" style={{ backgroundColor: "#207EB4" }}>
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 d-flex flex-wrap justify-content-between align-items-center nnn">
          <div class="footer-bottom">
            Copyrights ©2024 Booking. Build by Webestica.
          </div>

          <div class="footer-links d-flex gap-4">
            <a href="#">Privacy policy</a>
            <a href="#">Terms and conditions</a>
            <a href="#">Refund policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;