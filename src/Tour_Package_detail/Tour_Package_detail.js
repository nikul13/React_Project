import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Tour_Package_Details } from "../Seeds/Seeds";

function Tour_Package_detail() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      {Tour_Package_Details.map((item) => {
        return (
          <>
            <section key={item.id}>
              <div className="container mt-5">
                <div className="col-md-12">
                  <div className="col-md-7 display-5 fw-bold">
                    {item.title}
                  </div>
                </div>
                <div className="col-md-4 fw-bold h6 row text-secondary">
                  <div className="col-md-5 mt-4">{item.duration}</div>
                  <div className="col-md-2 h1">.</div>
                  <div className="col-md-5 mt-4">{item.dd}</div>
                </div>
              </div>
            </section>

            <section>
              <div className="container mt-4">
                {/* Main Carousel */}
                <div
                  id="mainCarousel"
                  className="carousel slide rounded-4"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={`/images/${item.images[0]}`}
                        className="d-block w-100"
                        alt="Slide 1"
                        style={{ height: "600px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/images/${item.images[1]}`}
                        className="d-block w-100"
                        alt="Slide 2"
                        style={{ height: "600px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/images/${item.images[2]}`}
                        className="d-block w-100"
                        alt="Slide 3"
                        style={{ height: "600px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/images/${item.images[3]}`}
                        className="d-block w-100"
                        alt="Slide 4"
                        style={{ height: "600px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/images/${item.images[4]}`}
                        className="d-block w-100"
                        alt="Slide 5"
                        style={{ height: "600px", objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  {/* Prev/Next buttons */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                  </button>
                </div>

                {/* Thumbnails linked to carousel */}
                <div className="d-flex justify-content-center mt-3 gap-2">
                  <img
                    src={`/images/${item.images[0]}`}
                    data-bs-target="#mainCarousel"
                    data-bs-slide-to="0"
                    className="img-thumbnail active"
                    style={{
                      width: "150px",
                      height: "90px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    alt="Thumb 1"
                  />
                  <img
                    src={`/images/${item.images[1]}`}
                    data-bs-target="#mainCarousel"
                    data-bs-slide-to="1"
                    className="img-thumbnail"
                    style={{
                      width: "150px",
                      height: "90px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    alt="Thumb 2"
                  />
                  <img
                    src={`/images/${item.images[2]}`}
                    data-bs-target="#mainCarousel"
                    data-bs-slide-to="2"
                    className="img-thumbnail"
                    style={{
                      width: "150px",
                      height: "90px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    alt="Thumb 3"
                  />
                  <img
                    src={`/images/${item.images[3]}`}
                    data-bs-target="#mainCarousel"
                    data-bs-slide-to="3"
                    className="img-thumbnail"
                    style={{
                      width: "150px",
                      height: "90px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    alt="Thumb 4"
                  />
                  <img
                    src={`/images/${item.images[4]}`}
                    data-bs-target="#mainCarousel"
                    data-bs-slide-to="4"
                    className="img-thumbnail"
                    style={{
                      width: "150px",
                      height: "90px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    alt="Thumb 5"
                  />
                </div>
              </div>
            </section>

            <section>
              <div class="container my-5">
                {/* <!-- Tabs --> */}
                <ul
                  class="nav nav-pills justify-content-center gap-3 mb-4 tab-btns"
                  id="tourTabs"
                  role="tablist"
                >
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      id="overview-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#overview"
                      type="button"
                    >
                      Overview
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link"
                      id="itinerary-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#itinerary"
                      type="button"
                    >
                      Itinerary
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link"
                      id="inclusion-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#inclusion"
                      type="button"
                    >
                      Inclusions & Exclusion
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link"
                      id="policy-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#policy"
                      type="button"
                    >
                      Tour Policy
                    </button>
                  </li>
                </ul>

                <div class="row">
                  {/* <!-- Left Content --> */}
                  <div class="col-lg-8 tab-content" id="tourTabsContent">
                    {/* <!-- Overview --> */}
                    <div class="tab-pane fade show active" id="overview">
                      <h3>Overview</h3>
                      <hr></hr>
                      <p>
                        {item.overview.description}
                      </p>

                      <h5 class="mt-4">Tour Info</h5>
                      <ul class="list-unstyled">
                        <li>
                          <strong>Place Covered:</strong>{item.overview.tourInfo[0]}
                        </li>
                        <li>
                          <strong>Duration:</strong> {item.overview.tourInfo[1]}
                        </li>
                        <li>
                          <strong>Start Point:</strong> {item.overview.tourInfo[2]}
                        
                        </li>
                        <li>
                          <strong>End Point:</strong> {item.overview.tourInfo[3]}
                        </li>
                      </ul>

                      <h5 class="mt-4">Tour Highlights</h5>
                      <ul>
                        <li>
                          {item.overview.tourHighlights[0]}
                        </li>
                        <li>
                          {item.overview.tourHighlights[1]}
                        </li>
                        <li>
                          {item.overview.tourHighlights[2]}
                        </li>
                        <li>
                          {item.overview.tourHighlights[3]}
                        </li>
                        <li>
                         {item.overview.tourHighlights[4]}
                        </li>
                      </ul>

                      <h5 className="mt-4">
                        {item.overview.moreInfoTitle}
                      </h5>
                      <ul>
                        <li>
                          {item.overview.moreInfo[0]}
                        </li>
                        <li>
                          {item.overview.moreInfo[1]}
                        </li>
                        <li>
                          {item.overview.moreInfo[2]}
                        </li>
                        <li>
                          {item.overview.moreInfo[3]}
                        </li>
                        <li>
                          {item.overview.moreInfo[4]}
                        </li>
                        <li>
                          {item.overview.moreInfo[5]}
                        </li>
                      </ul>
                    </div>

                    {/* <!-- Itinerary --> */}
                    <div class="tab-pane fade" id="itinerary">
                      <h3>Itinerary</h3>
                      <div class="accordion" id="itineraryAccordion">
                        {/* Day 1 */}
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#day1"
                            >
                              Day 1: Arrival in Kuta | Get ready for an ideal
                              escape on this tropical island
                            </button>
                          </h2>
                          <div
                            id="day1"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#itineraryAccordion"
                          >
                            <div class="accordion-body">
                              {/* Flight details */}
                              <div class="card mb-3 border-0 shadow-sm">
                                <div class="card-body">
                                  <h6 class="fw-bold mb-3">✔ Flight details</h6>
                                  <div class="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                                    <div>
                                      <strong>New York - Malaysia</strong>
                                      <div class="text-muted small">
                                        Philippines Airline
                                      </div>
                                    </div>
                                    <div>
                                      <span class="fw-bold">CDG</span>
                                      <br />
                                      <small>2:50 pm</small>
                                    </div>
                                    <div class="text-center">
                                      <span class="fw-bold">5hr 50min</span>
                                      <br />
                                      <i class="bi bi-airplane text-purple fs-5"></i>
                                    </div>
                                    <div>
                                      <span class="fw-bold">JFK</span>
                                      <br />
                                      <small>7:35 pm</small>
                                    </div>
                                    <div class="text-muted small">
                                      Date: 4 July 2022
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Transfer */}
                              <div class="card mb-3 border-0 shadow-sm">
                                <div class="card-body">
                                  <h6 class="fw-bold mb-3">
                                    ✔ Transfer from Airport to hotel
                                  </h6>
                                  <div class="d-flex">
                                    <img
                                      src="images/suv1.jpeg"
                                      class="rounded me-3"
                                      width="200"
                                      alt="Car"
                                    />
                                    <div>
                                      <h6 class="mb-1">Private Transfers</h6>
                                      <small class="text-muted">
                                        Camry, Accord
                                      </small>
                                      <p class="small mb-2">
                                        SUV • AC • 4 Seats • 2 luggage • First
                                        Aid
                                      </p>
                                      <button class="btn btn-sm btn-purple me-2">
                                        Change
                                      </button>
                                      <button class="btn btn-sm btn-danger">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Hotel */}
                              <div class="card mb-3 border-0 shadow-sm">
                                <div class="card-body">
                                  <h6 class="fw-bold mb-3">
                                    ✔ Check-in to hotel
                                  </h6>
                                  <div class="d-flex">
                                    <img
                                      src="images/room1.jpg"
                                      class="rounded me-3"
                                      width="200"
                                      alt="Hotel"
                                    />
                                    <div>
                                      <span class="badge bg-dark mb-1">
                                        Hotel
                                      </span>
                                      <h6>Courtyard by Marriott New York</h6>
                                      <small class="text-muted">
                                        2.9km from the airport
                                      </small>
                                      <p class="mb-1 small">
                                        Tue, 5 Jul 2022 – Sat, 9 Jul 2022
                                      </p>
                                      <span class="text-success small">
                                        ✔ Free Breakfast
                                      </span>
                                      <p class="small">
                                        Room type: Standard room – Holiday
                                        selection <a href="#">Change room</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Activity */}
                              <div class="card mb-3 border-0 shadow-sm">
                                <div class="card-body">
                                  <h6 class="fw-bold mb-3">
                                    ✔ Today’s Activity
                                  </h6>
                                  <div class="d-flex">
                                    <img
                                      src="images/b5.jpg"
                                      class="rounded me-3"
                                      width="200"
                                      alt="Activity"
                                    />
                                    <div>
                                      <h6>Sightseeing in Bali</h6>
                                      <small class="text-muted">
                                        Bali, Malaysia
                                      </small>
                                      <ul class="small mb-2">
                                        <li>Tanah Lot Tour</li>
                                        <li>White water rafting</li>
                                      </ul>
                                      <p class="small mb-0">
                                        Duration: <strong>5 hrs</strong> | Place
                                        Covered: <strong>2</strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Add Activity Button */}
                              <button class="btn btn-purple w-100 mt-3 btn-primary btn">
                                <i class="bi bi-plus-lg me-2 "></i> Add Activity
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Day 2 */}
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#day2"
                            >
                              Day 2: A day filled with adventure | Indulge in
                              Water sports at Tanjung Benoa Nusa Dua
                            </button>
                          </h2>
                          <div
                            id="day2"
                            class="accordion-collapse collapse"
                            data-bs-parent="#itineraryAccordion"
                          >
                            <div class="accordion-body">
                              {/* Itinerary points */}
                              <ul class="mb-4">
                                <li>
                                  Get up with a delicious lunch and a beautiful
                                  view from your room.
                                </li>
                                <li>
                                  Son agreed to others Exeter period myself few
                                  yet nature. Mention Mr manners opinion if
                                  garrets enabled. To occasional dissimilar
                                  impossible sentiments.
                                </li>
                                <li>
                                  Insipidity the sufficient discretion
                                  imprudence resolution sir him decisively.
                                  Proceed how any engaged visitor. Explained
                                  propriety off out perpetual his you. Feel sold
                                  off felt nay rose met you.
                                </li>
                                <li>
                                  Affronting imprudence do he everything. Sex
                                  lasted dinner wanted indeed wished outlaw. Far
                                  advanced settling say finished raillery.
                                </li>
                                <li>
                                  Offered chiefly farther of my no colonel
                                  shyness. Such on help ye some door if in.
                                  Laughter proposal laughing any son law
                                  consider.
                                </li>
                                <li>
                                  Applauded no discovery in newspaper allowance
                                  am northward. September how men saw tolerably
                                  two behavior arranging.
                                </li>
                              </ul>

                              {/* Images gallery */}
                              <div class="d-flex gap-3">
                                <img
                                  src="images/c1.jpg"
                                  class="rounded"
                                  width="250"
                                  height="180"
                                  alt="Day 2 Image 1"
                                />
                                <img
                                  src="images/c2.jpg"
                                  class="rounded"
                                  width="250"
                                  height="180"
                                  alt="Day 2 Image 2"
                                />
                                <img
                                  src="images/c3.jpg"
                                  class="rounded"
                                  width="250"
                                  height="180"
                                  alt="Day 2 Image 3"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Day 3 */}
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#day3"
                            >
                              Day 3: Indulge in Water sports at Tanjung Benoa
                              Nusa Dua
                            </button>
                          </h2>
                          <div
                            id="day3"
                            class="accordion-collapse collapse"
                            data-bs-parent="#itineraryAccordion"
                          >
                            <div class="accordion-body">
                              <p>
                                Post no so what deal evil rent by real in. But
                                her ready least set lived spite solid. September
                                how men saw tolerably two behavior arranging.
                                She offices for highest and replied one venture
                                pasture. Applauded no discovery in newspaper
                                allowance am northward. Frequently partiality
                                possession resolution at or appearance
                                unaffected me. Engaged its was the evident
                                pleased husband. Ye goodness felicity do
                                disposal dwelling no. First am plate jokes to
                                began to cause a scale. Subjects he prospect
                                elegance followed no overcame possible it on.
                                Improved own provided blessing may peculiar
                                domestic. Sight house has sex never. No visited
                                raising gravity outward subject my cottage Mr
                                be. Hold do at tore in park feet near my case.
                                Invitation at understood occasional sentiments
                                insipidity inhabiting in. Off melancholy
                                alteration principles old. Is do speedily
                                kindness properly oh. Respect article painted
                                cottage he is offices parlors.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Day 4 */}
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#day4"
                            >
                              Day 4: Departure | It’s time to say Goodbye
                            </button>
                          </h2>
                          <div
                            id="day4"
                            class="accordion-collapse collapse"
                            data-bs-parent="#itineraryAccordion"
                          >
                            <div class="accordion-body">
                              <p>
                                What deal evil rent by real in. But her ready
                                least set lived spite solid. September how men
                                saw tolerably two behavior arranging. She
                                offices for highest and replied one venture
                                pasture. Applauded no discovery in newspaper
                                allowance am northward. Frequently partiality
                                possession resolution at or appearance
                                unaffected me. Engaged its was the evident
                                pleased husband. Ye goodness felicity do
                                disposal dwelling no. First am plate jokes to
                                began to cause a scale. Subjects he prospect
                                elegance followed no overcame possible it on.
                                Improved own provided blessing may peculiar
                                domestic. Sight house has sex never. No visited
                                raising gravity outward subject my cottage Mr
                                be.
                              </p>
                              <br></br>
                              <p>
                                At the moment, we only accept Credit/Debit cards
                                and Paypal payments. Paypal is the easiest way
                                to make payments online. While checking out your
                                order. Be sure to fill in correct details for
                                fast & hassle-free payment processing.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Inclusions & Exclusions --> */}
                    <div class="tab-pane fade" id="inclusion">
                      <h3 class="mb-4">Inclusions & Exclusions</h3>

                      {/* Inclusions */}
                      <h5 class="mt-3">Inclusions</h5>
                      <ul class="text-success">
                        <li>
                          {item.inclusions[0]}
                        </li>
                        <li>
                          {item.inclusions[1]}
                        </li>
                        <li>{item.inclusions[2]}</li>
                        <li>{item.inclusions[3]}</li>
                        <li>{item.inclusions[4]}</li>
                        <li>{item.inclusions[5]}</li>
                        <li>
                          {item.inclusions[6]}
                        </li>
                      </ul>

                      {/* Exclusions */}
                      <h5 class="mt-4">Exclusions</h5>
                      <ul class="text-danger">
                        <li>{item.exclusions[0]}</li>
                        <li>
                          {item.exclusions[1]}
                        </li>
                        <li>{item.exclusions[2]}</li>
                        <li>{item.exclusions[3]}</li>
                      </ul>
                    </div>

                    {/* <!-- Tour Policy --> */}
                    <div class="tab-pane fade" id="policy">
                      <h3 class="mb-4 fw-bold">Tour Policy</h3>

                      {/* Confirmation Policy */}
                      <h5 className="fw-bold">Confirmation Policy:</h5>
                      <p>
                        The customer receives a confirmation voucher via email
                        within 24 hours of successful booking.
                      </p>
                      <p>
                        In case the preferred slots are unavailable, an
                        alternate schedule of the customer's preference will be
                        arranged and a new confirmation voucher will be sent via
                        email.
                      </p>
                      <p>
                        Alternatively, the customer may choose to cancel their
                        booking before confirmation and a full refund will be
                        processed.
                      </p>

                      {/* Cancellation Policy */}
                      <h5 class="mt-4 fw-bold">Cancellation Policy:</h5>
                      <ul>
                        <li>10 days: 100%</li>
                        <li>10 to 15 days: 75% + Non Refundable Component</li>
                        <li>15 to 30 days: 30% + Non Refundable Component</li>
                        <li>
                          Hotel / Air: 100% in case of non-refundable ticket /
                          Hotel Room
                        </li>
                        <li>Cruise / Visa: On Actuals</li>
                      </ul>
                      <p class="small text-muted">
                        All Prices are in Indian Rupees and subject to change
                        without prior notice. In the case FIT flight inclusive
                        package, the full amount of the flight will be payable
                        at the time of booking.
                      </p>

                      {/* Refund Policy */}
                      <h5 class="mt-4 fw-bold">Refund Policy:</h5>
                      <p>
                        The applicable refund amount will be processed within 10
                        business days.
                      </p>
                      <p>
                        All applicable refunds will be done in the traveler’s
                        Thrillophilia wallet as Thrillcash.
                      </p>
                    </div>
                  </div>

                  {/* <!-- Right Sidebar --> */}
                  <div class="col-lg-4">
                    {/* <!-- Price Card --> */}
                    <div class="card shadow-sm mb-4 text-start p-3">
                      <h4 class="fw-bold">
                        $280 <small class="text-muted">/person</small>
                      </h4>
                      <p class="fw-bold mb-2">
                        4.5
                        <span class="text-warning">★★★★★</span>
                        <span class="text-muted">(365 reviews)</span>
                      </p>
                      <button
                        class="btn btn-primary w-100 mb-2"
                        onClick={() => navigate("/tour_booking")}
                      >
                        Book Now
                      </button>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#inquiryModal"
                        class="btn btn-outline-primary w-100"
                      >
                        <i class="bi bi-eye me-2"></i> Send Inquiry
                      </button>
                    </div>

                    {/* <!-- Modal --> */}
                    <div
                      class="modal fade"
                      id="inquiryModal"
                      tabindex="-1"
                      aria-labelledby="inquiryModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content shadow-lg rounded-3">
                          <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title" id="inquiryModalLabel">
                              Send Inquiry
                            </h5>
                            <button
                              type="button"
                              class="btn-close btn-close-white"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="mb-3">
                                <label class="form-label">Full Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter your name"
                                />
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Email Address</label>
                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Enter your email"
                                />
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Message</label>
                                <textarea
                                  class="form-control"
                                  rows="4"
                                  placeholder="Write your inquiry"
                                ></textarea>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Submit Inquiry
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Help Card --> */}
                    <div class="card shadow-sm p-3">
                      <h5 class="fw-bold mb-3">Need Help?</h5>
                      <p class="mb-2">
                        <i class="bi bi-telephone me-2 text-primary"></i>
                        Call us on: <strong>+31 123 456 789</strong>
                      </p>
                      <hr></hr>
                      <p class="mb-2">
                        <i class="bi bi-clock me-2 text-primary"></i>
                        Timing: <strong>10AM to 7PM</strong>
                      </p>
                      <hr></hr>
                      <p class="mb-2">
                        <i class="bi bi-headset me-2 text-primary"></i>
                        Let Us Call You
                      </p>
                      <hr></hr>
                      <p
                        class="mb-0"
                        onClick={() => navigate("/contact")}
                        style={{ cursor: "pointer" }}
                      >
                        <i class="bi bi-calendar-check me-2 text-primary"></i>
                        Book Appointments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <Footer></Footer>
    </>
  );
}

export default Tour_Package_detail;
