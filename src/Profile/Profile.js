import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Profile() {
  const {
    currentUser,
    logout,
    users,
    setUsers,
    setCurrentUser,
    updatePassword,
    saveDetails,
  } = useContext(AuthContext);


  const navigate = useNavigate();

  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [name, SetName] = useState("");
  const [mobile, SetMobile] = useState("");
  const [nationality, SetNationality] = useState("");
  const [dob, SetDob] = useState("");
  const [gender, SetGender] = useState("");
  const [address, SetAddress] = useState("");

  // 🔐 Redirect to login if not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  // ✅ Load currentUser data into form fields
  useEffect(() => {
    if (currentUser) {
      SetName(currentUser.name || "");
      SetMobile(currentUser.mobile || "");
      SetNationality(currentUser.nationality || "");
      SetDob(currentUser.dob || "");
      SetGender(currentUser.gender || "");
      SetAddress(currentUser.address || "");
    }
  }, [currentUser]);

  // 🛑 Prevent render until user exists
  if (!currentUser) {
    return null;
  }

  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    if (newPwd !== confirmPwd) {
      alert("New password and confirmation do not match.");
      return;
    }

    const success = updatePassword(currentUser.email, currentPwd, newPwd);

    if (success) {
      setCurrentPwd("");
      setNewPwd("");
      setConfirmPwd("");
    }
  };

  const handleSaveData = (e) => {
    e.preventDefault();

    const success = saveDetails(
      name,
      currentUser.email,
      mobile,
      nationality,
      dob,
      gender,
      address
    );

    if (success) {
      alert("Profile updated!");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>

      <div className="container mt-5">
        <div className="row">
          {/* Sidebar */}
          <aside
            className="col-md-3 col-lg-2 bg-white border-end p-3"
            style={{ minHeight: "100vh" }}
          >
            <div className="text-center mb-4">
              <img
                src={currentUser?.picture || "/images/profile1.jpeg"}
                alt="profile"
                className="rounded-circle mb-2 img-thumbnail"
                style={{ height: "100px", width: "100px", objectFit: "cover" }}
              />
              <h6 className="mb-0">
                Welcome {currentUser.username || currentUser.name}
              </h6>
              <small className="text-muted">{currentUser.email} </small>
            </div>

            <ul
              className="nav nav-pills flex-column"
              id="accountTabs"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  className="nav-link active"
                  id="profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#profile"
                  type="button"
                >
                  <i className="bi bi-person me-2"></i> My Profile
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="bookings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#bookings"
                  type="button"
                >
                  <i className="bi bi-ticket me-2"></i> My Bookings
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="travelers-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#travelers"
                  type="button"
                >
                  <i className="bi bi-people me-2"></i> Travelers
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="payment-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#payment"
                  type="button"
                >
                  <i className="bi bi-credit-card me-2"></i> Payment Details
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  id="settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#settings"
                  type="button"
                >
                  <i className="bi bi-gear me-2"></i> Settings
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-danger"
                  id="delete-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#delete"
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete your account permanently?"
                      )
                    ) {
                      // remove from users array
                      const updatedUsers = users.filter(
                        (u) => u.email !== currentUser.email
                      );
                      setUsers(updatedUsers);

                      // clear current user
                      setCurrentUser(null);

                      // update localStorage
                      localStorage.setItem(
                        "users",
                        JSON.stringify(updatedUsers)
                      );
                      localStorage.removeItem("currentUser");

                      // redirect to signin
                      navigate("/");
                    }
                  }}
                >
                  <i className="bi bi-trash me-2"></i> Delete Profile
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-danger"
                  onClick={() => {
                    logout(); // clear user
                    navigate("/"); // redirect to signin page
                  }}
                >
                  <i className="bi bi-box-arrow-right me-2"></i> Sign Out
                </button>
              </li>
            </ul>
          </aside>

          {/* Content */}
          <main className="col-md-9 col-lg-10 p-4">
            <div className="tab-content" id="accountTabsContent">
              {/* Profile */}
              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
              >
                <div className="card p-4 shadow-sm">
                  <h5 className="fw-bold mb-3">Personal Information</h5>
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name || currentUser.username || currentUser.name}
                        onChange={(e) => SetName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue={currentUser.email}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Mobile</label>
                      <input
                        type="text"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => SetMobile(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Nationality</label>
                      <input
                        type="text"
                        className="form-control"
                        value={nationality}
                        onChange={(e) => SetNationality(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="date"
                        className="form-control"
                        value={dob}
                        onChange={(e) => SetDob(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Gender</label>
                      <input
                        type="text"
                        className="form-control"
                        value={gender}
                        onChange={(e) => SetGender(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => SetAddress(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleSaveData}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
                <div className="container my-4">
                  {/* Update Password */}
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-bold">Update Password</h5>
                      <p className="text-muted">
                        Your current email address is{" "}
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </p>
                      <form onSubmit={handlePasswordUpdate}>
                        <div className="mb-3">
                          <label className="form-label">Current password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter current password"
                            value={currentPwd}
                            onChange={(e) => setCurrentPwd(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Enter new password
                          </label>
                          <div className="input-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Enter new password"
                              value={newPwd}
                              onChange={(e) => setNewPwd(e.target.value)}
                            />
                            <span className="input-group-text">
                              <i className="bi bi-eye-slash"></i>
                            </span>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">
                            Confirm new password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm new password"
                            value={confirmPwd}
                            onChange={(e) => setConfirmPwd(e.target.value)}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Change Password
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bookings */}
              <div className="tab-pane fade" id="bookings" role="tabpanel">
                <div className="card p-3 shadow-sm">
                  <h4 className="fw-bold mb-3">My Bookings</h4>

                  {/* Tabs for Booking Types */}
                  <ul className="nav nav-tabs border-0 mb-3">
                    <li className="nav-item">
                      <button
                        className="nav-link active fw-semibold"
                        data-bs-toggle="tab"
                        data-bs-target="#upcoming"
                      >
                        <i className="bi bi-briefcase me-1"></i> Upcoming
                        Booking
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link fw-semibold"
                        data-bs-toggle="tab"
                        data-bs-target="#canceled"
                      >
                        <i className="bi bi-x-circle me-1"></i> Canceled Booking
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className="nav-link fw-semibold"
                        data-bs-toggle="tab"
                        data-bs-target="#completed"
                      >
                        <i className="bi bi-check-circle me-1"></i> Completed
                        Booking
                      </button>
                    </li>
                  </ul>

                  {/* Booking Content */}
                  <div className="tab-content">
                    {/* Upcoming Booking */}
                    <div className="tab-pane fade show active" id="upcoming">
                      <h6 className="fw-bold">Upcoming booking (2)</h6>

                      {/* Booking Item */}
                      <div className="border rounded-3 p-3 mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="mb-1 fw-bold">
                              <i className="bi bi-airplane me-2"></i> France to
                              New York
                            </h6>
                            <small className="text-muted">
                              Booking ID: CGDSUAHA12548 • Business class
                            </small>
                          </div>
                          <button className="btn btn-sm btn-primary">
                            Manage Booking
                          </button>
                        </div>
                        <hr />
                        <div className="row small">
                          <div className="col-md-4">
                            <strong>Departure:</strong> Tue 05 Aug 12:00 AM
                          </div>
                          <div className="col-md-4">
                            <strong>Arrival:</strong> Tue 06 Aug 4:00 PM
                          </div>
                          <div className="col-md-4">
                            <strong>Booked by:</strong> Frances Guerrero
                          </div>
                        </div>
                      </div>

                      {/* Second Booking */}
                      <div className="border rounded-3 p-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="mb-1 fw-bold">
                              <i className="bi bi-car-front me-2"></i> Chicago
                              to San Antonio
                            </h6>
                            <small className="text-muted">
                              Booking ID: CGDSUAHA12548 • Camry, Accord
                            </small>
                          </div>
                          <button className="btn btn-sm btn-primary">
                            Manage Booking
                          </button>
                        </div>
                        <hr />
                        <div className="row small">
                          <div className="col-md-4">
                            <strong>Pickup:</strong> 40764 Winchester Rd
                          </div>
                          <div className="col-md-4">
                            <strong>Drop:</strong> 11185 Mary Ball Rd
                          </div>
                          <div className="col-md-4">
                            <strong>Booked by:</strong> Frances Guerrero
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Canceled Booking */}
                    <div className="tab-pane fade" id="canceled">
                      <h6 className="fw-bold">Cancelled booking (1)</h6>
                      <div className="border rounded-3 p-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h6 className="mb-1 fw-bold">
                              <i className="bi bi-building me-2"></i> Courtyard
                              by Marriott New York
                            </h6>
                            <small className="text-muted">
                              Booking ID: CGDSUAHA12548 • AC
                            </small>
                          </div>
                          <button className="btn btn-sm btn-primary">
                            Manage Booking
                          </button>
                        </div>
                        <hr />
                        <div className="row small">
                          <div className="col-md-4">
                            <strong>Check-in:</strong> Tue 05 Aug 12:00 AM
                          </div>
                          <div className="col-md-4">
                            <strong>Check-out:</strong> Tue 12 Aug 4:00 PM
                          </div>
                          <div className="col-md-4">
                            <strong>Booked by:</strong> Frances Guerrero
                          </div>
                        </div>
                        <span className="text-danger fw-semibold">
                          Booking cancelled
                        </span>
                      </div>
                    </div>

                    {/* Completed Booking */}
                    <div className="tab-pane fade" id="completed">
                      <div className="border rounded-3 p-4 text-center">
                        <h6 className="fw-bold">
                          Looks like you have never booked with BOOKING
                        </h6>
                        <p className="mb-3">
                          When you book your trip it will be shown here.
                        </p>
                        <button className="btn btn-primary">
                          Start booking now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Travelers */}
              <div className="tab-pane fade" id="travelers" role="tabpanel">
                <div className="card p-4 shadow-sm">
                  <h5 className="fw-bold mb-3">Travelers Detail</h5>

                  {/* Traveler 1 */}
                  <div className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <img
                          src="images/profile2.jpeg"
                          style={{ height: "100px" }}
                          alt="Traveler"
                          className="rounded-circle me-2"
                        />
                        <h6 className="mb-0 fw-bold">Lori Stevens</h6>
                      </div>
                      <button className="btn btn-link text-danger p-0">
                        Remove
                      </button>
                    </div>

                    <div className="row g-2 mb-2">
                      <div className="col-md-6">
                        <label className="form-label">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          value="Lori"
                          readOnly
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          value="Stevens"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="text"
                        className="form-control"
                        value="29 Aug 1996"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Traveler 2 */}
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="d-flex align-items-center">
                        <img
                          src="images/profile.png"
                          style={{ height: "100px", width: "100px" }}
                          alt="Traveler"
                          className="rounded-circle me-2"
                        />
                        <h6 className="mb-0 fw-bold">Jacqueline Miller</h6>
                      </div>
                      <button className="btn btn-link text-danger p-0">
                        Remove
                      </button>
                    </div>

                    <div className="row g-2 mb-2">
                      <div className="col-md-6">
                        <label className="form-label">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          value="Jacqueline"
                          readOnly
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          value="Miller"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input
                        type="text"
                        className="form-control"
                        value="15 May 1994"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Add New Traveler */}
                  <div className="text-end">
                    <button className="btn btn-primary">
                      <i className="bi bi-plus-lg me-1"></i> Add New Traveler
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="tab-pane fade" id="payment" role="tabpanel">
                <div className="card p-4 shadow-sm">
                  <h5 className="fw-bold mb-3">Payment Details</h5>

                  {/* Saved Cards */}
                  <h6 className="mb-3">Saved Card</h6>
                  <div className="d-flex gap-3 flex-wrap mb-4">
                    <div
                      className="p-4 rounded text-white position-relative flex-fill"
                      style={{ background: "#4c4ad6", minWidth: "220px" }}
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                          alt="Visa"
                          style={{ width: "40px" }}
                        />
                        <i className="bi bi-three-dots-vertical"></i>
                      </div>
                      <h5 className="fw-bold mt-3">**** **** **** 1569</h5>
                      <div className="d-flex justify-content-between">
                        <small>Valid thru: 12/26</small>
                        <small>CVV: ***</small>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded text-white position-relative flex-fill"
                      style={{ background: "#d9534f", minWidth: "220px" }}
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                          alt="Mastercard"
                          style={{ width: "40px" }}
                        />
                        <i className="bi bi-three-dots-vertical"></i>
                      </div>
                      <h5 className="fw-bold mt-3">**** **** **** 5620</h5>
                      <div className="d-flex justify-content-between">
                        <small>Valid thru: 02/35</small>
                        <small>CVV: ***</small>
                      </div>
                    </div>
                  </div>

                  {/* Add New Card */}
                  <h6 className="fw-bold mb-3">Add New Card</h6>
                  <form className="border rounded p-3">
                    <div className="mb-3">
                      <label className="form-label">
                        Card Number<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="xxxx xxxx xxxx xxxx"
                        />
                        <span className="input-group-text bg-white">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                            style={{ width: "30px" }}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label">
                          Expiration Date<span className="text-danger">*</span>
                        </label>
                        <div className="row g-2">
                          <div className="col-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Month"
                            />
                          </div>
                          <div className="col-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Year"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">
                          CVV / CVC<span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="xxx"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Name on Card<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>

                    <button className="btn btn-primary" type="button">
                      Add card
                    </button>
                  </form>
                </div>
              </div>

              {/* Settings */}
              <div className="tab-pane fade" id="settings" role="tabpanel">
                <div className="card p-4 shadow-sm mb-4">
                  <h5 className="fw-bold mb-3">Notification Settings</h5>

                  {/* Newsletter */}
                  <div className="mb-3">
                    <label className="form-label d-block fw-bold">
                      Newsletter<span className="text-danger">*</span>
                    </label>
                    <div className="d-flex gap-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="newsletter"
                          id="daily"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="daily">
                          Daily
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="newsletter"
                          id="twice"
                        />
                        <label className="form-check-label" htmlFor="twice">
                          Twice a week
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="newsletter"
                          id="weekly"
                        />
                        <label className="form-check-label" htmlFor="weekly">
                          Weekly
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="newsletter"
                          id="never"
                        />
                        <label className="form-check-label" htmlFor="never">
                          Never
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Notification Toggles */}
                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="loginNotif"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="loginNotif">
                      Notify me via email when logging in
                    </label>
                  </div>

                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="reminders"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="reminders">
                      I would like to receive booking assist reminders
                    </label>
                  </div>

                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="promotions"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="promotions">
                      I would like to receive emails about Booking promotions
                    </label>
                  </div>

                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="offers"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="offers">
                      I would like to know about information and offers related
                      to my upcoming trip
                    </label>
                  </div>

                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="profilePublic"
                    />
                    <label className="form-check-label" htmlFor="profilePublic">
                      Show your profile publicly
                    </label>
                  </div>

                  <div className="form-check form-switch mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="smsConfirm"
                    />
                    <label className="form-check-label" htmlFor="smsConfirm">
                      Send SMS confirmation for all online payments
                    </label>
                  </div>

                  <div className="form-check form-switch mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="deviceAccess"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="deviceAccess">
                      Check which device(s) access your account
                    </label>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-primary">Save changes</button>
                    <button className="btn btn-outline-secondary">
                      Cancel
                    </button>
                  </div>
                </div>

                {/* Security Settings */}
                <div className="card p-4 shadow-sm">
                  <h5 className="fw-bold mb-3">Security settings</h5>

                  {/* Two-factor authentication */}
                  <div className="mb-3">
                    <h6 className="fw-bold">Two-factor authentication</h6>
                    <p className="small text-muted mb-2">
                      Add a phone number to set up two-factor authentication
                    </p>
                    <div className="input-group mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="enter your mobile number"
                      />
                    </div>
                    <button className="btn btn-primary">Send Code</button>
                  </div>

                  {/* Active Sessions */}
                  <div className="mt-4">
                    <h6 className="fw-bold">Active sessions</h6>
                    <p className="small text-muted">
                      Selecting "Sign out" will sign you out from all devices
                      except this one. This can take up to 10 minutes.
                    </p>
                    <button className="btn btn-danger">Sign Out</button>
                  </div>
                </div>
              </div>

              {/* Delete Account */}
              <div className="tab-pane fade" id="delete" role="tabpanel">
                <div className="card p-4 shadow-sm">
                  <h5 className="fw-bold mb-3 text-danger">Delete Account</h5>
                  <p className="fw-bold">Before you go...</p>
                  <ul>
                    <li>
                      Take a backup of your data{" "}
                      <a href="#" className="text-primary">
                        Here
                      </a>
                    </li>
                    <li>
                      If you delete your account, you will lose all your data.
                    </li>
                  </ul>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="deleteConfirm"
                    />
                    <label className="form-check-label" htmlFor="deleteConfirm">
                      Yes, I’d like to delete my account
                    </label>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-success">
                      Keep my account
                    </button>
                    <button className="btn btn-danger">
                      Delete my account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  );
}

export default Profile;
