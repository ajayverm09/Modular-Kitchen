import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-xl font-bold text-gray-800">KitchenCraft</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`relative font-medium ${
                location.pathname === path
                  ? "text-amber-600"
                  : "text-gray-600 hover:text-amber-600"
              }`}
            >
              {label}
              {location.pathname === path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col py-4 px-4 space-y-3">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`font-medium py-2 ${
                    location.pathname === path
                      ? "text-amber-600"
                      : "text-gray-600 hover:text-amber-600"
                  }`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
