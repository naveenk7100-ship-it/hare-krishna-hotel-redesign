import React from 'react';
import { Calendar, Compass, MapPin, Sparkles, UtensilsCrossed, BedDouble, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

interface HeroProps {
  onCheckAvailability: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability, onExplore }) => {
  return (
    <section id="hero" className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 py-10 sm:py-16 md:py-20">
      {/* Background Image with warm luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Hospitality Ambience Concept"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxe-bg via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 sm:w-80 sm:h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        
        {/* Top Tag / Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-gold-500/30 text-gold-300 text-[11px] sm:text-xs md:text-sm font-medium mb-5 shadow-luxe-sm animate-fade-in max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
          <span className="truncate">Website Redesign Concept &bull; Valsad, Gujarat</span>
        </div>

        {/* Main Headline (Fluid responsive sizing) */}
        <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] mb-4 sm:mb-5 animate-fade-in-up">
          Modern Hospitality, <br className="hidden xs:inline" />
          <span className="gold-gradient-text">Made Simple</span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-xl sm:max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8 text-balance animate-fade-in px-1">
          A fresh website experience for <strong className="font-semibold text-white">{HOTEL_INFO.name}</strong>, designed to make stays, dining and enquiries easier for guests in Valsad.
        </p>

        {/* CTAs (Stack on mobile, min 48px tap target) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3.5 max-w-xs sm:max-w-md mx-auto mb-8 sm:mb-12 animate-fade-in">
          <button
            onClick={onCheckAvailability}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-luxe-gold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[48px] touch-manipulation"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Check Availability</span>
          </button>

          <button
            onClick={onExplore}
            className="w-full sm:w-auto bg-slate-900/85 hover:bg-slate-800 backdrop-blur-md border border-slate-700 hover:border-gold-500/50 text-slate-100 hover:text-gold-300 font-semibold px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] touch-manipulation"
          >
            <Compass className="w-4 h-4 text-gold-400" />
            <span>Explore Hotel</span>
          </button>
        </div>

        {/* Safe Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-3xl mx-auto pt-4 border-t border-slate-800/80 text-left">
          
          <div className="glass-panel p-2.5 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] sm:text-xs font-semibold text-white truncate">Valsad Location</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">Easy Transit</div>
            </div>
          </div>

          <div className="glass-panel p-2.5 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <BedDouble className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] sm:text-xs font-semibold text-white truncate">Accommodation</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">Comfortable Stay</div>
            </div>
          </div>

          <div className="glass-panel p-2.5 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] sm:text-xs font-semibold text-white truncate">Dining & Meals</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">Food Service</div>
            </div>
          </div>

          <div className="glass-panel p-2.5 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] sm:text-xs font-semibold text-white truncate">Guest Enquiries</div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 truncate">Direct Assistance</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
