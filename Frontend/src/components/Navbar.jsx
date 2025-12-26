import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaPowerOff, FaEye, FaBookReader, FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { api } from "./../axios/axiosInstance";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await api.post("/user/logout", {}, { withCredentials: true });
      toast.success("logout success");
      setUser(null);
      navigate("/login");
      setIsMobileMenuOpen(false);
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 flex justify-between items-center h-20 md:h-24 px-4 md:px-10 shadow-xl border-b-2 border-green-200 sticky top-0 z-50 backdrop-blur-sm">
        <Link to="/" onClick={closeMobileMenu}>
          <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaBookReader className="text-white text-xl md:text-2xl" />
            </div>
            <div>
              <div className="font-extrabold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 tracking-wide">
                WriteHub
              </div>
              <div className="text-xs text-gray-600 font-medium -mt-1 hidden sm:block">
                Share Your Story
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {pathname !== "/login" && pathname !== "/signup" && (
          <nav className="hidden md:flex gap-8 font-bold text-green-700 uppercase">
            <Link
              to="/"
              className={`hover:text-emerald-600 transition-colors duration-200 hover:scale-105 transform relative ${
                pathname === "/" ? "text-emerald-600" : ""
              }`}
            >
              Home
              {pathname === "/" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/about"
              className={`hover:text-emerald-600 transition-colors duration-200 hover:scale-105 transform relative ${
                pathname === "/about" ? "text-emerald-600" : ""
              }`}
            >
              About
              {pathname === "/about" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/contact"
              className={`hover:text-emerald-600 transition-colors duration-200 hover:scale-105 transform relative ${
                pathname === "/contact" ? "text-emerald-600" : ""
              }`}
            >
              Contact Us
              {pathname === "/contact" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
              )}
            </Link>
          </nav>
        )}

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <>
              <div className="flex items-center gap-3 px-4 py-2.5 bg-gradient-to-r from-green-200 to-emerald-200 rounded-2xl hover:from-green-300 hover:to-emerald-300 transition-all duration-300 shadow-lg hover:shadow-xl border border-green-300">
                <div className="relative group w-11 h-11 cursor-pointer">
                  <img
                    src={
                      user.avatar ||
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                    }
                    alt={user.username}
                    className="w-11 h-11 rounded-full border-2 border-white shadow-md object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Link to="/profile">
                      <FaEye className="text-white text-lg" />
                    </Link>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-sm font-bold text-gray-800">
                    {user.username}
                  </p>
                  <p className="text-xs text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 p-2.5 rounded-full shadow-lg transition-all duration-300 flex items-center hover:scale-110 transform"
                >
                  <FaPowerOff size={16} />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-green-700 text-2xl p-2 hover:bg-green-200 rounded-lg transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black/50 z-40" onClick={closeMobileMenu}>
          <div
            className="bg-gradient-to-b from-green-50 to-emerald-50 w-full max-w-sm ml-auto h-full shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              {/* User Info Section (Mobile) */}
              {user && (
                <div className="bg-gradient-to-r from-green-200 to-emerald-200 rounded-2xl p-4 shadow-lg border border-green-300">
                  <Link to="/profile" onClick={closeMobileMenu}>
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={
                          user.avatar ||
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                        }
                        alt={user.username}
                        className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-base font-bold text-gray-800">
                          {user.username}
                        </p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 py-2.5 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                  >
                    <FaPowerOff size={16} />
                    Logout
                  </button>
                </div>
              )}

              {/* Navigation Links (Mobile) */}
              {pathname !== "/login" && pathname !== "/signup" && (
                <nav className="space-y-2">
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-xl font-bold text-lg transition-all duration-200 ${
                      pathname === "/"
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "text-green-700 hover:bg-green-200"
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-xl font-bold text-lg transition-all duration-200 ${
                      pathname === "/about"
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "text-green-700 hover:bg-green-200"
                    }`}
                  >
                    About
                  </Link>

                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-xl font-bold text-lg transition-all duration-200 ${
                      pathname === "/contact"
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "text-green-700 hover:bg-green-200"
                    }`}
                  >
                    Contact Us
                  </Link>
                </nav>
              )}

              {/* Auth Buttons (Mobile) */}
              {!user && (
                <div className="space-y-3 pt-4 border-t border-green-300">
                  <Link to="/login" onClick={closeMobileMenu}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup" onClick={closeMobileMenu}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Signup
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;