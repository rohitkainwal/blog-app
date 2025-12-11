import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { FaLock, FaRegArrowAltCircleRight, FaShieldAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <a href="#" className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
          <IoArrowBack className="w-4 h-4 mr-2"/>
          Back to Login
        </a>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <FaLock className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
          <p className="text-gray-600">
            Enter your new password below.
          </p>
        </div>

        <div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter new password"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <FaEyeSlash className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm new password"
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <FaEyeSlash className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </div>
            </div>
          </div>

          <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-3">
            <p className="text-xs text-gray-600 font-medium mb-2">Password must contain:</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• At least 8 characters</li>
              <li>• At least one uppercase letter</li>
              <li>• At least one lowercase letter</li>
              <li>• At least one number</li>
            </ul>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-4 flex items-center justify-center">
            <FaRegArrowAltCircleRight className="w-5 h-5 mr-2" />
            Reset Password
          </button>
        </div>

        <div className="text-center text-sm text-gray-600">
          Remember your password?{' '}
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Sign in
          </a>
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
}

export default ResetPassword