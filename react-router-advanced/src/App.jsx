// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: "16px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
        <Link to="/blog/1">Sample Blog</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected route example */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
