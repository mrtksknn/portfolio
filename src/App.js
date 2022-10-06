import React from "react";
import About from "./Components/About";
import Navbar from './Components/Navbar';
import Projects from "./Components/Projects/Projects";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
    </main>
  );
}
