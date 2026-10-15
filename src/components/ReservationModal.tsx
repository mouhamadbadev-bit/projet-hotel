import React, { useState } from 'react';
import { X, Calendar, Users, User, Phone, Mail, BedDouble, } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Remplace "votre-id-formspree" par ton endpoint Formspree (ex: "https://formspree.io/f/xyzngwqe")
      const response = await fetch(`https://formspree.io/f/xkjokove`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch  {
      alert("Erreur de connexion réseau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0d1624] border border-[#d4af37]/40 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase">Hôtel Dakar Prestige</span>
              <h3 className="text-2xl font-serif font-bold mt-1 text-white">Réservez votre séjour</h3>
              <p className="text-gray-400 text-xs mt-1">Remplissez ce formulaire pour valider votre réservation instantanément.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Nom complet</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Moustapha Ba" 
                      className="w-full bg-[#132035] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="+221 77..." 
                      className="w-full bg-[#132035] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Adresse Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="exemple@email.com" 
                    className="w-full bg-[#132035] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Date d'arrivée</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="date" 
                      name="checkin_date"
                      required
                      className="w-full bg-[#132035] border border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Date de départ</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="date" 
                      name="checkout_date"
                      required
                      className="w-full bg-[#132035] border border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Nombre de personnes</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <select 
                      name="guests"
                      className="w-full bg-[#132035] border border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-[#d4af37] transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, '6+'].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Personne' : 'Personnes'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Type de chambre / suite</label>
                  <div className="relative">
                    <BedDouble className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <select 
                      name="room_type"
                      className="w-full bg-[#132035] border border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-xs text-gray-300 focus:outline-none focus:border-[#d4af37] transition-colors"
                    >
                      <option value="Chambre Supérieure">Chambre Supérieure</option>
                      <option value="Suite Exécutive">Suite Exécutive</option>
                      <option value="Villa Privée avec Piscine">Villa Privée avec Piscine</option>
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full mt-3 bg-[#d4af37] hover:bg-[#c59b27] text-gray-950 font-medium py-3 rounded-lg text-xs transition-colors shadow-lg shadow-[#d4af37]/10 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? "Envoi en cours..." : "Confirmer la réservation"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Demande envoyée !</h3>
            <p className="text-gray-300 text-xs max-w-xs mx-auto leading-relaxed">
              Votre demande de réservation a bien été transmise à notre réception. Nous vous contacterons très rapidement par e-mail ou téléphone pour la confirmation finale.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-xs transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};