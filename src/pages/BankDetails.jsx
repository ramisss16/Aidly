import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BankDetails = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // ✅ STATE (IMPORTANT)
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    ifsc: ""
  });

  // ✅ HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // ✅ SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("hospitalToken");

    if (!token) {
      alert("Token missing, please login again");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/hospital/bank-details",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();
      console.log("Bank API response:", data);

      if (!response.ok) {
        alert(data.error || "Failed to save bank details");
        return;
      }
    
      navigate("/emergency-details");
    } catch (error) {
      console.error("Bank details error:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-start pt-10"
      style={{
        background:
          "linear-gradient(0deg, #C6EBE8 0%, #89C9CA 60.58%, #1A5F48 100%)",
      }}
    >
      <div className="bg-white w-[90%] max-w-[600px] rounded-lg shadow-lg p-10">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Bank Details
        </h1>
        <p className="text-gray-700 text-sm md:text-base mb-8">
          Please provide valid bank details for settlement and billing purposes.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Bank Name */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Bank Name
            </label>
            <input
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Branch Name (UI only) */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Branch Name
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Account Holder */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Bank Account Holder Name
            </label>
            <input
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Account Type (UI only) */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Account Type (Current / Savings)
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Bank Account Number
            </label>
            <input
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* IFSC */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              IFSC Code
            </label>
            <input
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none"
            />
          </div>

          {/* Upload (UI only) */}
          <div className="mt-4">
            <label className="block text-lg font-bold text-gray-800 mb-2">
              Upload Cancelled Cheque / Passbook Copy
            </label>

            <div className="border-2 border-dashed border-[#1967FF] rounded-md p-6 text-center">
              <button
                type="button"
                onClick={handleBrowseClick}
                className="bg-[#1967FF] text-white px-6 py-2 rounded-full"
              >
                Browse
              </button>

              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
              />
            </div>
          </div>

          {/* Save & Next */}
          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              className="bg-[#1967FF] text-white font-bold 
              w-[700px] h-[48px] rounded-md transition"
            >
              Save and Next
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BankDetails;
