"use client";

import Starfield from "../components/Starfield";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center text-white">
      <Starfield />
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 max-w-2xl text-center space-y-3"
      >
        <h1 className="text-4xl font-bold mb-3">👨‍🚀 About the Pilot</h1>
        <p className="text-gray-300 mt-4">
          I’m Satyam Kumar — a software engineer, UI/UX designer, and
          space enthusiast crafting creative digital experiences
          across galaxies. I love blending technology, design, and imagination
          to build impactful products.
        </p>

        {/* Contact Section */}
        <div className="flex items-center justify-center gap-6 text-lg">

        <a
          href="https://www.linkedin.com/in/satyam2002k/"
          className="text-blue-400 underline hover:text-blue-300"
          target="_blank"
        >
          📎 LinkedIn
        </a>

        <a
          href="mailto:satyamaunta2003@gmail.com"
          className="text-blue-400 underline hover:text-blue-300"
        >
          📧 Email
        </a>

        <span>📱 7634938496</span>

      </div>

        
      </motion.div>
    </main>
  );
}

