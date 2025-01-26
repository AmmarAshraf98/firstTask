import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NAvbar from "../NAvbar/NAvbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  const isWhite = pathname === "/contact" || pathname === "/portfolio";

  return (
    <div>
      <NAvbar />

      <div
        className={`min-h-dvh ${isWhite ? "bg-white" : "bg-[#1ABC9C] "} center`}
      >
        <div className='container mx-auto px-2 sm:px-0'>
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}
