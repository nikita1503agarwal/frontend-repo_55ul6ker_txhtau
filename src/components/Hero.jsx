import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and gradient glow that won't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Our Love, Across Every Scale
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
          Spin the red globe, feel the pull. From the tiniest moon to the farthest multiverse — my love grows larger every step of the way, Harshitha.
        </p>
        <a
          href="#scale"
          className="rounded-full bg-gradient-to-r from-rose-500 to-red-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:from-rose-400 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          Begin the journey
        </a>
      </div>
    </section>
  );
}
