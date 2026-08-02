import React from 'react';
import { IoIosRestaurant } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-12 pb-6 border-t-2 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 flex items-center gap-2 mb-4">
            <IoIosRestaurant className="text-3xl" />
            Golden Restaurant
          </h2>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Experience the finest luxury dining with our authentic handmade dishes, prepared fresh every day with love and passion.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-yellow-400">
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-white transition-colors duration-200">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-yellow-500/40 pb-1 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
            <li><a href="#menu" className="hover:text-yellow-400 transition-colors">Our Menu</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a></li>
            <li><a href="#reservation" className="hover:text-yellow-400 transition-colors">Book a Table</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-yellow-500/40 pb-1 inline-block">
            Opening Hours
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Monday - Friday:</span>
              <span className="text-yellow-400">12:00 PM -  12:00 AM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday - Sunday:</span>
              <span className="text-yellow-400">12:00 PM - 12:00 AM</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-yellow-500/40 pb-1 inline-block">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0" />
              <span>123 Luxury Avenue, Gourmet District, City</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400 shrink-0" />
              <span>+1 (555) 019-2834</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <span>info@goldenrestaurant.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar / Copyright */}
      <div className="mt-12 pt-4 border-t border-zinc-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Golden Restaurant • 👨‍💻 Developed by Alishba • All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;