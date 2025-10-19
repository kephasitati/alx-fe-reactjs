import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return (
    <div>
      <h2>Post ID: {id}</h2>
      <p>This is a dynamically routed post page.</p>
    </div>
  );
}
