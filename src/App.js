import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./AuthContext";
import Home from "./Home/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // <-- This is required for dropdowns to work
import Flight from "./Flight/Flight";
import Tour from "./Tour/Tour";
import Cabs from "./Cabs/Cabs";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Offers from "./Offers/Offers";
import HotelDetail from "./HotelDetails/HotelDetails";
// import Flight_list from "./Flight_list/Flight_list";
import BlogDetail from "./BlogDetail/BlogDetail";
import Flight_details from "./Flight_details/Flight_details";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Payment from "./Payment/Payment";
import Tour_Package from "./Tour_Package/Tour_Package";
import Tour_Package_detail from "./Tour_Package_detail/Tour_Package_detail";
import Tour_booking from "./Tour_booking/Tour_booking";
import Profile from "./Profile/Profile";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/cabs" element={<Cabs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/hoteldetail" element={<HotelDetail />} />
          {/* <Route path="/flight_list" element={<Flight_list />} /> */}
          <Route path="/blog" element={<BlogDetail />} />
          <Route path="/flight_details" element={<Flight_details />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/tour_package" element={<Tour_Package />} />
          <Route
            path="/tour_package_detail"
            element={<Tour_Package_detail />}
          />
          <Route path="/tour_booking" element={<Tour_booking />} />
          <Route path="/profile" element={<Profile />} />

          {/* ✅ Signin with Google */}
          <Route
            path="/signin"
            element={
              <GoogleOAuthProvider clientId="1009445706901-k4mhav5dh2bot9o3d06d8m2n46hu9ftq.apps.googleusercontent.com">
                <Signin />
              </GoogleOAuthProvider>
            }
          />

          {/* ✅ Signup with Google */}
          <Route
            path="/signup"
            element={
              <GoogleOAuthProvider clientId="1009445706901-k4mhav5dh2bot9o3d06d8m2n46hu9ftq.apps.googleusercontent.com">
                <Signup />
              </GoogleOAuthProvider>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
