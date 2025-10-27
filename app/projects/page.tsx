
"use client";

import Starfield from "../components/Starfield";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Starfield />
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center mt-32"
      >
        <h1 className="text-5xl font-bold mb-4">Projects 🚀</h1>
        <p className="text-lg text-gray-300 mb-10">
          A showcase of my interstellar creations — from web galaxies to AI nebulae.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[
  {
    title: "Open Orders Dashboard",
    desc: "A real-time financial trading dashboard built with React, Next.js, and Tailwind CSS.",
    live: "https://open-orders-dashboard.vercel.app",
    github: "https://github.com/satyamkumar/open-orders-dashboard"
  },
  {
   title: "Realtime Weather App",
    desc: "A weather tracking web app using OpenWeather API with live temperature, humidity, and forecasts built in React.",
    live: "https://realtime-temp.vercel.app/",
    github: "https://github.com/Satyamkrsks/Realtime_temp"
  },
  {
    title: "Space-Themed Landing Page",
    desc: "A 3D space website using React Three Fiber and GSAP animations.",
    live: "https://space-landing-page.vercel.app",
    github: "https://github.com/satyamkumar/space-landing-page"
  }
].map((p, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-800/50 rounded-2xl backdrop-blur-md border border-gray-700"
  >
    <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
    <p className="text-gray-400 mb-4">{p.desc}</p>
    <div className="flex justify-center gap-4">
      <a
        href={p.live}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Live Demo
      </a>
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:underline"
      >
        GitHub
      </a>
    </div>
  </motion.div>
))}

        </div>
      </motion.div>
    </main>
  );
}
