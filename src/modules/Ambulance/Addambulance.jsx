import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAmbulance = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "",
    availability: "",
    rcNumber: "",
    ownerName: "",
    vehicleModel: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/ambulance/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Ambulance Added Successfully 🚑");
        navigate("/CrewDetails", { 
  state: { ambulanceId: data.ambulance._id } 
});
      } else {
        alert(data.error || "Failed to add ambulance");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

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
          
          {/* Type */}
          <div className="ml-15">
            <label className="block font-bold mb-2">
              Type of ambulance
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border-gray-400 rounded px-12 py-2 bg-gray-300"
            >
              <option value="">Select</option>
              <option value="Basic">Basic</option>
              <option value="ICU">ICU</option>
              <option value="Oxygen">Oxygen</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block font-bold mb-2">
              Availability
            </label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="border border-gray-400 rounded px-12 py-2 bg-gray-300"
            >
              <option value="">Select</option>
              <option value="Available">Available</option>
              <option value="NotAvailable">Not Available</option>
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
            name="rcNumber"
            value={formData.rcNumber}
            onChange={handleChange}
            placeholder="Enter ambulance registration number"
            className="w-[600px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
          />
        </div>

        {/* Owner Name */}
        <div className="ml-15 mb-4">
          <label className="block font-bold mb-2">
            Owner Name
          </label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Owner name"
            className="w-[600px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
          />
        </div>

        {/* Vehicle Model */}
        <div className="ml-15 mb-8">
          <label className="block font-bold mb-2">
            Vehicle Model & Year
          </label>
          <input
            type="text"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            placeholder="Enter vehicle model"
            className="w-[600px] border border-gray-400 rounded px-3 py-2 bg-gray-300"
          />
        </div>

        {/* Submit Button */}
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

export default AddAmbulance;