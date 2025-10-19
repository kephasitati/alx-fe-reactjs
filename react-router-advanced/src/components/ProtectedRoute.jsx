// src/components/ProtectedRoute.jsx
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// Simple mock authentication hook
function useAuth() {
  // Change this to false to simulate a logged-out user
  const [isAuthenticated] = useState(true);
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
