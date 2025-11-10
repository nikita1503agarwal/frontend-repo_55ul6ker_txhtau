import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MemoryModal({ open, onClose, memory }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">
                {memory?.title || 'A Memory'}
              </h3>
              <button onClick={onClose} className="rounded-md px-3 py-1.5 text-sm text-white/70 hover:bg-white/10">
                Close
              </button>
            </div>
            {memory?.image && (
              <img src={memory.image} alt="memory" className="mt-4 h-48 w-full rounded-lg object-cover" />
            )}
            <p className="mt-4 text-white/80">{memory?.text || 'This moment means the world to me.'}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );}
