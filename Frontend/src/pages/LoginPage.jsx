import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { api } from "../axios/axiosInstance";

const LoginPage = () => {
  const navigate = useNavigate();
  const { fetchUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login",formData,{ withCredentials: true });
      console.log("✅ Login response:", res.data); // Add this log
      await fetchUser();
      console.log("✅ After fetchUser"); // Add this log
      // setUser(res.data.user);
      navigate("/"); // redirect to home
    } catch (error) {
      console.log("❌ Login error:", error); // Add this log
      toast.error(`❌ ${error.response?.data?.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* CENTER WRAPPER */}
      <div className="flex justify-center items-center py-12 px-4">
        <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Login
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Join us today! It takes only a minute.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="text-gray-700 font-medium text-sm">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-700 font-medium text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all"
            >
              Login
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-gray-600 mt-5 text-sm">
            Not have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
