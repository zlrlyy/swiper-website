
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="snap-slide flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-starry-night-sky-with-a-shooting-star-11593-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-[#d4af37] text-sm md:text-lg tracking-[0.5em] font-cinzel mb-4 uppercase">A New Era Begins</h2>
        <h1 className="text-6xl md:text-9xl font-cinzel font-bold mb-8 gold-glow tracking-wider">MYTHOS</h1>
        <p className="text-lg md:text-2xl font-light tracking-widest uppercase opacity-70 mb-12">Eternal Winds</p>
        
        <button className="px-12 py-4 border border-[#d4af37] text-[#d4af37] font-cinzel tracking-[0.2em] hover:bg-[#d4af37] hover:text-black transition-all duration-500 uppercase">
          Enter the World
        </button>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
