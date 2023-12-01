import React from "react";
import { Navigate } from "react-router-dom";
//login
import Login from "../Pages/Loginpage";
// User Profile
// import UserProfile from "../pages/Authentication/user-profile";
import PFriends from "../Pages/PFriends";
import PPersonsProfilePage from "../Pages/PPersonsProfilePage";
import Pchat from "../Pages/Pchat";
import Logout from "../Pages/Logout";

const authProtectedRoutes = [
  { path: "/chat", component: <Pchat /> },
  { path: "/friends", component: <PFriends /> },
  //User Profile
  { path: "/profile", component: <PPersonsProfilePage /> },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    component: <Navigate to="/chat" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
