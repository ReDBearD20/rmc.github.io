import React from "react";
import about1 from "../../public/img/about1.png";
import about2 from "../../public/img/about2.png";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{
        amount: 0.4,
        once: true, // Enable this for better performance
      }}
      className="container mx-auto border-b mt-20"
      id="about"
    >
      <motion.h2
        variants={itemVariant}
        className="text-xl lg:text-3xl tracking-tight text-center mb-12 mt-20 uppercase font-semibold"
      >
        About{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-semibold">
          us
        </span>
      </motion.h2>

      <motion.div
        variants={variants}
        className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8 mx-4 mb-20"
      >
        <motion.div
          variants={itemVariant}
          className="w-full lg:w-1/2 mb-8 lg:mb-0 overflow-hidden rounded-lg shadow-lg"
        >
          <img
            className="w-full h-auto"
            src={about2}
            alt="Bharat RMC facility"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={variants}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <motion.h3
            variants={itemVariant}
            className="text-xl lg:text-3xl tracking-tight text-center lg:text-left mb-8 uppercase font-semibold bg-gradient-to-r from-blue-400 to-sky-800 bg-clip-text text-transparent"
          >
            Your Trusted Partner for Ready Mixed Concrete Solutions
          </motion.h3>

          <motion.div
            variants={itemVariant}
            className="text-lg lg:text-xl font-light text-center lg:text-left max-w-5xl mx-auto text-[#D0D4CA]"
          >
            <p className="mb-4">
              <span className="font-semibold">
                At Bharat RMC, we are dedicated to delivering top-quality Ready
                Mixed Concrete (RMC) for your construction projects. Established
                under the visionary leadership of Rajesh Punshi, who brings over
                25+ years of industry experience, Bharat RMC has quickly become
                a trusted name in the construction sector.
              </span>
            </p>
            <p>
              Bharat RMC is committed to providing high-performance concrete
              that meets the stringent demands of modern construction. Our
              cutting-edge production facilities, rigorous quality control, and
              experienced team ensure that we consistently deliver reliable and
              durable concrete tailored to the needs of your project. Whether
              you're building a residential development, a commercial structure,
              or a large infrastructure project, our RMC solutions are designed
              to enhance the strength and longevity of your build.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
