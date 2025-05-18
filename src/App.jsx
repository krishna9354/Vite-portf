import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="app">
      {/* Define all routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/portfolio" element={<div>Portfolio Page</div>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {/* Footer should be outside of Routes */}
      <Footer />
    </div>
  );
}

export default App;
