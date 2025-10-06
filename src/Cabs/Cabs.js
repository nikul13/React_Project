import "./Cabs.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Brand_Images, vehicles, whyChooseUs } from "../Seeds/Seeds";

function Cabs() {
  return (
    <>
      <Navbar></Navbar>

      <section className="container my-5">
        <div className="row align-items-center">
          {/* Booking Card */}
          <div className="col-lg-5 position-absolute start-0 translate-middle-y ms-5 bg-white rounded-4 shadow booking-box bk">
            <div className="p-4">
              <h4 className="fw-bold mb-3">Book Your Online Cab</h4>

              {/* Trip Type */}
              <div className="mb-3 d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    id="oneWay"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="oneWay">
                    One Way
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    id="roundTrip"
                  />
                  <label className="form-check-label" htmlFor="roundTrip">
                    Round Trip
                  </label>
                </div>
              </div>

              {/* Pickup / Drop */}
              <div className="row g-2 mb-3 align-items-end">
                <div className="col-5">
                  <label className="form-label small">Pickup</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select location"
                  />
                </div>
                <div className="col-2 d-flex justify-content-center">
                  <div className="swap-icon">
                    <i className="bi bi-arrow-left-right"></i>
                  </div>
                </div>
                <div className="col-5">
                  <label className="form-label small">Drop</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select location"
                  />
                </div>
              </div>

              {/* Date / Time */}
              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <label className="form-label small">Pickup Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small">Pickup Time</label>
                  <input type="time" className="form-control" />
                </div>
              </div>

              {/* Button */}
              <button className="btn btn-dark w-100 rounded-3 fw-semibold">
                Search Cabs
              </button>
            </div>
          </div>

          {/* Taxi Image */}
          <div className="col-lg-12">
            <img
              src="images/taxi.jpg"
              className="cab-img rounded-4"
              alt="Taxi"
            />
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Our Awesome Vehicles</h2>
        <div className="row g-4 justify-content-center">
          {/* Sedan */}
          {vehicles.map((item) => {
            return (
              <div className="col-6 col-md-4 col-lg-2" key={item.id}>
                <div className="card text-center p-3 shadow-sm rounded-4 h-100">
                  <img
                    src={`/images/${item.img}`}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                    alt="Sedan"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">{item.name}</h5>
                    <p className="text-muted small mb-0">{item.count}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Us</h2>
          <div className="row g-4">
            {/* Card 1 */}
            {whyChooseUs.map((item) => {
              return (
                <div className="col-md-4 col-sm-6" key={item.id}>
                  <div className="card shadow-sm border-0 h-100  p-4 rounded-4">
                    <div className="icon-circle bg-primary text-white  mb-3">
                      <i className={`${item.icon} fs-3`}></i>
                    </div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="mb-0 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div class="container faq-section">
          <h1 className="fw-bold text-center mb-5">
            Frequently Asked Questions
          </h1>

          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How Does it Work?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Yet remarkably appearance gets him his projection. Diverted
                  endeavor bed peculiar men the not desirous. Acuteness
                  abilities ask can offending furnished fulfilled sex. Warrant
                  fifteen exposed ye at mistake. Blush since so in noisy still
                  built up an again. As young ye hopes no he place means.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What are monthly tracked users?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Monthly tracked users are the unique users monitored within a
                  calendar month. Tracking includes activity and usage patterns.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What if I go with my prepaid monthly?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  If you have a prepaid monthly plan, your usage will be
                  deducted automatically and you can continue to enjoy services
                  without interruption.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What's the difference between cabs and taxi
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Typically, "cab" and "taxi" mean the same, but usage may vary
                  by region. Some cities use "cab" for private-hire vehicles and
                  "taxi" for licensed ones.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  How can I check the fare for my Booking ride?
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  You can check the fare estimate on the app before confirming
                  the booking. Fares may vary depending on time, distance, and
                  traffic.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Do and Don'ts – Tips for a Safe Trip
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Do: Share your trip, wear seat belts, and check driver
                  details. Don't: Distract the driver, argue, or leave valuables
                  unattended.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <div class="container mb-5">
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

      <Footer></Footer>
    </>
  );
}

export default Cabs;
