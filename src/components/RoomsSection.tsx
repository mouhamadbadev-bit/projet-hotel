import React from 'react';
import { roomsData } from '../data/hotelData';
import { ArrowRight,  } from 'lucide-react';

interface RoomsSectionProps {
  onOpenReservation: () => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="chambres" className="py-20 bg-[#0d1624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">NOS PRESTATIONS HAUT DE GAMME</span>
            <h2 className="text-3xl font-serif font-bold mt-1 text-white">Nos types de séjours</h2>
          </div>
          <button onClick={onOpenReservation} className="text-[#d4af37] text-xs font-medium flex items-center gap-1 mt-3 sm:mt-0 hover:underline cursor-pointer">
            Voir toutes les disponibilités <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div key={room.id} className="bg-[#121f33] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#d4af37]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  {room.tag && (
                    <span className="absolute top-3 left-3 z-10 bg-[#d4af37] text-gray-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {room.tag}
                    </span>
                  )}
                  <img src={room.image} alt={room.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif font-bold text-lg text-white">{room.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{room.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <span className="text-[#d4af37] font-bold text-xs">{room.price}</span>
                <button 
                  onClick={onOpenReservation}
                  className="bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#d4af37] hover:text-gray-950 px-4 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};