import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to ensure readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
          To my universe
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Even across galaxies, my love finds you
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80">
          From stardust to multiverses, nothing compares to what I feel for you.
        </p>
        <a href="#scale" className="mt-10 rounded-full bg-fuchsia-500/90 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-500">
          See the scale of my love
        </a>
      </div>
    </section>
  );
};

export default Hero;
