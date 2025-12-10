import React, { useEffect } from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { api } from '../axios/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';


const EmailVerify = () => {

    const {token} = useParams();
    const navigate = useNavigate();

    const verify = async () =>{
        try {
            const res = await api.get(`verify-email/${token}`)
            toast.success(`email verified successfully ${res.data.message}`)
            navigate("/login")
        } catch (error) {
            toast.error(`email not verify ${error.message}`)
        }
    };
    useEffect(()=>{
        verify();
    },[token])


  return  (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-3">
          Account activation
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          An email has been sent to your{" "}
          <span className="font-medium">(email address)</span>  
          containing an activation link.  
          <br />
          Please click on the link to activate your account.
        </p>

        {/* Buttons for Gmail + Outlook */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://mail.google.com"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="gmail icon"
              className="w-6 h-6"
            />
            <span>Open Gmail</span>
          </a>

          
        </div>

        {/* Resend text */}
        <p className="text-sm text-gray-600 mb-6">
          Didn’t receive an email? Check your spam folder!
          <br />
          <button
            className="text-blue-600 hover:underline mt-1"
            onClick={() => alert("Resend API call")}
          >
            Resend and try again
          </button>
        </p>

        {/* Logout button */}
        <button className="flex items-center gap-2 mx-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <FaSignOutAlt size={18} />
          Log out
        </button>
      </div>
    </div>
  );
}

export default EmailVerify