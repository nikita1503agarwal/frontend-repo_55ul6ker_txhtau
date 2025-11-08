import React from 'react';
import { motion } from 'framer-motion';

// Simple inline images via public URLs for planets and heart
const assets = {
  moon: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800&auto=format&fit=crop',
  earth: 'https://images.unsplash.com/photo-1451186859696-371d9477be93?q=80&w=800&auto=format&fit=crop',
  jupiter: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
  sun: 'https://images.unsplash.com/photo-1582881657411-c36fd369f0bf?q=80&w=800&auto=format&fit=crop',
  galaxy: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1200&auto=format&fit=crop',
  multiverse: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
  heart: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop',
};

const steps = [
  {
    id: 1,
    left: { label: 'Moon', image: assets.moon },
    right: { label: 'Earth', image: assets.earth },
    caption: 'Even the Moon looks tiny beside our Earth — like your smile next to your laugh.',
  },
  {
    id: 2,
    left: { label: 'Earth', image: assets.earth },
    right: { label: 'Jupiter', image: assets.jupiter },
    caption: 'The Earth finds its giant in Jupiter — like my heart when you hold my hand.',
  },
  {
    id: 3,
    left: { label: 'Jupiter', image: assets.jupiter },
    right: { label: 'Sun', image: assets.sun },
    caption: 'Jupiter bows to the Sun — like I do to your light.',
  },
  {
    id: 4,
    left: { label: 'Sun', image: assets.sun },
    right: { label: 'Galaxy', image: assets.galaxy },
    caption: 'One star among a billion — yet you are my one in a billion.',
  },
  {
    id: 5,
    left: { label: 'Galaxy', image: assets.galaxy },
    right: { label: 'Multiverse', image: assets.multiverse },
    caption: 'Galaxies to multiverses — and still my love is larger.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.08 * i, duration: 0.5, ease: 'easeOut' } }),
};

export default function ScaleComparison() {
  return (
    <section id="scale" className="relative mx-auto max-w-6xl px-6 py-20 text-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A Journey in Pictures</h2>
        <p className="mt-2 text-white/70">Side by side — from small to grand — until nothing outgrows my love for you.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={idx}
            variants={itemVariants}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex w-1/2 items-center gap-3">
                <img src={step.left.image} alt={step.left.label} className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-white/20" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/60">Smaller</p>
                  <p className="text-lg font-semibold">{step.left.label}</p>
                </div>
              </div>
              <div className="text-white/40">vs</div>
              <div className="flex w-1/2 items-center justify-end gap-3">
                <div className="text-right">
                  <p className="text-sm uppercase tracking-wide text-white/60">Bigger</p>
                  <p className="text-lg font-semibold">{step.right.label}</p>
                </div>
                <img src={step.right.image} alt={step.right.label} className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-white/20" />
              </div>
            </div>
            <p className="mt-3 text-sm text-white/70">{step.caption}</p>
          </motion.div>
        ))}
      </div>

      {/* Finale */}
      <motion.div
        className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-rose-600/20 via-red-600/10 to-pink-600/20 p-1 ring-1 ring-white/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 gap-4 rounded-2xl bg-black/40 p-4 md:grid-cols-3">
          <div className="col-span-2">
            <img src={assets.multiverse} alt="Multiverse" className="h-64 w-full rounded-xl object-cover ring-2 ring-white/10 md:h-full" />
          </div>
          <div className="flex items-center justify-center">
            <motion.img
              src={assets.heart}
              alt="Heart with eyes"
              className="h-40 w-40 rounded-full object-cover ring-4 ring-rose-400/50 shadow-[0_0_60px_-10px_rgba(244,63,94,0.6)]"
              initial={{ scale: 0.9 }}
              animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
        <p className="px-3 pb-3 pt-4 text-center text-white/80">
          In the face of the multiverse, my love is the biggest thing I know.
        </p>
      </motion.div>
    </section>
  );
}
