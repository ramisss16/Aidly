import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginOptions = () => {

  const [open, setopen] = useState("StaffAttendence");

  const toggle = (name) => {
    if (open === name) {
      setopen("")
    } else {
      setopen(name)
    }
  }


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8]  pt-10 ">

      {/* Main Card */}

      <div className="mt-10 bg-white/80 backdrop-blur-md p-10  shadow-lg w-[600px] h-[450px]">

        <h2 className="-ml-5 text-3xl font-semibold mb-8">
          Select Login Type
        </h2>

        <div className="w-full bg-white  border border-transparent rounded-2xl mb-2 p-3">
          {/* ACTIVE BUTTON */}

          <button
            onClick={() => toggle("Clinic/Hospital")}
            className=" w-full text-lg   ">
            Clinic/Hospital
          </button>


          {open === "Clinic/Hospital" && (

            <div className=" flex flex-col items-center gap-2 mt-2">
              
              <Link to="/login/highermanager">
            <button className="bg-green-300 w-50 py-1 rounded-full">
                Clinik/Hospital Admin
              </button>
              </Link>

              <Link to="/login/servicemanager">
            <button className="bg-green-300  w-50 py-1 rounded-full">
                Service manager
              </button>
              </Link>

              <Link to="/login/doctor">
            <button className="bg-green-300  w-50 py-1 rounded-full">
               Doctor
              </button>
              </Link>

              <Link to="/login/receptionist">
            <button className="bg-green-300 w-50 py-1 rounded-full">
                Receptionist
              </button>
              </Link>

            </div>

          )}

        </div>


        {/* ambulnace */}
      
        <div className="w-full bg-white  border border-transparent rounded-2xl mb-2 p-3">
          {/* ACTIVE BUTTON */}

          <button
            onClick={() => toggle("Ambulance")}
            className=" w-full text-lg   ">
            Ambulance
          </button>


          {open === "Ambulance" && (

            <div className=" flex flex-col items-center gap-2 mt-2">
              
              <Link to="#">
            <button className="bg-green-300 w-50 py-1 rounded-full">
                Hospital Ambulance
              </button>
              </Link>

              <Link to="#">
            <button className="bg-green-300  w-50 py-1 rounded-full">
                private Ambulance
              </button>
              </Link>


           

            </div>

          )}

        </div>


        {/* medical */}
        
        <div className="w-full bg-white  border border-transparent rounded-2xl mb-2 p-3">
          {/* ACTIVE BUTTON */}

          <button
            // onClick={() => toggle("Ambulance")}
            className=" w-full text-lg   ">
            Medical Store
          </button>


       
        </div>


      </div>
    </div>
  );
};

export default LoginOptions;
