// src/components/Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>

      <nav style={{ marginBottom: "16px" }}>
        <Link to="details" style={{ marginRight: "12px" }}>
          Profile Details
        </Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}
