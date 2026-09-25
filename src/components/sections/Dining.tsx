import React from 'react';
import { Utensils, Sparkles, BookOpen, Clock, ShieldAlert, ArrowRight } from 'lucide-react';
import { SAMPLE_MENU_ITEMS } from '../../data/hotelData';

interface DiningProps {
  onOpenMenu: () => void;
  onDiningEnquiry: () => void;
}

export const Dining: React.FC<DiningProps> = ({ onOpenMenu, onDiningEnquiry }) => {
  return (
    <section id="dining" className="py-16 sm:py-20 relative bg-luxe-bg overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Restaurant & Food Service</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2.5">
            Dining at <span className="gold-gradient-text">Hare Krishna Hotel</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-1">
            Explore dining options and enquire about today's menu and availability.
          </p>
        </div>

        {/* Highlight Banner with Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          
          {/* Left: Food Imagery with overlaid badges */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              <div className="space-y-2.5 sm:space-y-3.5">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 h-36 xs:h-40 sm:h-48 md:h-52">
                  <img
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
                    alt="Sample Food Presentation"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 h-28 xs:h-32 sm:h-40">
                  <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                    alt="Dining Table Setup"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3.5 pt-4 sm:pt-5">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 h-28 xs:h-32 sm:h-40">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                    alt="Dining Space"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 h-36 xs:h-40 sm:h-48 md:h-52">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                    alt="Culinary Variety"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950/90 backdrop-blur-xl border border-gold-500/40 p-2.5 sm:p-3.5 rounded-2xl shadow-2xl text-center">
              <span className="text-gold-400 font-serif font-bold text-sm sm:text-base block">On-Site Dining</span>
              <span className="text-[9px] sm:text-[10px] text-slate-300">Fresh Meals & Service</span>
            </div>
          </div>

          {/* Right: Narrative & Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
              Welcoming Dining for Hotel Guests & Visitors
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Our on-site dining space offers wholesome, freshly prepared meals in a clean and comfortable setting. Guests can enjoy traditional meal options, quick bites, and daily refreshment services.
            </p>

            {/* Feature List */}
            <div className="space-y-2">
              <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Meal Options & Specials</h4>
                  <p className="text-[11px] text-slate-400">Varied meal options prepared daily with hygiene and quality ingredients.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Breakfast, Lunch & Dinner</h4>
                  <p className="text-[11px] text-slate-400">Serving schedules aligned for traveling guests and local patrons.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={onOpenMenu}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider shadow-luxe-gold transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px] touch-manipulation"
              >
                <BookOpen className="w-4 h-4" />
                <span>View Sample Menu</span>
              </button>

              <button
                onClick={onDiningEnquiry}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-slate-200 hover:text-gold-300 border border-slate-700 hover:border-gold-500/40 transition-all flex items-center justify-center gap-2 min-h-[44px] touch-manipulation"
              >
                <span>Dining Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
              <ShieldAlert className="w-3.5 h-3.5 text-gold-500/70 flex-shrink-0" />
              <span>Sample menu items shown for presentation purposes</span>
            </div>

          </div>

        </div>

        {/* Sample Dishes Preview */}
        <div className="pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif font-bold text-sm sm:text-base text-white">Sample Menu Selections</h4>
            <button
              onClick={onOpenMenu}
              className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1 min-h-[40px] touch-manipulation"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SAMPLE_MENU_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-gold-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] uppercase font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">
                    {item.category.replace(' (Sample)', '')}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">Sample</span>
                </div>
                <h5 className="font-medium text-xs text-white mb-0.5">{item.name}</h5>
                <p className="text-[11px] text-slate-400 line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
