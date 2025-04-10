import React, { memo } from "react";
import { motion } from "framer-motion";
import hero from "../../public/video/hero.mp4";
import scrollImg from "../../public/img/scroll.png";

const textVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: [0.4, 1, 0.4],
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative h-dvh w-full overflow-hidden border-b border-gray-700">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src={hero}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full mx-auto p-2">
        <div className="flex flex-col items-center justify-center gap-4 lg:items-start max-w-7xl mx-auto">
          <h1 className="text-6xl px-2 py-2 mt-12 mb-2 tracking-wide lg:text-9xl">
            <motion.div
              className="lg:text-left text-center lg:pr-16 pb-4 lg:pb-8"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Building
              </span>{" "}
              Dreams,
            </motion.div>
            <motion.div
              className="text-center lg:text-right"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Creating{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Reality
              </span>
              .
            </motion.div>
          </h1>

          <motion.p
            className="font-extralight text-center lg:text-left lg:font-light p-2 lg:tracking-wide text-xl"
            initial={{ opacity: 0, scale: 0.5, x: -500 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Transforming spaces with precision and expertise, from concept to
            completion. <br />
            Your Trusted Partner for Ready Mixed Concrete Solutions.
          </motion.p>

          <motion.div
            className="flex w-full justify-center items-center text-center p-4"
            variants={textVariants}
            animate="scrollButton"
          >
            <img src={scrollImg} alt="Scroll down" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
