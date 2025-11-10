import React, { useEffect, useState } from 'react';
import Landing from './components/Landing';
import Garden3D from './components/Garden3D';
import MemoryModal from './components/MemoryModal';
import Footer from './components/Footer';

export default function App() {
  const [started, setStarted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeMemory, setActiveMemory] = useState(null);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetch('/src/memories.json')
      .then((res) => res.json())
      .then((data) => setMemories(data))
      .catch(() => setMemories([]));
  }, []);

  const handleLeafClick = (id) => {
    const m = memories.find((x) => x.id === id) || memories[0];
    setActiveMemory(m);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {!started ? (
        <Landing onStart={() => setStarted(true)} />
      ) : (
        <main className="mx-auto max-w-6xl px-6 py-10">
          <header className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">The Eternal Garden</h1>
            <p className="text-white/70">An ever-blooming world for Harshitha.</p>
          </header>
          <Garden3D onLeafClick={handleLeafClick} />
        </main>
      )}
      <Footer />
      <MemoryModal open={modalOpen} onClose={() => setModalOpen(false)} memory={activeMemory} />
    </div>
  );
}
