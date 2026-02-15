import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login";
import Abc from "./page/Abc"; // Student dashboard
import AdminDashboard from "./page/AdminDashboard";
import Reports from "./page/Reports"; // My Reports page

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Student Dashboard */}
        <Route path="/student-dashboard" element={<Abc />} />
        <Route path="/my-reports" element={<Reports />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Catch-all route: redirect invalid paths to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;


