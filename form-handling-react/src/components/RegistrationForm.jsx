// src/components/RegistrationForm.jsx
import React, { useState } from "react";
import axios from "axios";

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // clear field error when user types
  }

  function validate() {
    const err = {};
    if (!form.username.trim()) err.username = "Username is required";
    if (!form.email.trim()) {
      err.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = "Invalid email";
    }
    if (!form.password) {
      err.password = "Password is required";
    } else if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }
    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, success: null, message: "" });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus({ loading: true, success: null, message: "" });

    try {
      // Example mock API: using reqres.in for a demo registration endpoint
      // You can replace URL with your mock or real endpoint.
      const resp = await axios.post("https://reqres.in/api/register", {
        email: form.email,
        password: form.password,
        username: form.username, // some mocks ignore additional fields but it's OK
      });

      setStatus({ loading: false, success: true, message: "Registration successful!" });
      console.log("API response:", resp.data);
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      // handle errors gracefully
      const message =
        err?.response?.data?.error || err.message || "Registration failed. Try again.";
      setStatus({ loading: false, success: false, message });
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "1rem auto" }}>
      <h2>Register (controlled)</h2>

      <label>
        Username
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
        {errors.username && <div style={{ color: "crimson" }}>{errors.username}</div>}
      </label>

      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} placeholder="name@x.com" />
        {errors.email && <div style={{ color: "crimson" }}>{errors.email}</div>}
      </label>

      <label>
        Password
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Min 6 chars"
        />
        {errors.password && <div style={{ color: "crimson" }}>{errors.password}</div>}
      </label>

      <button type="submit" disabled={status.loading}>
        {status.loading ? "Registering..." : "Register"}
      </button>

      {status.success && <div style={{ color: "green" }}>{status.message}</div>}
      {status.success === false && <div style={{ color: "crimson" }}>{status.message}</div>}
    </form>
  );
}
