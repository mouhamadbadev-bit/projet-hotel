import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="accueil" className="relative pt-12 pb-20 overflow-hidden bg-linear-to-b from-[#0a111b] to-[#101b2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">
              HOSPITALITÉ D'EXCEPTION ET RAFFINEMENT
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight leading-tight text-white">
              L'élégance et le confort <span className="text-[#d4af37] italic">à Dakar</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm max-w-lg leading-relaxed">
              Vivez un séjour inoubliable face à l'Océan Atlantique, dans un cadre prestigieux alliant modernité et art de vivre sénégalais.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onOpenReservation}
                className="bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium px-6 py-3 rounded-lg text-xs transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider shadow-lg shadow-[#d4af37]/10"
              >
                <span>Réserver maintenant</span> <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a 
                href="#chambres" 
                className="border border-white/20 hover:border-[#d4af37] text-white font-medium px-6 py-3 rounded-lg text-xs transition-all flex items-center gap-2"
              >
                Découvrir nos suites
              </a>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="flex text-[#d4af37] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                ))}
              </div>
              <p className="text-xs text-gray-300 font-medium">Établissement 5 étoiles - 98% de clients conquis</p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-4/3">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80" 
                alt="Piscine de l'Hôtel Dakar Prestige" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};