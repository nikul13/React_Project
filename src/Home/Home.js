import "./Home.css";
import img1 from "./images/img1.webp";
import img2 from "./images/download.jpeg";
import img3 from "./images/images.jpeg";
import c1 from "./images/coupn 1.png";
import c2 from "./images/coupn 2.png";
import c3 from "./images/coupn 3.png";
import c4 from "./images/travel-beach-filter-water-luxury.jpg";
import p1 from "./images/p1.jpg";
import p2 from "./images/p2.png";
import p3 from "./images/p3.jpg";
import p5 from "./images/p5.jpg";
import p4 from "./images/p4.jpg";
import newyork from "./images/newyork.jpg";
import cicago from "./images/cicago.jpg";
import calafonia from "./images/calafonia.jpg";
import los from "./images/los.jpg";
import em from "./images/em.jpg";
import envotate from "./images/download.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Brand_Images, Explore_Nearby, Featured_Hotels, Offers_Slider } from "../Seeds/Seeds";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      {/* section */}
      <section class="hero container py-5">
        <div class="row align-items-center ps-lg-5">
          {/* <!-- Left side --> */}
          <div class="col-lg-6 mb-4 mb-lg-0">
            <h1>
              Find the top <br />
              <span>Hotels nearby.</span>
            </h1>
            <p class="text-muted">
              We bring you not only a stay option, but an experience in your
              budget to enjoy the luxury.
            </p>

            <div class="d-flex flex-wrap align-items-center gap-3">
              <button class="btn-discover">Discover Now</button>
              <a
                href="#"
                class="d-flex align-items-center text-decoration-none text-dark"
              >
                <i class="fas fa-play-circle fs-3 text-primary me-2"></i> Watch
                our story
              </a>
            </div>
          </div>

          {/* <!-- Right side --> */}
          <div class="col-lg-6 text-center side-img mt-5 mt-lg-0 position-relative">
            <img src={img1} alt="Hotel" class="img2" />
            <img
              src={img2}
              class="circle-img top ab d-none d-md-block"
              alt="circle1"
            />
            <img
              src={img3}
              class="circle-img bottom ab d-none d-md-block"
              alt="circle2"
            />

            <div class="support-box bg-white shadow p-3 rounded">
              <i class="fas fa-headphones"></i>
              <h6 class="mt-2 mb-0 fw-bold">24 / 7</h6>
              <small>Guide Supports</small>
            </div>
          </div>
        </div>

        {/* <!-- Availability box --> */}
        <div class="availability-box row mt-4 gy-3 gx-3">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label">Location</label>
            <div className="d-flex align-items-center border rounded p-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              <select className="form-select border-0 shadow-none">
                <option selected disabled>
                  Select location
                </option>
                <option>San Jacinto, USA</option>
                <option>North Dakota, Canada</option>
                <option>West Virginia, Paris</option>
              </select>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <label>Check in - out</label>
            <div class="d-flex align-items-center border rounded p-2 mt-2">
              <i class="fas fa-calendar-alt me-2"></i>
              <input
                type="date"
                class="form-control border-0 shadow-none"
                placeholder="19 Sep to 28 Sep"
              />
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 ">
            <label>Guests & rooms</label>
            <div class="d-flex align-items-center border rounded p-2 mt-2">
              <i class="fas fa-user me-2"></i>
              <input
                type="text"
                class="form-control border-0 shadow-none"
                placeholder="2 Guests 1 Room"
              />
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-1 d-flex align-items-end">
            <button class="search-btn w-100">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </section>

      {/* new section */}
      <div class="container cou1 mt-5">
        <div class="row g-4">
          {Offers_Slider.map((item) => {
            return (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-md-4 cou"
                onClick={() => navigate("/offers")}
              >
                <div className="pic">
                  <img
                    src={`/images/${item.img}`}
                    className="img5 img-fluid"
                    alt={item.title}
                  />
                </div>
                <div className="con">
                  <h5>{item.title}</h5>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* section */}

      <div className="container section2 py-5">
        <div className="row align-items-center">
          {/* Left Column (Image + Client Rating Box) */}
          <div className="col-md-6 mb-4 mb-md-0 position-relative">
            <img src={c4} className="img-fluid rounded" alt="Holiday" />

            {/* Overlay Box */}
            <div
              className="bg-white shadow rounded p-3 position-absolute bottom-0 start-0 m-5"
              style={{ maxWidth: "280px" }}
            >
              <div className="d-flex justify-content-between mb-2">
                <h6 className="mb-0">Client</h6>
                <h6 className="mb-0">Rating</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={p1}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client1"
                  />
                  <img
                    src={p2}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client2"
                  />
                  <img
                    src={p3}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client3"
                  />
                  <img
                    src={p4}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client4"
                  />
                  <div
                    className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                    style={{ width: "30px", height: "30px", fontSize: "12px" }}
                  >
                    1k+
                  </div>
                </div>
                <h6 className="mb-0">4.5⭐</h6>
              </div>
            </div>
          </div>

          {/* Right Column (Text + Services) */}
          <div className="col-md-6">
            <h2 className="fw-bold display-6">The Best Holidays Start Here!</h2>
            <p className="text-muted">
              Book your hotel with us and don't forget to grab an awesome hotel
              deal to save massive on your stay.
            </p>

            {/* Services Grid */}
            <div className="row g-4 mt-3">
              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-primary fs-3 mb-2">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <p className="fw-semibold mb-1">Quality Food</p>
                  <p className="small text-muted mb-0">
                    Departure defective arranging rapturous did. Conduct denied
                    adding worthy little.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-success fs-3 mb-2">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <p className="fw-semibold mb-1">High Security</p>
                  <p className="small text-muted mb-0">
                    Arranging rapturous did believe him all had supported.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-warning fs-3 mb-2">
                    <i className="fas fa-stopwatch"></i>
                  </div>
                  <p className="fw-semibold mb-1">Quick Services</p>
                  <p className="small text-muted mb-0">
                    Supposing so be resolving breakfast am or perfectly.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-danger fs-3 mb-2">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <p className="fw-semibold mb-1">24 Hours Alert</p>
                  <p className="small text-muted mb-0">
                    Rapturous did believe him all had supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feauterd Hotels */}
      <div className="display-4 fw-bold text-center">Featured Hotels</div>
      <div class="container section3 mt-5">
        <div class="row g-4">
          {Featured_Hotels.map((item) => {
            return (
              <div
                key={item.id}
                class="col-lg-3 col-md-6 col-sm-12"
                onClick={() => navigate("/hoteldetail")}
                style={{ cursor: "pointer" }}
              >
                <div class="card h-100 border-0 shadow-sm">
                  <div class="position-relative">
                    <img
                      src={`/images/${item.img}`}
                      class="card-img-top rounded-3"
                      alt="Baga Comfort"
                    />
                    <div class="position-absolute bottom-0 start-0 bg-dark text-white px-2 py-1 rounded m-2 small">
                      <i class="fas fa-map-marker-alt"></i> {item.location}
                    </div>
                  </div>
                  <div class="card-body">
                    <h5 class="fw-bold">{item.title}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                      <p class="mb-0 text-success fw-bold">
                        {item.price}{" "}
                        <small class="text-muted">{item.price_details}</small>
                      </p>
                      <span class="fw-bold">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* new section */}
      <div class="container mt-5">
        <div className="row">
          {Brand_Images.map((item) => {
            return (
              <div className="col-md-2">
                <img src={`/images/${item.img}`} className="lg"></img>
              </div>
            );
          })}
        </div>
      </div>

      {/* new section */}
      <div class="container my-5">
        <div class="row align-items-center">
          {/* <!-- Left side (images) --> */}
          <div class="col-md-6 text-center mb-4 mb-md-0">
            <img src={p5} class="girlimage" alt="p5" />
            <img src={em} class="emoji" alt="em" />
          </div>

          {/* <!-- Right side (text) --> */}
          <div class="col-md-6">
            <div class="d-flex flex-column align-items-start">
              <img
                src={envotate}
                class="img-fluid mb-3"
                style={{ maxWidth: "120px" }}
                alt="envotate"
              />

              <p class="fw-bold fs-4">
                Passage its ten led hearted removal cordial. Preference any
                astonished unreserved Mrs. understood the Preference unreserved.
              </p>

              <p class="fs-5">⭐⭐⭐⭐⭐</p>

              <p class="fw-bold fs-5 mb-0">Carolyn Ortiz</p>
              <p class="text-muted">CEO of Google</p>
            </div>
          </div>
        </div>
      </div>

      {/* new section */}

      <div className="display-4 fw-bold text-center mt-5">Explore Nearby</div>

      <div className="container my-5">
        <div className="row g-4">
          {Explore_Nearby.map((item) => {
            return (
              <div className="col-6 col-md-4 col-lg-2" key={item.key}>
                <a
                  href="#"
                  className="text-decoration-none text-dark d-block text-center"
                >
                  <img
                    src={`/images/${item.img}`}
                    className="n2"
                    alt="{item.title}"
                  />
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-muted small">{item.subtitle}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* new section */}

      <div className="container-fluid py-5 nik3">
        <div className="row text-center text-md-start align-items-center g-4">
          <div className="col-12 col-md-4 d-flex align-items-center nik2">
            <i className="fas fa-hand-holding-heart fs-1 text-primary me-3"></i>
            <div>
              <h3 className="mb-1">24*7 Help</h3>
              <p className="mb-0">
                If we fall short of your expectation in any way, let us know
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex align-items-center nik2">
            <i className="fas fa-hand-holding-dollar fs-1 text-success me-3"></i>
            <div>
              <h3 className="mb-1">Payment Trust</h3>
              <p className="mb-0">
                All refunds come with no questions asked guarantee
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="mb-3">Download app</h3>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <img
                src="/images/playstore.png"
                alt="Playstore"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
              <img
                src="/images/appstore.jpg"
                alt="Appstore"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default Home;
