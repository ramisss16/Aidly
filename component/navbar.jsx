import React from "react";
import AidlyLogo from "../src/assets/Aidly_logo.png.jpg";


const Navbar = () => {
  return (
    <nav
      className="w-full text-white border-b border-white/100"
      style={{
        background: "linear-gradient(180deg, #1A5F48 0%, #18765A 100%)",
      }}
    >
    <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

        {/* Left - Logo + Title */}
        <div className="flex items-center gap-4">
          <img
            src={AidlyLogo}
            alt="logo"
             className="w-[70px] h-[70px] object-contain"
            style={{ opacity: 1 }}
          />

          <h1
            className="text-5xl font-semibold"
            style={{
              fontFamily: "Inria Serif, serif",
            }}
          >
            Aidly Corporate
          </h1>
        </div>

        {/* Right - Menu */}
        <ul className="flex gap-10 text-lg font-medium">
          <li className="hover:text-gray-200 cursor-pointer transition">Home</li>
          <li className="hover:text-gray-200 cursor-pointer transition">About</li>
          <li className="hover:text-gray-200 cursor-pointer transition">Services</li>
          <li className="hover:text-gray-200 cursor-pointer transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
