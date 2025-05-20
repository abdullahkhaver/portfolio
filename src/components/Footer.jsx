import React from "react";
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-gray-400 py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Abdullah.dev - All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="https://wa.me/923294171505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C27AFF] transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
          <a
            href="https://instagram.com/abdullahkhaver"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C27AFF] transition"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
            Instagram
          </a>
          <a
            href="https://github.com/abdullahkhaver"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#C27AFF] transition"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
