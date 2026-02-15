 import React from "react";
import { Home, Search, ClipboardList, Users, Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/Abc"); // Redirect to login
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-blue-700 text-white p-5 flex flex-col justify-between min-h-screen">
        <div>
          <h1 className="text-xl font-bold mb-6">Campus Portal</h1>

          <nav className="flex flex-col gap-3 text-sm">
  <SidebarItem icon={<Home size={18} />} label="Dashboard" active to="/student-dashboard" />
  <SidebarItem icon={<Search size={18} />} label="My Reports" to="/my-reports" />
  <SidebarItem icon={<ClipboardList size={18} />} label="My Complaints" to="/my-complaints" />
  <SidebarItem icon={<Users size={18} />} label="My Events" to="/my-events" />
  <SidebarItem icon={<Bell size={18} />} label="Notifications" to="/notifications" />
</nav>

        </div>

        {/* Logout Button */}
        <div className="mt-10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-600/70 transition w-full"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Student Dashboard</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard title="My Reports" value="24" />
          <StatCard title="Active Complaints" value="3" />
          <StatCard title="Events Registered" value="5" />
          <StatCard title="Pending Tasks" value="2" />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow p-5 mb-6">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <ActivityItem
            name="Lost Book"
            time="1h ago"
            status="Pending"
            color="bg-yellow-100 text-yellow-700"
          />
          <ActivityItem
            name="Submitted Complaint"
            time="2h ago"
            status="Reviewed"
            color="bg-green-100 text-green-700"
          />
          <ActivityItem
            name="Event Registration"
            time="Yesterday"
            status="Confirmed"
            color="bg-blue-100 text-blue-700"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <ActionButton label="Report Lost Item" color="bg-green-600" />
          <ActionButton label="Submit Complaint" color="bg-red-600" />
          <ActionButton label="Register for Event" color="bg-orange-500" />
        </div>
      </main>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition ${
        active ? "bg-blue-600" : "hover:bg-blue-600/70"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

// Stats Card Component
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

// Activity Item Component
function ActivityItem({ name, time, status, color }) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-none">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
        {status}
      </span>
    </div>
  );
}

// Action Button Component
function ActionButton({ label, color }) {
  return (
    <button
      className={`${color} text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition`}
    >
      {label}
    </button>
  );
}
