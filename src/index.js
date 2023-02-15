import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import App from "./App";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <Navbar />
    <Header />
    <App />
    <Footer />
  </div>
);
