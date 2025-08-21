import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Accomodations from "./pages/Accomodations";
import Services from "./pages/Services";
import NDIS from "./pages/NDIS";
import Careers from "./pages/Careers";
import Referral from "./pages/Referral";
import Contact from "./pages/Contact";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-5 bg-white shadow-md sticky top-0 z-20">
        {/* Logo */}
        <NavLink to="/" className="flex">
          <img
            src="/images/Auslife-Logo.png"
            alt="Auslife Logo"
            className="h-10"
          />
        </NavLink>

        {/* Hamburger Button (shows on < lg screens) */}
        <button
          className="ml-auto lg:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Nav Links */}
        <ul
          className={`flex flex-col lg:flex-row ml-auto space-y-4 lg:space-y-0 lg:space-x-8 font-medium lg:static absolute top-16 left-0 w-full lg:w-auto bg-white transition-all duration-300 ${
            menuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          <li className="pl-6 lg:pl-0">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold border-b-2 border-purple-900 pb-1"
                  : "text-gray-700 hover:text-purple-900 transition-colors"
              }
              end
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="pl-6 lg:pl-0">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold border-b-2 border-purple-900 pb-1"
                  : "text-gray-700 hover:text-purple-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              SERVICES & SUPPORT
            </NavLink>
          </li>
          <li className="pl-6 lg:pl-0">
            <NavLink
              to="/ndis"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold border-b-2 border-purple-900 pb-1"
                  : "text-gray-700 hover:text-purple-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              NDIS
            </NavLink>
          </li>
          <li className="pl-6 lg:pl-0">
            <NavLink
              to="/accomodations"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold border-b-2 border-purple-900 pb-1"
                  : "text-gray-700 hover:text-purple-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              ACCOMODATIONS
            </NavLink>
          </li>
          <li className="pl-6 lg:pl-0">
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold border-b-2 border-purple-900 pb-1"
                  : "text-gray-700 hover:text-purple-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              CAREERS
            </NavLink>
          </li>
          <li className="pl-6 lg:pl-0">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold border-b-2 border-purple-900 pb-1"
                  : "text-gray-700 hover:text-purple-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="pl-6 lg:pl-0">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-900 font-semibold border-b-2 border-purple-900 pb-1"
                  : "text-gray-700 hover:text-purple-900 transition-colors"
              }
              onClick={() => setMenuOpen(false)}
            >
              CONTACT US
            </NavLink>
          </li>
          <li className="pl-6 lg:pl-0">
            <NavLink to="/referrals" onClick={() => setMenuOpen(false)}>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-full transition-colors">
                REFERRALS
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ndis" element={<NDIS />} />
        <Route path="/accomodations" element={<Accomodations />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/referrals" element={<Referral />} />
      </Routes>
    </>
  );
};

export default App;
