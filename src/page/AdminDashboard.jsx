import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Lost & Found Report</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
          <p className="text-gray-500 text-sm">Total Reports</p>
          <p className="text-2xl font-bold text-gray-800">128</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
          <p className="text-gray-500 text-sm">Active Complaints</p>
          <p className="text-2xl font-bold text-gray-800">5</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
          <p className="text-gray-500 text-sm">Items Matched</p>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
          <p className="text-gray-500 text-sm">Events Registered</p>
          <p className="text-2xl font-bold text-gray-800">8</p>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white shadow rounded-lg p-6 mb-8 w-full overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-gray-600">Place</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">Phone</td>
              <td className="px-4 py-2">Backpack</td>
              <td className="px-4 py-2">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">Wallet</td>
              <td className="px-4 py-2">Bag</td>
              <td className="px-4 py-2">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm">
                  Resolved
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
          Report Lost Item
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
          Submit Complaint
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
          Register for Event
        </button>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
