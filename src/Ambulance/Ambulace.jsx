import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const AmbulancePage = () => {

  const [ambulances, setAmbulances] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const tableHeadings = [
    "Ambulance Number",
    "Ambulance Type",
    "Operator",
    "Co-Operator",
    "Mobile Number 1",
    "Mobile Number 2",
    "Status",
    "Track",
  ];

  // 🔥 Fetch Data
  useEffect(() => {
    fetch("http://localhost:3000/ambulance/all")
      .then(res => res.json())
      .then(data => {
        const list = data.ambulances || data;
        setAmbulances(list);
      })
      .catch(err => console.error(err));
  }, []);

  // 🔎 Filtered list based on searchQuery (case-insensitive)
  const filteredAmbulances = useMemo(() => {
    const q = (searchQuery || "").trim().toLowerCase();
    if (!q) return ambulances;

    return ambulances.filter((amb) => {
      const fields = [
        amb.rcNumber,
        amb.type,
        amb.crew?.operatorName,
        amb.crew?.coOperatorName,
        amb.crew?.operatorMobile,
        amb.crew?.coOperatorMobile,
        amb.availability
      ];

      return fields.some((f) =>
        String(f || "").toLowerCase().includes(q)
      );
    });
  }, [ambulances, searchQuery]);

  // 🔥 Toggle Status (updates local ambulance state)
  const handleToggle = (id) => {
    setAmbulances(prev =>
      prev.map(a =>
        a._id === id
          ? { ...a, availability: a.availability === "Available" ? "NotAvailable" : "Available" }
          : a
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-lg font-semibold">Ambulance List</h2>

        <Link
          to="/AddAmbulance"
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          Add Ambulance
        </Link>
      </div>

      {/* Filters */}
      <div className="flex justify-between text-sm mb-4">
        <div>
          Show{" "}
          <select className="border px-2 py-1 mx-1">
            {[...Array(10)].map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>{" "}
          entries
        </div>

        <div>
          Search:{" "}
          <input
            className="border px-3 py-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by RC, type, name, mobile, status..."
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border text-sm">
        <thead className="bg-blue-200">
          <tr>
            {tableHeadings.map((h) => (
              <th key={h} className="border px-4 py-4">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredAmbulances.map((amb) => {
            const isAvailable = amb.availability === "Available";
            return (
              <tr key={amb._id} className="text-center hover:bg-gray-50">
                <td className="border px-3 py-3">{amb.rcNumber}</td>
                <td className="border">{amb.type}</td>
                <td className="border">{amb.crew?.operatorName || "—"}</td>
                <td className="border">{amb.crew?.coOperatorName || "—"}</td>
                <td className="border">{amb.crew?.operatorMobile || "—"}</td>
                <td className="border">{amb.crew?.coOperatorMobile || "—"}</td>

                <td className="border">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => handleToggle(amb._id)}
                      className={`w-12 h-6 flex items-center rounded-full px-1 transition-all duration-300
                      ${isAvailable ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"}`}
                    >
                      <span className="w-4 h-4 bg-white rounded-full shadow"></span>
                    </button>
                  </div>
                </td>

                <td className="border">
                  <button className="bg-green-500 px-4 py-1 text-white rounded-md">
                    track
                  </button>
                </td>
              </tr>
            );
          })}

          {/* If no results */}
          {filteredAmbulances.length === 0 && (
            <tr>
              <td colSpan={tableHeadings.length} className="border p-6 text-center text-gray-500">
                No ambulances match your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default AmbulancePage;