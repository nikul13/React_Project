import "./Flight.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  Flight_Blogs,
  Flight_Blogs1,
  Flight_Destinations,
  Flight_Offers,
} from "../Seeds/Seeds";
function Flight() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway"); // "oneway" | "roundtrip"
  const [flightClass, setFlightClass] = useState("");
  const [travelers, setTravelers] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  return (
    <>
      <Navbar></Navbar>

      <section>
        <div className="container-fluid main2">
          <div className="main">
            <div className="display-1 fw-bold text-center">
              Ready to take off?
            </div>

            <div className="ticket">
              {/* Row 1 */}
              <div className="row s align-items-center mb-3">
                {/* One Way / Round Trip */}
                <div className="col-12 col-md-4">
                  <div className="d-flex a ms-4 justify-content-center justify-content-md-start">
                    <button
                      type="button"
                      className={`btn me-2 ${
                        tripType === "oneway" ? "btn-dark" : "btn-light"
                      }`}
                      onClick={() => setTripType("oneway")}
                    >
                      One Way
                    </button>

                    <button
                      type="button"
                      className={`btn ${
                        tripType === "roundtrip" ? "btn-dark" : "btn-light"
                      }`}
                      onClick={() => setTripType("roundtrip")}
                    >
                      Round Trip
                    </button>
                  </div>
                </div>

                <div className="col-12 col-md-2" />

                {/* Dropdowns (Class + Travelers) */}
                <div className="col-12 col-md-6">
                  <div className="b">
                    <div className="row g-3">
                      <div className="col-12 col-md-5">
                        <div className="b1">
                          <div className="dropdown f1">
                            {/* Bootstrap dropdown toggle — readOnly so user can't type */}
                            <input
                              type="text"
                              className="form-control dropdown-toggle"
                              placeholder="Select Class"
                              id="classDropdown"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              readOnly
                              value={flightClass}
                            />
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="classDropdown"
                            >
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => setFlightClass("Economy")}
                                >
                                  Economy
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() =>
                                    setFlightClass("Premium Economy")
                                  }
                                >
                                  Premium Economy
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => setFlightClass("Business")}
                                >
                                  Business
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => setFlightClass("First Class")}
                                >
                                  First Class
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-1" />

                      <div className="col-12 col-md-5">
                        <div className="b2">
                          <div className="dropdown f1">
                            <input
                              type="text"
                              className="form-control dropdown-toggle"
                              placeholder="Select Travelers"
                              id="travelersDropdown"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              readOnly
                              value={travelers}
                            />
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="travelersDropdown"
                            >
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => setTravelers("1")}
                                >
                                  1
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => setTravelers("2")}
                                >
                                  2
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => setTravelers("3")}
                                >
                                  3
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item"
                                  onClick={() => setTravelers("4")}
                                >
                                  4
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end row 1 */}
              {/* Row 2 — use col-md-3 so 4 fields fit on medium screens */}
              <div className="container-fluid">
                <div className="row row2 g-3">
                  {/* From */}
                  <div className="col-12 col-md-3">
                    <div className="c">
                      <div className="f">
                        <div>
                          <i className="fas fa-map-marker-alt ms-2 me-2" />
                          From
                        </div>

                        <div className="dropdown f1">
                          <input
                            type="text"
                            className="form-control dropdown-toggle ms-2"
                            placeholder="Select Location"
                            id="fromDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            readOnly
                            value={fromLocation}
                          />
                          <ul
                            className="dropdown-menu w-100"
                            aria-labelledby="fromDropdown"
                          >
                            <li>
                              <button
                                type="button"
                                className="dropdown-item"
                                onClick={() =>
                                  setFromLocation("San Jacinto, USA")
                                }
                              >
                                San Jacinto, USA
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="dropdown-item"
                                onClick={() =>
                                  setFromLocation("North Dakota, Canada")
                                }
                              >
                                North Dakota, Canada
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setFromLocation("Paris")}
                              >
                                Paris
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* To */}
                  <div className="col-12 col-md-3">
                    <div className="c">
                      <div className="f">
                        <div>
                          <i className="fas fa-paper-plane ms-2 me-2" />
                          To
                        </div>

                        <div className="dropdown f1">
                          <input
                            type="text"
                            className="form-control dropdown-toggle ms-2"
                            placeholder="Select Location"
                            id="toDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            readOnly
                            value={toLocation}
                          />
                          <ul
                            className="dropdown-menu w-100"
                            aria-labelledby="toDropdown"
                          >
                            <li>
                              <button
                                type="button"
                                className="dropdown-item"
                                onClick={() =>
                                  setToLocation("San Jacinto, USA")
                                }
                              >
                                San Jacinto, USA
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="dropdown-item"
                                onClick={() =>
                                  setToLocation("North Dakota, Canada")
                                }
                              >
                                North Dakota, Canada
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setToLocation("Paris")}
                              >
                                Paris
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Departure */}
                  <div className="col-12 col-md-3">
                    <div className="c">
                      <div className="f">
                        <div>
                          <i className="fas fa-calendar-alt ms-2 me-2" />
                          Departure
                        </div>
                        <input
                          type="date"
                          className="form-control ms-2"
                          value={departure}
                          onChange={(e) => setDeparture(e.target.value)}
                          style={{ width: "230px" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Return — only render for round trip */}
                  {tripType === "roundtrip" && (
                    <div className="col-12 col-md-3">
                      <div className="c">
                        <div className="f">
                          <div>
                            <i className="fas fa-calendar-alt ms-2 me-2" />
                            Return
                          </div>
                          <input
                            type="date"
                            className="form-control ms-2"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            style={{ width: "230px" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="ic"><i class="fas fa-exchange-alt"></i></div> */}
      <div className="find">
        Find Ticket{" "}
        <span
          style={{ fontSize: "27px", marginBottom: "2px", marginLeft: "20px" }}
        >
          {" "}
          &#8594;{" "}
        </span>
      </div>

      {/* new section */}

      <section>
        <div class="container py-5">
          <h3 class="fw-bold mb-4">Special Offers</h3>
          <div class="row g-4">
            {/* <!-- Card 1 --> */}
            {Flight_Offers.map((item) => {
              return (
                <div class="col-md-4" key={item.id}>
                  <div class="offer-card bg-light text-dark">
                    <h5 class="fw-bold">
                      <img src={`/images/${item.img}`} class="me-2 pp" />
                      {item.brand}
                    </h5>
                    <p class="mb-1 text-muted">Flat</p>
                    <h3 class="fw-bold">{item.offer}</h3>
                    <p>{item.detail}</p>
                    <span class="offer-code">{item.code}</span>
                    <button class="arrow-btn">&rarr;</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div class="container my-5">
          <h1 class="fw-bold mb-4 text-center display-4">
            Popular Destinations
          </h1>
          <div class="row g-4">
            {/* <!-- Thailand --> */}
            {Flight_Destinations.map((item) => {
              return (
                <div
                  key={item.id}
                  class="col-md-3 col-sm-6"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/flight_list")}
                >
                  <div class="card h-100 shadow-sm border-0 rounded-4">
                    <div class="position-relative">
                      <img
                        src={`/images/${item.img}`}
                        class="card-img-top rounded-4"
                        alt="{item.title}"
                      />
                      <button class="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 shadow-sm info-btn">
                        <i class="bi bi-info-lg"></i>
                      </button>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title fw-bold bb">{item.title}</h5>
                      <p class="mb-1">
                        <span class="fw-bold">{item.rating}</span>{" "}
                      </p>
                      <p class="card-text text-muted">{item.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section class="step-section">
        <div class="container">
          <div class="row justify-content-center align-items-center text-center">
            {/* <!-- Step 1 --> */}
            <div class="col-12 col-md-4 arrow">
              <div class="step-card">
                <img
                  src="https://img.icons8.com/color/96/000000/globe--v1.png"
                  alt="Search Choice"
                />
                <h5>Search Choice</h5>
                <p>Total 630+ destinations that we work with</p>
              </div>
            </div>

            {/* <!-- Step 2 --> */}
            <div class="col-12 col-md-4 arrow">
              <div class="step-card">
                <img
                  src="https://img.icons8.com/color/96/000000/marker.png"
                  alt="Select Destination"
                />
                <h5>Select Destination</h5>
                <p>Insipidity the sufficient discretion imprudence</p>
              </div>
            </div>

            {/* <!-- Step 3 --> */}
            <div class="col-12 col-md-4">
              <div class="step-card">
                <img
                  src="https://img.icons8.com/color/96/000000/booking.png"
                  alt="Easy to Book"
                />
                <h5>Easy to Book</h5>
                <p>With an easy and fast ticket purchase process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container mb-5">
          <div class="row bg1  py-5">
            <div class="col-12 col-md-8 ps-5">
              <h1>
                It's time to discover
                <img
                  src="images/airoplane logo.png"
                  class="air"
                  alt="Airplane"
                />
              </h1>
              <p>
                He moonlights difficult engrossed it, sportsmen. Interested has
                all Devonshire difficulty gay assistance joy.
              </p>
            </div>

            <div class="col-12 col-md-4 text-md-end text-center ps-5">
              <div
                class="btn1"
                onClick={() => navigate("/flight_list")}
                style={{ cursor: "pointer" }}
              >
                Book Flight
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div
          className="container"
          onClick={() => navigate("/blog")}
          style={{ cursor: "pointer" }}
        >
          {/* Section Title */}
          <h1 className="fw-bold mb-5 text-center display-4">
            Latest Blogs & News
          </h1>

          <div className="row g-4">
            {/* Left Big Blog */}
            <div className="col-lg-6 col-md-12">
              {Flight_Blogs1.map((i) => {
                return (
                  <div className="card border-0 h-100" key={i.id}>
                    <img
                      src={`/images/${i.img}`}
                      className="card-img-top img-fluid rounded-4"
                      alt="Hotel Operations"
                    />
                    <div className="card-body">
                      <h3 className="card-text">{i.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side Smaller Blogs */}
            <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-between">
              {/* Blog Item 1 */}
              {Flight_Blogs.map((item) => {
                return (
                  <div className="d-flex align-items-center mb-4" key={item.id}>
                    <div className="col-4">
                      <img
                        src={`/images/${item.img}`}
                        className="img-fluid rounded-3"
                        alt="water world"
                      />
                    </div>
                    <div className="col-8 ps-3">
                      <h5 className="mb-1">{item.title}</h5>
                      <p className="mb-0 text-muted">{item.author}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
export default Flight;
