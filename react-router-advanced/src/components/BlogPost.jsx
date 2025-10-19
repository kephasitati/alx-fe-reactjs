// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Post #{id}</h2>
      <p>This is a dynamically loaded blog post based on the URL ID.</p>
    </div>
  );
}
