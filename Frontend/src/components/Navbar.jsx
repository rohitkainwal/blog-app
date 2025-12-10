import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPowerOff  } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { api } from './../axios/axiosInstance';


const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await api.post("/logout",{},{ withCredentials: true });
      toast.success("logout success");
      setUser(null);
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="bg-green-100 flex justify-between items-center h-20 px-8 shadow-lg">
      <Link to="/">
        <div className="font-extrabold text-2xl text-highlight tracking-wide">
          Goal Street
        </div>
      </Link>

      {pathname !== "/login" && pathname !== "/signup" && (
        <nav className="flex gap-10 font-bold text-highlight uppercase">
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/about">About</Link>
        </nav>
      )}

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <div className="flex items-center gap-3 px-3 py-2  bg-green-200 rounded-lg hover:bg-green-300 transition-colors ">
              <img
                src={
                  user.avatar ||
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                }
                alt={user.name}
                className="w-10 h-10 rounded-full border-2 border-green-400"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-800">
                  {user.username}
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-full shadow transition flex items-center"
            >
              <FaPowerOff size={16} />
            </button>
               
            <ProfileDropdown/>

            </div>

            
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="px-5 py-2 bg-black text-white rounded-lg">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-5 py-2 bg-accent text-primary rounded-lg">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
