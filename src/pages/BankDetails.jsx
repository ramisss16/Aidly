import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


const BankDetails = () => {
    const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/emergency-details");
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

        <h1 className="text-3xl font-bold text-gray-800 mb-2">Bank Details</h1>
        <p className="text-gray-700 text-sm md:text-base mb-8">
          Please provide valid bank details for settlement and billing purposes.
          Ensure that the cancelled cheque or passbook copy clearly shows the
          account holder name and account number.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Bank Name */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Bank Name
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Branch Name */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Branch Name
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Bank Account Holder Name */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Bank Account Holder Name
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Account Type */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Account Type (Current / Savings)
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              Bank Account Number
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* IFSC Code */}
          <div>
            <label className="block text-lg font-bold text-gray-800 mb-1">
              IFSC Code
            </label>
            <input
              className="w-full bg-[#E9E9E9] px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Upload Section */}
          <div className="mt-4">
            <label className="block text-lg font-bold text-gray-800 mb-2">
              Upload Cancelled Cheque / Passbook Copy
            </label>

            <div className="border-2 border-dashed border-[#1967FF] rounded-md p-6 text-center">
              <p className="text-xs md:text-sm text-gray-600 mb-3 tracking-wide">
                DRAG FILE HERE OR
              </p>

              <button
                type="button"
                onClick={handleBrowseClick}
                className="bg-[#1967FF] hover:bg-[#1557d6] text-white px-6 py-2 rounded-full text-sm font-semibold transition"
              >
                Browse
              </button>

              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf,.png,.jpg,.jpeg"
                className="hidden"
              />

              <p className="mt-3 text-xs text-gray-500">
                Supported file types: .PDF .PNG .JPG
              </p>
            </div>
          </div>

          {/* Save & Next Button */}
          <div className="pt-6 flex justify-center">
            <button
             type="submit"
             className="bg-[#1967FF] hover:bg-[#1557d6] text-white font-bold 
             w-[700px] h-[48px] rounded-md transition text-[16px]"
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
