import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Portfolio from "../Portfolio";

export default function App() {
  return (
    <>
        <Navbar />
        <Portfolio />
        <Footer />
    </>
  );
}