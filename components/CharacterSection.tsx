
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CHARACTERS } from '../constants';
import { Character } from '../types';

const CharacterSection: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<Character>(CHARACTERS[0]);

  return (
    <section className="snap-slide bg-[#050505] flex flex-col md:flex-row items-center justify-center px-8 md:px-24 py-20 overflow-hidden">
      <div className="flex-1 z-10 mb-10 md:mb-0">
        <motion.div
          key={selectedChar.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#d4af37] font-cinzel tracking-widest text-sm">{selectedChar.title}</span>
          <h2 className="text-5xl md:text-7xl font-cinzel font-bold mt-2 mb-6">{selectedChar.name}</h2>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
            {selectedChar.description}
          </p>

          <div className="space-y-4 mb-10">
             {Object.entries(selectedChar.stats).map(([stat, val]) => (
               <div key={stat} className="w-full max-w-md">
                 <div className="flex justify-between text-xs uppercase tracking-widest mb-1 font-cinzel">
                   <span>{stat}</span>
                   <span>{val}%</span>
                 </div>
                 <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${val}%` }}
                     className="h-full bg-[#d4af37]"
                   />
                 </div>
               </div>
             ))}
          </div>
        </motion.div>

        <div className="flex gap-4">
          {CHARACTERS.map((char) => (
            <button
              key={char.id}
              onClick={() => setSelectedChar(char)}
              className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                selectedChar.id === char.id ? 'border-[#d4af37] scale-110 shadow-lg shadow-[#d4af37]/20' : 'border-gray-800 grayscale hover:grayscale-0'
              }`}
            >
              <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedChar.id}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.8 }}
            className="w-[300px] md:w-[450px] aspect-[2/3] relative"
          >
             <div className="absolute inset-0 border-[1px] border-[#d4af37]/30 -translate-x-4 translate-y-4 z-0" />
             <img 
               src={selectedChar.image} 
               alt={selectedChar.name} 
               className="w-full h-full object-cover relative z-10 border border-gray-800" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CharacterSection;
