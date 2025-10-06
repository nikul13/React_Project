import "./Home.css";
import img1 from "./images/img1.webp";
import img2 from "./images/download.jpeg";
import img3 from "./images/images.jpeg";
import c1 from "./images/coupn 1.png";
import c2 from "./images/coupn 2.png";
import c3 from "./images/coupn 3.png";
import c4 from "./images/travel-beach-filter-water-luxury.jpg";
import p1 from "./images/p1.jpg";
import p2 from "./images/p2.png";
import p3 from "./images/p3.jpg";
import p5 from "./images/p5.jpg";
import p4 from "./images/p4.jpg";
import newyork from "./images/newyork.jpg";
import cicago from "./images/cicago.jpg";
import calafonia from "./images/calafonia.jpg";
import los from "./images/los.jpg";
import em from "./images/em.jpg";
import envotate from "./images/download.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  Brand_Images,
  Explore_Nearby,
  Featured_Hotels,
  Offers_Slider,
} from "../Seeds/Seeds";
import React, { useState, useEffect } from "react";
import { getAccessToken } from "../Api/Amadeus";
import axios from "axios";
import { useRef } from "react";

function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const debounceRef = useRef(null);

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) setToken(accessToken);
    };
    fetchToken();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    setErrorMessage("");

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (value.length > 2 && token) {
        try {
          const response = await axios.get(
            "https://test.api.amadeus.com/v1/reference-data/locations",
            {
              headers: { Authorization: `Bearer ${token}` },
              params: { keyword: value, subType: "CITY" }, // only CITY allowed in test
            }
          );
          setSuggestions(response.data.data || []);
        } catch (error) {
          console.error("Autocomplete error:", error.response || error);
          setSuggestions([]);
          setErrorMessage(
            "Unable to fetch suggestions. Try another city or later."
          );
        }
      } else {
        setSuggestions([]);
      }
    }, 500);
  };

  const handleSearch = async () => {
    if (!selectedHotel) {
      setErrorMessage("Please select a hotel or city first.");
      return;
    }

    try {
      // Example: fetch hotel details from Amadeus API using city code or hotel id
      const response = await axios.get(
        `https://test.api.amadeus.com/v2/shopping/hotel-offers`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            cityCode: selectedHotel.cityCode || selectedHotel.address?.cityCode,
            // OR hotelId: selectedHotel.hotelId
          },
        }
      );

      setSearchResults(response.data.data || []);
    } catch (error) {
      console.error("Search error:", error.response || error);
      setErrorMessage("Unable to fetch hotel data. Try again later.");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      {/* section */}
      <section className="hero container py-5">
        <div className="row align-items-center ps-lg-5">
          {/* <!-- Left side --> */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1>
              Find the top <br />
              <span>Hotels nearby.</span>
            </h1>
            <p className="text-muted">
              We bring you not only a stay option, but an experience in your
              budget to enjoy the luxury.
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <button className="btn-discover">Discover Now</button>
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none text-dark"
              >
                <i className="fas fa-play-circle fs-3 text-primary me-2"></i>{" "}
                Watch our story
              </a>
            </div>
          </div>

          {/* <!-- Right side --> */}
          <div className="col-lg-6 text-center side-img mt-5 mt-lg-0 position-relative">
            <img src={img1} alt="Hotel" className="img2" />
            <img
              src={img2}
              className="circle-img top ab d-none d-md-block"
              alt="circle1"
            />
            <img
              src={img3}
              className="circle-img bottom ab d-none d-md-block"
              alt="circle2"
            />

            <div className="support-box bg-white shadow p-3 rounded">
              <i className="fas fa-headphones"></i>
              <h6 className="mt-2 mb-0 fw-bold">24 / 7</h6>
              <small>Guide Supports</small>
            </div>
          </div>
        </div>

        {/* <!-- Availability box --> */}
        <div className="availability-box row mt-4 gy-3 gx-3">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label">Location</label>
            <div className="d-flex align-items-center border rounded p-2 position-relative">
              <i className="fas fa-map-marker-alt me-2"></i>

              {/* 👇 REPLACE THIS INPUT BLOCK */}
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  value={keyword}
                  onChange={handleChange}
                  placeholder="Enter hotel or city name"
                  className="form-control border-0 shadow-none"
                />

                {errorMessage && (
                  <div
                    className="text-danger small mt-1 position-absolute"
                    style={{ zIndex: 1000 }}
                  >
                    {errorMessage}
                  </div>
                )}

                {suggestions.length > 0 && (
                  <ul
                    className="list-group position-absolute w-100 mt-1"
                    style={{
                      zIndex: 1000,
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {suggestions.map((hotel) => (
                      <li
                        key={hotel.id || hotel.hotelId || hotel.name}
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                          setKeyword(hotel.name); // show name in input
                          setSelectedHotel(hotel); // store selected hotel
                          setSuggestions([]); // hide suggestions
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {hotel.name} —{" "}
                        {hotel.address?.cityName || hotel.cityCode}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <label>Check in - out</label>
            <div className="d-flex align-items-center border rounded p-2 mt-2">
              <i className="fas fa-calendar-alt me-2"></i>
              <input
                type="date"
                className="form-control border-0 shadow-none"
                placeholder="19 Sep to 28 Sep"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 ">
            <label>Guests & rooms</label>
            <div className="d-flex align-items-center border rounded p-2 mt-2">
              <i className="fas fa-user me-2"></i>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="2 Guests 1 Room"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-1 d-flex align-items-end">
            <button className="search-btn w-100" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </section>
      {searchResults.length > 0 && (
        <div className="container mt-4">
          <h4>Search Results</h4>
          <div className="row g-4">
            {searchResults.map((hotel) => (
              <div
                key={hotel.hotel?.hotelId || hotel.hotel?.name}
                className="col-md-4"
              >
                <div className="card h-100">
                  <img
                    src={hotel.hotel?.media[0]?.uri || img1}
                    className="card-img-top"
                    alt={hotel.hotel?.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{hotel.hotel?.name}</h5>
                    <p className="card-text">
                      {hotel.hotel?.address?.lines?.join(", ")}
                    </p>
                    <p className="text-success">
                      Price: {hotel.offers[0]?.price?.total || "N/A"}{" "}
                      {hotel.offers[0]?.price?.currency || "USD"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* new section */}
      <div className="container cou1 mt-5">
        <div className="row g-4">
          {Offers_Slider.map((item) => {
            return (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-md-4 cou"
                onClick={() => navigate("/offers")}
              >
                <div className="pic">
                  <img
                    src={`/images/${item.img}`}
                    className="img5 img-fluid"
                    alt={item.title}
                  />
                </div>
                <div className="con">
                  <h5>{item.title}</h5>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* section */}

      <div className="container section2 py-5">
        <div className="row align-items-center">
          {/* Left Column (Image + Client Rating Box) */}
          <div className="col-md-6 mb-4 mb-md-0 position-relative">
            <img src={c4} className="img-fluid rounded" alt="Holiday" />

            {/* Overlay Box */}
            <div
              className="bg-white shadow rounded p-3 position-absolute bottom-0 start-0 m-5"
              style={{ maxWidth: "280px" }}
            >
              <div className="d-flex justify-content-between mb-2">
                <h6 className="mb-0">Client</h6>
                <h6 className="mb-0">Rating</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={p1}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client1"
                  />
                  <img
                    src={p2}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client2"
                  />
                  <img
                    src={p3}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client3"
                  />
                  <img
                    src={p4}
                    className="rounded-circle me-1"
                    width="30"
                    height="30"
                    alt="client4"
                  />
                  <div
                    className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                    style={{ width: "30px", height: "30px", fontSize: "12px" }}
                  >
                    1k+
                  </div>
                </div>
                <h6 className="mb-0">4.5⭐</h6>
              </div>
            </div>
          </div>

          {/* Right Column (Text + Services) */}
          <div className="col-md-6">
            <h2 className="fw-bold display-6">The Best Holidays Start Here!</h2>
            <p className="text-muted">
              Book your hotel with us and don't forget to grab an awesome hotel
              deal to save massive on your stay.
            </p>

            {/* Services Grid */}
            <div className="row g-4 mt-3">
              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-primary fs-3 mb-2">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <p className="fw-semibold mb-1">Quality Food</p>
                  <p className="small text-muted mb-0">
                    Departure defective arranging rapturous did. Conduct denied
                    adding worthy little.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-success fs-3 mb-2">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <p className="fw-semibold mb-1">High Security</p>
                  <p className="small text-muted mb-0">
                    Arranging rapturous did believe him all had supported.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-warning fs-3 mb-2">
                    <i className="fas fa-stopwatch"></i>
                  </div>
                  <p className="fw-semibold mb-1">Quick Services</p>
                  <p className="small text-muted mb-0">
                    Supposing so be resolving breakfast am or perfectly.
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="border rounded p-3 h-100">
                  <div className="text-danger fs-3 mb-2">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <p className="fw-semibold mb-1">24 Hours Alert</p>
                  <p className="small text-muted mb-0">
                    Rapturous did believe him all had supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feauterd Hotels */}
      <div className="display-4 fw-bold text-center">Featured Hotels</div>
      <div className="container section3 mt-5">
        <div className="row g-4">
          {Featured_Hotels.map((item) => {
            return (
              <div
                key={item.id}
                className="col-lg-3 col-md-6 col-sm-12"
                onClick={() => navigate("/hoteldetail")}
                style={{ cursor: "pointer" }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <img
                      src={`/images/${item.img}`}
                      className="card-img-top rounded-3"
                      alt="Baga Comfort"
                    />
                    <div className="position-absolute bottom-0 start-0 bg-dark text-white px-2 py-1 rounded m-2 small">
                      <i className="fas fa-map-marker-alt"></i> {item.location}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold">{item.title}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0 text-success fw-bold">
                        {item.price}{" "}
                        <small className="text-muted">
                          {item.price_details}
                        </small>
                      </p>
                      <span className="fw-bold">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* new section */}
      <div className="container mt-5">
        <div className="row">
          {Brand_Images.map((item, index) => {
            return (
              <div className="col-md-2" key={index}>
                <img
                  src={`/images/${item.img}`}
                  className="lg"
                  alt={item.img}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* new section */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* <!-- Left side (images) --> */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={p5} className="girlimage" alt="p5" />
            <img src={em} className="emoji" alt="em" />
          </div>

          {/* <!-- Right side (text) --> */}
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-start">
              <img
                src={envotate}
                className="img-fluid mb-3"
                style={{ maxWidth: "120px" }}
                alt="envotate"
              />

              <p className="fw-bold fs-4">
                Passage its ten led hearted removal cordial. Preference any
                astonished unreserved Mrs. understood the Preference unreserved.
              </p>

              <p className="fs-5">⭐⭐⭐⭐⭐</p>

              <p className="fw-bold fs-5 mb-0">Carolyn Ortiz</p>
              <p className="text-muted">CEO of Google</p>
            </div>
          </div>
        </div>
      </div>

      {/* new section */}

      <div className="display-4 fw-bold text-center mt-5">Explore Nearby</div>

      <div className="container my-5">
        <div className="row g-4">
          {Explore_Nearby.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={item.key ?? index}>
              <a
                href="#"
                className="text-decoration-none text-dark d-block text-center"
              >
                <img
                  src={`/images/${item.img}`}
                  className="n2"
                  alt={item.title}
                />
                <h5 className="mb-1">{item.title}</h5>
                <p className="text-muted small">{item.subtitle}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* new section */}

      <div className="container-fluid py-5 nik3">
        <div className="row text-center text-md-start align-items-center g-4">
          <div className="col-12 col-md-4 d-flex align-items-center nik2">
            <i className="fas fa-hand-holding-heart fs-1 text-primary me-3"></i>
            <div>
              <h3 className="mb-1">24*7 Help</h3>
              <p className="mb-0">
                If we fall short of your expectation in any way, let us know
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex align-items-center nik2">
            <i className="fas fa-hand-holding-dollar fs-1 text-success me-3"></i>
            <div>
              <h3 className="mb-1">Payment Trust</h3>
              <p className="mb-0">
                All refunds come with no questions asked guarantee
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="mb-3">Download app</h3>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <img
                src="/images/playstore.png"
                alt="Playstore"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
              <img
                src="/images/appstore.jpg"
                alt="Appstore"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default Home;
