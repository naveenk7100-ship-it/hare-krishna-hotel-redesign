import React from 'react';
import { Bed, MapPinned, Utensils, Headphones, Sparkles, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/hotelData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed':
        return <Bed className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'MapPinned':
        return <MapPinned className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Hare Krishna Advantage</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2.5">
            Why Guests Choose <span className="gold-gradient-text">Our Hospitality</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-1">
            From strategic proximity to comfortable room accommodations and dining services in Valsad.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={feature.id}
              className="relative group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-gold-500/40 p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  <span className="font-serif font-bold text-xl sm:text-2xl text-slate-700 group-hover:text-gold-500/40 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-2 group-hover:text-gold-200 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-gold-400/90 font-medium">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Guest Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
