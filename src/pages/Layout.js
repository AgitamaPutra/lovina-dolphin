import React from "react";
import Navbar from "../components/navbar";
import { Footer } from "../components/Footer";
import { Bantuan } from "../components/Bantuan";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Bantuan />
    </div>
  );
};
