import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink, Events, scroller } from "react-scroll";

interface NavItem {
  name: string;
  to: string;
}

const navItems: NavItem[] = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Award", to: "award" },
  { name: "Testimonial", to: "testimonial" },
];

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasShadow, setHasShadow] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // react-scroll events
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleScrollTo = (to: string) => {
    scroller.scrollTo(to, {
      duration: 500,
      smooth: true,
      offset: -80, // Navbar height
    });
    setActiveSection(to);
    setIsMobileMenuOpen(false);
  };

  // Determine if indicator should show
  const showIndicator = activeSection !== "contact";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 bg-[#101622]/95 backdrop-blur-sm border-b ${
          hasShadow ? "shadow-xl border-gray-800/50" : "border-gray-800/0"
        } transition-shadow`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 md:h-22 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span
                onClick={() => handleScrollTo("home")}
                className="cursor-pointer text-xl md:text-2xl font-bold text-[#46AE62] tracking-wider hover:opacity-90 transition-opacity"
              >
                Abdullah<span className="text-white">.dev</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onSetActive={() => setActiveSection(item.to)}
                    className={`cursor-pointer text-sm uppercase tracking-wide transition-all duration-300 relative py-2 ${
                      activeSection === item.to
                        ? "text-[#46AE62] font-semibold"
                        : "text-gray-300 hover:text-[#46AE62]"
                    }`}
                  >
                    {item.name}
                    {showIndicator && activeSection === item.to && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[#46AE62]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex items-center">
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="px-6 py-3 border border-[#46AE62] text-[#46AE62] text-sm font-medium rounded-md hover:bg-[#46AE62] hover:text-[#101622] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Let's Talk
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#46AE62] hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} className="text-[#46AE62]" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 md:hidden w-full z-40 bg-[#101622] border-b border-gray-800/50 shadow-xl"
          >
            <div className="px-4 py-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <span
                      onClick={() => handleScrollTo(item.to)}
                      className={`block py-3 px-4 rounded-lg text-base uppercase tracking-wide transition-all duration-300 cursor-pointer ${
                        activeSection === item.to
                          ? "text-[#46AE62] bg-[#46AE62]/10 font-semibold"
                          : "text-gray-300 hover:text-[#46AE62] hover:bg-gray-800/50"
                      }`}
                    >
                      {item.name}
                    </span>
                  </li>
                ))}
                <li className="pt-4 mt-4 border-t border-gray-800/50">
                  <span
                    onClick={() => handleScrollTo("contact")}
                    className="block w-full py-3 px-4 text-center border border-[#46AE62] text-[#46AE62] text-sm font-medium rounded-lg hover:bg-[#46AE62] hover:text-[#101622] transition-all duration-300 cursor-pointer"
                  >
                    Let's Talk
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
