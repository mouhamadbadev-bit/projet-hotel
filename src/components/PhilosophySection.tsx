import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="histoire" className="py-20 bg-[#101b2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#142238] border border-white/5 rounded-3xl p-8 sm:p-14">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">NOTRE PHILOSOPHIE</span>
            <h2 className="text-3xl font-serif font-bold text-white">L'art de l'hospitalité de luxe à Dakar.</h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Notre philosophie repose sur l'art de l'hospitalité sur-mesure. Nous nous efforçons de créer un sanctuaire de luxe et de sérénité pour chaque voyageur, en anticipant vos besoins et en portant une attention méticuleuse aux moindres détails.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <h4 className="text-[#d4af37] text-xl font-bold font-serif">100%</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Vue Océan</p>
              </div>
              <div>
                <h4 className="text-[#d4af37] text-xl font-bold font-serif">24/7</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Service Majordome</p>
              </div>
              <div>
                <h4 className="text-[#d4af37] text-xl font-bold font-serif">5★</h4>
                <p className="text-[11px] text-gray-400 mt-0.5">Standing International</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl aspect-16/10">
            <img 
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80" 
              alt="Intérieur de l'hôtel" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};