import React, { useState } from "react";
import axios from "axios";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ added for validation
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validation checks
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";        // ✅ this line
    if (!password) newErrors.password = "Password is required"; // ✅ this line

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // ✅ sets validation errors
      return;
    }

    setErrors({});

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        username,
        email,
        password,
      });
      setMessage(`User ${response.data.username} registered successfully!`);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* username */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>

        {/* email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
