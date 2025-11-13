import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to handle scroll navigation
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      // If we’re on another page (like /about), go home first
      navigate("/", { replace: false });

      // Wait a bit for the Home to load, then scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      // Already on home page, just scroll directly
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f1214] border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-white">
          Vyom<span className="text-[#ff7b00]">Garud</span>
        </Link>

        <div className="flex gap-6 text-gray-300">
          <Link to="/" className="hover:text-[#ff7b00] transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#ff7b00] transition">
            About
          </Link>

          {/* Scroll Links */}
          <button
            onClick={() => handleScrollTo("capabilities")}
            className="hover:text-[#ff7b00] transition"
          >
            Capabilities
          </button>
          <button
            onClick={() => handleScrollTo("highlights")}
            className="hover:text-[#ff7b00] transition"
          >
            Highlights
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="hover:text-[#ff7b00] transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
