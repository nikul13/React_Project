import "./Tour_Package.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { packages } from "../Seeds/Seeds";

function Tour_Package() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>

      <section>
        <div className="container mt-5 m-bg d-flex flex-column justify-content-center align-center">
          <div className="container col-md-12 row">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-center text-center">
              <div className=" col-md-12 display-5 fw-bold">Maldives</div>
              <div className="col-md-12 fw-bold h5 row">
                <div className="col-md-5 mt-4">1 Destination</div>
                <div className="col-md-2 h1">.</div>
                <div className="col-md-5 mt-4">115 Package</div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="container availability-box1 row mt-5 gy-3 gx-3 text-dark">
            <div className="col-12 col-md-6 col-lg-4">
              <label className="d-block fw-bold">
                <i className="bi bi-geo-alt-fill me-2 text-danger"></i> Location
              </label>
              <input
                type="text"
                className="form-control border-bottom shadow-none"
                placeholder="Select location"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <label className="d-block fw-bold">
                <i className="bi bi-calendar-check me-2 text-primary"></i> Date
              </label>
              <input
                type="text"
                className="form-control border-bottom shadow-none"
                placeholder="Choose a Date"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <label className="d-block fw-bold">
                <i className="bi bi-airplane-fill me-2 text-info"></i> Tour Type
              </label>
              <input
                type="text"
                className="form-control border-bottom shadow-none"
                placeholder="Select Type"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-1 d-flex align-items-end">
              <button
                className="btn btn-dark rounded-pill"
                style={{ marginBottom: "27px" }}
              >
                Take a Tour
              </button>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <section>
        <div className="container mt-5 pt-5">
          <div className="col-md-12 text-dark  hu-bg">
            <div className="col-md-12 h5 fw-bold">
              Hurry! 51% off the tours are already fully booked
            </div>
            <div className="col-md-12 h6">
              Many trips to various areas have been ordered, don't let you miss
              it
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5">
          {/* Header with sorting dropdown */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold">
              Showing <span className="text-primary">1–7</span> of{" "}
              <span className="text-primary">32</span> result
            </h5>

            <select className="form-select w-auto">
              <option>Most Viewed</option>
              <option>Recently search</option>
              <option>Most popular</option>
              <option>Top rated</option>
            </select>
          </div>

          {/* Cards Row */}
          <div className="row g-4">
            {/* Card 1 */}
            {packages.map((item) => {
              return (
                <div
                key={item.id}
                  className="col-md-4"
                  onClick={() => navigate("/tour_package_detail")}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card shadow border-0 rounded-4 overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={`/images/${item.image}`}
                        className="card-img-top"
                        style={{ height: "320px" }}
                        alt="{item.title}"
                      />
                      <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                       {item.offer}
                      </span>
                      <span className="badge bg-dark position-absolute top-0 end-0 m-2">
                        {item.category}
                      </span>
                      <span className="badge bg-light text-dark position-absolute bottom-0 start-0 m-2">
                        {item.duration}
                      </span>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        {item.title}
                      </h5>
                      <p className="text-muted mb-1">
                        <i className="bi bi-calendar-event me-2"></i>{item.date}
                      </p>
                      <p className="mb-2">
                        <i className="bi bi-airplane-fill text-warning me-1"></i>
                        1 Flight •{" "}
                        <i className="bi bi-building text-info me-1"></i>1 Hotel
                        •{" "}
                        <i className="bi bi-person-walking text-danger me-1"></i>
                        2 Activities
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fw-bold text-success fs-5">
                            {item.price}
                          </span>
                          <span className="text-muted ms-2 text-decoration-line-through">
                            {item.oldPrice}
                          </span>
                        </div>
                        <button
                          className="btn btn-primary rounded-pill"
                          onClick={() => navigate("/tour_package_detail")}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ul className="pagination justify-content-center">
        {/* Prev */}
        <li className="page-item disabled">
          <a className="page-link rounded-3 border-0" href="#" tabIndex="-1">
            <i className="bi bi-chevron-left"></i>
          </a>
        </li>

        {/* Page 1 */}
        <li className="page-item">
          <a className="page-link rounded-3 border-0" href="#">
            1
          </a>
        </li>

        {/* Page 2 - active */}
        <li className="page-item active">
          <a className="page-link rounded-3 border-0" href="#">
            2
          </a>
        </li>

        {/* Ellipsis */}
        <li className="page-item disabled">
          <a className="page-link rounded-3 border-0" href="#">
            ..
          </a>
        </li>

        {/* Page 6 */}
        <li className="page-item">
          <a className="page-link rounded-3 border-0" href="#">
            6
          </a>
        </li>

        {/* Next */}
        <li className="page-item">
          <a className="page-link rounded-3 border-0" href="#">
            <i className="bi bi-chevron-right"></i>
          </a>
        </li>
      </ul>

      <Footer></Footer>
    </>
  );
}

export default Tour_Package;
