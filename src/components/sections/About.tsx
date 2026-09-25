import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

interface AboutProps {
  onDiscoverMore: () => void;
  onExploreRooms: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverMore, onExploreRooms }) => {
  const highlights = [
    'Air-conditioned accommodation options for corporate & family travelers',
    'On-site dining space offering daily meals and refreshments',
    'Strategic location in Valsad with convenient highway & railway access',
    'Guest reception and front desk enquiry support',
    'Quiet and hospitable environment for travelers visiting Gujarat',
    'Straightforward direct enquiry process for room availability',
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative bg-luxe-bg overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80"
                alt="Hospitality Concept"
                className="w-full h-[380px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl glass-panel-gold border border-gold-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-white">Warm Gujarat Hospitality</h4>
                    <p className="text-[11px] text-gold-300">Dedicated to guest comfort and pleasant stays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping secondary floating card */}
            <div className="hidden sm:block absolute -top-5 -right-5 z-20 w-44 p-3.5 rounded-xl glass-panel border border-slate-700 shadow-2xl">
              <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Valsad</span>
              </div>
              <p className="text-[11px] text-slate-300">Convenient base for journeys across South Gujarat.</p>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Hare Krishna Hotel</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              A Welcoming Retreat in <span className="gold-gradient-text">Valsad</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Situated in the district of Valsad, <strong className="text-white font-medium">{HOTEL_INFO.name}</strong> provides guests with comfortable accommodation and on-site dining. Whether traveling for corporate commitments, family visits, or regional sightseeing, our goal is to deliver a restful and reliable experience.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              From convenient transit connectivity to dedicated guest support, we are focused on providing clean surroundings, warm hospitality, and effortless convenience during your time in Gujarat.
            </p>

            {/* Key Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onDiscoverMore}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider shadow-luxe-gold transition-all duration-200 flex items-center gap-2"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreRooms}
                className="px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-slate-200 hover:text-gold-300 border border-slate-700 hover:border-gold-500/40 transition-all"
              >
                <span>View Accommodations</span>
              </button>
            </div>

            <div className="pt-1 text-[11px] text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500/70" />
              <span>Sample presentation narrative tailored for client review</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
