import React, { useState } from "react";
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
  // Add state to track if card is active (for touch devices)
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-3xl mx-4 aspect-[4/3]"
      onClick={() => setIsActive(!isActive)} // Toggle active state on touch/click
      onTouchEnd={(e) => e.preventDefault()} // Prevent default touch behavior
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        src={img}
        alt={name}
        className="h-full w-full object-cover"
      />
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        // Show content on hover OR when isActive is true
        animate={isActive ? "visible" : "hidden"}
        whileHover="visible"
        className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-y-hidden"
      >
        <motion.h3
          variants={textVariants}
          className="mb-2 text-xl bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent font-semibold"
        >
          {name}
        </motion.h3>
        <motion.p variants={textVariants} className="mb-6 max-h-full">
          {desc}
        </motion.p>
        {link && (
          <motion.a
            href={link}
            variants={textVariants}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-800 text-white rounded-md mt-auto"
            onClick={(e) => {
              // Stop propagation to prevent toggling the card when clicking the link
              e.stopPropagation();
            }}
          >
            View Project
          </motion.a>
        )}
      </motion.div>

      {/* Mobile indicator - only visible on touch devices */}
      <div className="absolute top-2 right-2 md:hidden bg-white/80 rounded-full p-2 shadow-md">
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
          <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"></path>
          <path d="M20 12H9"></path>
          <path d="m15 16 4-4-4-4"></path>
        </svg>
      </div>
    </motion.div>
  );
}

export default Projects;
