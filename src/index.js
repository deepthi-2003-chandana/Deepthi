import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // optional, you can remove if not using CSS
import App from "./App";

// React 18+ uses createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
