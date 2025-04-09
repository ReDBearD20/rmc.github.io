import React from "react";
import { SERVICES_CONTENT } from "../constants";
import { motion, useInView } from "framer-motion";
//please refer image slider for services
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const imageVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="container mx-auto border-b">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center mb-20 uppercase">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-semibold">
            Services
          </span>
        </h2>
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
        >
          {SERVICES_CONTENT.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              desc={service.description}
              img={service.image}
              alt={service.alt}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function ServiceCard({ index, title, desc, img, alt }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="mb-12 mx-4 flex flex-col lg:flex-row"
    >
      <motion.div
        variants={imageVariants}
        className={`lg:w-1/2 mb-4 lg:mb-0 ${
          index % 2 === 0 ? "" : "lg:order-2"
        }`}
      >
        <img
          src={img}
          alt={alt}
          className="w-full h-[80dvh] object-cover rounded-lg"
        />
      </motion.div>
      <motion.div
        variants={cardVariants}
        className={`lg:w-1/2 flex flex-col justify-center ${
          index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
        }`}
      >
        <h3 className="text-xl lg:text-2xl font-medium mb-2">{title}</h3>
        <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9 font-light">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Services;
