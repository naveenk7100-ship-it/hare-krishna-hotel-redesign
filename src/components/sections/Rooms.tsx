import React from 'react';
import { Sparkles, ArrowRight, ShieldAlert, Check } from 'lucide-react';
import { DEMO_ROOMS } from '../../data/hotelData';
import { Room } from '../../types';

interface RoomsProps {
  onSelectRoom: (room: Room) => void;
  onEnquireRoom: (room: Room) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoom, onEnquireRoom }) => {
  return (
    <section id="rooms" className="py-16 sm:py-20 relative bg-slate-950/70 border-t border-b border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-72 sm:w-80 h-72 sm:h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accommodation Options</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2.5">
            Comfortable Accommodation in <span className="gold-gradient-text">Valsad</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-1">
            Details & pricing available on enquiry. Designed for corporate visitors, traveling families, and holiday guests.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-gold-400/90 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 max-w-full text-left">
            <ShieldAlert className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>Sample Concepts &bull; Inquire for room options & seasonal rates</span>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {DEMO_ROOMS.map((room) => (
            <div
              key={room.id}
              className="group relative bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-gold-500/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden bg-slate-950">
                  <img
                    src={room.imageUrl}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-gold-500/30 text-[10px] font-bold uppercase tracking-wider text-gold-300">
                      {room.tierTag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 md:p-6 space-y-3.5">
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-gold-300 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-gold-400/80 mt-0.5 font-medium">
                      {room.tagline}
                    </p>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {room.description}
                  </p>

                  {/* Room Features Preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Included Highlights:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3 text-gold-400 flex-shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer & CTAs */}
              <div className="p-4 sm:p-5 md:p-6 pt-0 border-t border-slate-800/50 mt-3 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Rate:</span>
                  <span className="font-semibold text-gold-300 text-xs sm:text-sm">
                    Details on enquiry
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectRoom(room)}
                    className="w-full py-2.5 px-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center justify-center gap-1 min-h-[44px] touch-manipulation"
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3 h-3 text-gold-400" />
                  </button>

                  <button
                    onClick={() => onEnquireRoom(room)}
                    className="w-full py-2.5 px-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-luxe-gold transition-all duration-200 min-h-[44px] touch-manipulation"
                  >
                    Enquire
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
