import "./Flight_details.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Fare_Summary, Flight_Segments } from "../Seeds/Seeds";

function Flight_details() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>

      <section>
        <div class="container">
          <div className="row">
            <div className="container col-md-9 mt-5">
              <div className="col-md-12 mt-5">
                <div className="col-md-9 pt-3 display-6  fw-bold">
                  <i class="fa-solid fa-plane pe-3"></i>
                  <span>Mumbai(BOM) &#8594; New York(JFK)</span>
                  <h5
                    className="text-secondary"
                    style={{ paddingLeft: "65px" }}
                  >
                    25 jan . 1 stop . 05h 25m
                  </h5>
                </div>
              </div>

              <div className="container col-md-12 mt-5 pt-5 book pb-5">
                <div className="d-flex justify-content-between">
                  <h5 className="text-secondary">
                    Travel Class:<span className=" text-dark">Economy</span>
                  </h5>
                </div>
                {Flight_Segments.map((item) => {
                  return (
                    <>
                      <div className="col-md-12 row mt-3" key={item.id}>
                        <div className="col-md-3" style={{ marginTop: "50px" }}>
                          <h3>{item.airline}</h3>
                        </div>
                        <div className="col-md-3">
                          <h3>{item.code}</h3>
                          <h4>{item.time}</h4>
                          <div className="col-md-12 text-secondary">
                            <h5>{item.date}</h5>
                            <h5>{item.airpport}</h5>
                            <h5>{item.terminal}</h5>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="col-md-12 bn">
                            <h2>{item.duration}</h2>
                            <div className="a-bg">
                              <i class="fa-solid fa-plane"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <h3>{item.code1}</h3>
                          <h4>{item.time1}</h4>
                          <div className="col-md-12 text-secondary">
                            <h5>{item.date1}</h5>
                            <h5>{item.airport1}</h5>
                            <h5>{item.terminal1}</h5>
                          </div>
                        </div>
                      </div>

                      {/* middle  */}

                      <div className="col-md-12 text-danger mt-5 cb ">
                        <span> Change of planes: 3h 15m Layover in France</span>
                      </div>
                    </>
                  );
                })}

                {/* second  */}

                {/* <div className="col-md-12 row mt-5">
                  <div className="col-md-3" style={{ marginTop: "50px" }}>
                    <h3>Phillippines Airline PA-645</h3>
                  </div>
                  <div className="col-md-3">
                    <h3>CDG</h3>
                    <h4>2:50</h4>
                    <div className="col-md-12 text-secondary">
                      <h5>Sun, 30 Jan 2023</h5>
                      <h5>Ch. De Gaulle, Paris, France</h5>
                      <h5>Terminal - 2E, Gate - 3</h5>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="col-md-12 bn">
                      <h2>95hr 50min</h2>
                      <div className="a-bg">
                        <i class="fa-solid fa-plane"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h3>JFK</h3>
                    <h4>7:35</h4>
                    <div className="col-md-12 text-secondary">
                      <h5>Sun, 30 Jan 2023</h5>
                      <h5>John F Kennedy Intl-NY</h5>
                      <h5>Terminal - 4, Gate - 08</h5>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* info */}
              <div className="col-md-12 mt-5 book">
                <div className="container col-md-12">
                  <div className="col-md-12">
                    <h1
                      className="fw-bold"
                      style={{
                        borderBottom: "2px solid #cacacdff",
                        paddingBottom: "20px",
                        paddingTop: "10px",
                      }}
                    >
                      Important Information
                    </h1>
                  </div>

                  {/* info-detail */}

                  <div className="container">
                    <div className="col-md-12 pb-5 pt-3">
                      <h2>
                        &#8594; Passengers traveling to the United States,
                        please note
                      </h2>
                      <p>
                        <span style={{ fontSize: "30px" }}>. </span>Who can
                        travel? All fully vaccinated travelers are allowed to
                        enter the country. All WHO-approved vaccines, including
                        Covishield and Covaxin, are accepted by the USA.
                      </p>
                      <p>
                        <span style={{ fontSize: "30px" }}>. </span>Destination
                        restrictions: Non-vaccinated travelers from India cannot
                        enter. Any traveler transiting via EU/UK cannot enter
                        the USA.
                      </p>
                      <p>
                        <span style={{ fontSize: "30px" }}>. </span>Insipidity
                        the sufficient discretion imprudence resolution sir him
                        decisively. Proceed how any engaged visitor.
                      </p>
                      <p>
                        <span style={{ fontSize: "30px" }}>. </span>Explained
                        propriety off out perpetual his you. Feel sold off felt
                        nay rose met you. We so entreaties cultivated astonished
                        is.
                      </p>
                      <p>
                        <span style={{ fontSize: "40px" }}>.</span>Was sister
                        for a few longer Mrs sudden talent become. Done may bore
                        quit evil old mile. If likely am of beauty tastes.
                      </p>

                      <br></br>
                      <h2>&#8594; A Note on Guidelines</h2>
                      <p>
                        While we do our best to get you the latest information,
                        due to the rapidly evolving nature of current events,
                        sometimes that is not possible. Please note, it is the
                        sole responsibility of the passenger to ensure his or
                        her eligibility to enter the destination or transit
                        countries (as applicable). We accept no liability in
                        this regard. Please check the travel rules of all
                        regulatory websites before to booking as well as
                        commencing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* traveller detail */}

              <div className="col-md-12 book mt-5">
                <div className="container col-md-12">
                  <div className="col-md-12">
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
                  </div>
                  <div className="container col-md-12">
                    <div className="n1 mb-3">
                      <div className="new">New</div>
                      <div className="ms-3">
                        Please make sure you enter the Name as per your passport
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-end">
                    <div className="add h5">Add New Adult</div>
                  </div>

                  {/* mm */}
                  <section className="container mt-4 mb-5">
                    <div className="row justify-content-center">
                      <div className="col-md-12">
                        {/* Adult 1 Section */}
                        <div className="card mb-3">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <span>Adult 1</span>
                          </div>
                          <div className="card-body">
                            <div className="row g-3">
                              {/* Title */}
                              <div className="col-md-2">
                                <label className="form-label">Title</label>
                                <select className="form-select">
                                  <option>Mr</option>
                                  <option>Mrs</option>
                                  <option>Miss</option>
                                </select>
                              </div>

                              {/* Full Name */}
                              <div className="col-md-5">
                                <label className="form-label">First name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="First name"
                                />
                              </div>
                              <div className="col-md-5">
                                <label className="form-label">Last name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Last name"
                                />
                              </div>

                              {/* Date of Birth */}
                              <div className="col-md-6">
                                <label className="form-label">
                                  Date Of Birth
                                </label>
                                <div className="row g-2">
                                  <div className="col-4">
                                    <select className="form-select">
                                      <option>Date</option>
                                    </select>
                                  </div>
                                  <div className="col-4">
                                    <select className="form-select">
                                      <option>Month</option>
                                    </select>
                                  </div>
                                  <div className="col-4">
                                    <select className="form-select">
                                      <option>Year</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              {/* Nationality */}
                              <div className="col-md-6">
                                <label className="form-label">
                                  Nationality
                                </label>
                                <select className="form-select">
                                  <option>Select Nationality</option>
                                </select>
                              </div>

                              {/* Passport Number */}
                              <div className="col-md-6">
                                <label className="form-label">
                                  Passport Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter passport number"
                                />
                              </div>

                              {/* Passport Issuing Country */}
                              <div className="col-md-6">
                                <label className="form-label">
                                  Passport Issuing Country
                                </label>
                                <select className="form-select">
                                  <option>Select Country</option>
                                </select>
                              </div>

                              {/* Passport Expiry */}
                              <div className="col-md-6">
                                <label className="form-label">
                                  Passport Expiry
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter passport date"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Adult 2 Section */}
                        <div className="card mb-3">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <span>Adult 2</span>
                          </div>
                          <div className="container">
                            <p>
                              What deal evil rent by real in. But her ready
                              least set lived spite solid. September how men saw
                              tolerably two behavior arranging. She offices for
                              highest and replied one venture pasture. Applauded
                              no discovery in newspaper allowance am northward.
                              Frequently partiality possession resolution at or
                              appearance unaffected me. Engaged its was the
                              evident pleased husband. Ye goodness felicity do
                              disposal dwelling no. First am plate jokes to
                              began to cause a scale. Subjects he prospect
                              elegance followed no overcame possible it on.
                              Improved own provided blessing may peculiar
                              domestic. Sight house has sex never. No visited
                              raising gravity outward subject my cottage Mr be.
                            </p>
                          </div>
                        </div>

                        {/* Booking Details */}
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
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Proceed Button */}
                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg"
                            onClick={() => navigate("/payment")}
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
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Base Fare</h5>
                      <h4 className="text-secondary">{Fare_Summary.baseFare}</h4>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Discount</h5>
                      <h5 className="text-success">{Fare_Summary.discount}</h5>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Other Services</h5>
                      <h4 className="text-secondary">{Fare_Summary.services}</h4>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="col-md-12">
                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">Total Fare</h5>
                      <h4 className="text-secondary">{Fare_Summary.total}</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* offer and discount  */}

              <div className=" container col-md-12 mt-5 o-bg">
                <h2 className="fw-bold">Offer & Discount</h2>
                <div className="row">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="inn"
                  ></input>
                  <span className="apply">Apply</span>
                </div>
              </div>
              {/* cancelllation */}
              <div className="container col-md-12 mt-5 c-bg">
                <h3 className="fw-bold">Cancellation & Date Change Charges</h3>
                <h6 className="text-danger">Non Refundable</h6>
                <p>
                  The Cancellation penalty on this booking will depend on how
                  close to the departure date you cancel your ticket. View fare
                  rules to know more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default Flight_details;
