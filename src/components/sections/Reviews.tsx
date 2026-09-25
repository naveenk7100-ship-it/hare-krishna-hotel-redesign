import React from 'react';
import { ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

export const Reviews: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${HOTEL_INFO.googleMapsQuery}`;

  return (
    <section id="reviews" className="py-20 relative bg-slate-950 border-t border-b border-slate-900 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Review Presentation Card */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold-500/30 text-center relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Customer Reviews</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Google Reviews
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            See verified customer feedback directly on Google Maps.
          </p>

          {/* Sourced Trust Box */}
          <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-slate-800 px-6 py-4 rounded-2xl mb-8 shadow-inner text-xs text-slate-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-left">
              Real guest impressions and feedback hosted on the official Google listing.
            </span>
          </div>

          {/* Verification CTA */}
          <div className="flex justify-center mb-6">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-luxe-gold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>View on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Ethical Trust Disclaimer */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>
              <strong>Transparency Note:</strong> Direct link to public Google reviews without fabricated quotes or unverified metrics.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
