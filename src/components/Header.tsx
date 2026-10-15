import React from 'react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0a111b]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-white">
            HÔTEL DAKAR PRESTIGE
          </span>
          <span className="text-[10px] tracking-wider text-[#d4af37] uppercase font-medium">
            Un havre d'élégance
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-gray-300">
          <a href="#accueil" className="hover:text-[#d4af37] transition-colors">ACCUEIL</a>
          <a href="#chambres" className="hover:text-[#d4af37] transition-colors">NOS CHAMBRES</a>
          <a href="#histoire" className="hover:text-[#d4af37] transition-colors">NOTRE HISTOIRE</a>
          <button 
            onClick={onOpenReservation} 
            className="hover:text-[#d4af37] transition-colors bg-transparent border-none text-xs text-gray-300 p-0 cursor-pointer"
          >
            RÉSERVATIONS
          </button>
          <a href="#blog" className="hover:text-[#d4af37] transition-colors">BLOG</a>
          <a href="#contact" className="hover:text-[#d4af37] transition-colors">CONTACT</a>
        </nav>

        <button 
          onClick={onOpenReservation}
          className="bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium px-5 py-2.5 rounded-lg text-xs transition-all shadow-lg shadow-[#d4af37]/10 cursor-pointer uppercase tracking-wider"
        >
          Réserver
        </button>
      </div>
    </header>
  );
};