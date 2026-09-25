import React, { useEffect } from 'react';
import { X, Sparkles, Check, ShieldCheck, Heart, MapPin, Coffee, Utensils, Wifi, Wind } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckAvailability: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onCheckAvailability }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in my-8">
        {/* Header with image */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
            alt="Hare Krishna Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
              Hospitality Profile
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              {HOTEL_INFO.name}
            </h3>
            <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Valsad, Gujarat, India</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="font-serif font-bold text-base text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Hospitality Overview</span>
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              At Hare Krishna Hotel, we focus on delivering comfortable lodging and convenient dining for traveling professionals, vacationers, and regional travelers in Valsad, Gujarat.
            </p>
          </div>

          {/* Highlights Grid */}
          <div>
            <h4 className="font-serif font-bold text-xs text-gold-300 uppercase tracking-wider mb-2.5">
              General Facilities & Highlights
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 text-xs text-slate-200">
                <Wind className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Air Conditioned</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 text-xs text-slate-200">
                <Wifi className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Wi-Fi Access</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 text-xs text-slate-200">
                <Utensils className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Dining Service</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 text-xs text-slate-200">
                <Coffee className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Room Service</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Front Desk Support</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center gap-2 text-xs text-slate-200">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Central Location</span>
              </div>
            </div>
          </div>

          {/* Stay Notes */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
            <h5 className="font-semibold text-white">Guest Information:</h5>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Check-in and check-out timings coordinated upon booking enquiry</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Government photo ID required at the time of check-in</span>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <Heart className="w-3.5 h-3.5 text-gold-400" />
            <span>Illustrative presentation information for client review.</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onCheckAvailability();
            }}
            className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};
