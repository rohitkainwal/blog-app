import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import EmailVerify from "../pages/EmailVerify";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import TrendingPage from "../pages/TrendingPage";



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
    path: "/trending",
    element: <TrendingPage />,
  },
  {
    path: "/email-verify/:token",
    element: <EmailVerify />,
  },
   {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
   {
    path: "/reset-password/:token",
    element: <ResetPassword/>
  },
    {
    path: "/reset-password/:token",
    element: <ResetPassword/>
  },

]);
