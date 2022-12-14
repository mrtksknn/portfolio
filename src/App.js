import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import MobileNav from "./Components/MobileNav";
import Projects from "./Components/Projects";
import ScrollButton from "./Components/ScrollButton";
import Services from "./Components/Services";
import Welcome from "./Components/Welcome";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Welcome />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <ScrollButton />
      <MobileNav />
    </main>
  );
}
