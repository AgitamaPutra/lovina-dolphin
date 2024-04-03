import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet tempor odio.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: awixrock@gmail.com</p>
            <p className="text-sm">Phone: +6281998348555</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-white text-lg">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-white text-lg">
                <FaInstagram />
              </Link>
              <Link to="#" className="text-white text-lg">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm">
            &copy; 2024 Lovina Private Dolphin Tour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
