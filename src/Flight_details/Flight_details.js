import "./Flight_details.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Flight_details() {
  const [traveler, setTraveler] = useState({
    title: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Receive flight data from state or localStorage
  const { flight } = location.state || {};
  const savedFlight =
    flight || JSON.parse(localStorage.getItem("selectedFlight"));

  if (!savedFlight) {
    return <h2>No flight selected</h2>;
  }

  const itinerary = savedFlight.itineraries[0];
  const travelerPricing = savedFlight.travelerPricings[0];
  const cabin = travelerPricing?.fareDetailsBySegment?.[0]?.cabin || "Economy";

  // Build Flight Segments for UI
  const Flight_Segments = itinerary.segments.map((seg, i) => ({
    id: i,
    airline: `${seg.carrierCode} ${seg.number}`,
    departureCode: seg.departure.iataCode,
    departureTime: new Date(seg.departure.at).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    departureDate: new Date(seg.departure.at).toLocaleDateString(),
    departureAirport: seg.departure.iataCode,
    departureTerminal: seg.departure.terminal || "N/A",
    duration: seg.duration || itinerary.duration,
    arrivalCode: seg.arrival.iataCode,
    arrivalTime: new Date(seg.arrival.at).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    arrivalDate: new Date(seg.arrival.at).toLocaleDateString(),
    arrivalAirport: seg.arrival.iataCode,
    arrivalTerminal: seg.arrival.terminal || "N/A",
  }));

  // // Fare summary calculation
  // const baseFare = parseFloat(savedFlight.price.base || 0);
  // const fees = parseFloat(savedFlight.price.fees || 0);
  // const taxes = parseFloat(savedFlight.price.taxes || 0);
  // const totalFare = parseFloat(savedFlight.price.total || baseFare + fees + taxes);

  // const Fare_Summary_Calculated = {
  //   baseFare: `${savedFlight.price.currency} ${baseFare}`,
  //   services: `${savedFlight.price.currency} ${fees + taxes}`,
  //   discount: `0`, // update if you have discounts
  //   total: `${savedFlight.price.currency} ${totalFare}`,
  // };
  const baseFare = parseFloat(savedFlight.price.base || 0);
  const fees = parseFloat(savedFlight.price.fees ?? 0);
  const taxes = parseFloat(savedFlight.price.taxes ?? 0);

  // If savedFlight.price.total exists, use it. Otherwise, calculate.
  const totalFare =
    savedFlight.price.total !== undefined
      ? parseFloat(savedFlight.price.total)
      : baseFare + fees + taxes;

  const Fare_Summary_Calculated = {
    baseFare: `${savedFlight.price.currency} ${baseFare.toFixed(2)}`,
    services: `${savedFlight.price.currency} ${(fees + taxes).toFixed(2)}`,
    discount: `0`,
    total: `${savedFlight.price.currency} ${totalFare.toFixed(2)}`,
  };

  const handleChange = (field, value) => {
    setTraveler((prev) => ({ ...prev, [field]: value }));
  };

  const handleProceed = () => {
    const { title, firstName, lastName, phone, email } = traveler;

    if (!title || !firstName || !lastName || !phone || !email) {
      alert("Please fill all traveler details before proceeding.");
      return;
    }

    navigate("/payment", {
      state: {
        flight: savedFlight,
        traveler,
        fareSummary: Fare_Summary_Calculated,
      },
    });
  };

  return (
    <>
      <Navbar />

      <section>
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="container col-md-9 mt-5">
              <div className="col-md-12 mt-5">
                <div className="col-md-9 pt-3 display-6 fw-bold">
                  <i className="fa-solid fa-plane pe-3"></i>
                  <span>
                    {Flight_Segments[0].departureCode} →{" "}
                    {Flight_Segments[Flight_Segments.length - 1].arrivalCode}
                  </span>
                  <h5
                    className="text-secondary"
                    style={{ paddingLeft: "65px" }}
                  >
                    {new Date(
                      itinerary.segments[0].departure.at
                    ).toDateString()}{" "}
                    · {itinerary.segments.length - 1} stop(s) ·{" "}
                    {itinerary.duration}
                  </h5>
                </div>
              </div>

              {/* Travel Class + Segments */}
              <div className="container col-md-12 mt-5 pt-5 book pb-5">
                <div className="d-flex justify-content-between">
                  <h5 className="text-secondary">
                    Travel Class: <span className="text-dark">{cabin}</span>
                  </h5>
                </div>

                {Flight_Segments.map((item) => (
                  <div className="col-md-12 row mt-3" key={item.id}>
                    <div className="col-md-3" style={{ marginTop: "50px" }}>
                      <h3>{item.airline}</h3>
                    </div>
                    <div className="col-md-3">
                      <h3>{item.departureCode}</h3>
                      <h4>{item.departureTime}</h4>
                      <div className="col-md-12 text-secondary">
                        <h5>{item.departureDate}</h5>
                        <h5>{item.departureAirport}</h5>
                        <h5>{item.departureTerminal}</h5>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-md-12 bn">
                        <h2>{item.duration}</h2>
                        <div className="a-bg">
                          <i className="fa-solid fa-plane"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <h3>{item.arrivalCode}</h3>
                      <h4>{item.arrivalTime}</h4>
                      <div className="col-md-12 text-secondary">
                        <h5>{item.arrivalDate}</h5>
                        <h5>{item.arrivalAirport}</h5>
                        <h5>{item.arrivalTerminal}</h5>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Layover info */}
                {itinerary.segments.length > 1 && (
                  <div className="col-md-12 text-danger mt-5 cb">
                    <span>
                      Change of planes: {itinerary.segments.length - 1}{" "}
                      Layover(s)
                    </span>
                  </div>
                )}
              </div>

              {/* Traveler Details */}
              <div className="col-md-12 book mt-5">
                <div className="container col-md-12">
                  <h1
                    className="fw-bold"
                    style={{
                      borderBottom: "2px solid #cacacdff",
                      paddingBottom: "20px",
                      paddingTop: "10px",
                    }}
                  >
                    Traveler Details
                  </h1>

                  <section className="container mt-4 mb-5">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        <div className="card mb-3">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <span>Adult 1</span>
                          </div>
                          <div className="card-body">
                            <div className="row g-3">
                              <div className="col-md-2">
                                <label className="form-label">Title</label>
                                <select
                                  className="form-select"
                                  value={traveler.title}
                                  onChange={(e) =>
                                    handleChange("title", e.target.value)
                                  }
                                >
                                  <option value="">Select</option>
                                  <option>Mr</option>
                                  <option>Mrs</option>
                                  <option>Miss</option>
                                </select>
                              </div>

                              <div className="col-md-5">
                                <label className="form-label">First name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First name"
                                  value={traveler.firstName}
                                  onChange={(e) =>
                                    handleChange("firstName", e.target.value)
                                  }
                                />
                              </div>

                              <div className="col-md-5">
                                <label className="form-label">Last name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last name"
                                  value={traveler.lastName}
                                  onChange={(e) =>
                                    handleChange("lastName", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card mb-3">
                          <div className="card-body">
                            <h5 className="fw-bold">
                              Booking detail will be sent to
                            </h5>
                            <div className="row g-3 mt-2">
                              <div className="col-md-6">
                                <label className="form-label">
                                  Mobile Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your mobile number"
                                  value={traveler.phone}
                                  onChange={(e) =>
                                    handleChange("phone", e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Enter your email address"
                                  value={traveler.email}
                                  onChange={(e) =>
                                    handleChange("email", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg"
                            onClick={handleProceed}
                          >
                            Proceed To Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-md-3">
              <div className="container col-md-12 f-bg">
                <h1>Fare Summary</h1>
                <div
                  className="col-md-12"
                  style={{
                    borderTop: "1px solid #cacacdff",
                    paddingTop: "20px",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">Base Fare</h5>
                    <h4 className="text-secondary">
                      {Fare_Summary_Calculated.baseFare}
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">Discount</h5>
                    <h5 className="text-success">
                      {Fare_Summary_Calculated.discount}
                    </h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">Other Services</h5>
                    <h4 className="text-secondary">
                      {Fare_Summary_Calculated.services}
                    </h4>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">Total Fare</h5>
                    <h4 className="text-secondary">
                      {Fare_Summary_Calculated.total}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Flight_details;
