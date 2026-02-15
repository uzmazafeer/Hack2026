 // src/pages/MyReports.jsx
import React from "react";

export default function Reports() {
  // Dummy data for demonstration
  const reports = [
    { id: 1, item: "Lost Book", date: "2026-02-10", status: "Pending" },
    { id: 2, item: "Lost Phone", date: "2026-02-12", status: "Resolved" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">My Reports</h2>
      <div className="bg-white rounded-xl shadow p-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{report.item}</td>
                <td className="px-4 py-2">{report.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      report.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
