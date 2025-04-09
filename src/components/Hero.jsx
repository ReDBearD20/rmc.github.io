import React from "react";
import hero from "../../public/video/hero.mp4";
import scrollImg from "../../public/img/scroll.png";
import { delay, motion } from "framer-motion";
const textVariants = {
  initial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden border-b border-gray-700">
      <div className="absolute top-0 left-0 h-dvh w-screen bg-[rgba(0,0,0,0.6)] z-10"></div>
      <div className="h-dvh w-screen">
        <video
          className="h-dvh w-screen object-cover opacity-50"
          src={hero}
          autoPlay
          muted
          loop
        />
      </div>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 z-20 w-screen mx-auto p-2">
        <div className="flex flex-col justify-center items-center gap-4 lg:items-start">
          <h1 className="text-6xl px-2 py-2 mt-12 mb-2  tracking-wide lg:text-9xl ">
            <motion.div
              className="lg:text-left text-center lg:pr-16 pb-4 lg:pb-8"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Building
              </span>{" "}
              Dreams,
            </motion.div>
            <motion.div
              className=" text-center lg:text-right"
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
            className="font-extralight text-center lg:text-left lg:font-light p-2 lg:tracking-wide text-xl "
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
            className="flex w-full justify-center items-center text-center p-4 "
            variants={textVariants}
            animate="scrollButton"
          >
            <img src={scrollImg} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
