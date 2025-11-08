import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-black pb-12 pt-10 text-center text-white/60">
      <p>Made with endless love · {year}</p>
    </footer>
  );
};

export default Footer;
