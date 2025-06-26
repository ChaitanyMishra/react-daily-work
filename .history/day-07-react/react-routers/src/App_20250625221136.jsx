import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from './components/Footer';
import About from './components/About/About';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
