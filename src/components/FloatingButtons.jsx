import { useState, useEffect } from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { useUI } from '../context/UIContext';

export function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const { openQuoteModal } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[900] flex flex-col space-y-4">
      {/* Calendar Quick Quote Trigger */}
      <button
        onClick={openQuoteModal}
        className="w-12 h-12 bg-gold hover:bg-primary text-white hover:text-gold rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Request Free Consultation"
      >
        <Calendar size={20} />
      </button>

      {/* Floating WhatsApp Action button */}
      <a
        href="https://wa.me/918074690803?text=Hi%20Seafoam%20Interiors,%20I%20am%20interested%20in%20a%20luxury%20consultation%20for%20my%20space."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Direct WhatsApp Coordinator Chat"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.054L2 22l5.077-1.332a9.936 9.936 0 004.93 1.302c5.506 0 9.99-4.478 9.99-9.985A9.988 9.988 0 0012.012 2zm.006 1.802c4.512 0 8.186 3.67 8.187 8.184a8.18 8.18 0 01-8.192 8.182 8.147 8.147 0 01-4.186-1.155l-.3-.178-3.116.817.83-3.041-.197-.313a8.16 8.16 0 01-1.213-4.312c.002-4.514 3.677-8.184 8.187-8.184zm-3.528 2.946c-.19 0-.398.05-.568.175-.17.126-.445.334-.51.464-.065.13-.19.46-.02.943.17.484.593 1.11 1.077 1.637a8.556 8.556 0 002.83 2.115c.677.37 1.066.368 1.488.22.42-.148.918-.493 1.036-.882.118-.39.118-.724.083-.79-.035-.065-.13-.1-.274-.173-.143-.073-.85-.42-.982-.468-.13-.048-.225-.073-.32.073-.095.146-.367.464-.45.56-.083.097-.166.11-.31.037-.143-.073-.604-.223-1.15-.71-.424-.378-.71-.845-.793-.99-.083-.144-.01-.22.063-.293.066-.065.143-.166.216-.25.072-.083.097-.142.144-.238.048-.095.024-.18-.012-.253-.036-.073-.32-.772-.439-1.059-.115-.28-.233-.242-.32-.246l-.273-.004z" />
        </svg>
      </a>
    </div>
  );
}
