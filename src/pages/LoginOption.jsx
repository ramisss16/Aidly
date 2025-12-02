import React from "react";
import { Link } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8]  pt-35 ">

      {/* Main Card */}
      
      <div className="mt-10 bg-white/80 backdrop-blur-md p-10  shadow-lg w-[600px] h-[450px]">

        <h2 className="text-center text-3xl font-semibold mb-8">
          Login with Aidly
        </h2>

        {/* ACTIVE BUTTON */}
        <Link to="/login">
        <button className="w-full bg-gray-300  text-gray-600 text-lg py-2  mb-3  border border-transparent hover:border-gray-500 ">
         Hospital
        </button>
        </Link>

        {/* ACTIVE BUTTON */}
         <Link to="/login">
        <button className="w-full bg-gray-300  text-gray-600 text-lg  py-2 mb-3 border border-transparent hover:border-gray-500">
        Ambulance Owner
        </button>
        </Link> 

        {/* DISABLED BUTTON */}
        <Link to="/login"> 
        <button className="w-full bg-gray-300 text-gray-600 text-lg py-2 mb-3 border border-transparent hover:border-gray-500" >
          Medical Store
        </button>
        </Link> 

        {/* DISABLED BUTTON */}
         <Link to="/login">
        <button className="w-full bg-gray-300 text-gray-600 text-lg py-2 border border-transparent hover:border-gray-500" >
         Doctor
        </button>
        </Link>

      </div>
    </div>
  );
};

export default LoginOptions;
