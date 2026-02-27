import React from "react";
import AidlyLogo from "../src/assets/Aidly_logo.png.jpg";
import { Bell, User } from "lucide-react";

const AmbulanceNav = () => {
  return (
    <nav
      className="w-full text-white border-b-4 border-white "
      style={{
        background: "linear-gradient(180deg, #1A5F48 0%, #18765A 100%)",
      }}
    >
      <div className="w-full flex items-center justify-between px-6 py-5">

        {/* Left */}
        <div className="flex items-center gap-4">
          <img
            src={AidlyLogo}
            alt="logo"
            className="w-[70px] h-[70px] object-contain"
          />

          <h1
            className="text-5xl font-semibold"
            style={{ fontFamily: "Inria Serif, serif" }}
          >
            Aidly Corporate
          </h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <User size={30} className="cursor-pointer" />
          <Bell size={30} className="cursor-pointer" />
        </div>

      </div>
    </nav>
  );
};

export default AmbulanceNav;