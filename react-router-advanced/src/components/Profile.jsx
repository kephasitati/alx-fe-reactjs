import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

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

      {/* Nested routes inside Profile */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
