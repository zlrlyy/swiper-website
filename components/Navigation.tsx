
import React from 'react';
import { SectionType } from '../types';

interface NavigationProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const sections = Object.values(SectionType);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onNavigate(section)}
          className="group flex items-center justify-end gap-4"
        >
          <span className={`text-xs uppercase tracking-[0.2em] font-cinzel transition-all duration-300 ${
            currentSection === section ? 'opacity-100 text-[#d4af37] translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none group-hover:opacity-50'
          }`}>
            {section}
          </span>
          <div className={`w-2 h-2 rounded-full border border-[#d4af37] transition-all duration-300 ${
            currentSection === section ? 'bg-[#d4af37] scale-150' : 'bg-transparent hover:scale-125'
          }`} />
        </button>
      ))}
    </div>
  );
};

export default Navigation;
