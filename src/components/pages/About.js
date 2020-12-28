import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import About from "../About";
import AboutCards from "../AboutCards";

export default function App() {
  return (
    <>
        <Navbar />
        <About />
        <AboutCards />
        <Footer />
    </>
  );
}