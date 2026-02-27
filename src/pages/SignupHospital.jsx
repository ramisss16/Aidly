// import React from "react";
// import { useNavigate } from "react-router-dom";

// const SignupHospital = () => {
//   const navigate = useNavigate();

//   const handleSaveAndNext = (e) => {
//     e.preventDefault();
//     navigate("/bank-details");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] flex justify-center pt-10">
//       <div className="w-[600px] bg-white/70 backdrop-blur p-10 rounded-lg shadow-xl">
//         {/* FORM START */}
//         <form onSubmit={handleSaveAndNext}>
//           {/* PAGE TITLE */}
//           <h2 className="text-3xl font-bold text-center mb-10">
//             Sign Up - Hospital
//           </h2>

//           {/* ENTER HOSPITAL NAME */}
//           <label className="font-bold text-gray-800">Enter Hospital Name</label>
//           <input
//             type="text"
//             className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
//           />

//           {/* ADDRESS */}
//           <label className="font-bold text-gray-800">Hospital’s Address</label>
//           <input
//             type="text"
//             placeholder="Address Line 1"
//             className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border-gray-400 border"
//           />
//           <input
//             type="text"
//             placeholder="Address Line 2"
//             className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
//           />

//           {/* EMAIL + VERIFY BUTTON */}
//           <label className="font-bold text-gray-800">Email Address</label>
//           <div className="flex items-center gap-3 mb-5">
//             <input
//               type="email"
//               className="w-full bg-gray-200 px-4 py-2 rounded outline-none border border-gray-400"
//             />
//             <button
//               type="button"
//               className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
//             >
//               Verify
//             </button>
//           </div>

//           {/* MOBILE NUMBER 1 */}
//           <label className="font-bold text-gray-800">Mobile Number 1</label>
//           <input
//             type="number"
//             className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
//           />

//           {/* MOBILE NUMBER 2 */}
//           <label className="font-bold text-gray-800">Mobile Number 2</label>
//           <input
//             type="number"
//             className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
//           />

//           {/* GST CERTIFICATE NUMBER */}
//           <label className="font-bold text-gray-800">
//             GST Certificate Number
//           </label>
//           <input
//             type="text"
//             className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
//           />

//           {/* UPLOAD HOSPITAL REGISTRATION CERTIFICATE */}
//           <label className="font-bold text-gray-800">
//             Upload Hospital Registration Certificate
//           </label>
//           <div className="border-2 border-dashed border-blue-500 rounded-lg p-6 text-center mt-2 mb-2">
//             <p className="text-gray-600 mb-3">DRAG FILE HERE OR</p>
//             <button
//               type="button"
//               className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
//             >
//               Browse
//             </button>
//           </div>
//           <p className="text-sm text-gray-600 mb-6">
//             Supported file types: .PDF .PNG .JPG
//           </p>

//           {/* Upload GST Certificate or PAN */}
//           <label className="font-bold text-gray-800">
//             Upload GST Certificate or PAN
//           </label>
//           <div className="border-2 border-dashed border-blue-500 rounded-lg p-6 text-center mt-2 mb-2">
//             <p className="text-gray-600 mb-3">DRAG FILE HERE OR</p>
//             <button
//               type="button"
//               className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
//             >
//               Browse
//             </button>
//           </div>
//           <p className="text-sm text-gray-600 mb-6">
//             Supported file types: .PDF .PNG .JPG
//           </p>

//           {/* UPLOAD HOSPITAL ADDRESS PROOF */}
//           <label className="font-bold text-gray-800">
//             Upload Hospital Address Proof
//           </label>
//           <div className="border-2 border-dashed border-blue-500 rounded-lg p-6 text-center mt-2 mb-2">
//             <p className="text-gray-600 mb-3">DRAG FILE HERE OR</p>
//             <button
//               type="button"
//               className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
//             >
//               Browse
//             </button>
//           </div>
//           <p className="text-sm text-gray-600 mb-8">
//             Supported file types: .PDF .PNG .JPG
//           </p>

//           {/* SAVE AND NEXT */}
//           <div className="mt-10 flex justify-center">
//             <button
//               type="submit"
//                className="bg-[#1967FF] hover:bg-[#1557d6] text-white font-semibold
//                 w-[700px] h-[48px] rounded-md transition text-[16px]"
//               >
//           Save and Next
//          </button>
//           </div>
//         </form>
//         {/* FORM END */}
//       </div>
//     </div>
//   );
// };

// export default SignupHospital;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupHospital = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    hospitalname: "",
    email: "",
    password: "",
    mobile1: "",
    mobile2: "",
    gstnumber: "",
    address: {
      line1: "",
      line2: ""
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "line1" || name === "line2") {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSaveAndNext = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/hospital/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      // signup success → go to bank details
      localStorage.setItem("hospitalToken", data.token);
      navigate("/bank-details");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] flex justify-center pt-10">
      <div className="w-[600px] bg-white/70 backdrop-blur p-10 rounded-lg shadow-xl">

        <form onSubmit={handleSaveAndNext}>

          <h2 className="text-3xl font-bold text-center mb-10">
            Sign Up - Hospital
          </h2>

          {error && (
            <p className="text-red-600 text-center mb-4">{error}</p>
          )}

          {/* Hospital Name */}
          <label className="font-bold text-gray-800">Enter Hospital Name</label>
          <input
            type="text"
            name="hospitalname"
            value={formData.hospitalname}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
            required
          />

          {/* Address */}
          <label className="font-bold text-gray-800">Hospital’s Address</label>
          <input
            type="text"
            name="line1"
            placeholder="Address Line 1"
            value={formData.address.line1}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
          />
          <input
            type="text"
            name="line2"
            placeholder="Address Line 2"
            value={formData.address.line2}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
          />

          {/* Email */}
          <label className="font-bold text-gray-800">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
            required
          />

          {/* Password */}
          <label className="font-bold text-gray-800">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
            required
          />

          {/* Mobile 1 */}
          <label className="font-bold text-gray-800">Mobile Number 1</label>
          <input
            type="number"
            name="mobile1"
            value={formData.mobile1}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
            required
          />

          {/* Mobile 2 */}
          <label className="font-bold text-gray-800">Mobile Number 2</label>
          <input
            type="number"
            name="mobile2"
            value={formData.mobile2}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-5 rounded outline-none border border-gray-400"
            required
          />

          {/* GST */}
          <label className="font-bold text-gray-800">
            GST Certificate Number
          </label>
          <input
            type="text"
            name="gstnumber"
            value={formData.gstnumber}
            onChange={handleChange}
            className="w-full bg-gray-200 px-4 py-2 mb-8 rounded outline-none border border-gray-400"
            required
          />

          {/* Save & Next */}
          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#1967FF] hover:bg-[#1557d6] text-white font-semibold 
                w-[700px] h-[48px] rounded-md transition text-[16px]"
            >
              {loading ? "Saving..." : "Save and Next"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignupHospital;
