import React, { useState } from "react";
import { Link } from "react-router-dom";

const AmbulancePage = () => {

  const [status, setStatus] = useState(Array(10).fill(false));

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
          Search: <input className="border px-3 py-1" />
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
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i} className="text-center hover:bg-gray-50">
              <td className="border px-3 py-3">MP04 AB 1234</td>
              <td className="border">ICU</td>
              <td className="border">Operator</td>
              <td className="border">Co-Operator</td>
              <td className="border">9999999999</td>
              <td className="border">8888888888</td>

              <td className="border">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      const newStatus = [...status];
                      newStatus[i] = !newStatus[i];
                      setStatus(newStatus);
                    }}
                    className={`w-12 h-6 flex items-center rounded-full px-1 transition-all duration-300
                    ${
                      status[i]
                        ? "bg-green-500 justify-end"
                        : "bg-gray-300 justify-start"
                    }`}
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
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AmbulancePage;