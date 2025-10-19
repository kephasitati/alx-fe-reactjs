import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div style={{ maxWidth: 400, margin: "1rem auto" }}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm, setStatus }) => {
          try {
            const response = await axios.post(
              "https://jsonplaceholder.typicode.com/users",
              values
            );
            setStatus(`User ${response.data.username} registered successfully!`);
            resetForm();
          } catch (error) {
            setStatus("Something went wrong. Please try again.");
          }
        }}
      >
        {({ status }) => (
          <Form>
            <div>
              <label>Username:</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit">Register</button>
            {status && <p>{status}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
