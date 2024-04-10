import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import { Footer } from "../components/Footer";
import { Bantuan } from "../components/Bantuan";

export const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current route is within the "our-packages" section
  const isInOurPackages = location.pathname.includes("/our-packages/");

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      {!isInOurPackages && <Bantuan />}{" "}
      {/* Show Bantuan component if not in our-packages section */}
    </div>
  );
};
