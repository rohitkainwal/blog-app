import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignupPage = () => {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newUser = { ...formData };

    if (
      newUser.email.trim() === "" ||
      newUser.username.trim() === "" ||
      newUser.password.trim() === "" ||
      newUser.contactNumber.trim() === ""
    ) {
      toast("Enter Credentials !", { icon: "☠️" });
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/register",
        newUser
      );

    toast.success(`✅ ${res.data.message}`);

      setFormData({
        username: "",
        email: "",
        password: "",
        contactNumber: "",
      });
      navigate("/email-verify/:token"); // redirect to verify page
    } catch (error) {
       toast.error(`❌ ${error.response?.data?.message} `);
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
            Create an Account
          </h2>
          <p className="text-center text-gray-500 mt-2">
            Join us today! It takes only a minute.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Username */}
            <div>
              <label className="text-gray-700 font-medium text-sm">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                value={formData.username}
                placeholder="Enter username"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

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

            {/* Contact Number */}
            <div>
              <label className="text-gray-700 font-medium text-sm">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                onChange={handleChange}
                name="contactNumber"
                value={formData.contactNumber}
                placeholder="Enter contact number"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all"
            >
              Signup
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-gray-600 mt-5 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
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

export default SignupPage;
