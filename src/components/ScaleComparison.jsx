import React from 'react';

const steps = [
  { left: 'Moon', right: 'Earth', size: 56 },
  { left: 'Earth', right: 'Jupiter', size: 44 },
  { left: 'Jupiter', right: 'Sun', size: 36 },
  { left: 'Sun', right: 'Black Hole', size: 28 },
  { left: 'Black Hole', right: 'Galaxy', size: 22 },
  { left: 'Galaxy', right: 'Supercluster', size: 18 },
  { left: 'Supercluster', right: 'Observable Universe', size: 14 },
  { left: 'Universe', right: 'Multiverse', size: 10 },
  { left: 'My Multiverse', right: 'My Love', size: 8 },
];

const ScaleComparison = () => {
  return (
    <section id="scale" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">
          A tiny comparison to something immeasurable
        </h2>
        <p className="mt-3 text-center text-white/70">
          Each step grows grander, yet remains small next to what I feel for you.
        </p>

        <div className="mt-12 space-y-6">
          {steps.map((s, idx) => (
            <div key={idx} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-right text-base sm:text-lg text-white/90">{s.left}</div>
              <div className="flex items-center justify-center">
                <div
                  className="relative rounded-full bg-fuchsia-500/80 shadow-[0_0_30px_rgba(217,70,239,0.45)]"
                  style={{ width: s.size, height: s.size }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-400/40 to-white/10" />
                </div>
              </div>
              <div className="text-left text-base sm:text-lg text-white/90">{s.right}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-fuchsia-500/30 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-fuchsia-500/10 p-8 text-center">
          <p className="text-balance text-lg text-white/80">
            Moon to Earth, Earth to Jupiter, all the way to the Multiverse — each is small when compared to
          </p>
          <div className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-fuchsia-400 via-rose-400 to-indigo-400 bg-clip-text text-transparent">
            the love I carry for you.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScaleComparison;
