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
        className="z-10 max-w-2xl text-center"
      >
        <h1 className="text-4xl font-bold mb-3">👨‍🚀 About the Pilot</h1>
        <p className="text-gray-300">
          I’m Satyam Kumar — a software engineer and space enthusiast crafting
          creative digital experiences across galaxies.
        </p>
      </motion.div>
    </main>
  );
}
