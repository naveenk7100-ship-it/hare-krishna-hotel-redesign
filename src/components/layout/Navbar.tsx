import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

interface NavbarProps {
  onOpenAvailability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAvailability }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Demo Banner */}
      <div className="bg-gold-500/10 border-b border-gold-500/20 text-gold-300 text-[11px] sm:text-xs py-1.5 px-3 text-center relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
          <span className="truncate">Website Redesign Concept &bull; Valsad, Gujarat</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 sm:py-3 shadow-xl shadow-black/40'
            : 'bg-luxe-bg/95 backdrop-blur-md py-3 sm:py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none flex-shrink-0 min-h-[44px]"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-gold-400/20 to-gold-600/30 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-md group-hover:border-gold-400 transition-colors">
                <span className="font-serif font-bold text-base sm:text-lg tracking-wider text-gold-300">HK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm sm:text-base md:text-lg tracking-wide text-white group-hover:text-gold-300 transition-colors leading-tight">
                  {HOTEL_INFO.name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-widest text-gold-400 uppercase">
                  Valsad &bull; Gujarat
                </span>
              </div>
            </a>

            {/* Desktop Navigation (large screens) */}
            <nav className="hidden xl:flex items-center space-x-5 2xl:space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs font-medium text-slate-300 hover:text-gold-300 transition-colors py-2 px-1 relative group tracking-wider uppercase"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-2.5 sm:gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-750 hover:border-slate-600 transition-all min-h-[40px]"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Contact</span>
              </a>
              <button
                onClick={onOpenAvailability}
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-luxe-gold transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 min-h-[40px]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Check Availability</span>
              </button>
            </div>

            {/* Mobile Actions: Enquire Button + Hamburger (min 44px tap target) */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={onOpenAvailability}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-3 py-2 rounded-lg text-xs tracking-wider flex items-center gap-1.5 shadow-sm min-h-[44px] touch-manipulation"
                aria-label="Check Availability"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-gold-400 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Full-Screen Slide-Down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[calc(100%+1px)] bottom-0 bg-slate-950/98 backdrop-blur-3xl z-50 border-t border-slate-800 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 animate-fade-in safe-area-bottom">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Valsad, Gujarat</span>
                </div>
                <span className="text-[11px] text-gold-400 font-medium">Hare Krishna Hotel</span>
              </div>

              {/* Navigation list with touch targets (min 48px) */}
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-gold-300 hover:bg-slate-900 active:bg-slate-850 transition-colors flex items-center justify-between uppercase tracking-wider min-h-[48px] touch-manipulation"
                  >
                    <span>{link.name}</span>
                    <span className="text-gold-400/50 text-sm">&rsaquo;</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-4 border-t border-slate-800 space-y-2.5 pb-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvailability();
                }}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-slate-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg min-h-[48px] touch-manipulation"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Availability & Rates</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919999999999"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Direct</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white min-h-[44px]"
                >
                  <span>Quick Message</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
