import "./Signin.css";
import React, { useContext, useState } from "react";
import { Google, Eye, EyeSlash } from "react-bootstrap-icons";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import ResetPasswordModal from "../ResetPasswordModal";

function Signin() {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const [showReset, setShowReset] = useState(false);

  const handleSignin = () => {
    // 1. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      alert("Please enter a valid email address!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (!emailId || !password) {
      alert("Please enter email and password!");
      return;
    }
    if (login(emailId, password)) {
      navigate("/"); // ✅ only navigate here
    }
  };

  const Signin1 = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });

      const userInfo = await res.json();
      loginWithGoogle(userInfo); // store in context
      navigate("/"); // redirect to profile page
    },
  });

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="container row w-75 shadow rounded-4 overflow-hidden bg-white">
          {/* Left Section (Image / Illustration) */}
          <div className="col-md-6 d-flex justify-content-center align-items-center bg-white p-4">
            <img
              src="images/leftside.png"
              alt="illustration"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </div>

          {/* Right Section (Form) */}
          <div className="col-md-6 p-5">
            {/* Header */}
            <div className="mb-2">
              <div
                className="d-inline-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-3"
                style={{ width: "50px", height: "50px" }}
              >
                <img src="images/logo.png"></img>
              </div>
              <h3 className="fw-bold">Welcome back</h3>
              <p className="text-muted">
                New here?{" "}
                <a href="signup" className="text-decoration-none text-primary">
                  Create an account
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="mb-3 text-muted">
              <label>Enter email id</label>
              <input
                type="email"
                className="form-control rounded-3"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-3 position-relative text-muted">
              <label>Enter password</label>
              <input
                type={showPassword ? "text" : "password"} // toggle type here
                className="form-control rounded-3"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <EyeSlash
                  onClick={() => setShowPassword(false)}
                  className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ cursor: "pointer", marginTop: "12px" }}
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(true)}
                  className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ cursor: "pointer", marginTop: "12px" }}
                />
              )}
            </div>

            {/* Remember / Forgot */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label htmlFor="remember" className="form-check-label">
                  Remember me?
                </label>
              </div>
              <a
                href="#"
                className="text-decoration-none text-primary"
                onClick={() => setShowReset(true)}
              >
                Forgot password?
              </a>
              <ResetPasswordModal
                show={showReset}
                onClose={() => setShowReset(false)}
              />
            </div>

            {/* Login button */}
            <div className="d-grid mb-3">
              <button
                className="btn btn-primary rounded-3 fw-semibold"
                onClick={handleSignin}
              >
                Login
              </button>
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Or sign in with</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Google */}
            <div className="d-grid mb-2">
              <button
                className="btn btn-light border rounded-3"
                onClick={() => Signin1()}
              >
                <Google className="me-2 text-danger" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
