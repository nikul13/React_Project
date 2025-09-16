import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BlogDetail = () => {
  return (
    <div>
      
      <Navbar></Navbar>

      {/* Hero Image */}
      <div className="container my-4">
        <div className="card border-0 shadow rounded-4 overflow-hidden">
          <img
            src="images/m.jpg"
            alt="Blog banner"
            className="card-img-top"
          />
          <div className="card-body">
            <span className="badge bg-success mb-2">Hotel service</span>
            <h3 className="fw-bold">
              Ten unconventional tips about startups that you can’t learn from books
            </h3>
            <p className="text-muted">
              Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous...
            </p>
            <div className="d-flex align-items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="Author"
                className="rounded-circle"
              />
              <small className="text-muted">
                Lori Stevens • Nov 15, 2022 • 5 min read
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container my-5">
        <p>
          Perceived voice she had led him to widen noisy young. At weddings believed laughing...
        </p>

        <h5 className="fw-bold">Sometimes we need to put catchy highlights between paragraphs.</h5>
        <p>
          Meant balls it if up doubt small purse. Paid mind even sons does the door no...
        </p>

        <img
          src="https://picsum.photos/800/400"
          alt="Blog"
          className="img-fluid rounded-4 shadow my-3"
        />

        <blockquote className="blockquote bg-light p-3 rounded-3 border-start border-4 border-primary">
          <p className="mb-0">
            "Farther–related bed end passage comfort civility. Fulfilled direction use continual..."
          </p>
          <footer className="blockquote-footer">Albert Schweitzer</footer>
        </blockquote>

        <p>
          Concluded boy perpetual old supposing. But discretion frequently sir she instruments...
        </p>

        {/* Author Section */}
        <div className="card shadow-sm border-0 rounded-4 mt-5 p-4">
          <div className="d-flex align-items-center">
            <img
              src="https://i.pravatar.cc/70"
              alt="Author"
              className="rounded-circle me-3"
            />
            <div>
              <h6 className="fw-bold mb-0">Lori Stevens</h6>
              <small className="text-muted">An editor at Booking</small>
            </div>
          </div>
          <p className="mt-3 text-muted">
            Louis Ferguson has written about government, criminal justice, and the role of money in politics...
          </p>
          <div className="d-flex gap-3">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="my-4">
          <p className="fw-bold">Was this article helpful?</p>
          <button className="btn btn-outline-success btn-sm me-2">Yes</button>
          <button className="btn btn-outline-danger btn-sm">No</button>
        </div>

        {/* Tags */}
        <div className="d-flex gap-2 flex-wrap mt-4">
          <span className="badge bg-light text-dark border">blog</span>
          <span className="badge bg-light text-dark border">tour</span>
          <span className="badge bg-light text-dark border">holidays</span>
          <span className="badge bg-light text-dark border">ticket booking</span>
        </div>
      </div>

       {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default BlogDetail;
