import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { api } from "../axios/axiosInstance";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCheckCircle } from "react-icons/fa";


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
      const res = await api.post("/user/register",newUser);

      toast.success(`✅ ${res.data.message}`);

      setFormData({
        username: "",
        email: "",
        password: "",
        contactNumber: "",
      });
      navigate("/email-verify/:token");
    } catch (error) {
      toast.error(`❌ ${error.response?.data?.message} `);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />

      {/* TWO COLUMN LAYOUT */}
      <div className="flex justify-center items-center py-8 px-4 lg:py-12">
        <div className="bg-white/90 backdrop-blur-lg w-full max-w-6xl shadow-2xl rounded-3xl overflow-hidden grid lg:grid-cols-2">
          
          {/* LEFT SIDE - IMAGE SECTION */}
          <div className="hidden lg:flex relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-12 flex-col justify-between">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <FaCheckCircle className="text-white text-3xl" />
              </div>
              <h1 className="text-4xl font-black text-white mb-4 leading-tight">
                Start Your Journey Today
              </h1>
              <p className="text-green-50 text-lg font-medium leading-relaxed">
                Join thousands of users who trust us with their daily tasks and productivity goals.
              </p>
            </div>

            {/* Illustration/Image Area */}
            <div className="relative z-10 flex items-center justify-center my-8">
              <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/20">
                <svg className="w-48 h-48 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
            </div>

            {/* Features List */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✓</span>
                </div>
                <span className="font-medium">Secure and encrypted data</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✓</span>
                </div>
                <span className="font-medium">Easy to use interface</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">✓</span>
                </div>
                <span className="font-medium">24/7 customer support</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM SECTION */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            {/* Decorative Circle - Mobile Only */}
            <div className="flex justify-center mb-6 lg:hidden">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <FaCheckCircle className="text-white text-3xl" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Create an Account
            </h2>
            <p className="text-gray-600 mt-2 font-medium">
              Join us today! It takes only a minute.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Username */}
              <div>
                <label className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                  <FaUser className="text-green-600" />
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  value={formData.username}
                  placeholder="Enter username"
                  className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                  <FaEnvelope className="text-green-600" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                  <FaLock className="text-green-600" />
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                  <FaPhone className="text-green-600" />
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  onChange={handleChange}
                  name="contactNumber"
                  value={formData.contactNumber}
                  placeholder="Enter contact number"
                  className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3.5 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] mt-6"
              >
                Create Account
              </button>
            </form>

            {/* Login Redirect */}
            <p className="text-center text-gray-600 mt-6 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-600 font-bold hover:text-green-700 hover:underline transition-colors"
              >
                Login
              </Link>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social Login Options */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 flex items-center justify-center gap-2 font-semibold text-gray-700 text-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 flex items-center justify-center gap-2 font-semibold text-gray-700 text-sm">
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;