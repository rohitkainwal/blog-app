import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/user/currentUser",
        { withCredentials: true }
      );
      setUser(res.data.user);
      console.log("✅ User fetched:", res.data.user);
    } catch (error) {
      console.log("❌ Fetch user error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
