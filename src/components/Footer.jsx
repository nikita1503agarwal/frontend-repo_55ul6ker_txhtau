import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-white/60">
      <p>Made with endless love · {year}</p>
    </footer>
  );
}
