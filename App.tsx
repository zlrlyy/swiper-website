
import React, { useState, useRef, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CharacterSection from './components/CharacterSection';
import GameplaySection from './components/GameplaySection';
import LoreExploreSection from './components/LoreExploreSection';
import Navigation from './components/Navigation';
import { SectionType } from './types';
import { Github, Globe, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>(SectionType.HERO);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = containerRef.current.scrollTop;
    const height = window.innerHeight;
    const index = Math.round(scrollPosition / height);
    const sections = Object.values(SectionType);
    if (sections[index] && sections[index] !== currentSection) {
      setCurrentSection(sections[index]);
    }
  };

  const navigateTo = (section: SectionType) => {
    const sections = Object.values(SectionType);
    const index = sections.indexOf(section);
    containerRef.current?.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden select-none">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full p-8 z-[100] flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-[#d4af37] rotate-45 flex items-center justify-center">
             <span className="font-cinzel font-bold -rotate-45 text-[#d4af37]">M</span>
          </div>
          <span className="font-cinzel font-bold tracking-[0.3em] text-xl">MYTHOS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-12 font-cinzel text-sm tracking-widest">
           <a href="#" className="hover:text-[#d4af37] transition-colors">WORLD</a>
           <a href="#" className="hover:text-[#d4af37] transition-colors">CHARACTERS</a>
           <a href="#" className="hover:text-[#d4af37] transition-colors">MEDIA</a>
           <a href="#" className="px-6 py-2 bg-[#d4af37] text-black font-bold hover:scale-105 transition-transform">PRE-ORDER</a>
        </div>
      </nav>

      {/* Floating Side Socials */}
      <div className="fixed left-8 bottom-12 z-50 flex flex-col gap-6 text-gray-500">
         <a href="#" className="hover:text-[#d4af37] transition-colors"><Globe size={20} /></a>
         <a href="#" className="hover:text-[#d4af37] transition-colors"><Github size={20} /></a>
         <a href="#" className="hover:text-[#d4af37] transition-colors"><MessageCircle size={20} /></a>
         <div className="w-[1px] h-24 bg-gray-800 mx-auto" />
      </div>

      {/* Main Snap Container */}
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="snap-container scroll-smooth"
      >
        <div id={SectionType.HERO}><HeroSection /></div>
        <div id={SectionType.WORLD}><GameplaySection /></div>
        <div id={SectionType.CHARACTERS}><CharacterSection /></div>
        <div id={SectionType.EXPLORE}><LoreExploreSection /></div>
        
        {/* Final CTA Section */}
        <section className="snap-slide bg-black flex flex-col items-center justify-center">
           <img 
             src="https://picsum.photos/seed/final/1920/1080" 
             className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
             alt="Background"
           />
           <div className="relative z-10 text-center">
             <h2 className="text-5xl md:text-8xl font-cinzel font-bold mb-8 gold-glow">JOIN THE LEGEND</h2>
             <p className="text-gray-400 mb-12 max-w-xl mx-auto tracking-widest">Available on PS5, Xbox Series X|S, and PC. Release Window: Q4 2025.</p>
             <div className="flex flex-col md:flex-row gap-6 justify-center">
               <button className="px-16 py-5 bg-[#d4af37] text-black font-cinzel font-bold tracking-[0.2em] hover:brightness-110 transition-all uppercase">Pre-Register Now</button>
               <button className="px-16 py-5 border border-gray-700 hover:border-[#d4af37] font-cinzel tracking-[0.2em] transition-all uppercase">Watch Trailer</button>
             </div>
           </div>
        </section>
      </div>

      {/* Slide Navigation Dots */}
      <Navigation currentSection={currentSection} onNavigate={navigateTo} />
    </div>
  );
};

export default App;
