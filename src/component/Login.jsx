// import React, { useState } from "react";
// import img from "../../public/logo.png";

// export default function Login() {
//   const [role, setRole] = useState("Student");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-230 h-130 bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-2">
//         {/* Left Side */}
//         <div className="relative bg-linear-to-br from-green-50 to-green-200 p-10 flex flex-col justify-center">
//           <div>
//             <h1 className="text-2xl font-bold text-green-700 mb-6"> 
//                 <img src={img} alt="Saylani Logo" className="w-30 h-10 inline-block mr-2" />
//               {/* Saylani <span className="text-sm font-normal">Welfare</span> */}
//             </h1>

//             <h2 className="text-3xl font-semibold text-gray-800 mb-3">
//               Campus Portal


//             </h2>
//             <p className="text-gray-600 max-w-xs">
//               Manage reports, complaints & events in one place.
//             </p>
//           </div>

//           {/* Decorative waves */}
//           <div className="absolute bottom-0 left-0 w-full">
//             <div className="h-24 bg-green-200 opacity-80 rounded-t-[100%]" />
//             <div className="h-16 bg-green-400 opacity-90 rounded-t-[100%] -mt-6" />
//           </div>
//         </div>

//         {/* Right Side - Login Card */}
//         <div className="flex items-center justify-center bg-gray-50">
//           <div className="w-85 bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">
//               Login
//             </h3>

//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-gray-600 mb-1">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//               </div>

//               {/* Role Toggle */}
//               <div className="flex bg-gray-100 rounded-md overflow-hidden">
//                 {["Student", "Admin"].map((item) => (
//                   <button
//                     key={item}
//                     type="button"
//                     onClick={() => setRole(item)}
//                     className={`flex-1 py-2 text-sm font-medium transition ${
//                       role === item
//                         ? "bg-white shadow text-gray-800"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
//               >
//                 Log in
//               </button>

//               <button
//                 type="button"
//                 className="w-full border flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 transition text-sm"
//               >
//                 <span>🌐</span>
//                 Sign in an account
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../public/logo.png";
export default function Login() {
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

 const handleLogin = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    storedUser.email === email &&
    storedUser.password === password
  ) {
    localStorage.setItem("authToken", "loggedIn");
    localStorage.setItem("role", storedUser.role);

    if (storedUser.role === "Student") {
      navigate("/student-dashboard");
    } else {
      navigate("/admin-dashboard");
    }
  } else {
    alert("Invalid Credentials!");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-230 h-130 bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-2">
        {/* Left Side */}
        <div className="relative bg-linear-to-br from-green-50 to-green-200 p-10 flex flex-col justify-center">
          <div>
            <h1 className="text-2xl font-bold text-green-700 mb-6">
              <img src={img} alt="Logo" className="w-30 h-10 inline-block mr-2" />
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-3">
              Campus Portal
            </h2>
            <p className="text-gray-600 max-w-xs">
              Manage reports, complaints & events in one place.
            </p>
          </div>
          {/* Decorative waves */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className="h-24 bg-green-200 opacity-80 rounded-t-[100%]" />
            <div className="h-16 bg-green-400 opacity-90 rounded-t-[100%] -mt-6" />
          </div>
        </div>

        {/* Right Side - Login Card */}
        <div className="flex items-center justify-center bg-gray-50">
          <div className="w-85 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Login
            </h3>

            <form className="space-y-4" onSubmit={handleLogin}>
              <input
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<input
  type="password"
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

              {/* Role Toggle */}
              <div className="flex bg-gray-100 rounded-md overflow-hidden">
                {["Student", "Admin"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRole(item)}
                    className={`flex-1 py-2 text-sm font-medium transition ${
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

