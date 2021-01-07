import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contact from "../Contact";
import HomeContact from "../HomeContact";
import ContactForm from "../ContactForm";

export default function App() {
  return (
    <>
        <Navbar />
        <HomeContact />
        {/* <Contact /> */}
        <ContactForm />
        <Footer />
    </>
  );
}