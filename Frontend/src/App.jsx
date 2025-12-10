import React from "react";
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { myRoute } from "./routes/Routing";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  return (
    <div>
      <RouterProvider router={myRoute} />
      <Toaster />
    </div>
  );
};

export default App;
