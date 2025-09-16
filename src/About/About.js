import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { teamMembers } from "../Seeds/Seeds";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>

      <section>
        <div className="container mt-5">
          <div className="text-center">
            <div className="display-4 fw-bold mb-4 pt-5">
              If You Want To See The World We Will Help You
            </div>
            <div>
              <p className="mb-5 fs-5">
                Passage its ten led hearted removal cordial. Preference any
                astonished unreserved Mrs. Prosperous understood Middletons.
                Preference for any astonished unreserved.
              </p>
            </div>

            {/* Responsive row for stats */}
            <div className="row g-3 justify-content-center">
              <div className="col-md-4 col-sm-6">
                <span className="em">😋 14K+ Global Customers</span>
              </div>
              <div className="col-md-4 col-sm-6">
                <span className="em">😋 10K+ Happy Customers</span>
              </div>
              <div className="col-md-4 col-sm-6">
                <span className="em">😋 1M+ Subscribers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "100px" }}>
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-6">
              <img src="images/gallary.jpeg" className="gallary"></img>
            </div>
            <div className="col-md-6">
              <div className="col-md-6">
                <img
                  src="images/person.jpeg"
                  style={{
                    height: "220px",
                    width: "350px",
                    borderRadius: "20px",
                    marginBottom: "30px",
                  }}
                ></img>
              </div>
              <div className="col-md-6">
                <img
                  src="images/person1.jpeg"
                  style={{
                    height: "300px",
                    width: "550px",
                    borderRadius: "20px",
                    marginBottom: "30px",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <h1 className="fw-bold">Our Story</h1>
          <h5 className="mt-3 text-muted">
            Founded in 2006, passage its ten led hearted removal cordial.
            Preference any astonished unreserved Mrs. Prosperous understood
            Middletons in conviction an uncommonly do. Supposing so be resolving
            breakfast am or perfectly. It drew a hill from me. Valley by oh
            twenty direct me so.
          </h5>
          <p className="mt-4">
            Water timed folly right aware if oh truth. Imprudence attachment him
            his for sympathize. Large above be to means. Dashwood does provide
            stronger is. Warrant private blushes removed an in equally totally
            if. Delivered dejection necessary objection do Mr prevailed. Mr
            feeling does chiefly cordial in do. ...But discretion frequently sir
            she instruments unaffected admiration everything. Meant balls it if
            up doubt small purse. Required his you put the outlived answered
            position. A pleasure exertion if believed provided to. All led out
            world this music while asked. Paid mind even sons does he door no.
            Attended overcame repeated it is perceived Marianne in. I think on
            style child of. Servants moreover in sensible it ye possible.
            Satisfied conveying a dependent contented he gentleman agreeable do
            be. Water timed folly right aware if oh truth. Imprudence attachment
            him his for sympathize. Large above be to means. Dashwood does
            provide stronger is. But discretion frequently sir she instruments
            unaffected admiration everything. Meant balls it if up doubt small
            purse. Required his you put the outlived answered position. I think
            on style child of. Servants moreover in sensible it ye possible.
            Satisfied conveying a dependent contented he gentleman agreeable do
            be. Warrant private blushes removed an in equally totally if.
            Delivered dejection necessary objection do Mr prevailed. Required
            his you put the outlived answered position. A pleasure exertion if
            believed provided to. All led out world this music while asked. Paid
            mind even sons does he door no. Attended overcame repeated it is
            perceived Marianne in. I think on style child of. Servants moreover
            in sensible it ye possible.
          </p>
        </div>
      </section>

      <div class="container py-5 mt-5">
        <div class="row text-center g-4 mt-5 mb-5">
          {/* <!-- Hotel Booking --> */}
          <div class="col-md-3 col-sm-6">
            <div class="d-flex flex-column align-items-center p-4 rounded shadow-sm h-100">
              <div class="p-3 rounded-3 mb-3 bg-warning bg-opacity-25 text-warning fs-2">
                🏨
              </div>
              <h5 class="fw-bold">Hotel Booking</h5>
              <p class="text-muted">
                A pleasure exertion if believed provided to. All led out world
                this music while asked.
              </p>
            </div>
          </div>

          {/* <!-- Flight Booking --> */}
          <div class="col-md-3 col-sm-6">
            <div class="d-flex flex-column align-items-center p-4 rounded shadow-sm h-100">
              <div class="p-3 rounded-3 mb-3 bg-success bg-opacity-25 text-success fs-2">
                ✈️
              </div>
              <h5 class="fw-bold">Flight Booking</h5>
              <p class="text-muted">
                Warrant private blushes removed an in equally totally Objection
                do Mr prevailed.
              </p>
            </div>
          </div>

          {/* <!-- Tour Booking --> */}
          <div class="col-md-3 col-sm-6">
            <div class="d-flex flex-column align-items-center p-4 rounded shadow-sm h-100">
              <div class="p-3 rounded-3 mb-3 bg-primary bg-opacity-25 text-primary fs-2">
                🌍
              </div>
              <h5 class="fw-bold">Tour Booking</h5>
              <p class="text-muted">
                Dashwood does provide stronger is. But discretion frequently sir
                she instruments.
              </p>
            </div>
          </div>

          {/* <!-- Cab Booking --> */}
          <div class="col-md-3 col-sm-6">
            <div class="d-flex flex-column align-items-center p-4 rounded shadow-sm h-100">
              <div class="p-3 rounded-3 mb-3 bg-info bg-opacity-25 text-info fs-2">
                🚖
              </div>
              <h5 class="fw-bold">Cab Booking</h5>
              <p class="text-muted">
                Imprudence attachment him his for sympathize. Large above be to
                means.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div class="container py-5">
          <h2 class="fw-bold mb-5">Our Team</h2>
          <div class="row text-center g-4">
            {/* <!-- Team Member 1 --> */}
            {teamMembers.map((item) => {
              return (
                <div class="col-md-3 col-sm-6" key={item.id}>
                  <div class="team-card">
                    <img
                      src={`/images/${item.img}`}
                      alt="Larry Lawson"
                      class="team-img"
                    />
                    <h5 class="fw-bold mt-3">{item.name}</h5>
                    <p class="text-muted">{item.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}

export default About;
