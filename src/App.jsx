
import { Routes, Route } from "react-router-dom";
import React from "react";
import AboutPage from "./components/AboutPage";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import ContactFooter from "./components/ContactFooter";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="bg-[#0f1214] text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Capabilities />
              <Highlights />
              <ContactFooter />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
