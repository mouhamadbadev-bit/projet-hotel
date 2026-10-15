import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer id="contact" className="bg-[#070b12] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div className="space-y-4">
          <span className="font-serif tracking-widest text-lg font-bold text-white block">
            HÔTEL DAKAR PRESTIGE
          </span>
          <p className="text-gray-400 text-xs leading-relaxed">
            Votre oasis de luxe et de calme au cœur de Dakar. Vivez l'hospitalité sénégalaise dans toute sa splendeur.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-gray-950 flex items-center justify-center text-gray-300 transition-colors text-xs font-bold">f</a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-gray-950 flex items-center justify-center text-gray-300 transition-colors text-xs font-bold">ig</a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#d4af37] hover:text-gray-950 flex items-center justify-center text-gray-300 transition-colors text-xs font-bold">t</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-xs mb-4 text-[#d4af37] uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
            <li><a href="#chambres" className="hover:text-white transition-colors">Nos chambres</a></li>
            <li><a href="#histoire" className="hover:text-white transition-colors">Notre histoire</a></li>
            <li>
              <button onClick={onOpenReservation} className="hover:text-white transition-colors bg-transparent border-none text-xs text-gray-400 p-0 cursor-pointer">
                Réservations
              </button>
            </li>
            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xs mb-4 text-[#d4af37] uppercase tracking-wider">Contact & Adresse</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>Corniche Ouest, Dakar, Sénégal</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>+221 33 800 00 00</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>contact@dakarprestige.sn</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Réception 24h/24 - 7j/7</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xs mb-4 text-[#d4af37] uppercase tracking-wider">Newsletter</h4>
          <p className="text-gray-400 text-xs mb-3">Recevez nos offres exclusives et actualités de l'hôtel.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Inscription réussie !'); }} className="space-y-2">
            <input 
              type="email" 
              required
              placeholder="Votre email" 
              className="w-full bg-[#121f33] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4af37]"
            />
            <button 
              type="submit" 
              className="w-full bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>S'abonner</span>
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <span>© 2026 Hôtel Dakar Prestige. Tous droits réservés.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
};