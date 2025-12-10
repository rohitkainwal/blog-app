import React, { useContext, useState } from 'react'
import { AuthContext } from './../context/AuthContext';
import toast from 'react-hot-toast';
import { api } from '../axios/axiosInstance';


const EditPasswordModel = ({onClose}) => {

 

 
  return (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center">
    <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">
      
      {/* Icon */}
      <div className="w-14 h-14 mx-auto mb-4 bg-blue-50 flex items-center justify-center rounded-full">
        <i className="fa-solid fa-lock text-blue-600 text-2xl"></i>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-2">
        Change Password
      </h2>

      <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
        To change your password, please fill in the fields below. Your password must 
        contain at least 8 characters including upper & lower case letters, a number, 
        and a special character.
      </p>

      {/* Current Password */}
      <label className="block text-sm font-medium mb-1">Current Password</label>
      <div className="relative mb-4">
        <i className="fa-solid fa-lock absolute left-3 top-3 text-gray-400"></i>
        <input
          type="password"
          placeholder="Current Password"
          className="w-full pl-10 pr-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <i className="fa-solid fa-eye-slash absolute right-3 top-3 text-gray-400"></i>
      </div>

      {/* New Password */}
      <label className="block text-sm font-medium mb-1">New Password</label>
      <div className="relative mb-4">
        <i className="fa-solid fa-lock absolute left-3 top-3 text-gray-400"></i>
        <input
          type="password"
          placeholder="New Password"
          className="w-full pl-10 pr-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <i className="fa-solid fa-eye-slash absolute right-3 top-3 text-gray-400"></i>
      </div>

      {/* Confirm Password */}
      <label className="block text-sm font-medium mb-1">Confirm Password</label>
      <div className="relative mb-6">
        <i className="fa-solid fa-lock absolute left-3 top-3 text-gray-400"></i>
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full pl-10 pr-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <i className="fa-solid fa-eye-slash absolute right-3 top-3 text-gray-400"></i>
      </div>

      {/* Primary Button */}
      <button className="w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
        Change Password
      </button>

      {/* Cancel link */}
      <button
        onClick={onClose}
        className="w-full py-2 mt-3 text-gray-600 text-sm hover:underline"
      >
        Cancel
      </button>
    </div>
  </div>
);

}

export default EditPasswordModel