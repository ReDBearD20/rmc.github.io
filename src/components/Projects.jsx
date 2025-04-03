import React, { useState, useEffect } from "react";
import { PORTFOLIO_PROJECTS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4,
    },
  },
};

const Projects = () => {
  return (
    <section className="container mx-auto border-b" id="projects">
      <div className="mb-20 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl lg:text-3xl tracking-tight text-center mb-12 mt-20 uppercase"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-semibold">
            Projects
          </span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-center max-w-7xl"
        >
          {PORTFOLIO_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              desc={project.description}
              img={project.image}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function ProjectCard({ id, name, desc, img, link }) {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if user is on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent =
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const mobile = Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
      setIsMobile(mobile);
      console.log("Is mobile device:", mobile);
    };

    checkIfMobile();
  }, []);

  const handleCardClick = (e) => {
    console.log("Card clicked, toggling active state");
    setIsActive(!isActive);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    console.log("Link clicked, preventing card toggle");
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-3xl mx-4 aspect-[4/3] cursor-pointer"
      onClick={handleCardClick}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        src={img}
        alt={name}
        className="h-full w-full object-cover"
      />

      {/* Use a combination of CSS and framer-motion for the overlay */}
      <motion.div
        className={`absolute inset-0 flex flex-col items-center justify-center p-4 overflow-y-auto backdrop-blur-sm transition-opacity duration-300 ${
          isActive
            ? "opacity-100"
            : "opacity-0 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h3 className="mb-2 text-xl bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent font-semibold">
          {name}
        </h3>
        <p className="mb-6 max-h-full text-white">{desc}</p>
        {link && (
          <a
            href={link}
            onClick={handleLinkClick}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-800 text-white rounded-md mt-auto hover:scale-105 transition-transform"
          >
            View Project
          </a>
        )}
      </motion.div>

      {/* Mobile-only tap indicator */}
      {isMobile && !isActive && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-orange-500"
          >
            <path d="M7 11v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1z"></path>
            <path d="M13 7V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4"></path>
          </svg>
        </div>
      )}
    </motion.div>
  );
}

export default Projects;
