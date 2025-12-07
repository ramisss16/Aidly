import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // Next page yahan navigate karega
    //navigate("/dashboard"); 
  };

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-10"
      style={{
        background:
          "linear-gradient(0deg, #C6EBE8 0%, #89C9CA 60.58%, #1A5F48 100%)",
      }}
    >
      <div className="bg-white w-[90%] max-w-[760px] rounded-xl shadow-2xl p-10">
        
        {/* HEADING */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Terms And Conditions
        </h1>

        {/* TERMS CONTENT */}
        <div className="text-gray-700 leading-7 mb-10 text-sm md:text-base">
          <p>
            Please read the following terms and conditions carefully before completing 
            the registration process. By proceeding, you agree to comply with the 
            guidelines mentioned below:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              All information provided must be accurate and verifiable.
            </li>
            <li>
              Uploaded documents such as certificates and proofs must be clear 
              and authentic.
            </li>
            <li>
              Misrepresentation of data may result in rejection or account suspension.
            </li>
            <li>
              You agree to allow Aidly Corporate to verify your submitted details 
              for compliance and safety purposes.
            </li>
          </ul>

          <p className="mt-4">
            If you agree with the above terms, you may proceed further.
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={handleAccept}
            className="bg-[#1967FF] hover:bg-[#1557d6] text-white font-semibold 
                       w-[300px] h-[48px] rounded-md transition text-[16px]"
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
