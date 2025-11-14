import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0d0f10] text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold">
          Vyom<span className="text-[#ff7b00]">Garud</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg">
          <Link to="/" className="hover:text-[#ff7b00] transition">Home</Link>
          <Link to="/about" className="hover:text-[#ff7b00] transition">About</Link>
          <a href="#capabilities" className="hover:text-[#ff7b00] transition">Capabilities</a>
          <a href="#highlights" className="hover:text-[#ff7b00] transition">Highlights</a>
          <a href="#contact" className="hover:text-[#ff7b00] transition">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#0d0f10] px-6 pb-4 space-y-3 text-lg">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff7b00]"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff7b00]"
          >
            About
          </Link>

          <a
            href="#capabilities"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff7b00]"
          >
            Capabilities
          </a>

          <a
            href="#highlights"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff7b00]"
          >
            Highlights
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-[#ff7b00]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
