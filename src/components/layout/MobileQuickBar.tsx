import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileQuickBarProps {
  onOpenAvailability: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenAvailability }) => {
  return (
    <aside
      aria-label="Mobile Quick Action Bar"
      className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-gold-500/20 px-3 pt-2 safe-area-bottom shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mb-1">
        <a
          href="tel:+919999999999"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 active:bg-slate-800 text-[11px] font-medium transition-colors min-h-[44px] touch-manipulation"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="truncate">Call Direct</span>
        </a>

        <a
          href="https://wa.me/?text=Hello%20Hare%20Krishna%20Hotel%2C%20I%20would%20like%20to%20enquire%20about%20room%20availability%20in%20Valsad."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 active:bg-emerald-900/70 text-[11px] font-medium transition-colors min-h-[44px] touch-manipulation"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="truncate">WhatsApp</span>
        </a>

        <button
          onClick={onOpenAvailability}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-slate-950 font-bold active:from-gold-600 active:to-gold-700 text-[11px] shadow-md transition-all min-h-[44px] touch-manipulation"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="truncate">Availability</span>
        </button>
      </div>
    </aside>
  );
};
