import React from 'react';
import Hero from './components/Hero';
import ScaleComparison from './components/ScaleComparison';
import LoveLetter from './components/LoveLetter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <ScaleComparison />
      <LoveLetter />
      <Footer />
    </div>
  );
}
