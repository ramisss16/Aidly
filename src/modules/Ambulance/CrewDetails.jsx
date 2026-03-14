import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CrewDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ambulance id from previous page
  const ambulanceId = location.state?.ambulanceId;

  const [crewData, setCrewData] = useState({
    operatorName: "",
    operatorMobile: "",
    operatorAadhaar: "",
    operatorLicense: "",
    coOperatorName: "",
    coOperatorMobile: "",
    coOperatorAadhaar: "",
    coOperatorLicense: ""
  });

  const handleChange = (e) => {
    setCrewData({
      ...crewData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/ambulance/${ambulanceId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ crew: crewData })
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Crew Details Added Successfully 👨‍⚕️");
        navigate("/Ambulance");
      } else {
        alert(data.error || "Failed to save crew details");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className=" bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] p-4">
      
      <div className="max-w-6xl h-[580px] mx-auto bg-gray-200 rounded-md shadow-lg border border-blue-500 p-8">
        
        <h2 className="text-2xl font-bold text-center mb-8">
          Crew Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          <div className="ml-15">
            <label className="block font-bold mb-2">
              Operator's Name
            </label>
            <input
              type="text"
              name="operatorName"
              onChange={handleChange}
              className="w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
               placeholder="Operator's Name"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              name="operatorMobile"
              onChange={handleChange}
              className="w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
              placeholder="Mobile Number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          <div className="ml-15">
            <label className="block font-bold mb-2">
              Aadhar Number
            </label>
            <input
              type="text"
              name="operatorAadhaar"
              onChange={handleChange}
              className="w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
              placeholder=" Aadhar Number"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">
              License Number
            </label>
            <input
              type="text"
              name="operatorLicense"
              onChange={handleChange}
              className="w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
               placeholder="License Number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          <div className="ml-15">
            <label className="block font-bold mb-2">
              Co-Operator's Name
            </label>
            <input
              type="text"
              name="coOperatorName"
              onChange={handleChange}
              className="w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
               placeholder="Co-Operator's Name"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              name="coOperatorMobile"
              onChange={handleChange}
              className="w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
              placeholder=" Mobile Number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          <div className="ml-15">
            <label className="block font-bold mb-2">
              Aadhar Number
            </label>
            <input
              type="text"
              name="coOperatorAadhaar"
              onChange={handleChange}
              className="w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
              placeholder="Aadhar Number"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">
              License Number
            </label>
            <input
              type="text"
              name="coOperatorLicense"
              onChange={handleChange}
              className="w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
               placeholder="License Number"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md"
          >
            Save and Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default CrewDetails;