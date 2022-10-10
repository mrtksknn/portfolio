import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import Welcome from "./Components/Welcome";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Welcome />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
