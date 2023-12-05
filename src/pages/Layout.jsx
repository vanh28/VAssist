import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";


const whiteList = ["/protected", "/home-page","/news","/profile", "/Videocall", "/Music","/news/sports","/news/education","/news/climate","/news/Books"];

function Layout() {
  const location = useLocation();
  const { account } = JSON.parse(localStorage.getItem("faceAuth")) || {};

  if (!account && whiteList.includes(location.pathname)) {
    return <Navigate to="/" />;
  }

  if (account && !whiteList.includes(location.pathname)) {
    return <Navigate to="/protected" />;
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <Outlet className="grow" />
    </div>
  );
}

export default Layout;
