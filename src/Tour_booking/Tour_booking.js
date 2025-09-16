import "./Tour_booking.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  flightDetails,
  Hero,
  hotelDetails,
  transferDetails,
} from "../Seeds/Seeds";

function Tour_booking() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div className="container d-bg">
          <div className="col-md-12 row">
            <div className="col-md-8 mt-5 pb-5 ms-5">
              <div className=" row col-md-8" style={{ fontSize: "12px" }}>
                <div className="col-md-2">
                  <a href="/" className="text-decoration-none text-dark">
                    <i class="bi bi-house pe-1"></i>
                    <span>Home</span>
                  </a>
                </div>
                <div className="col-md-2">
                  <span className="mb-2">Hotel Detail</span>
                </div>
                <div className="col-md-1">
                  <span>Booking</span>
                </div>
              </div>
              <div className="col-md-12 display-5 fw-bold">
                Review your Booking
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container mt-5">
          {/* <!-- Stepper --> */}
          <ul
            class="nav nav-pills justify-content-between stepper mb-4"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item text-center" role="presentation">
              <button
                class="nav-link active"
                id="pills-step1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-step1"
                type="button"
                role="tab"
              >
                1
              </button>
              <div class="step-label">Tour Review</div>
            </li>
            <li class="nav-item text-center" role="presentation">
              <button
                class="nav-link"
                id="pills-step2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-step2"
                type="button"
                role="tab"
              >
                2
              </button>
              <div class="step-label">Traveler Info</div>
            </li>
            <li class="nav-item text-center" role="presentation">
              <button
                class="nav-link"
                id="pills-step3-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-step3"
                type="button"
                role="tab"
              >
                3
              </button>
              <div class="step-label">Make Payment</div>
            </li>
          </ul>

          <div class="row">
            {/* <!-- Left Side (Main Content) --> */}
            <div class="col-lg-8">
              <div class="tab-content" id="pills-tabContent">
                {/* <!-- Step 1 --> */}
                <div
                  class="tab-pane fade show active"
                  id="pills-step1"
                  role="tabpanel"
                >
                  <h4 className="fw-bold h2 pb-2">Tour Review</h4>
                  <div class="card p-4 mb-3">
                    {Hero.map((item) => {
                      return (
                        <div class="mb-3">
                          <img
                            src={`/images/${item.img}`}
                            style={{ height: "300px" }}
                            class="img-fluid rounded mb-2"
                            alt=""
                          />
                          <div>
                            <h5>{item.title}</h5>
                            <p>
                              <i class="bi bi-calendar-event"></i>
                              {item.date}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div class="mt-4">
                    <div class="card shadow-sm rounded-5">
                      <div class="card-header d-flex justify-content-between align-items-center bg-white border-bottom">
                        <h5 class="mb-0 fw-bold">Flight Details</h5>
                        <a href="#" class="text-decoration-none">
                          View details
                        </a>
                      </div>
                      {flightDetails.map((item) => {
                        return (
                          <>
                            <div class="card-body" key={item.id}>
                              {/* <!-- First Flight --> */}
                              <div class="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-3">
                                <span class="fw-semibold">{item.route}</span>
                                <small class="text-muted">{item.date}</small>
                              </div>

                              <div class="row align-items-center mb-4">
                                {/* <!-- Airline --> */}
                                <div class="col-md-3 text-center">
                                  <img
                                    src={`/images/${item.logo}`}
                                    alt="Airline"
                                    width="50"
                                    class="mb-1"
                                  />
                                  <p class="mb-0 small">{item.airline}</p>
                                </div>

                                {/* <!-- Departure --> */}
                                <div class="col-md-3 text-center">
                                  <h5 class="mb-0 fw-bold">
                                    {item.departure.code}
                                  </h5>
                                  <small class="text-muted">
                                    {item.departure.time}
                                  </small>
                                </div>

                                {/* <!-- Duration --> */}
                                <div class="col-md-3 text-center">
                                  <p class="fw-semibold mb-1">
                                    {item.duration}
                                  </p>
                                  <div class="d-flex align-items-center justify-content-center">
                                    <hr class="flex-grow-1 m-0"></hr>
                                    <span class="badge bg-primary rounded-circle mx-2">
                                      <i class="bi bi-airplane"></i>
                                    </span>
                                    <hr class="flex-grow-1 m-0"></hr>
                                  </div>
                                </div>

                                {/* <!-- Arrival --> */}
                                <div class="col-md-3 text-center">
                                  <h5 class="mb-0 fw-bold">
                                    {item.arrival.code}
                                  </h5>
                                  <small class="text-muted">
                                    {item.arrival.time}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>

                  <div className="container my-5">
                    {/* Hotel Details */}
                    <div className="card shadow-sm mb-4">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">Hotel Details</h5>
                        <a href="#" className="text-decoration-none">
                          View details
                        </a>
                      </div>
                      {hotelDetails.map((item) => {
                        return (
                          <>
                            <div className="card-body" key={item.id}>
                              {/* Hotel Item */}
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                  <h6 className="fw-bold mb-1">{item.name}</h6>
                                  <p className="mb-1">
                                    <span className="text-muted">Room: </span>
                                    {item.room}
                                  </p>
                                  <div className="text-warning">
                                    {item.rating}
                                  </div>
                                </div>
                                <div className="text-end">
                                  <div className="fw-bold">{item.date}</div>
                                  <small className="text-success">
                                    {item.extra}
                                  </small>
                                </div>
                              </div>
                              <hr />
                            </div>
                          </>
                        );
                      })}
                    </div>

                    {/* Transfer Details */}
                    <div className="card shadow-sm mb-4">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold">Transfer Details</h5>
                        <a href="#" className="text-decoration-none">
                          View details
                        </a>
                      </div>
                      {transferDetails.map((item) => {
                        return (
                          <div className="card-body d-flex justify-content-between align-items-center" key={item.id}>
                            <div>
                              <h6 className="fw-bold mb-1">{item.type}</h6>
                              <small className="text-muted">
                                Vehicle type: {item.vehicle}
                              </small>
                            </div>
                            <div className="fw-bold">{item.date}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Cancellation & Date Change */}
                    <div className="card shadow-sm">
                      <div className="card-header">
                        <h5 className="mb-0 fw-bold">
                          Cancellation & Date change
                        </h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled mb-3">
                          <li>
                            • <b>10 days:</b> 100%
                          </li>
                          <li>
                            • <b>10 to 15 days:</b> 75% + Non Refundable
                            Component
                          </li>
                          <li>
                            • <b>15 to 30 days:</b> 30% + Non Refundable
                            Component
                          </li>
                          <li>
                            • <b>Hotel / Air:</b> 100% in case of non-refundable
                            ticket / Hotel Room
                          </li>
                          <li>
                            • <b>Cruise / Visa:</b> On Actuals
                          </li>
                        </ul>
                        <small className="text-muted">
                          All Prices are in Indian Rupees and are subject to
                          change without prior notice. <br />
                          In the case FIT flight inclusive package, the full
                          amount of the flight will be payable at the time of
                          booking.
                        </small>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end">
                    <button
                      class="btn btn-primary"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-step2"
                    >
                      Next
                    </button>
                  </div>
                </div>

                {/* <!-- Step 2 --> */}
                <div class="tab-pane fade" id="pills-step2" role="tabpanel">
                  <h4>Traveler Details</h4>
                  <hr></hr>
                  <div class="alert alert-warning">
                    A customer passport is mandatory. The passport must have 2
                    blank pages and 6-month validity.
                  </div>

                  <div>
                    <div class="card p-4 mb-3">
                      <h4>Traveler 1</h4>

                      <div class="row g-3 mb-3 mt-2">
                        <div class="col-md-2">
                          <select class="form-select">
                            <option>Mr</option>
                            <option>Mrs</option>
                          </select>
                        </div>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="date"
                            class="form-control"
                            placeholder="Date of Birth"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Passport Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="card p-4 mb-3">
                      <h4>Traveler 2</h4>

                      <div class="row g-3 mb-3 mt-2">
                        <div class="col-md-2">
                          <select class="form-select">
                            <option>Mr</option>
                            <option>Mrs</option>
                          </select>
                        </div>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Last name"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="date"
                            class="form-control"
                            placeholder="Date of Birth"
                          />
                        </div>
                        <div class="col-md-6">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Passport Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="card p-4 mb-3">
                      <h4>Your booking detail will be sent here</h4>

                      <div class="row g-3 mb-3 mt-2">
                        <div class="col-md-6">
                          <label>Mobile No</label>
                          <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                          <label>Email Id</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-between">
                      <button
                        class="btn btn-secondary"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-step1"
                      >
                        Previous
                      </button>
                      <button
                        class="btn btn-primary"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-step3"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!-- Step 3 --> */}
                <div className="container my-4 tab-pane fade" id="pills-step3">
                  {/* Title */}
                  <h4 className="fw-bold mb-3">Payment options</h4>
                  <hr />

                  {/* Credit / Debit Card */}
                  <div className="card shadow-sm rounded-3 mb-4">
                    <div className="card-header bg-white fw-bold d-flex justify-content-between align-items-center">
                      Credit or Debit Card
                      <div>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                          alt="Visa"
                          width="40"
                          className="me-2"
                        />
                        <img
                          src="https://pngimg.com/uploads/mastercard/mastercard_PNG11.png"
                          alt="MasterCard"
                          width="40"
                          className="me-2"
                        />
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                          alt="Amex"
                          width="40"
                          className="me-2"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <form>
                        {/* Card Number */}
                        <div className="mb-3">
                          <label className="form-label">Card Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="XXXX XXXX XXXX XXXX"
                          />
                        </div>

                        {/* Expiry + CVV */}
                        <div className="row mb-3">
                          <div className="col-md-4">
                            <label className="form-label">
                              Expiration Month
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">
                              Expiration Year
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="YYYY"
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label">CVV / CVC</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="XXX"
                            />
                          </div>
                        </div>

                        {/* Card Holder */}
                        <div className="mb-3">
                          <label className="form-label">
                            Name of the cardholder
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div className="card shadow-sm rounded-3 mb-4">
                    <div className="card-header bg-white fw-bold">
                      Pay with Paypal
                    </div>
                    <div className="card-body text-center">
                      <img
                        src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                        alt="PayPal"
                        width="100"
                        className="mb-3"
                      />
                      <p className="text-muted">
                        <strong>Tips:</strong> Simply click on the payment
                        button below to proceed to the PayPal payment page.
                      </p>
                      <button className="btn btn-outline-primary">
                        Pay with PayPal
                      </button>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary">Previous</button>
                    <button className="btn btn-success">Pay now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right Side (Sidebar) --> */}
            <div class="col-lg-4">
              {/* <!-- Price Summary --> */}
              
              <div class="card p-3 mb-3 price-summary">
                <h6>Price Summary</h6>
                <div class="d-flex justify-content-between">
                  <span>Base Price</span>
                  <span>$28,660</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>
                    Total Discount <span class="badge bg-danger">10% off</span>
                  </span>
                  <span class="discount">- $2,560</span>
                </div>
                <div class="d-flex justify-content-between">
                  <span>Taxes & Fees</span>
                  <span>$350</span>
                </div>
                <hr></hr>
                <div class="d-flex justify-content-between total">
                  <span>Payable Now</span>
                  <span>$22,500</span>
                </div>
              </div>

              {/* <!-- Login Box --> */}
              <div class="card p-3 login-box">
                <h6>Sign In Now To Book Online</h6>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email id"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Mobile number"
                />
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="accCheck"
                  />
                  <label class="form-check-label" for="accCheck">
                    I Already Have Booking Account
                  </label>
                </div>
                <button class="btn btn-primary mb-2">Book as Guest</button>
                <div class="text-center">Or via social media</div>
                <div class="d-flex gap-2 mt-2">
                  <button class="btn btn-outline-primary w-50">Facebook</button>
                  <button class="btn btn-outline-danger w-50">Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <Footer></Footer>
    </>
  );
}

export default Tour_booking;
