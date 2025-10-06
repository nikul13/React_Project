import "./Flight.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getAccessToken } from "../Api/Amadeus";
import { debounce } from "lodash";


import {
  Flight_Blogs,
  Flight_Blogs1,
  Flight_Destinations,
  Flight_Listings,
  Flight_Offers,
} from "../Seeds/Seeds";
import axios from "axios";

function Flight() {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway"); // "oneway" | "roundtrip"
  const [flightClass, setFlightClass] = useState("");
  const [travelers, setTravelers] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 8;
  const [loading, setLoading] = useState(false);

  // const searchFlights = async () => {
  //   const token = await getAccessToken();
  //   if (!token) return;

  //   try {
  //     const response = await axios.get(
  //       "https://test.api.amadeus.com/v2/shopping/flight-offers",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         params: {
  //           originLocationCode: fromLocation,
  //           destinationLocationCode: toLocation,
  //           departureDate: departure,
  //           adults: travelers || 1,
  //         },
  //       }
  //     );

  //     console.log("Flight data:", response.data);
  //     setFlights(response.data.data);
  //     setShowResults(true);
  //   } catch (error) {
  //     console.error("Flight search Failed", error);

  //     if (error.response) {
  //       console.error("Status:", error.response.status);
  //       console.error("Error data:", error.response.data);
  //     }
  //   }
  // };

  const searchFlights = async () => {
    const token = await getAccessToken();
    if (!token) return;
    setLoading(true);
    try {
      let params = {
        originLocationCode: fromLocation,
        destinationLocationCode: toLocation,
        departureDate: departure,
        adults: travelers || 1,
      };

      if (returnDate && returnDate.trim() !== "") {
        params.returnDate = returnDate;
      }

      const response = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers",
        {
          headers: { Authorization: `Bearer ${token}` },
          params,
        }
      );

      console.log("Flight data:", response.data);
      setFlights(response.data.data);
      setShowResults(true);
      setCurrentPage(1);
    } catch (error) {
      console.error("Flight search Failed", error);

      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Error data:", error.response.data);
      }
    } finally {
      setLoading(false); // 🟢 Hide spinner (success or error)
    }
  };

  // const fetchSuggestions = debounce(async (input, type) => {
  //   if (!input) {
  //     type === "from" ? setFromSuggestions([]) : setToSuggestions([]);
  //     return;
  //   }

  //   const token = await getAccessToken();

  //   try {
  //     const response = await axios.get(
  //       "https://test.api.amadeus.com/v1/reference-data/locations",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         params: {
  //           subType: "AIRPORT,CITY",
  //           keyword: input,
  //           "page[limit]": 5,
  //         },
  //       }
  //     );

  //     const suggestions = response.data.data.map((item) => ({
  //       label: `${item.name} (${item.iataCode})`,
  //       code: item.iataCode,
  //     }));

  //     if (type === "from") {
  //       setFromSuggestions(suggestions);
  //     } else {
  //       setToSuggestions(suggestions);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching suggestions:", error);
  //   }
  // }, 500); // wait 500ms before calling the API

  const fetchSuggestions = debounce(async (input, type) => {
    if (!input) {
      type === "from" ? setFromSuggestions([]) : setToSuggestions([]);
      return;
    }

    const token = await getAccessToken();

    try {
      const response = await axios.get(
        "https://test.api.amadeus.com/v1/reference-data/locations",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            subType: "AIRPORT,CITY",
            keyword: input,
            "page[limit]": 5,
          },
        }
      );

      const suggestions = response.data.data.map((item) => ({
        label: `${item.name} (${item.iataCode})`,
        code: item.iataCode,
      }));

      if (type === "from") {
        setFromSuggestions(suggestions);
      } else {
        setToSuggestions(suggestions);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, 500);

  const totalFlights = flights.length;
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  const totalPages = Math.ceil(totalFlights / flightsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar></Navbar>
      {loading && (
        <div
          className="loading-overlay d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // light transparent background
            zIndex: 9999, // stays on top
          }}
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "4rem", height: "4rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

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
                  <div className="col-12 col-md-3 position-relative">
                    <div className="c">
                      <div className="f">
                        <div>
                          <i className="fas fa-map-marker-alt ms-2 me-2" />
                          From
                        </div>

                        <div className="f1 position-relative">
                          <input
                            type="text"
                            className="form-control ms-2"
                            placeholder="Enter City or Airport"
                            value={fromLocation}
                            onChange={(e) => {
                              setFromLocation(e.target.value);
                              fetchSuggestions(e.target.value, "from");
                            }}
                          />
                          {fromSuggestions.length > 0 && (
                            <ul className="suggestions-list">
                              {fromSuggestions.map((sugg, index) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setFromLocation(sugg.code); // Store the IATA code
                                    setFromSuggestions([]);
                                  }}
                                >
                                  {sugg.label}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* To */}
                  <div className="col-12 col-md-3 position-relative">
                    <div className="c">
                      <div className="f">
                        <div>
                          <i className="fas fa-paper-plane ms-2 me-2" />
                          To
                        </div>

                        <div className="f1 position-relative">
                          <input
                            type="text"
                            className="form-control ms-2"
                            placeholder="Enter City or Airport"
                            value={toLocation}
                            onChange={(e) => {
                              setToLocation(e.target.value);
                              fetchSuggestions(e.target.value, "to");
                            }}
                          />
                          {toSuggestions.length > 0 && (
                            <ul className="suggestions-list">
                              {toSuggestions.map((sugg, index) => (
                                <li
                                  key={index}
                                  onClick={() => {
                                    setToLocation(sugg.code); // Store the IATA code
                                    setToSuggestions([]);
                                  }}
                                >
                                  {sugg.label}
                                </li>
                              ))}
                            </ul>
                          )}
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

      <div
        className="find"
        onClick={searchFlights}
        style={{ cursor: "pointer" }}
      >
        Find Ticket{" "}
        <span
          style={{ fontSize: "27px", marginBottom: "2px", marginLeft: "20px" }}
        >
          {" "}
          &#8594;{" "}
        </span>
      </div>

      {showResults && (
        <>
          <div className="container mt-5">
            <h2>
              {totalFlights} Flight{totalFlights !== 1 ? "s" : ""} Available
            </h2>
          </div>

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
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="late"
                    />
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
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="abu"
                    />
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
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="doha"
                    />
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
              {/* <div className="col-lg-9">
                {Flight_Listings.map((item) => {
                  return (
                    <div class="container" key={item.id}>
                      <div className="flight-card bg-white rounded p-3 shadow-sm mb-3 d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">
                            {item.airline}
                            {item.code}
                          </h6>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <strong>{item.departureTime}</strong>
                              <br />
                              <strong>{item.departureDate}</strong>
                              <br />
                              <small>{item.departureAirport}</small>
                            </div>
                            <div className="text-center me-4">
                              <span className="badge bg-light text-dark">
                                {item.duration}
                              </span>
                              <br />
                              <i className="bi bi-arrow-right"></i>
                            </div>
                            <div>
                              <strong>{item.arrivalTime}</strong>
                              <br />
                              <strong>{item.arrivalDate}</strong>
                              <br />
                              <small>{item.arrivalAirport}</small>
                            </div>
                          </div>
                          <small className="text-danger">
                            {item.refundable}
                          </small>
                          <br />
                          <small className="text-danger">
                            Only {item.seatsLeft} Seat Left
                          </small>
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
                    </div>
                  );
                })}
              </div> */}

              <div className="col-lg-9">
                {currentFlights.map((flight, index) => {
                  const itinerary = flight.itineraries[0];
                  const segment = itinerary.segments[0];

                  return (
                    <div className="container" key={index}>
                      <div className="flight-card bg-white rounded p-3 shadow-sm mb-3 d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-1">
                            {segment.carrierCode} {segment.number}
                          </h6>
                          <div className="d-flex align-items-center">
                            <div className="me-4">
                              <strong>{segment.departure.iataCode}</strong>
                              <br />
                              <small>{segment.departure.at}</small>
                            </div>
                            <div className="text-center me-4">
                              <span className="badge bg-light text-dark">
                                {itinerary.duration}
                              </span>
                              <br />
                              <i className="bi bi-arrow-right"></i>
                            </div>
                            <div>
                              <strong>{segment.arrival.iataCode}</strong>
                              <br />
                              <small>{segment.arrival.at}</small>
                            </div>
                          </div>
                          <small className="text-danger">Refundable</small>
                        </div>
                        <div className="text-end">
                          <div className="fw-bold fs-6">
                            {flight.price.currency} {flight.price.total}
                          </div>
                          <button
                            className="btn btn-primary btn-sm mt-2"
                            onClick={() =>
                              navigate("/flight_details", { state: { flight } })
                            }
                          >
                            Book Now
                          </button>
                          <br />
                          <a href="/" className="small">
                            Flight Details
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {totalPages > 1 && (
                  <div className="d-flex justify-content-center mt-4">
                    <nav>
                      <ul className="pagination">
                        <li
                          className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage - 1)}
                          >
                            Previous
                          </button>
                        </li>

                        {[...Array(totalPages)].map((_, i) => (
                          <li
                            key={i}
                            className={`page-item ${
                              currentPage === i + 1 ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(i + 1)}
                            >
                              {i + 1}
                            </button>
                          </li>
                        ))}

                        <li
                          className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage + 1)}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* new section */}

      <section>
        <div className="container py-5">
          <h3 className="fw-bold mb-4">Special Offers</h3>
          <div className="row g-4">
            {/* <!-- Card 1 --> */}
            {Flight_Offers.map((item) => {
              return (
                <div className="col-md-4" key={item.id}>
                  <div className="offer-card bg-light text-dark">
                    <h5 className="fw-bold">
                      <img src={`/images/${item.img}`} className="me-2 pp" />
                      {item.brand}
                    </h5>
                    <p className="mb-1 text-muted">Flat</p>
                    <h3 className="fw-bold">{item.offer}</h3>
                    <p>{item.detail}</p>
                    <span className="offer-code">{item.code}</span>
                    <button className="arrow-btn">&rarr;</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container my-5">
          <h1 className="fw-bold mb-4 text-center display-4">
            Popular Destinations
          </h1>
          <div className="row g-4">
        
            {Flight_Destinations.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-md-3 col-sm-6"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/flight_details", { state: { flight: item } })}


                >
                  <div className="card h-100 shadow-sm border-0 rounded-4">
                    <div className="position-relative">
                      <img
                        src={`/images/${item.img}`}
                        className="card-img-top rounded-4"
                        alt="{item.title}"
                      />
                      <button className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2 shadow-sm info-btn">
                        <i className="bi bi-info-lg"></i>
                      </button>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-bold bb">{item.title}</h5>
                      <p className="mb-1">
                        <span className="fw-bold">{item.rating}</span>{" "}
                      </p>
                      <p className="card-text text-muted">{item.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      <section className="step-section">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            {/* <!-- Step 1 --> */}
            <div className="col-12 col-md-4 arrow">
              <div className="step-card">
                <img
                  src="https://img.icons8.com/color/96/000000/globe--v1.png"
                  alt="Search Choice"
                />
                <h5>Search Choice</h5>
                <p>Total 630+ destinations that we work with</p>
              </div>
            </div>

            {/* <!-- Step 2 --> */}
            <div className="col-12 col-md-4 arrow">
              <div className="step-card">
                <img
                  src="https://img.icons8.com/color/96/000000/marker.png"
                  alt="Select Destination"
                />
                <h5>Select Destination</h5>
                <p>Insipidity the sufficient discretion imprudence</p>
              </div>
            </div>

            {/* <!-- Step 3 --> */}
            <div className="col-12 col-md-4">
              <div className="step-card">
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
        <div className="container mb-5">
          <div className="row bg1  py-5">
            <div className="col-12 col-md-8 ps-5">
              <h1>
                It's time to discover
                <img
                  src="images/airoplane logo.png"
                  className="air"
                  alt="Airplane"
                />
              </h1>
              <p>
                He moonlights difficult engrossed it, sportsmen. Interested has
                all Devonshire difficulty gay assistance joy.
              </p>
            </div>

            <div className="col-12 col-md-4 text-md-end text-center ps-5">
              <div
                className="btn1"
            
                style={{ cursor: "pointer" }}
              >
                <a href="#">Book Flight</a>
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
