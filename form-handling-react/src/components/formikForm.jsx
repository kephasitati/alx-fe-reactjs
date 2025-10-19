// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div style={{ maxWidth: 420, margin: "1rem auto" }}>
      <h2>Register (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          setStatus({ loading: true, success: null, message: "" });
          try {
            const resp = await axios.post("https://reqres.in/api/register", {
              email: values.email,
              password: values.password,
              username: values.username,
            });

            setStatus({ loading: false, success: true, message: "Registration successful" });
            resetForm();
            console.log("API response:", resp.data);
          } catch (err) {
            const message = err?.response?.data?.error || err.message || "Registration failed";
            setStatus({ loading: false, success: false, message });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div style={{ marginBottom: 8 }}>
              <label>Username</label>
              <Field name="username" placeholder="username" />
              <div style={{ color: "crimson" }}>
                <ErrorMessage name="username" />
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <label>Email</label>
              <Field name="email" type="email" placeholder="name@x.com" />
              <div style={{ color: "crimson" }}>
                <ErrorMessage name="email" />
              </div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <label>Password</label>
              <Field name="password" type="password" placeholder="Min 6 chars" />
              <div style={{ color: "crimson" }}>
                <ErrorMessage name="password" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>

            {status?.success && <div style={{ color: "green", marginTop: 8 }}>{status.message}</div>}
            {status?.success === false && (
              <div style={{ color: "crimson", marginTop: 8 }}>{status.message}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
