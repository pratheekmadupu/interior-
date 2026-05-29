import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Bespoke Services", path: "/services" },
    { label: "Signature Portfolio", path: "/portfolio" },
    { label: "Voices of Trust", path: "/testimonials" },
    { label: "FAQ Support", path: "/faq" },
    { label: "Contact Us", path: "/contact" }
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-gold/10 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Side */}
        <div className="flex flex-col items-start">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start focus:outline-none text-left mb-6"
          >
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white transition-colors hover:text-gold">
              SEAFOAM
            </span>
            <span className="font-sans text-[0.65rem] tracking-[0.45em] text-gold uppercase -mt-1 font-bold">
              Interiors
            </span>
          </Link>
          <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm mb-6 font-sans">
            Bespoke luxury interior architecture design studio based in Hyderabad. We deliver end-to-end modular solutions & turnkey project execution that reflects timeless class.
          </p>
          
          <div className="flex items-center space-x-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="currentColor" className="text-gold" />
            ))}
            <span className="text-[0.65rem] tracking-wider text-white/60 font-semibold uppercase font-sans">
              4.9 RATING (29 CLIENTS)
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-light text-gold tracking-widest uppercase mb-6 font-semibold">
            Quick Navigation
          </h4>
          <ul className="space-y-3.5 font-sans">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className="text-xs tracking-wider text-white/60 hover:text-gold transition-colors focus:outline-none"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Navigation */}
        <div>
          <h4 className="font-serif text-lg font-light text-gold tracking-widest uppercase mb-6 font-semibold">
            Bespoke Solutions
          </h4>
          <ul className="space-y-3.5 font-sans text-xs tracking-wider text-white/60 font-light">
            <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => handleLinkClick("/services")}>Residential Architecture</li>
            <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => handleLinkClick("/services")}>Luxury Villa Interiors</li>
            <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => handleLinkClick("/services")}>Apartment Space Optimization</li>
            <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => handleLinkClick("/services")}>Turnkey Project Handover</li>
            <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => handleLinkClick("/services")}>Modular Culinary Hubs</li>
          </ul>
        </div>

        {/* Studio Info */}
        <div>
          <h4 className="font-serif text-lg font-light text-gold tracking-widest uppercase mb-6 font-semibold">
            Design Studio
          </h4>
          <ul className="space-y-4 text-xs font-light text-white/60 font-sans">
            <li className="leading-relaxed">
              H.No.22-773, Plot No.773 Road No.5,<br />
              Sri Renuka Nilayam, Shivaji Marg,<br />
              Vinayaka Hills Phase-3, Almasguda,<br />
              Telangana &ndash; 500112
            </li>
            <li>
              <span className="font-bold text-white/80 uppercase block mb-1">Direct Call Coordination</span>
              <a href="tel:+918074690803" className="hover:text-gold transition-colors font-semibold">
                +91 80746 90803
              </a>
            </li>
            <li>
              <span className="font-bold text-white/80 uppercase block">Consultation Hours</span>
              Open Monday &ndash; Saturday, 9:00 AM &ndash; 9:00 PM
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-sans">
        <span className="text-[0.65rem] text-white/40 tracking-wider text-center md:text-left">
          &copy; 2026 SEAFOAM INTERIORS. All Rights Reserved. &bull; Vinayaka Hills Ph-3, Almasguda, Hyderabad.
        </span>
        <span className="text-[0.65rem] text-white/30 tracking-[0.15em] uppercase hover:text-white/60 transition-colors cursor-help">
          Quiet Luxury &bull; Turnkey Execution Guarantee
        </span>
      </div>
    </footer>
  );
}
