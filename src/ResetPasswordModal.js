// src/ResetPasswordModal.js
import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

function ResetPasswordModal({ show, onClose }) {
  const { users, setUsers } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (!show) return null; // don't render if closed

  const handleReset = () => {
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex === -1) {
      alert("No account found with this email!");
      return;
    }

    const updatedUsers = [...users];
    updatedUsers[userIndex].password = newPassword;
    setUsers(updatedUsers);

    alert("Password reset successful! Please login.");
    onClose(); // close modal
  };

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4">
          <div className="modal-header">
            <h5 className="modal-title">Reset Password</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleReset}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordModal;
