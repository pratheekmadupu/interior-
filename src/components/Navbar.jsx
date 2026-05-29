import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useUI } from '../context/UIContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openQuoteModal } = useUI();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Reviews", path: "/testimonials" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[990] transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-primary/5 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start focus:outline-none group text-left"
        >
          <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-primary transition-colors group-hover:text-gold">
            SEAFOAM
          </span>
          <span className="font-sans text-[0.6rem] tracking-[0.45em] text-gold uppercase -mt-1 font-semibold">
            Interiors
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-[0.7rem] uppercase tracking-[0.2em] transition-colors relative py-1 focus:outline-none font-semibold ${
                      isActive ? "text-gold" : "text-primary/70 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={openQuoteModal}
            className="px-5 py-2.5 bg-primary hover:bg-gold text-white hover:text-primary text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-sm border border-primary/10 rounded-sm font-semibold"
          >
            Get Free Quote
          </button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-primary p-2 hover:text-gold transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-[980] bg-white/98 backdrop-blur-lg flex flex-col items-center justify-center lg:hidden transition-all duration-300 border-t border-primary/5">
          <ul className="flex flex-col items-center space-y-6 text-center mb-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-lg font-serif tracking-[0.15em] transition-colors focus:outline-none ${
                      isActive ? "text-gold font-bold" : "text-primary/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => {
              setIsMenuOpen(false);
              openQuoteModal();
            }}
            className="px-8 py-3 bg-gold hover:bg-primary text-primary hover:text-white text-xs uppercase tracking-[0.15em] transition-all duration-300 font-bold"
          >
            Book Free Consultation
          </button>
        </div>
      )}
    </header>
  );
}
