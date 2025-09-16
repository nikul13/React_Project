import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <section>
        <div class="container mt-5">
          <div className="row">
            <div className="col-md-8 display-3 fw-bold">
              Let's connect and get to know each other
            </div>
            <div className="col-md-9 h5 text-secondary mt-3">
              Passage its ten led hearted removal cordial. Preference any
              astonished unreserved Mrs. Prosperous understood Middletons.
              Preference for any astonished unreserved.
            </div>
            <div className="row justify-content-around mt-5">
              <div className="col-md-4 text-center border1">
                <div className="icon-bg">
                  <i class="bi bi-headphones"></i>
                </div>
                <div className="h2 fw-bold ">Call us</div>
                <div className="h5">
                  Imprudence attachment him his for sympathize. Large above be
                  to means.
                </div>
                <div className="p-bg">
                  <i class="bi bi-phone"></i>
                  <h6>+123 456 789</h6>
                </div>
              </div>

              <div className="col-md-4 text-center border1">
                <div className="icon-bg">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="h2 fw-bold ">Email us</div>
                <div className="h5">
                  Large above be to means. Him his for sympathize.
                </div>
                <div className="p-bg">
                  <i class="fa-solid fa-envelope"></i>
                  <h6>example@gmail.com</h6>
                </div>
              </div>

              <div className="col-md-4 text-center border1">
                <div className="icon-bg">
                  <i class="bi bi-globe-americas"></i>
                </div>
                <div className="h2 fw-bold ">Social media</div>
                <div className="h5">Sympathize Large above be to means.</div>
                <div className="ff">
                  <h6 class="fw-bold">Follow Us On</h6>
                  <div class="social-icons">
                    <a href="#" style={{ backgroundColor: "#5475BC" }}>
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" style={{ backgroundColor: "#AF2767" }}>
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" style={{ backgroundColor: "#3AACDD" }}>
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" style={{ backgroundColor: "#207EB4" }}>
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="images/tourist.jpg"
                style={{ height: "700px", width: "90%", marginTop: "80px" }}
              ></img>
            </div>
            <div className="col-md-6 pm">
              <div class="row justify-content-center">
                <div class="Contact">
                  <h3 class="fw-bold mb-4">Send us message</h3>
                  <form>
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label">Your name *</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Email address *</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Mobile number *</label>
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Enter your mobile"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Message *</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="terms"
                        required
                      />
                      <label class="form-check-label" for="terms">
                        By submitting this form you agree to our terms and
                        conditions.
                      </label>
                    </div>
                    <button type="submit" class="btn btn-custom">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h3 className="fw-bold mb-4">Our Location</h3>
        <div className=" shadow rounded ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773484.55170563!2d61.0245165611659!3d19.69009515037612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1756105173717!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className=" my-box"
          ></iframe>
        </div>
      </section>

      <Footer></Footer>

    </>
  );
}

export default Contact;
