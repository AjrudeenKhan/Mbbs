
import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Countries from "./components/Countries";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Countries />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
