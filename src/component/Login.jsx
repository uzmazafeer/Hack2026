import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { supabase } from "../auth/config";

const img = "/logo.png";

export default function Login() {
  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("table2026")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error || !data) {
      alert("Invalid Credentials!");
      console.error(error);
      return;
    }

    if (data.role !== role) {
      alert("Role mismatch!");
      return;
    }

    localStorage.setItem("authToken", "loggedIn");
    localStorage.setItem("role", data.role);

    if (data.role === "Student") {
      navigate("/Abc");
    } else {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-2">

        {/* Left Side */}
        <div className="relative bg-gradient-to-br from-green-50 to-green-200 p-10 flex flex-col justify-center">
          <div>
            <h1 className="text-2xl font-bold text-green-700 mb-6">
              <img src={img} alt="Logo" className="w-28 h-10 inline-block mr-2" />
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-3">
              Campus Portal
            </h2>
            <p className="text-gray-600 max-w-xs">
              Manage reports, complaints & events in one place.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center bg-gray-50">
          <div className="w-[340px] bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Login
            </h3>

            <form className="space-y-4" onSubmit={handleLogin}>

              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
              />

              <div className="flex bg-gray-100 rounded-md overflow-hidden">
                {["Student", "Admin"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRole(item)}
                    className={`flex-1 py-2 text-sm font-medium ${
                      role === item
                        ? "bg-white shadow text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
              >
                Log in
              </button>

              <p className="text-sm text-center mt-3">
                Don't have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </span>
              </p>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}