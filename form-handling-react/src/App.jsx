// src/App.jsx
import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  const [useFormik, setUseFormik] = useState(true);

  const toggleForm = () => setUseFormik((prev) => !prev);

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <button
        onClick={toggleForm}
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "1.5rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Switch to {useFormik ? "Controlled" : "Formik"} Form
      </button>

      <div style={{ textAlign: "left" }}>
        {useFormik ? <FormikForm /> : <RegistrationForm />}
      </div>
    </div>
  );
}
