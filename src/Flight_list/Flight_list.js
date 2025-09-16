import { useNavigate } from "react-router-dom";
import "./Flight_list.css";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Flight_Listings } from "../Seeds/Seeds";

function Flight_list() {
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

      <div className="container ticket">
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
                            onClick={() => setFlightClass("Premium Economy")}
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
                          onClick={() => setFromLocation("San Jacinto, USA")}
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
                          onClick={() => setToLocation("San Jacinto, USA")}
                        >
                          San Jacinto, USA
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => setToLocation("North Dakota, Canada")}
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
      <div className="find">
        Find Ticket{" "}
        <span
          style={{ fontSize: "27px", marginBottom: "2px", marginLeft: "20px" }}
        >
          {" "}
          &#8594;{" "}
        </span>
      </div>

      <div className="container mt-5">
        <h2>09 Flight Available</h2>
        <h3>
          25 Jan <span style={{ fontSize: "30px" }}>.</span> 1 Stop
        </h3>
      </div>
      <section className="container my-4">
        <div
          className="row align-items-center p-4 rounded-3"
          style={{ backgroundColor: "#f3f1fd" }}
        >
          {/* Left Image */}
          <div className="col-md-3 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
              alt="Traveler"
              className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </div>

          {/* Text Content */}
          <div className="col-md-6 text-center text-md-start">
            <h4 className="fw-bold">International Guideline</h4>
            <p className="text-muted">
              COVID safety measures adopted by various countries including VISA
              restrictions, quarantine rules, etc.
            </p>
            <button className="btn btn-primary px-4">View Guidelines</button>
          </div>

          {/* Right Image */}
          <div className="col-md-3 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922656.png"
              alt="Social Distancing"
              className="img-fluid"
              style={{ maxHeight: "150px" }}
            />
          </div>
        </div>
      </section>

      <div className="container-fluid py-4">
        <div className="row">
          {/* Sidebar Filters */}
          <div className="col-lg-3 mb-4">
            <div className="filter-sidebar bg-white rounded p-3 shadow-sm">
              <h6 className="mb-3">Popular Filters</h6>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="refundable"
                />
                <label className="form-check-label" htmlFor="refundable">
                  Refundable Fare (41)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="stop1"
                />
                <label className="form-check-label" htmlFor="stop1">
                  1 Stop (20)
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="late" />
                <label className="form-check-label" htmlFor="late">
                  Late Departure (4)
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="nonstop"
                />
                <label className="form-check-label" htmlFor="nonstop">
                  Non-Stop (2)
                </label>
              </div>

              <h6 className="mb-3 mt-4">Price</h6>
              <input
                type="range"
                className="form-range"
                min="6590"
                max="150000"
              />

              <h6 className="mb-3 mt-4">Onward Stops</h6>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="direct"
                />
                <label className="form-check-label" htmlFor="direct">
                  Direct
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="one-stop"
                />
                <label className="form-check-label" htmlFor="one-stop">
                  1 Stop
                </label>
              </div>

              <h6 className="mb-3 mt-4">Preferred Airline</h6>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="blogzine"
                />
                <label className="form-check-label" htmlFor="blogzine">
                  Blogzine
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wizixo"
                />
                <label className="form-check-label" htmlFor="wizixo">
                  Wizixo
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="folio"
                />
                <label className="form-check-label" htmlFor="folio">
                  Folio Airline
                </label>
              </div>

              <h6 className="mb-3 mt-4">Layover Airport</h6>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="abu" />
                <label className="form-check-label" htmlFor="abu">
                  Abu Dhabi (01)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="amsterdam"
                />
                <label className="form-check-label" htmlFor="amsterdam">
                  Amsterdam (02)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="chicago"
                />
                <label className="form-check-label" htmlFor="chicago">
                  Chicago (02)
                </label>
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="doha" />
                <label className="form-check-label" htmlFor="doha">
                  Doha (03)
                </label>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-outline-secondary btn-sm">
                  Clear all
                </button>
                <button className="btn btn-primary btn-sm">
                  Filter Result
                </button>
              </div>
            </div>
          </div>

          {/* Flight Results */}
          <div className="col-lg-9">

            {/* Airline */}
            {Flight_Listings.map((item) => {
              return (
                <div className="flight-card bg-white rounded p-3 shadow-sm mb-3 d-flex justify-content-between align-items-center" key={item.id}>
                  <div>
                    <h6 className="mb-1">{item.airline}{item.code}</h6>
                    <div className="d-flex align-items-center">
                      <div className="me-4">
                        <strong>{item.departureTime}</strong><br/>
                        <strong>{item.departureDate}</strong>
                        <br />
                        <small>{item.departureAirport}</small>
                      </div>
                      <div className="text-center me-4">
                        <span className="badge bg-light text-dark">{item.duration}</span>
                        <br />
                        <i className="bi bi-arrow-right"></i>
                      </div>
                      <div>
                        <strong>{item.arrivalTime}</strong><br/>
                        <strong>{item.arrivalDate}</strong>
                        <br />
                        <small>{item.arrivalAirport}</small>
                      </div>
                    </div>
                    <small className="text-danger">{item.refundable}</small>
                    <br />
                    <small className="text-danger">Only {item.seatsLeft} Seat Left</small>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold fs-6">{item.price}</div>
                    <button
                      className="btn btn-primary btn-sm mt-2"
                      onClick={() => navigate("/flight_details")}
                    >
                      Book Now
                    </button>
                    <br />
                    <a href="/" className="small">
                      Flight Details
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Pagination */}
            <nav aria-label="Page navigation" className="mt-4">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="/">
                    «
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="/">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    …
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/">
                    »
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </>
  );
}
export default Flight_list;
