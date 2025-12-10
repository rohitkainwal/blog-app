import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaAngleDown, FaEdit } from "react-icons/fa";
import EditProfileModel from "./EditProfileModel";
import EditPasswordModel from "./EditPasswordModel";

const ProfileDropdown = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] =useState(false);
  const [showEditModel, setShowEditModel] = useState(false)
  const [showPaaswordModel, setShowPasswordModel] =useState(false)

  

  return (
    <div className="relative">
      {/* <EditProfileModel/> */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer p-2 rounded-md hover:bg-gray-200">
        
        <FaAngleDown size={22} />
      </div>

        {open && (
      <div className="w-72 bg-white absolute top-14 right-1 shadow-2xl p-5 rounded-2xl border border-gray-200">
        <div className="absolute top-3 right-3 cursor-pointer text-gray-600 hover:text-gray-800">
            <FaEdit size={18} onClick={()=> setShowEditModel(true)}/>
          </div>

        
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Profile Details
        </h3>

        
        <div className="flex justify-center mb-4">
          <img
            src="https://i.pravatar.cc/80"
            alt="Profile"
            className="w-20 h-20 rounded-full shadow-md object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">ID:</span>
            <span className="text-gray-800">{user._id}</span>
          </div>

           <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Name:</span>
            <span className="text-gray-800">{user.username}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="text-gray-800">{user.email}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Phone:</span>
            <span className="text-gray-800">{user.contactNumber}</span>
          </div>
        </div>
        <div className="mt-2 p-2">
          <button onClick={()=> setShowPasswordModel(true)} className="text-white bg-blue-600 p-1 rounded-md border-amber-300 shadow-2xl">Change Password</button>
        </div>
        {showEditModel && <EditProfileModel onClose={() => setShowEditModel(false)} />}
          {showPaaswordModel && <EditPasswordModel onClose={() => setShowPasswordModel(false)} />}
      </div>
      )}
      
    </div>
    
  );
};

export default ProfileDropdown;


