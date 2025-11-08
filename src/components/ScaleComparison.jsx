import React from 'react';
import { motion } from 'framer-motion';

// Inline images via public URLs for planets and heart
const assets = {
  moon: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
  earth: 'https://images.unsplash.com/photo-1451186859696-371d9477be93?q=80&w=1200&auto=format&fit=crop',
  jupiter: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
  sun: 'https://images.unsplash.com/photo-1582881657411-c36fd369f0bf?q=80&w=1200&auto=format&fit=crop',
  galaxy: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1600&auto=format&fit=crop',
  multiverse: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop',
  heart: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop',
};

// Ordered journey steps
const steps = [
  {
    id: 1,
    left: { label: 'Moon', image: assets.moon },
    right: { label: 'Earth', image: assets.earth },
    caption: 'From a whispering Moon to our home — it already feels like us, Harshitha.',
  },
  {
    id: 2,
    left: { label: 'Earth', image: assets.earth },
    right: { label: 'Jupiter', image: assets.jupiter },
    caption: "The jump from Earth to Jupiter is wild — that's how my heart grows for you, Harshitha.",
  },
  {
    id: 3,
    left: { label: 'Jupiter', image: assets.jupiter },
    right: { label: 'Sun', image: assets.sun },
    caption: 'Even Jupiter bows to the Sun — like I do to your light.',
  },
  {
    id: 4,
    left: { label: 'Sun', image: assets.sun },
    right: { label: 'Galaxy', image: assets.galaxy },
    caption: 'One star among billions — yet you are my one in a billion, Harshitha.',
  },
  {
    id: 5,
    left: { label: 'Galaxy', image: assets.galaxy },
    right: { label: 'Multiverse', image: assets.multiverse },
    caption: 'From galaxies to multiverses — and still my love is larger.',
  },
];

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Tailwind classes must be explicit for JIT, so we map indexes to class strings
const smallSizeClasses = ['h-24 w-24', 'h-28 w-28', 'h-32 w-32', 'h-36 w-36', 'h-40 w-40'];
const bigSizeClasses = ['h-40 w-40', 'h-48 w-48', 'h-56 w-56', 'h-64 w-64', 'h-72 w-72'];

export default function ScaleComparison() {
  return (
    <section id="scale" className="relative mx-auto w-full text-white">
      <div className="sticky top-0 z-0 h-16 w-full bg-gradient-to-b from-black/60 to-transparent" />

      <header className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How big is my love for you, Harshitha?</h2>
        <p className="mt-2 text-white/70">Scroll to journey through a universe of scale. Each step appears as you arrive, one after another.</p>
      </header>

      {/* Scroll-driven panels */}
      <div className="snap-y snap-mandatory">
        {steps.map((step, idx) => {
          const smallClasses = smallSizeClasses[idx] || smallSizeClasses[smallSizeClasses.length - 1];
          const bigClasses = bigSizeClasses[idx] || bigSizeClasses[bigSizeClasses.length - 1];
          return (
            <motion.section
              key={step.id}
              className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl snap-start items-center justify-center px-6 py-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={panelVariants}
            >
              <div className="w-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                  {/* Left (smaller) */}
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img
                      src={step.left.image}
                      alt={step.left.label}
                      className={`${smallClasses} rounded-full object-cover ring-2 ring-white/20`}
                      style={{ boxShadow: '0 20px 60px -10px rgba(255,255,255,0.08)' }}
                    />
                    <p className="text-lg font-semibold tracking-tight">{step.left.label}</p>
                  </div>

                  {/* Right (bigger) */}
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img
                      src={step.right.image}
                      alt={step.right.label}
                      className={`${bigClasses} rounded-full object-cover ring-2 ring-white/20`}
                      style={{ boxShadow: '0 30px 80px -10px rgba(244,63,94,0.25)' }}
                    />
                    <p className="text-lg font-semibold tracking-tight">{step.right.label}</p>
                  </div>
                </div>

                <p className="mx-auto mt-8 max-w-2xl text-center text-white/75">{step.caption}</p>
              </div>
            </motion.section>
          );
        })}

        {/* Finale panel */}
        <motion.section
          className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl snap-start items-center justify-center px-6 py-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={panelVariants}
        >
          <div className="grid w-full grid-cols-1 gap-6 rounded-3xl bg-gradient-to-br from-rose-600/20 via-red-600/10 to-pink-600/20 p-6 ring-1 ring-white/10 md:grid-cols-3">
            <div className="col-span-2">
              <img src={assets.multiverse} alt="Multiverse" className="h-72 w-full rounded-2xl object-cover ring-2 ring-white/10 md:h-full" />
            </div>
            <div className="flex items-center justify-center">
              <motion.img
                src={assets.heart}
                alt="Heart with eyes"
                className="h-48 w-48 rounded-full object-cover ring-4 ring-rose-400/50 shadow-[0_0_60px_-10px_rgba(244,63,94,0.6)]"
                initial={{ scale: 0.9 }}
                animate={{ scale: [1, 1.08, 1], rotate: [0, -2, 2, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
          <p className="absolute bottom-6 left-1/2 w-full -translate-x-1/2 px-6 text-center text-white/85">
            Across every scale I know, my love for you only grows, Harshitha.
          </p>
        </motion.section>
      </div>
    </section>
  );
}
