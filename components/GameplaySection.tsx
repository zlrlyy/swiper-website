
import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Wind, Map, Shield } from 'lucide-react';

const FEATURES = [
  { icon: <Sword />, title: "Precision Combat", desc: "A fluid, stance-based system that rewards timing and strategy." },
  { icon: <Wind />, title: "Elemental Mastery", desc: "Harness the power of the Eternal Winds to manipulate the battlefield." },
  { icon: <Map />, title: "Living World", desc: "A vast, seamless open world that reacts to your choices and the seasons." },
  { icon: <Shield />, title: "Legendary Echoes", desc: "Equip artifacts of ancient heroes to unlock unique skill branches." }
];

const GameplaySection: React.FC = () => {
  return (
    <section className="snap-slide bg-[#080808] flex items-center justify-center py-20 px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-[#d4af37] font-cinzel text-sm tracking-[0.3em] mb-4">REVOLUTIONARY MECHANICS</h2>
          <h3 className="text-5xl md:text-7xl font-cinzel font-bold mb-8">Forged in <br/>Battle</h3>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            Experience an action-RPG that redefines what mobility and combat feel like in an open world environment.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FEATURES.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-[#d4af37] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-xl font-cinzel mb-2">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square md:aspect-auto md:h-[600px]">
           <img 
             src="https://picsum.photos/seed/gameplay/800/1000" 
             className="w-full h-full object-cover rounded-sm border border-gray-800 grayscale hover:grayscale-0 transition-all duration-700" 
             alt="Gameplay preview"
           />
           <div className="absolute inset-0 border-[12px] border-black/20 pointer-events-none" />
           <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-[#d4af37]" />
           <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-[#d4af37]" />
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
