import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div>
        <Hero />
        {/* <Services /> */}
        <ImageSlider />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
};

export default App;
