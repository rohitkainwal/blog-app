import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  FaRegEnvelope,
  FaRegArrowAltCircleRight,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";
import { api } from "../axios/axiosInstance";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("email required");
    }

    try {
      const res = await api.post("/user/forgot-password", { email });
      toast.success(res.data.message);
      

      setSubmitted(true);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FaCheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check Your Email
            </h2>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Didn't receive the email? Check your spam folder or try again.
            </p>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            <Link to="/login">Back to Login</Link>  
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <Link
          to="/login"
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <IoArrowBack className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <FaRegEnvelope className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Forgot Password?
          </h1>
          <p className="text-gray-600">
            No worries, we'll send you reset instructions.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRegEnvelope className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-4 flex items-center justify-center"
            >
              <FaRegArrowAltCircleRight className="w-5 h-5 mr-2" />
              Reset Password
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Sign in
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center text-xs text-gray-500">
            <FaShieldAlt className="w-4 h-4 mr-1" />
            Your information is secure and protected
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
