import React, { useState } from "react";
import { SERVICES_CONTENT } from "../constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../src/index.css";
import { motion, AnimatePresence } from "framer-motion";

// Services section
const ImageSlider = () => {
  return (
    <section
      id="services"
      className="mx-auto border-b w-full px-4 sm:px-6 lg:px-8 container"
    >
      <div className="my-12 md:my-16 lg:my-20">
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl tracking-tight text-center mb-10 md:mb-16 lg:mb-20 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-semibold">
            Services
          </span>
        </motion.h2>
        <ServicesCarousel data={SERVICES_CONTENT} />
      </div>
    </section>
  );
};

export default ImageSlider;

function ServicesCarousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData =
    Array.isArray(data) && data.length > 0
      ? data
      : [
          {
            title: "Sample Service",
            description: "This is a placeholder for when no data is provided.",
            image: "/api/placeholder/400/300",
            alt: "Sample Service",
          },
        ];

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div
      className="services-carousel-container mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        swipeScrollTolerance={5}
        transitionTime={500}
        selectedItem={currentSlide}
        onChange={handleChange}
        ariaLabel="Our services carousel"
        ariaLive="polite"
        className="overflow-hidden"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <motion.button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute z-20 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 cursor-pointer bg-[rgb(61,64,71)] rounded-full flex items-center justify-center shadow hover:bg-[rgb(118,125,135)] transition-colors left-2 sm:left-4 md:left-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </motion.button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <motion.button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute z-20 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 cursor-pointer bg-[rgb(61,64,71)] rounded-full flex items-center justify-center shadow hover:bg-[rgb(118,125,135)] transition-colors right-2 sm:right-4 md:right-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <motion.li
              key={index}
              className={`inline-block mx-1 md:mx-1.5 h-2 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "bg-blue-500 w-6 md:w-8 rounded-lg"
                  : "bg-gray-300 w-2 md:w-3"
              }`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0.9, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          );
        }}
      >
        {carouselData.map((item, index) => (
          <AnimatePresence key={index} mode="wait">
            <motion.div
              key={index}
              className="carousel-slide bg-gray-50 rounded-lg shadow-lg overflow-hidden mx-2 sm:mx-4 my-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0.7,
                scale: currentSlide === index ? 1 : 0.95,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-120 w-full">
                {/* Full-width Image */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <img
                    src={item.image || "/api/placeholder/600/400"}
                    alt={item.alt || "Service illustration"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
                </motion.div>

                {/* Text overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 text-white "
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 mx-auto"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-base sm:text-lg text-gray-100 max-w-prose mx-auto"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </Carousel>
    </motion.div>
  );
}
