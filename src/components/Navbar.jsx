import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const PRIMARY_COLOR = "#C27AFF";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f] shadow-lg z-50 select-none border-b border-[#222]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-extrabold text-[#C27AFF] cursor-pointer ">
          Abdullah.dev
        </div>

        <div className="hidden md:flex space-x-10 text-lg font-semibold text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="relative hover:text-[#C27AFF] transition-colors duration-300 glowPulse"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#C27AFF] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#C27AFF] z-[100]"
        >
          {menuOpen ? (
            <HiOutlineX size={28} />
          ) : (
            <HiOutlineMenu size={28} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-[#121212] shadow-lg z-50 px-6 py-10 flex flex-col gap-6 text-gray-200"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg hover:text-[#C27AFF] glowPulse"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes glowPulse {
          0%, 100% {
            text-shadow:
              0 0 8px ${PRIMARY_COLOR},
              0 0 16px ${PRIMARY_COLOR},
              0 0 24px ${PRIMARY_COLOR};
          }
          50% {
            text-shadow:
              0 0 12px ${PRIMARY_COLOR},
              0 0 20px ${PRIMARY_COLOR},
              0 0 28px ${PRIMARY_COLOR};
          }
        }
        .glowPulse {
          animation: glowPulse 3s infinite ease-in-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
