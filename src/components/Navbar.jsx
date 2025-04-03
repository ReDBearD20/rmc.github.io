import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/img/logo.jpeg";
import logonew from "../../public/img/logo new.png";
import logoRect from "../../public/img/logoRect.png";
import BMRC_LOGO from "../../public/img/BRMC_logo.jpeg";
import BMRC_LOGO1 from "../../public/img/BRMC_logo1.png";
import { navItems } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for the dropdown mobile menu
const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 15,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

// Animation variants for list items inside the menu
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
  },
};

// Navbar animation variants based on scroll
const navbarVariants = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hidden: {
    y: -80,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  minimized: {
    y: -60,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [scrollState, setScrollState] = useState("visible");
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  // Handle scroll events to control navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        // At the top of the page
        setScrollState("visible");
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setScrollState("visible");
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down and not at the top - partially hide navbar
        setScrollState("minimized");
      } else if (currentScrollY > lastScrollY + 100) {
        // Scrolling down rapidly - completely hide navbar
        setScrollState("hidden");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80"
      variants={navbarVariants}
      initial="visible"
      animate={scrollState}
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center shrink-0">
            <a href="#">
              <motion.img
                className="object-cover h-16 w-44"
                src={BMRC_LOGO1}
                alt="logo"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              />
            </a>
          </div>
          <motion.ul
            className="hidden lg:flex ml-14 space-x-12 text-lg font-light"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-300"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </motion.ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu} className="focus:outline-none">
              {burgerMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {burgerMenu && (
            <motion.div
              className="lg:hidden absolute left-0 right-0 z-20 border-b border-neutral-700/80 bg-neutral-900 w-full overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.ul
                className="flex flex-col items-center py-4"
                variants={itemVariants}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1 }}
                    key={index}
                    className="py-3 text-lg"
                    onClick={toggleMenu}
                  >
                    <a href={item.href}>{item.label}</a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Minimal indicator when navbar is minimized */}
      {/* {scrollState === "minimized" && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white rounded-full"></div>
      )} */}
    </motion.nav>
  );
};

export default Navbar;
