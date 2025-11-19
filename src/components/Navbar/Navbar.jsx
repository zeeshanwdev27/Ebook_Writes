import React, { useState } from "react";
import MbOverlay from "./MbOverlay.jsx";
import { Link } from "react-router-dom";
import { ChevronDown, Phone } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-5 w-full">
      <div className="flex justify-between items-center px-4 md:px-8 lg:justify-evenly">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/logo.png"
            alt="Newyour_Publisher_Logo"
            className="w-40 h-10"
          />
        </Link>

        {/* Hamburger Menu for medium and small screens */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 mr-5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Menu - Hidden on small/medium, visible on large */}
        <ul className="hidden lg:flex gap-5 justify-center items-center">
          <li className="hover:text-(--main-color) cursor-pointer transition-colors">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="relative group cursor-pointer">
            <span className="hover:text-(--main-color) transition-colors flex items-center gap-1">
              Services
              <ChevronDown
                size={16}
                className="transition-transform group-hover:rotate-180"
              />
            </span>

            {/* Dropdown */}
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50">
              <li>
                <Link
                  to="/book-marketing"
                  className="block px-4 py-2 hover:bg-(--main-color) hover:text-white transition-colors"
                >
                  Book Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/book-writing"
                  className="block px-4 py-2 hover:bg-(--main-color) hover:text-white transition-colors"
                >
                  Book Writing
                </Link>
              </li>
              <li>
                <Link
                  to="/book-publishing"
                  className="block px-4 py-2 hover:bg-(--main-color) hover:text-white transition-colors"
                >
                  Book Publishing
                </Link>
              </li>
            </ul>
          </li>
          <li className="hover:text-(--main-color) cursor-pointer transition-colors">
            <Link to={"/testimonials/"}>Testimonials</Link>
          </li>
          <li className="hover:text-(--main-color) cursor-pointer transition-colors">
            <Link to={"/about-us"}>About Us</Link>
          </li>
          <li className="hover:text-(--main-color) cursor-pointer transition-colors">
            <Link to={"/contact-us/"}>Contact Us</Link>
          </li>
        </ul>

        {/* Call To Action - Hidden on small/medium, visible on large */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          <button className="flex items-center gap-2  transition-colors duration-200 text-(--main-color) border border-(--main-color) px-2 py-3 rounded-md hover:bg-(--main-color) hover:text-white">
            <Phone size={16} />
            +000 000 0000
          </button>
          <button className="px-6 py-3 rounded-md border border-(--main-color) bg-(--main-color) text-white hover:bg-transparent hover:text-(--main-color) transition-all duration-200 font-medium">
            Chat With Us
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <MbOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      )}
    </div>
  );
}

export default Navbar;
