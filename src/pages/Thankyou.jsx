import React from "react";
import { useNavigate } from "react-router-dom";
import ThankYouImg from "../assets/thankyou.gif";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/hospital-dashboard"); 
  };

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-10"
      style={{
        background:
          "linear-gradient(0deg, #C6EBE8 0%, #89C9CA 60.58%, #1A5F48 100%)",
      }}
    >
      <div className="bg-white w-[90%] max-w-[600px] shadow-2xl p-10 text-center">

        {/* GIF */}
        <div className="flex justify-center mb-4">
          <img
            src={ThankYouImg}
            alt="Thankyou"
            className="w-[200px] h-[150px] object-contain"
          />
        </div>

        <h1 className="text-xl md:text-2xl font-bold mb-1">
          Thank You For Registration
        </h1>

        <p className="text-sm md:text-base text-gray-700 mb-1">
          Your password will be shared on your registered email within 2 days
          after verification.
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-8">
          We will be in touch and contact you soon!
        </p>

        <button
          onClick={handleBackHome}
          className="bg-[#1967FF] hover:bg-[#1557d6] text-white font-semibold
                     w-[350px] h-[48px] rounded-md transition text-[16px]"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
