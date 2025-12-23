import { createContext, useEffect, useState } from "react";
import { api } from "../axios/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    // Check if token exists first
    const token = localStorage.getItem("token");
    
    if (!token) {
      console.log("❌ No token found");
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      console.log("🔄 Fetching current user...");
      const res = await api.get("/user/currentUser");
      console.log("✅ User fetched:", res.data.user);
      setUser(res.data.user);
    } catch (error) {
      console.log("❌ Fetch user error:", error.response?.data || error.message);
      console.log("Status:", error.response?.status);
      setUser(null);
      
      // Clear invalid token
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};