import React from "react";
import { useNavigate } from "react-router-dom";

const EmergencyDetails = () => {
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
      navigate("/terms-and-conditions");
  };

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-10"
      style={{
        background:
          "linear-gradient(0deg, #C6EBE8 0%, #89C9CA 60.58%, #1A5F48 100%)",
      }}
    >
      <div className="bg-white w-[90%] max-w-[650px] rounded-xl shadow-2xl p-10">
        <form onSubmit={handleSubmit}>
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Emergency Contact Person Details
          </h1>
          <p className="text-lg text-base text-gray-600 mb-6 ">
            Provide contact details of the person responsible for emergency
            coordination or immediate support.
          </p>

          {/* First / Last Name row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div>
              <label className="block text-lg font-semibold mb-1">
                First Name
              </label>
              <input
                className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none border border-[#D3D3D3] focus:ring-2 focus:ring-blue-400"

              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-1">
                Last Name
              </label>
              <input
               className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none border border-[#D3D3D3] focus:ring-2 focus:ring-blue-400"

              />
            </div>
          </div>

          {/* Designation */}
          <div className="mb-5">
            <label className="block text-lg font-semibold mb-1">
              Designation
            </label>
            <input
             className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none border border-[#D3D3D3] focus:ring-2 focus:ring-blue-400"

            />
          </div>

          {/* Mobile Number */}
          <div className="mb-5">
            <label className="block text-lg font-semibold mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
             className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none border border-[#D3D3D3] focus:ring-2 focus:ring-blue-400"

            />
          </div>

          {/* Email Address */}
          <div className="mb-8">
            <label className="block text-lg font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
             className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none border border-[#D3D3D3] focus:ring-2 focus:ring-blue-400"
          />
          </div>

          {/* Save and Next Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-[#1967FF] hover:bg-[#1557d6] text-white font-semibold 
                         w-[450px] h-[48px] rounded-md transition text-[16px]"
            >
              Save and Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencyDetails;
