import React from "react";

const CrewDetails = () => {
  return (
    <div className=" bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] p-4">
      
     {/* card */}
      <div className="max-w-6xl h-[580px] mx-auto bg-gray-200 rounded-md shadow-lg border border-blue-500 p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-8">
          Crew Details
        </h2>

                 {/* operators name and mobilenum */}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          
         {/* operators name  */}
          <div className="ml-15">
            <label className="block font-bold mb-2">
            Operator's Name
            </label>
          <input
            type="text"
            placeholder=" Operator's Name"
            className=" w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

          {/* Mobile num */}
          <div>
            <label className="block font-bold mb-2">
              Mobile Number
            </label>
         <input
            type="number"
            placeholder=  "Mobile Number"
            className=" w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

        </div>


       {/* Aadharnum and Licensenum */}

       <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          
         {/* Aadharnum  */}
          <div className="ml-15">
            <label className="block font-bold mb-2">
            Aadhar Number
            </label>
          <input
            type="number"
            placeholder="Aadhar Number"
            className=" w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

          {/* Licensenum */}
          <div>
            <label className="block font-bold mb-2">
              License Number
            </label>
         <input
            type="number"
            placeholder=  "Mobile Number"
            className=" w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

        </div>
      
      {/* co-operator_name and mobile num */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          
         {/* co-operator_name  */}
          <div className="ml-15">
            <label className="block font-bold mb-2">
            Co-Operator's Name
            </label>
          <input
            type="text"
            placeholder="Co-Operator Name"
            className=" w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

          {/* mobile number*/}
          <div>
            <label className="block font-bold mb-2">
              Mobile Number
            </label>
         <input
            type="number"
            placeholder=  "Mobile Number"
            className=" w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

        </div>


  {/* Aadharnum and Licensenum */}

       <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
          
         {/* Aadharnum  */}
          <div className="ml-15">
            <label className="block font-bold mb-2">
            Aadhar Number
            </label>
          <input
            type="number"
            placeholder="Aadhar Number"
            className=" w-[400px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

          {/* Licensenum */}
          <div>
            <label className="block font-bold mb-2">
              License Number
            </label>
         <input
            type="number"
            placeholder=  "Mobile Number"
            className=" w-[300px] border border-gray-400 rounded px-3 py-2 bg-gray-300 "
          />
          </div>

        </div>
      
       

       

        {/* Submit Button */}
        <div className="text-center ">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md">
            Save and Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default CrewDetails;