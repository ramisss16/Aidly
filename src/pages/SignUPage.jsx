import React from "react";

const SignupHospital = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] flex justify-center pt-40">
      <div className="w-[570px] bg-white/70 backdrop-blur p-10 rounded-lg shadow-xl">

        {/* PAGE TITLE */}
        <h2 className="text-3xl font-bold text-center mb-10">Sign Up - Hospital</h2>

        {/* ENTER HOSPITAL NAME */}
        <label className="font-bold text-gray-800">Enter Hospital Name</label>
        <input
          type="text"
          className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
        />

        {/* ADDRESS */}
        <label className="font-bold text-gray-800">Hospital’s Address</label>
        <input
          type="text"
          placeholder="Address Line 1"
          className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border-gray-400 border"
        />
        <input
          type="text"
          placeholder="Address Line 2"
          className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
        />

        {/* EMAIL + VERIFY BUTTON */}
        <label className="font-bold text-gray-800">Email Address</label>
        <div className="flex items-center gap-3 mb-5">
          <input
            type="email"
            className="w-full bg-gray-200 px-4 py-2 rounded outline-none border border-gray-400"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Verify
          </button>
        </div>

        {/* MOBILE NUMBER 1 */}
        <label className="font-bold text-gray-800">Mobile Number 1</label>
        <input
          type="number"
          className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
        />

        {/* MOBILE NUMBER 2 */}
        <label className="font-bold text-gray-800">Mobile Number 2</label>
        <input
          type="number"
          className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
        />

        {/* GST CERTIFICATE NUMBER */}
        <label className="font-bold text-gray-800">GST Certificate Number</label>
        <input
          type="text"
          className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
        />

        {/* UPLOAD HOSPITAL REGISTRATION CERTIFICATE */}
        <label className="font-bold text-gray-800">
          Upload Hospital Registration Certificate
        </label>

        <div className="border-2 border-dashed border-blue-500 rounded-lg p-6 text-center mt-2 mb-2">
          <p className="text-gray-600 mb-3">DRAG FILE HERE OR</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Browse
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">Supported file types: .PDF .PNG .JPG</p>

        {/* Upload GST Certificate or PAN */}
        <label className="font-bold text-gray-800">
          Upload GST Certificate or PAN
        </label>

        <div className="border-2 border-dashed border-blue-500 rounded-lg p-6 text-center mt-2 mb-2">
          <p className="text-gray-600 mb-3">DRAG FILE HERE OR</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Browse
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">Supported file types: .PDF .PNG .JPG</p>

        {/* UPLOAD HOSPITAL ADDRESS PROOF */}
        <label className="font-bold text-gray-800">
          Upload Hospital Address Proof
        </label>

        <div className="border-2 border-dashed border-blue-500 rounded-lg p-6 text-center mt-2 mb-2">
          <p className="text-gray-600 mb-3">DRAG FILE HERE OR</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Browse
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-8">Supported file types: .PDF .PNG .JPG</p>

        {/* SAVE AND NEXT */}
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 font-semibold">
          Save and Next
        </button>
       
      </div>
    </div>
  );
};

export default SignupHospital;
C