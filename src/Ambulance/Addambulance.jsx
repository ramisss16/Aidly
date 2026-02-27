import React from "react";
import { Link } from "react-router-dom";

const AddAmbulance = () => {
  return (
    <div className=" bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] p-4">
      
     {/* card */}
      <div className="max-w-6xl h-[580px] mx-auto bg-gray-200 rounded-md shadow-lg border border-blue-500 p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-10">
          Add Ambulances
        </h2>

                 {/* Type of Ambulance and Availability */}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          
          {/* Type of Ambulance */}
          <div className="ml-15">
            <label className="block font-bold mb-2">
              Type of ambulance
            </label>
            <select className="  border border-gray-400 rounded px-12 py-2 bg-gray-300 ">
              <option>Select</option>
              <option>Basic</option>
              <option>ICU</option>
              <option>Advanced</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block font-bold mb-2">
              Availability
            </label>
            <select className=" border border-gray-400 rounded px-12 py-2 bg-gray-300 ">
              <option>Select</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
          </div>

        </div>

        {/* RC Number */}
        <div className="ml-15 mb-4">
          <label className="block font-bold mb-2">
            Vehicle Registration Number (RC No.)
          </label>
          <input
            type="text"
            placeholder="Enter ambulance registration number"
            className=" w-[600px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
        </div>

        {/* Owner Name */}
        <div className=" ml-15 mb-4">
          <label className="block font-bold mb-2">
            Owner Name
          </label>
          <input
            type="text"
            placeholder="Owner name"
            className="w-[600px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
        </div>

        {/* Vehicle Model */}
        <div className="ml-15 mb-8">
          <label className="block font-bold mb-2">
            Vehicle Model & Year
          </label>
          <input
            type="text"
            placeholder="Enter vehicle model"
            className="w-[600px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
        </div>

        {/* Submit Button */}
        <div className="text-center ">
          <Link to="/CrewDetails">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md">
            Save and Next
          </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AddAmbulance;