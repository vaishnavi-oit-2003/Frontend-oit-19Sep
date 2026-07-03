import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestContext from "./context/TestContext.js";
import BlogProvider from "./context/BlogProvider.jsx";

// To Add TestContext: and TestContext.Provider

createRoot(document.getElementById("root")).render(
  <BlogProvider>
    <App />
  </BlogProvider>
);