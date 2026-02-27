import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HospitalDashboard = () => {
  const navigate = useNavigate();
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("hospitalToken");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/hospital/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error("Unauthorized");
        }

        setHospital(data);
      } catch (err) {
        localStorage.removeItem("hospitalToken");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!hospital) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-10 px-6"
      style={{
        background:
          "linear-gradient(0deg, #C6EBE8 0%, #89C9CA 60.58%, #1A5F48 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Hospital Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hospital Details */}
          <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              Hospital Details
            </h2>
            <p><b>Name:</b> {hospital.hospitalname}</p>
            <p><b>Email:</b> {hospital.email}</p>
            <p><b>Phone:</b> {hospital.mobile1}</p>
            <p>
              <b>Address:</b>{" "}
              {hospital.address?.line1 || "-"}{" "}
              {hospital.address?.line2 || ""}
            </p>
          </div>

          {/* Bank Details (EMPTY) */}
        <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
         <h2 className="text-xl font-semibold mb-4">
           Bank Details
         </h2>

      {hospital.bankDetails?.bankName ? (
      <>
      <p><b>Bank Name:</b> {hospital.bankDetails.bankName}</p>
      <p><b>Account Holder:</b> {hospital.bankDetails.accountHolder}</p>
      <p><b>Account Number:</b> ****{hospital.bankDetails.accountNumber?.slice(-4)}</p>
      <p><b>IFSC:</b> {hospital.bankDetails.ifsc}</p>
    </>
  ) : (
    <p className="text-gray-500">Bank details not added yet.</p>
  )}
</div>

 {/* Emergency Contact (EMPTY) */}
  <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
  <h2 className="text-xl font-semibold mb-4">
    Emergency Contact
  </h2>

  {hospital.emergencyContact?.name ? (
    <>
      <p><b>Name:</b> {hospital.emergencyContact.name}</p>
      <p><b>Phone:</b> {hospital.emergencyContact.phone}</p>
      <p><b>Designation:</b> {hospital.emergencyContact.relation}</p>
    </>
  ) : (
    <p className="text-gray-500">Emergency contact not added yet.</p>
  )}
</div>


          {/* Status */}
          <div className="bg-white/80 backdrop-blur rounded-lg p-6 shadow-lg">
  <h2 className="text-xl font-semibold mb-4">
    Registration Status
  </h2>

  {hospital.onboardingStatus?.bankCompleted &&
   hospital.onboardingStatus?.emergencyCompleted ? (
    <p className="text-green-700 font-semibold">
      ✔ Registration Completed
    </p>
  ) : (
    <p className="text-yellow-600 font-semibold">
      ⏳ Registration In Progress
    </p>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
