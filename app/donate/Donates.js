"use client";
import React, { createContext } from "react";
import { motion } from "framer-motion";
export default function Donates() {
  return (
    <div className="min-h-screen bg-gray-300">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 300 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-center mt-16 mb-8">
          Support Our Cause
        </h1>
        <p className="text-lg text-center mb-8">
          Your donation helps us continue our mission.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Donate Now
        </motion.button>
      </motion.div>
    </div>
  );
}
