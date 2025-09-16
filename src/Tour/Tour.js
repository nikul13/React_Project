import "./Tour.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  bestPackages,
  categories,
  recentSearches,
  Top_Package,
} from "../Seeds/Seeds";
function Tour() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>

      <section className="py-5">
        <div className="container adv">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center text-lg-start ps-lg-5">
              <h1 className="display-5 fw-bold text-white">
                Life Is Adventure <br /> Make The Best Of It
              </h1>
              <p className="text-light">
                Planning for a trip? We will organize your best trip with the
                best destination and within the best budgets!
              </p>
            </div>

            {/* Right Content (Cards Section) */}
            <div className="col-lg-6 col-md-12 mt-4 ps-lg-5">
              <div className="row g-4 justify-content-center">
                {/* Card */}
                <div className="col-md-8 col-lg-6 d-flex justify-content-center">
                  <div
                    className="card border-0 shadow-lg rounded-4 overflow-hidden position-relative"
                    style={{ width: "100%", maxWidth: "320px" }}
                  >
                    {/* Card Image */}
                    {Top_Package.map((item) => {
                      return (
                        <>
                          <div className="position-relative">
                            <img
                              src={`/images/${item.img}`}
                              className="card-img-top"
                              alt="Maldives"
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                            <span className="position-absolute bottom-0 start-50 translate-middle-x bg-dark text-white px-3 py-1 rounded-pill small mb-3">
                              {item.day}
                            </span>
                          </div>

                          {/* Card Body */}
                          <div className="card-body">
                            {/* Category & Rating */}
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="badge bg-light text-primary px-3 py-1">
                                {item.tag}
                              </span>
                              <span className="text-warning">{item.rate}</span>
                            </div>

                            {/* Title */}
                            <h6 className="fw-bold mb-2">{item.title}</h6>

                            {/* Price */}
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="text-success fw-bold fs-6">
                                {item.price}
                                <small className="text-muted">/person</small>
                              </span>
                              <span className="text-muted text-decoration-line-through">
                                {item.Main_Price}
                              </span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Box */}
          <div className="availability-box row mt-5 gy-3 gx-3 text-dark">
            {/* Location Dropdown */}
            <div className="col-12 col-md-6 col-lg-3">
              <label className="d-block fw-bold">
                <i className="bi bi-geo-alt-fill me-2 text-danger"></i> Location
              </label>
              <select className="form-select border-bottom shadow-none">
                <option selected disabled>
                  Select location
                </option>
                <option>San Jacinto, USA</option>
                <option>North Dakota, Canada</option>
                <option>West Virginia, Paris</option>
              </select>
            </div>

            {/* Date */}
            <div className="col-12 col-md-6 col-lg-3">
              <label className="d-block fw-bold">
                <i className="bi bi-calendar-check me-2 text-primary"></i> Date
              </label>
              <input
                type="date"
                className="form-control border shadow-none"
                placeholder="Choose a Date"
              />
            </div>

            {/* Tour Type */}
            <div className="col-12 col-md-6 col-lg-3">
              <label className="d-block fw-bold">
                <i className="bi bi-airplane-fill me-2 text-info"></i> Tour Type
              </label>
              <select className="form-select border-bottom shadow-none">
                <option selected disabled>
                  Select Type
                </option>
                <option>Adventure</option>
                <option>Beach</option>
                <option>Desert</option>
              </select>
            </div>

            {/* Button */}
            <div className="col-12 col-md-6 col-lg-3 d-flex align-items-end">
              <button className="btn btn-dark rounded-pill w-100">
                Take a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container mt-5">
          <div className="row">
            <div className="col-md-2">
              <h2 className="fw-bold">Recent Searches</h2>
            </div>
            <div className="col-md-10">
              <div className="col-md-12 row gap-2">
                {recentSearches.map((item) => {
                  return (
                    <div className="close" key={item.id}>
                      <h6 style={{ marginTop: "4px" }}>{item.title}</h6>
                      <i class="fas fa-times"></i>
                    </div>
                  );
                })}
                <div className="clear">Clear all</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container mt-4">
          <h2 className="text-center fw-bold mb-5 display-5">
            Our Best Packages
          </h2>
          <div className="row g-4">
            {/* Card 1 */}
            {bestPackages.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-md-6 col-lg-3"
                  onClick={() => navigate("/tour_package")}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="card border-0 shadow-sm h-100"
                    style={{ height: "150px" }}
                  >
                    <div className="position-relative">
                      <img
                        src={`/images/${item.image}`}
                        style={{ height: "350px" }}
                        className="card-img-top rounded"
                        alt="{item.title}"
                      />
                      <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                        {item.category}
                      </span>
                      <span className="badge bg-light text-dark position-absolute top-0 end-0 m-2">
                        ⭐ {item.rating}
                      </span>
                      <span className="badge bg-white text-dark position-absolute bottom-0 start-0 m-2">
                        {item.duration}
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-bold ho">{item.title}</h5>
                      <p className="text-success fw-bold mb-0">
                        {item.price}{" "}
                        <small className="text-muted">Starting price</small>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center" style={{ height: "200px" }}>
          {/* Heading */}
          <h2 className="fw-bold">
            Subscribe And Get a <br /> Special Discount
          </h2>
          <p className="text-muted mt-3 mb-4">
            Speedily say has suitable disposal add boy. On forth doubt miles of
            child. Exercise joy man children rejoiced.
          </p>

          {/* Input + Button */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group shadow rounded">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="Enter your email"
                />
                <button className="btn btn-dark px-4 fw-bold">
                  Subscribe!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container text-center">
          <h2 class="fw-bold mb-5">Top Categories</h2>
          <div class="row g-4">
            {/* <!-- Category 1 --> */}
            {categories.map((item) => {
              return (
                <div class="col-6 col-md-4 col-lg-3 d-flex align-items-center">
                  <img
                    src={`/images/${item.image}`}
                    class="rounded-3 me-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                    alt="Beach"
                  />
                  <div class="text-start">
                    <h5 class="fw-bold mb-0">{item.name}</h5>
                    <small class="text-muted">{item.places}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT SIDE */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="fw-bold display-3 mb-3">
                Discover the <br /> best places to visit
              </h1>
              <p className="text-muted mb-4">
                Explore destinations handpicked just for you. Enjoy nature,
                culture, and adventures.
              </p>

              {/* Avatars + Rating */}
              <div className="d-flex align-items-center mb-4">
                {/* Avatars with overlap */}
                <div className="d-flex">
                  <img
                    src="https://randomuser.me/api/portraits/women/10.jpg"
                    className="rounded-circle border border-white"
                    width="50"
                    height="50"
                    style={{ marginLeft: "-10px" }}
                    alt="user1"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/20.jpg"
                    className="rounded-circle border border-white"
                    width="50"
                    height="50"
                    style={{ marginLeft: "-10px" }}
                    alt="user2"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/30.jpg"
                    className="rounded-circle border border-white"
                    width="50"
                    height="50"
                    style={{ marginLeft: "-10px" }}
                    alt="user3"
                  />
                  <div
                    className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center border border-white"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginLeft: "-10px",
                    }}
                  >
                    16+
                  </div>
                </div>

                {/* Rating */}
                <div className="ms-4 d-flex align-items-center">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  <span className="fw-bold">4.5</span>
                </div>
              </div>

              {/* Button */}
              <button className="btn btn-primary btn-lg rounded-pill px-4">
                Explore places →
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6">
              <div className="row g-3">
                {/* Big Image */}
                <div className="col-12 col-md-6">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    className="img-fluid rounded-4 h-100"
                    alt="main place"
                  />
                </div>

                {/* Two stacked small images */}
                <div className="col-12 col-md-6 d-flex flex-column">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                    className="img-fluid rounded-4 mb-3"
                    alt="small1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
                    className="img-fluid rounded-4"
                    alt="small2"
                  />
                </div>
              </div>

              {/* Profile card below images */}
              <div className="d-flex align-items-center mt-4 bg-light p-3 rounded-4 shadow-sm">
                <img
                  src="https://randomuser.me/api/portraits/women/50.jpg"
                  className="rounded-circle me-3"
                  width="60"
                  height="60"
                  alt="profile"
                />
                <div>
                  <p className="mb-1 text-muted">
                    “Farther-related bed and passage comfort civilly.”
                  </p>
                  <h6 className="fw-bold mb-0">Lori Stevens</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default Tour;
