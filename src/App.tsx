import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openReservation = () => setIsModalOpen(true);
  const closeReservation = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0a111b] text-white font-sans selection:bg-[#d4af37] selection:text-gray-950">
      <Header onOpenReservation={openReservation} />
      <Hero onOpenReservation={openReservation} />
      <RoomsSection onOpenReservation={openReservation} />
      <PhilosophySection />
      <BlogSection />
      <Footer onOpenReservation={openReservation} />
      <ReservationModal isOpen={isModalOpen} onClose={closeReservation} />
    </div>
  );
}

export default App;