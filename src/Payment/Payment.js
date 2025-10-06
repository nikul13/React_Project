import "./Payment.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const { flight, traveler, fareSummary } = location.state || {};

  if (!flight || !traveler) {
    return <h2>No booking details available</h2>;
  }

  // Build Flight Segments for display
  const itinerary = flight.itineraries[0];
  const Flight_Segments = itinerary.segments.map((seg, i) => ({
    id: i,
    airline: seg.carrierCode + " " + seg.number,
    code: seg.departure.iataCode,
    time: new Date(seg.departure.at).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: new Date(seg.departure.at).toLocaleDateString(),
    airport: seg.departure.iataCode,
    terminal: seg.departure.terminal || "N/A",
    code1: seg.arrival.iataCode,
    time1: new Date(seg.arrival.at).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date1: new Date(seg.arrival.at).toLocaleDateString(),
    airport1: seg.arrival.iataCode,
    terminal1: seg.arrival.terminal || "N/A",
    duration: seg.duration || itinerary.duration,
  }));

  // Use fareSummary passed from Flight_details
  const Fare_Summary = fareSummary || {
    baseFare: `${flight.price.currency} ${flight.price.base}`,
    discount: "- 0",
    services: `${flight.price.currency} 0`,
    total: `${flight.price.currency} ${flight.price.total}`,
  };

  return (
    <>
      <Navbar />

      <section>
        <div className="container mt-5 pt-2">
          <div className="col-md-12 mt-5 pt-5 row">
            {/* Left side - Payment form */}
            <div className="col-md-8">
              <div className="display-4 fw-bold">
                Enter Your Payment Details
              </div>
              <div className="hey text-success">
                Apply your coupon to save on this booking
              </div>
              <div className="col-md-12 payment-bg">
                <div className="container">
                  <div className="col-md-12 d-flex justify-content-between">
                    <h3 className="mt-3 fw-bold">We Accept:</h3>
                    <div>
                      <img
                        src="images/card.jpeg"
                        style={{ height: "50px", paddingTop: "17px" }}
                        alt="cards"
                      />
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="col-md-12 h5 mt-4">Card Number *</div>
                  <input
                    type="text"
                    className="form-control place"
                    style={{ height: "50px" }}
                    placeholder="XXXX XXXX XXXX XXXX"
                  />

                  <div className="col-md-12 row">
                    <div className="col-md-6">
                      <div className="col-md-12 h5 mt-4">Expiration date *</div>
                      <div className="col-md-12 d-flex">
                        <input
                          type="text"
                          placeholder="Month"
                          style={{ height: "50px" }}
                          className="form-control mo me-2"
                        />
                        <input
                          type="text"
                          placeholder="Year"
                          style={{ height: "50px" }}
                          className="form-control yo"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-12 h5 mt-4">CVV / CVC *</div>
                      <input
                        type="text"
                        placeholder="XXX"
                        style={{ height: "50px" }}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 mt-4">
                    <div className="h5">Name on Card *</div>
                    <input
                      type="text"
                      placeholder="Enter card holder name"
                      style={{ height: "50px" }}
                      className="form-control ec"
                    />
                  </div>

                  <div className="col-md-12 btn btn-primary w-100 mt-4 fw-bold fs-5">
                    Pay Now
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Fare Summary + Booking */}
            <div className="col-md-4">
              {/* Fare Summary */}
              <div className="container col-md-12 f-bg mb-5">
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
                    <h4 className="text-secondary">{Fare_Summary.baseFare}</h4>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">Discount</h5>
                    <h5 className="text-success">{Fare_Summary.discount}</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">Other Services</h5>
                    <h4 className="text-secondary">{Fare_Summary.services}</h4>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-bold">Total Fare</h5>
                    <h4 className="text-secondary">{Fare_Summary.total}</h4>
                  </div>
                </div>
              </div>

              {/* Flight Details */}
              <div className="card shadow-sm border rounded-4 mb-3">
                <div className="card-body">
                  <h5 className="fw-bold mb-4">Your Booking</h5>
                  {Flight_Segments.map((seg) => (
                    <div key={seg.id} className="mb-3">
                      <small className="text-muted d-block mb-2">
                        Flight Ticket
                      </small>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://img.icons8.com/color/48/airplane-take-off.png"
                          alt="airline"
                          width="28"
                          className="me-2"
                        />
                        <span className="fw-bold">
                          {seg.airline} ({seg.code} → {seg.code1})
                        </span>
                      </div>
                      <small className="text-muted d-block mt-1">
                        {seg.date}
                      </small>
                    </div>
                  ))}

                  <hr />

                  {/* Traveler Details */}
                  <div className="mb-3">
                    <small className="text-muted d-block mb-2">
                      Traveler Detail
                    </small>
                    <span className="fw-bold d-block">
                      {traveler.title} {traveler.firstName} {traveler.lastName}
                    </span>
                    <small className="text-muted d-block">
                      {traveler.email}
                    </small>
                    <small className="text-muted d-block">
                      {traveler.phone}
                    </small>
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

export default Payment;
