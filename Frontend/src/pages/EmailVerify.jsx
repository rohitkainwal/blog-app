import React, { useContext, useEffect ,useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { api } from "../axios/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";


const EmailVerify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
   const [isResending, setIsResending] = useState(false);
   const [formData, setFormData]= useState({email:""});
  

   const handleChange = (e)=>{
      let { name, value } = e.target;
    setFormData({...formData, [name]:value});
   }
 

   const resendEmailVerify = async () => {
     // Add null check for user
    if (!formData.email) {
      toast.error("User email not found. Please log in again.");
      return;
    }
    setIsResending(true);
 
    try {
     
      await api.post("/resend-email-link" , { email: formData.email });
      toast.success("Verification email sent successfully!");
    } catch (error) {
      console.error("Resend error:", error);
      toast.error(error?.response?.data?.message || "Failed to send email");
    } finally {
      setIsResending(false);
    }
  };

  const verify = async () => {
    try {
      const res = await api.get(`/verify-email/${token}`);
      toast.success(`email verified successfully ${res.data.message}`);
      navigate("/login");
    } catch (error) {
      toast.error(`email not verify ${error.message}`);
    }
  };
  useEffect(() => {
    if (token) {
      verify();
    }
  }, [token]);

  const handleLogout = async () => {
    try {
      await api.post("/logout");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }}
  return (
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
          Didn't receive an email? Check your spam folder!
          <br />
          <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
            <br/>
          <button
            className="text-blue-600 hover:underline mt-1 disabled:opacity-50"
            onClick={resendEmailVerify}
            disabled={isResending}
          >
            {isResending ? "Sending..." : "Resend and try again"}
          </button>

        </p>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 mx-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <FaSignOutAlt size={18} />
          Log out
        </button>
      </div>
    </div>
  );
};

export default EmailVerify;
