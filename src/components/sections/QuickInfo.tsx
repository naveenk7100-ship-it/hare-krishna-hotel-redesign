import React from 'react';
import { MapPin, UtensilsCrossed, BedDouble, CalendarCheck, ArrowUpRight } from 'lucide-react';
import { QUICK_INFO_CARDS } from '../../data/hotelData';

interface QuickInfoProps {
  onCheckAvailability: () => void;
  onExploreDining: () => void;
  onBrowseRooms: () => void;
}

export const QuickInfo: React.FC<QuickInfoProps> = ({
  onCheckAvailability,
  onExploreDining,
  onBrowseRooms,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'BedDouble':
        return <BedDouble className="w-5 h-5" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  const handleAction = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (id === 'availability') onCheckAvailability();
    else if (id === 'dining') onExploreDining();
    else if (id === 'stay') onBrowseRooms();
    else {
      const el = document.querySelector('#location');
      if (el) {
        const navOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative z-20 mt-4 sm:-mt-8 md:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {QUICK_INFO_CARDS.map((card) => (
          <div
            key={card.id}
            className="group relative bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border border-slate-800 hover:border-gold-500/50 p-5 sm:p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
          >
            {/* Top Icon & Subtitle */}
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-300">
                  {getIcon(card.icon)}
                </div>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gold-400/90 px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
                  {card.subtitle}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-gold-200 transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                {card.description}
              </p>
            </div>

            {/* Bottom Link Button with min 44px height */}
            <div>
              <button
                onClick={(e) => handleAction(card.id, e)}
                className="w-full inline-flex items-center justify-between text-xs font-semibold text-gold-300 hover:text-white pt-3 border-t border-slate-800/80 group-hover:border-gold-500/30 transition-colors min-h-[44px] touch-manipulation"
              >
                <span>{card.actionText}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
