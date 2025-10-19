import React, { useState } from "react";
import axios from "axios";

export default function RegistrationForm() {
  // Step 1: Manage form state with useState
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Step 2: Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        username,
        email,
        password,
      });
      setMessage(`User ${response.data.username} registered successfully!`);
      // Clear inputs
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
            value={username}           // ✅ controlled input
            onChange={(e) => setUsername(e.target.value)} // ✅ updates state
          />
        </div>

        {/* email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}              // ✅ controlled input
            onChange={(e) => setEmail(e.target.value)}    // ✅ updates state
          />
        </div>

        {/* password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}           // ✅ controlled input
            onChange={(e) => setPassword(e.target.value)} // ✅ updates state
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
