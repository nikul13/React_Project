import "./Payment.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { bookingDetails } from "../Seeds/Seeds";

function Payment() {
  return (
    <>
      <Navbar></Navbar>

      <section>
        <div className="container mt-5 pt-2">
          <div className="col-md-12 mt-5 pt-5 row">
            {/* left side  */}
            <div className="col-md-8">
              <div className="display-4 fw-bold">
                Enter Your Payment Details
              </div>
              <div className="hey text-success">
                Hey' you are saving$2,560discount using coupon code
              </div>
              <div className="col-md-12 payment-bg">
                <div className="container">
                  <div className="col-md-12 d-flex justify-content-between">
                    <h3 className="mt-3 fw-bold">We Accept:</h3>
                    <div>
                      <img
                        src="images/card.jpeg"
                        style={{ height: "50px", paddingTop: "17px" }}
                      ></img>
                    </div>
                  </div>
                  <div className="col-md-12 h5 mt-4">Card Number *</div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control place"
                      style={{ height: "50px" }}
                      placeholder="XXXX XXXX XXXX XXXX"
                    ></input>
                  </div>
                  <div className="col-md-12 row">
                    <div className="col-md-6">
                      <div className="col-md-12 h5 mt-4">Expiration date *</div>
                      <div className="col-md-12 d-flex">
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Month"
                            style={{ height: "50px" }}
                            className="form-control mo"
                          ></input>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Year"
                            style={{ height: "50px" }}
                            className="form-control yo"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="col-md-12 h5 mt-4">CVV / CVC *</div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          placeholder="XXX"
                          style={{ height: "50px" }}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="h5 ">Name on Card *</div>
                    <input
                      type="text"
                      placeholder="Enter card holder name"
                      style={{ height: "50px" }}
                      className="form-control ec"
                    ></input>
                  </div>
                  <div className="col-md-12 btn btn-primary w-100 mt-4 fw-bold  fs-5">
                    Pay Now
                  </div>
                </div>
              </div>
            </div>

            {/* right side */}
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
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Base Fare</h5>
                      <h4 className="text-secondary">$38,660</h4>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Discount</h5>
                      <h5 className="text-success">+$2,560</h5>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Other Services</h5>
                      <h4 className="text-secondary">$20</h4>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Total Fare</h5>
                      <h4 className="text-secondary">$36,500</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Booking */}

              {/* Flight Details */}
              {bookingDetails.map((item) => {
                return (
                  <>
                    <div className="card shadow-sm border rounded-4 mb-3">
                      <div className="card-body">
                        <h5 className="fw-bold mb-4">Your Booking</h5>
                        <div className="mb-3" key={item.id}>
                          <small className="text-muted d-block mb-2">
                            <i className="bi bi-ticket-perforated"></i> Flight
                            Ticket
                          </small>
                          <div className="d-flex align-items-center">
                            <img
                              src="https://img.icons8.com/color/48/airplane-take-off.png"
                              alt="airline"
                              width="28"
                              className="me-2"
                            />
                            <span className="fw-bold">{item.flight.route}</span>
                          </div>
                          <small className="text-muted d-block mt-1">
                            {item.flight.date}
                          </small>
                        </div>

                        <hr />

                        {/* Traveler Details */}
                        <div className="mb-3">
                          <small className="text-muted d-block mb-2">
                            <i className="bi bi-person"></i> Traveler detail
                          </small>
                          <span className="fw-bold d-block">
                            {item.traveler.name}
                          </span>
                          <small className="text-muted">
                            {item.traveler.info}
                          </small>
                        </div>

                        <hr />

                        {/* Review Booking */}
                        <div className="text-center">
                          <a
                            href="#"
                            className="text-primary fw-semibold text-decoration-none"
                          >
                            Review booking
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
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
export default Payment;
