import "./HotelDetails.css";
import {
  CheckCircleFill,
  XCircleFill,
  ArrowRight,
} from "react-bootstrap-icons";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Hotel_About, Hotel_Images, Hotel_Price, Room_option } from "../Seeds/Seeds";

function HotelDetail() {
  return (
    <div>
      <Navbar></Navbar>

      {/* 🔍 Search Bar */}
      <div className="container" style={{ marginTop: "100px" }}>
        <div class="availability-box1 row mt-5 gy-3 gx-3">
          <div class="col-12 col-md-6 col-lg-4">
            <label>Location</label>
            <div class="d-flex align-items-center border rounded p-2">
              <i class="fas fa-map-marker-alt me-2"></i>
              <input
                type="text"
                class="form-control border-0 shadow-none"
                placeholder="Select location"
              />
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <label>Check in - out</label>
            <div class="d-flex align-items-center border rounded p-2">
              <i class="fas fa-calendar-alt me-2"></i>
              <input
                type="text"
                class="form-control border-0 shadow-none"
                placeholder="19 Sep to 28 Sep"
              />
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <label>Guests & rooms</label>
            <div class="d-flex align-items-center border rounded p-2">
              <i class="fas fa-user me-2"></i>
              <input
                type="text"
                class="form-control border-0 shadow-none"
                placeholder="2 Guests 1 Room"
              />
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-1 d-flex align-items-end">
            <button class="search-btn w-100">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 🏨 Hotel Title */}
      <section className="container py-4">
        <h2 className="display-5 fw-bold">Courtyard by Marriott New York</h2>
        <p className="text-muted">
          <i class="fas fa-map-marker-alt me-2"></i>5855 W Century Blvd, Los
          Angeles
        </p>

        <div className="alert alert-danger">
          <strong>Covid Policy:</strong> You may require to present an RT-PCR
          negative test report at the hotel
        </div>
      </section>

      <section className="container mb-4">
        <div className="row g-2">
          <div className="col-md-6">
            <img
              src={`/images/${Hotel_Images[0].img}`}
              alt="Main"
              className="img-fluid rounded w-100 h-100"
            />
          </div>

          <div className="col-md-6">
            <div className="row g-2">
              <div className="col-12">
                <img
                  key={`${Hotel_Images[1].id}`}
                  src={`/images/${Hotel_Images[1].img}`}
                  alt="Small1"
                  className="img-fluid rounded w-100"
                />
              </div>
              <div className="col-12">
                <img
                  src={`/images/${Hotel_Images[2].img}`}
                  alt="Small2"
                  className="img-fluid rounded w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row">
          {/* Left Content */}
          {Hotel_About.map((item) => {
            return (
              <>
                <div className="col-lg-8" key={item.id}>
                  <h3 className="fw-bold mb-3">About This Hotel</h3>
                  <h5 className="mb-3">Main Highlights</h5>

                  {/* Icons row */}
                  <div className="d-flex gap-3 mb-3">
                    <div className="p-3 bg-light rounded">
                      <i className="bi bi-wifi fs-4"></i>
                    </div>
                    <div className="p-3 bg-light rounded">
                      <i className="bi bi-water fs-4"></i>
                    </div>
                    <div className="p-3 bg-light rounded">
                      <i className="bi bi-snow fs-4"></i>
                    </div>
                    <div className="p-3 bg-light rounded">
                      <i className="bi bi-bell fs-4"></i>
                    </div>
                  </div>

                  {/* Description */}
                  <p>{item.description}</p>
                  <p>{item.description1}</p>
                  <a href="#" className="text-primary fw-semibold">
                    See more ↓
                  </a>

                  {/* Advantages */}
                  <h5 className="mt-4 mb-3">Advantages</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">{item.adv}</li>
                    <li className="mb-2">{item.adv1}</li>
                    <li className="mb-2">{item.adv2}</li>
                    <li className="mb-2">{item.adv3}</li>
                  </ul>
                </div>
              </>
            );
          })}

          {/* Right Content */}
          <div className="col-lg-4">
            {/* Price Card */}
            {Hotel_Price.map((item) => {
              return (
                <>
                  <div className="card p-3 mb-4 shadow-sm" key={item.id}>
                    <div className="d-flex justify-content-between">
                      <span>Price Start at</span>
                      <small className="text-muted">{item.room}</small>
                    </div>
                    <h3 className="fw-bold mt-2">{item.price}</h3>
                    <p className="text-muted">{item.tax}</p>
                    <p className="mb-1">{item.rate}</p>
                    <button className="btn btn-light w-100 text-primary fw-semibold">
                      View 10 Rooms Options
                    </button>
                  </div>
                </>
              );
            })}

            {/* Today's Best Deal */}
            <div>
              <h5 className="fw-bold mb-3">Today's Best Deal</h5>
              <div
                className="card border-0 shadow-sm rounded-4 overflow-hidden"
                style={{ maxWidth: "500px" }}
              >
                <div className="row g-0">
                  {/* Left Image */}
                  <div className="col-5">
                    <img
                      src="images/coupn 1.png"
                      alt="Travel Plan"
                      className="img-fluid h-100 w-100 object-fit-cover"
                    />
                  </div>

                  {/* Right Text */}
                  <div className="col-7 d-flex align-items-center">
                    <div className="p-3">
                      <h6 className="fw-bold mb-1">Travel Plan</h6>
                      <p className="mb-0 text-muted small">
                        Get up to <strong>$10,000</strong> for lifetime limits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🛎 Amenities */}
      <section className="container mb-5">
        <h4>Amenities</h4>
        <div className="row">
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>🏊 Swimming Pool</li>
              <li>💆 Spa</li>
              <li>🏋 Gym</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>💳 Credit/Debit Card</li>
              <li>💵 Cash</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>🧹 Room Service</li>
              <li>🧺 Laundry</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>🩺 Doctor on Call</li>
              <li>🌐 Staff Languages: English, Hindi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Room Options</h2>
          <select className="form-select w-auto">
            <option>Select Option</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>

        {/* Room Card 1 */}
        {Room_option.map((item) => {
          return (
            <div
              className="card border-0 shadow-sm mb-4 rounded-4 overflow-hidden"
              key={item.id}
            >
              <div className="row g-0">
                {/* Left Image */}
                <div className="col-md-4 position-relative">
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2 px-2 py-1 rounded-2">
                    {item.dis}
                  </span>
                  <img
                    src={`images/${item.img}`}
                    alt="{item.title}"
                    className="img-fluid h-100 w-100 object-fit-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="col-md-8 d-flex flex-column justify-content-between p-3">
                  <div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="mb-1 text-muted">
                     {item.details}
                    </p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <h5 className="fw-bold mb-0">
                        {item.price}
                        <small className="text-muted fw-normal">{item.day}</small>
                      </h5>
                      <small className="text-decoration-line-through text-muted">
                        {item.Main_Price}
                      </small>
                    </div>
                    <button className="btn btn-primary rounded-3 fw-semibold">
                      Select Room
                    </button>
                  </div>

                  <a
                    href="#"
                    className="text-decoration-none small mt-2 text-primary"
                  >
                    👁 View more details
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ⭐ Reviews */}
      <section className="container my-5">
        <h3 className="fw-bold mb-3">Customer Review</h3>
        <hr />

        <div className="card border-0 shadow-sm p-4 rounded-4 bg-light">
          <div className="row align-items-center">
            {/* Left Rating */}
            <div className="col-md-3 text-center">
              <h1 className="fw-bold mb-0">4.5</h1>
              <p className="text-muted">Based on 120 Reviews</p>
              <div className="text-warning fs-4">★★★★☆</div>
            </div>

            {/* Right Progress Bars */}
            <div className="col-md-9">
              {/* Row 1 */}
              <div className="d-flex align-items-center mb-2">
                <div
                  className="progress flex-grow-1 me-2"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span>85%</span>
              </div>

              {/* Row 2 */}
              <div className="d-flex align-items-center mb-2">
                <div
                  className="progress flex-grow-1 me-2"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span>75%</span>
              </div>

              {/* Row 3 */}
              <div className="d-flex align-items-center mb-2">
                <div
                  className="progress flex-grow-1 me-2"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <span>60%</span>
              </div>

              {/* Row 4 */}
              <div className="d-flex align-items-center mb-2">
                <div
                  className="progress flex-grow-1 me-2"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <span>35%</span>
              </div>

              {/* Row 5 */}
              <div className="d-flex align-items-center">
                <div
                  className="progress flex-grow-1 me-2"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "15%" }}
                  ></div>
                </div>
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Box */}
        <div className="card border-0 shadow-sm mt-4 p-3 rounded-4">
          <div className="mb-2">
            <span className="text-warning fs-5">★★★★★</span>
            <span className="ms-2">(5/5)</span>
          </div>
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Your review"
          ></textarea>
          <button className="btn btn-primary rounded-4 fw-semibold px-4 py-2">
            Post review →
          </button>
        </div>
      </section>

      <section className="container my-5">
        {/* Review Card */}
        <div className="card border-0 mb-4">
          <div className="card-body">
            {/* User Info */}
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  className="rounded-circle me-3"
                  alt="user"
                  width="60"
                  height="60"
                />
                <div>
                  <h6 className="fw-bold mb-0">Jacqueline Miller</h6>
                  <small className="text-muted">
                    Stayed 13 Nov 2022 • 4 Reviews written
                  </small>
                </div>
              </div>
              <span className="badge bg-warning text-dark fs-6 align-self-start rounded-3">
                4.5
              </span>
            </div>

            {/* Review Text */}
            <p className="mt-3 text-muted">
              Handsome met debating sir dwelling age material. As style lived he
              worse dried. Offered related so visitors we private removed.
              Moderate do subjects to distance.
            </p>
            {/* Manager Reply */}
            <div className="d-flex align-items-start bg-light p-3 rounded-3">
              <img
                src="https://i.pravatar.cc/40?img=5"
                className="rounded-circle me-2"
                alt="manager"
                width="40"
                height="40"
              />
              <div>
                <h6 className="fw-bold mb-1">Manager</h6>
                <p className="mb-0 text-muted">
                  But discretion frequently sir she instruments unaffected
                  admiration everything.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Another Review */}
        <div className="card border-0 mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img
                  src="https://i.pravatar.cc/60?img=2"
                  className="rounded-circle me-3"
                  alt="user"
                  width="60"
                  height="60"
                />
                <div>
                  <h6 className="fw-bold mb-0">Dennis Barrett</h6>
                  <small className="text-muted">
                    Stayed 02 Nov 2022 • 2 Reviews written
                  </small>
                </div>
              </div>
              <span className="badge bg-warning text-dark fs-6 align-self-start rounded-3">
                4.0
              </span>
            </div>

            <p className="mt-3 text-muted">
              Delivered dejection necessary objection do Mr prevailed. Mr
              feeling does chiefly cordial in do. Water timed folly right aware
              if oh truth. Large above be to means. Dashwood does provide
              stronger is.
            </p>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="btn btn-outline-primary rounded-4 px-4 fw-semibold">
            Load more
          </button>
        </div>
      </section>

      {/* 📜 Policies */}
      <section className="container my-5">
        <h3 className="fw-bold">Hotel Policies</h3>
        <hr />

        <ul className="list-unstyled">
          <li className="d-flex mb-2">
            <CheckCircleFill className="text-success me-2 mt-1" />
            <span>
              This is a family farmhouse, hence we request you to not indulge.
            </span>
          </li>

          <li className="d-flex mb-2">
            <CheckCircleFill className="text-success me-2 mt-1" />
            <span>
              Drinking and smoking within controlled limits are permitted at the
              farmhouse but please do not create a mess or ruckus at the house.
            </span>
          </li>

          <li className="d-flex mb-2">
            <CheckCircleFill className="text-success me-2 mt-1" />
            <span>
              Drugs and intoxicating illegal products are banned and not to be
              brought to the house or consumed.
            </span>
          </li>

          <li className="d-flex mb-2">
            <XCircleFill className="text-danger me-2 mt-1" />
            <span>
              For any update, the customer shall pay applicable
              cancellation/modification charges.
            </span>
          </li>
        </ul>

        {/* Other Policies */}
        <ul className="list-unstyled mt-3">
          <li className="d-flex mb-2">
            <ArrowRight className="text-muted me-2 mt-1" />
            <span>Check-in: 1:00 pm - 9:00 pm</span>
          </li>
          <li className="d-flex mb-2">
            <ArrowRight className="text-muted me-2 mt-1" />
            <span>Check out: 11:00 am</span>
          </li>
          <li className="d-flex mb-2">
            <ArrowRight className="text-muted me-2 mt-1" />
            <span>Self-check-in with building staff</span>
          </li>
          <li className="d-flex mb-2">
            <ArrowRight className="text-muted me-2 mt-1" />
            <span>No pets</span>
          </li>
          <li className="d-flex mb-2">
            <ArrowRight className="text-muted me-2 mt-1" />
            <span>No parties or events</span>
          </li>
          <li className="d-flex mb-2">
            <ArrowRight className="text-muted me-2 mt-1" />
            <span>Smoking is allowed</span>
          </li>
        </ul>

        {/* COVID Notice */}
        <div className="alert alert-danger mt-4 rounded-3">
          During the COVID-19 pandemic, all hosts and guests must review and
          follow Booking social distancing and other COVID-19-related
          guidelines.
        </div>
      </section>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default HotelDetail;
