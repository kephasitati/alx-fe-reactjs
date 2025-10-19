// src/App.jsx
import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx";

export default function App() {
  const [useFormik, setUseFormik] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => setUseFormik(v => !v)} style={{ marginBottom: 12 }}>
        Switch to {useFormik ? "Controlled" : "Formik"} form
      </button>

      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}
