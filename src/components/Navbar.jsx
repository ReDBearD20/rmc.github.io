import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/img/logo.jpeg";
import logonew from "../../public/img/logo new.png";
import logoRect from "../../public/img/logoRect.png";
import { navItems } from "../constants";
import { motion, spring } from "framer-motion";
const variants = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const toggleMenu = () => {
    setBurgerMenu(!burgerMenu);
  };
  return (
    <nav className="fixed w-full top-0 z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center ">
          <div className="flex items-center shrink-0 ">
            <a href="#">
              <motion.img
                className="h-15 w-30 object-fill"
                src={logoRect}
                alt="logo"
                // initial={{ opacity: 0, scale: 0.5 }}
                // animate={{ opacity: 1, scale: 1 }}
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ delay: 0.2, type: "spring", stiffness: "120" }}
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
          <motion.div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>
              {burgerMenu ? <X /> : <Menu />}
            </button>
          </motion.div>
        </div>
        {burgerMenu && (
          <motion.div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
            <ul className="">
              {navItems.map((item, index) => (
                <motion.li
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="py-4"
                >
                  <a href={item.href}>{item.label}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
