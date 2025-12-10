import React, { useContext, useState } from 'react'
import { AuthContext } from './../context/AuthContext';
import toast from 'react-hot-toast';
import { api } from '../axios/axiosInstance';


const EditProfileModel = ({onClose}) => {

    const {user ,setUser} =useContext(AuthContext);

    const [formData,setFormData] = useState({
    username: user.username,
     email: user.email,
      contactNumber: user.contactNumber,
  })

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value});
  };

    const handleEditProfile= async()=>{
    try {
    const res= await api.patch("/updateProfile" , formData , {withCredentials:true}) 
    toast.success("profile updated successfully")
    setUser(res.data.user);

    onClose();

    } catch (error) {
       toast.error(error.response?.data?.message || "Update failed");
    }
  }
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-xl shadow-xl">
        
        <h2 className="text-xl font-semibold mb-4 text-center">
          Edit Profile
        </h2>

        {/* Username */}
        <label className="block text-sm mb-1">Name</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        {/* Email */}
        <label className="block text-sm mb-1">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        {/* Phone */}
        <label className="block text-sm mb-1">Phone</label>
        <input
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={handleEditProfile}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>

  )
}

export default EditProfileModel