"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-md px-8 py-3 rounded-2xl shadow-lg flex gap-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className="text-white hover:text-cyan-400 transition"
        >
          {item.name}
        </Link>
      ))}
    </motion.nav>
  );
}
