import React from 'react';
import { MapPin, Navigation, Train, Palmtree, Building2, ExternalLink, Sparkles, Compass } from 'lucide-react';
import { HOTEL_INFO, VALSAD_LANDMARKS } from '../../data/hotelData';

export const Location: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${HOTEL_INFO.googleMapsQuery}`;

  const getLandmarkIcon = (iconName: string) => {
    switch (iconName) {
      case 'Train':
        return <Train className="w-5 h-5" />;
      case 'Palmtree':
        return <Palmtree className="w-5 h-5" />;
      case 'Navigation':
        return <Navigation className="w-5 h-5" />;
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      default:
        return <MapPin className="w-5 h-5" />;
    }
  };

  return (
    <section id="location" className="py-20 relative bg-luxe-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategic Hub in Gujarat</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            Location in <span className="gold-gradient-text">Valsad, Gujarat</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Ideally positioned for convenient connectivity across South Gujarat, transit hubs, and local coastal destinations.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Map Preview Box */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 h-[360px] sm:h-[420px]">
              
              {/* Map Illustration Overlay */}
              <div className="absolute inset-0 bg-slate-950">
                <iframe
                  title="Valsad Gujarat Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59783.7431284534!2d72.89886361925345!3d20.609425419163013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c27e85c276f3%3A0xe542617637841c2c!2sValsad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70 hover:opacity-90 transition-opacity duration-300"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Floating Hotel Location Pin Card */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl glass-panel-gold border border-gold-500/40 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gold-500 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-white">
                        {HOTEL_INFO.name}
                      </h4>
                      <p className="text-xs text-slate-300">
                        Valsad, Gujarat - 396001, India
                      </p>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-gold-300 hover:text-white px-4 py-2 rounded-xl text-xs font-bold border border-gold-500/40 transition-colors shadow-md"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Key Landmarks & Proximity Guide */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1 flex items-center gap-2">
              <Compass className="w-5 h-5 text-gold-400" />
              <span>Proximity & Connectivity</span>
            </h3>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">
              Convenient access to regional transit lines, highway routes, and local coastal attractions.
            </p>

            <div className="space-y-2.5">
              {VALSAD_LANDMARKS.map((landmark, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-gold-500/30 transition-all flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {getLandmarkIcon(landmark.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h4 className="font-semibold text-xs sm:text-sm text-white truncate">
                        {landmark.name}
                      </h4>
                      <span className="text-[10px] font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20 whitespace-nowrap">
                        {landmark.distance}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {landmark.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-gold-500/40 text-xs font-semibold text-slate-200 hover:text-gold-300 transition-all flex items-center justify-center gap-2"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
