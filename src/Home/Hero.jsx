"use client";

import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full bg-black flex items-center justify-center rounded-xl px-6 py-10 mt-20">
      {/* Outer wrapper with glowing gradient */}
      <div className="relative w-full max-w-6xl">
        {/* Rainbow Glow Behind Card */}
        <div
          className="
            absolute inset-0 -z-10 
            bg-linear-to-r
            from-red-500 via-yellow-500 to-purple-500
            blur-3xl opacity-40
          "
        />

        {/* Main Card */}
        <div
          className="
            relative rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10
            p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl
          "
        >
          {/* LEFT SIDE – TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex-1"
          >
            <h1 className="mb-5 text-4xl md:text-6xl font-bold text-white">
              Stay Ahead in the Game
            </h1>

            <p className="mb-6 text-lg md:text-xl text-white/90">
              Breaking sports news, match analysis, and premium gear — all in
              one platform designed for true fans and athletes.
            </p>

            <button
              className="
                px-6 py-3 text-lg font-medium rounded-xl
                bg-linear-to-r from-purple-500 to-blue-500
                text-white shadow-lg shadow-purple-500/30
                transition flex items-center gap-2
              "
            >
              Explore More Below <FaArrowCircleDown size={25}/>
            </button>
          </motion.div>

          {/* RIGHT SIDE – IMAGE */}
          <motion.div
            initial={{ opacity: 0, y:20, x: 40 }}
            animate={{ opacity: 1, y: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg"
              alt="Sports Hero"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
