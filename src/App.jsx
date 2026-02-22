import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Abc from "./page/Abc";
import AdminDashboard from "./page/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Abc" element={<Abc />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;