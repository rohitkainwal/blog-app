import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import EmailVerify from "../pages/EmailVerify";



export const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/email-verify/:token",
    element: <EmailVerify />,
  }
]);
