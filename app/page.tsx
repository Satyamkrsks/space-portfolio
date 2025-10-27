"use client";

import Navbar from "./components/Navbar";
import Starfield from "./components/Starfield";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen flex items-center justify-center text-center text-white">
      <Starfield />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="z-10"
      >
        <h1 className="text-5xl font-bold mb-4">🚀 Welcome Aboard, Captain</h1>
        <p className="text-lg text-gray-300">
          Navigate through the stars to explore my journey.
        </p>
      </motion.div>
    </main>
  );
}
