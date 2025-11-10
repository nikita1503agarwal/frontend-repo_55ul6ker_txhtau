import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Landing({ onStart }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.15),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(244,63,94,0.2),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-gradient-to-r from-rose-400 via-red-300 to-pink-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
          >
            The Eternal Garden
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-4 max-w-2xl text-white/80"
          >
            Welcome, Harshitha. This is our Eternal Garden — a world that grows from every moment we’ve shared.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            onClick={onStart}
            className="mt-10 rounded-full bg-gradient-to-r from-rose-500 to-red-500 px-8 py-3 text-sm font-semibold text-white shadow-xl transition hover:from-rose-400 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
          >
            Start Exploring
          </motion.button>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 text-xs text-white/50"
        >
          Tip: Best experienced with sound on and a desktop browser.
        </motion.p>
      </div>
    </section>
  );
}
