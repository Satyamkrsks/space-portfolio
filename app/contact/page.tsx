"use client";

import Starfield from "../components/Starfield";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Starfield />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-20 relative max-w-lg mx-auto mt-32 text-center"
      >
        <h1 className="text-5xl font-bold mb-6">Contact Me 📡</h1>
        <p className="text-gray-300 mb-10">
          Got a mission in mind? Let’s connect and make it happen.
        </p>

        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </main>
  );
}