import React from "react";
import AidlyLogo from "../src/assets/Aidly_logo.png.jpg";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1A5F48] py-4 px-5 flex items-center justify-between  fixed top-0 left-0 z-50 border-b-4 border-white ">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <img 
          src={AidlyLogo}
          alt="Aidly Logo"
          className="w-30 h-30"
        />
        <h1 className="text-6xl font-semibold text-white mt-15">Aidly Corporate</h1>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-12 text-white text-3xl mt-20">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
