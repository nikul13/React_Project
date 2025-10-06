import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import "./Signup.css";
import { jwtDecode } from "jwt-decode";
import { Google, Eye, EyeSlash } from "react-bootstrap-icons";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const { loginWithGoogle } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleSignup = () => {
    // 1. Validate username
    if (!username.trim()) {
      alert("Please enter a username!");
      return;
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      alert("Please enter a valid email address!");
      return;
    }

    // 3. Password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // 4. Password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (register(username, emailId, password)) {
      navigate("/signin");
    }
  };

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="row w-75 shadow rounded-4 overflow-hidden bg-white">
          {/* Left Illustration */}
          <div className="col-md-6 d-flex justify-content-center align-items-center bg-white p-4">
            <img
              src="images/leftside.png"
              alt="signup"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 p-5 container">
            {/* Header */}
            <div className="mb-4">
              <div
                className="d-inline-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-3"
                style={{ width: "50px", height: "50px" }}
              >
                <img src="images/logo.png" alt="logo" />
              </div>
              <h3 className="fw-bold">Create new account</h3>
              <p className="text-muted">
                Already a member?{" "}
                <a href="/signin" className="text-decoration-none text-primary">
                  Log in
                </a>
              </p>
            </div>

            {/* Username */}
            <div className="mb-3 text-muted">
              <label>Enter Username</label>
              <input
                type="text"
                className="form-control rounded-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3 text-muted">
              <label>Enter email id</label>
              <input
                type="email"
                className="form-control rounded-3"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3 position-relative text-muted">
              <label>Enter password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control rounded-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showConfirmPassword ? (
                <EyeSlash
                  onClick={() => setShowPassword(false)}
                  className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ cursor: "pointer", marginTop: "10px" }}
                />
              ) : (
                <Eye
                  onClick={() => setShowConfirmPassword(true)}
                  className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ cursor: "pointer", marginTop: "10px" }}
                />
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-3 position-relative text-muted">
              <label>Confirm password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control rounded-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {showConfirmPassword ? (
                <EyeSlash
                  onClick={() => setShowConfirmPassword(false)}
                  className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ cursor: "pointer", marginTop: "10px" }}
                />
              ) : (
                <Eye
                  onClick={() => setShowConfirmPassword(true)}
                  className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  style={{ cursor: "pointer", marginTop: "10px" }}
                />
              )}
            </div>

            {/* Sign Up Button */}
            <div className="d-grid mb-3">
              <button
                className="btn btn-primary rounded-3 fw-semibold"
                onClick={handleSignup}
              >
                Sign up
              </button>
            </div>

            {/* Divider */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-muted">Or sign in with</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Google Login */}
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

export default Signup;
