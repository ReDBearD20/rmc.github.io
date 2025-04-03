import React, { useRef, useState, useEffect } from "react";
import { motion, press, useInView } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import TypeWriterEffect from "react-typewriter-effect";
import BMRC_LOGO1 from "../../public/img/BRMC_logo1.png";
//import emailjs from "@emailjs/browser"; // Add missing import

// Import images
import logoRect from "../../public/img/logoRect.png";
import copyright from "../../public/img/copyright-sign.svg";

// Assume this is imported from constants file
import { socialMedia } from "../constants";
import { Scale } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, amount: 0.4 });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { username, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Use environment variables instead of hardcoded values
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      toast.error(
        "Email configuration is missing. Please contact the administrator."
      );
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, userId).then(
      (result) => {
        toast.success("Message sent successfully!");
        resetForm();
      },
      (error) => {
        toast.error("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <section className="mx-auto container" id="contact">
      <div className="px-4 py-8">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center mb-20 mt-12 uppercase font-semibold">
          Contact{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-semibold">
            us
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b pb-12">
          {/* Company Info Section */}
          <div className="flex flex-col items-start p-4">
            <a href="/" aria-label="Home">
              <img
                src={BMRC_LOGO1}
                alt="Company Logo"
                className="m-0 w-1/2 h-auto"
              />
            </a>
            {/* <p className="mt-6 text-base leading-7 sm:max-w-sm font-montserrat">
              Your Trusted Partner for Ready Mixed Concrete Solutions
            </p> */}
            <TypeWriterEffect
              textStyle={{
                fontFamily: "montserrat",
                marginTop: "16px",
                lineHeight: "2",
              }}
              startDelay={100}
              cursorColor="white"
              text="Your Trusted Partner for Ready Mixed Concrete Solutions"
              typeSpeed={100}
            />
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.2, backgroundColor: "#6FCDFF" }}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:opacity-80 transition-opacity"
                  key={item.alt}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${item.alt}`}
                  >
                    <img src={item.src} alt={item.alt} width={24} height={24} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="flex items-center gap-4 lg:gap-8 flex-col">
            <h2 className="text-2xl lg:text-3xl tracking-tight text-center p-4 uppercase font-medium border-b w-full">
              Get in Touch
            </h2>
            <div className="flex flex-col gap-6 lg:gap-8 lg:items-start items-center w-full">
              <div className="w-full text-center lg:text-start">
                <h3 className="text-xl font-medium mb-2">Mail</h3>
                <a
                  href="mailto:singh.vikram231@gmail.com"
                  className="text-gray-200 hover:text-gray-400 font-light transition-colors"
                >
                  singh.vikram231@gmail.com
                </a>
              </div>

              <div className="w-full text-center lg:text-start">
                <h3 className="text-xl font-medium mb-2">Phone</h3>
                <a
                  href="tel:+917060605321"
                  className="text-gray-200 hover:text-gray-400 font-light transition-colors"
                >
                  +91 7060605321
                </a>
              </div>

              <div className="w-full text-center lg:text-start">
                <h3 className="text-xl font-medium mb-2">Address</h3>
                <p className="text-gray-200 mb-4 font-light">
                  123 Main Street, City, Country
                </p>
                <div className="w-full h-48 lg:h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.423780664993!2d79.42780727605495!3d28.974810768454166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07f4c8051b963%3A0x9a9256b8ecdca725!2sPunshi%20Real%20Estate!5e0!3m2!1sen!2sin!4v1740496808616!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex items-center justify-center relative p-4">
            {/* Responsive SVG background - now uses percentage-based sizing and centers properly */}
            <motion.div
              ref={animationRef}
              className="stroke-amber-400 stroke-1 absolute inset-0 flex items-center justify-center z-[-1]"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <svg
                className="w-full h-full max-w-xs md:max-w-sm lg:max-w-md"
                viewBox="0 0 32.666 32.666"
                preserveAspectRatio="xMidYMid meet"
              >
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 3 }}
                  d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                  M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                  C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                  c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                  c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                  c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                  c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                  c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                  c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                  c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                  c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                  l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                  C32.666,7.326,25.339,0,16.333,0z"
                />
              </svg>
            </motion.div>

            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="flex flex-col w-full h-full gap-4 lg:gap-6 z-10 align-bottom justify-end"
              autoComplete="on"
            >
              <h2 className="text-2xl lg:text-3xl tracking-tight text-center p-4 uppercase font-medium border-b w-full">
                INQUIRY
              </h2>
              <input
                type="text"
                placeholder="Name"
                required
                name="username"
                id="username"
                value={username}
                onChange={handleChange}
                className="bg-transparent border border-white rounded-sm text-white font-light p-3 focus:outline-none focus:border-orange-300"
                aria-label="Your Name"
                autoComplete="name"
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                className="bg-transparent border border-white rounded-sm text-white font-light p-3 focus:outline-none focus:border-orange-300"
                aria-label="Your Email"
                autoComplete="email"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={8}
                value={message}
                onChange={handleChange}
                className="bg-transparent border border-white rounded-sm text-white font-light p-3 focus:outline-none focus:border-orange-300 resize-none"
                aria-label="Your Message"
                autoComplete="off"
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.85 }}
                className="bg-orange-300 p-4 rounded-sm cursor-pointer font-medium hover:bg-orange-400 transition-colors text-gray-900"
              >
                Submit
              </motion.button>
              <Toaster
                position="top-center"
                toastOptions={{ duration: 3000 }}
              />
            </motion.form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between text-white-400 mt-6 mb-4 max-sm:flex-col max-sm:items-center gap-4">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
            <img
              src={copyright}
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer hover:underline">
            Terms & Conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
