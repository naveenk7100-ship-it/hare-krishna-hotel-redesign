import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import { EnquiryData } from '../../types';
import { DEMO_ROOMS } from '../../data/hotelData';

interface EnquirySuccessModalProps {
  data: EnquiryData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const EnquirySuccessModal: React.FC<EnquirySuccessModalProps> = ({
  data,
  isOpen,
  onClose,
}) => {
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

  if (!isOpen || !data) return null;

  const roomObj = DEMO_ROOMS.find((r) => r.id === data.roomTier);
  const roomName = roomObj ? roomObj.name : 'Any Available Option';

  const waMessage = encodeURIComponent(
    `Hello Hare Krishna Hotel (Valsad)!\nI would like to enquire about room availability.\n\n` +
    `• Ref ID: ${data.referenceId}\n` +
    `• Name: ${data.fullName}\n` +
    `• Check-in: ${data.checkIn}\n` +
    `• Check-out: ${data.checkOut}\n` +
    `• Guests: ${data.guests} | Rooms: ${data.roomsCount}\n` +
    `• Preferred Option: ${roomName}\n` +
    (data.specialRequests ? `• Notes: ${data.specialRequests}\n` : '') +
    `\nPlease share availability and details.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-lg bg-slate-900 border border-gold-500/40 rounded-2xl shadow-2xl overflow-hidden animate-fade-in my-8">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-emerald-950/60 to-slate-950 border-b border-slate-800 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2.5 shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">
            Enquiry Received &bull; Demo Simulation
          </span>
          <h3 className="font-serif text-2xl font-bold text-white mt-1">
            Thank You, {data.fullName.split(' ')[0]}!
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Your enquiry reference is <strong className="text-gold-300 font-mono">{data.referenceId}</strong>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[55vh] overflow-y-auto">
          
          {/* Summary Box */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-slate-400">Preferred Room:</span>
              <span className="font-semibold text-white">{roomName}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
              <div>
                <span className="text-slate-400 block">Check-in:</span>
                <span className="font-medium text-slate-200">{data.checkIn}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Check-out:</span>
                <span className="font-medium text-slate-200">{data.checkOut}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
              <div>
                <span className="text-slate-400 block">Guests & Rooms:</span>
                <span className="font-medium text-slate-200">{data.guests} Guests &bull; {data.roomsCount} Room(s)</span>
              </div>
              <div>
                <span className="text-slate-400 block">Contact:</span>
                <span className="font-medium text-slate-200">{data.phone}</span>
              </div>
            </div>

            {data.specialRequests && (
              <div>
                <span className="text-slate-400 block">Notes:</span>
                <span className="text-slate-300 italic">{data.specialRequests}</span>
              </div>
            )}
          </div>

          {/* WhatsApp Direct Connect Button */}
          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs space-y-2.5">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold">
              <MessageSquare className="w-4 h-4" />
              <span>Simulated WhatsApp Connect:</span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Connect directly with the front desk team on WhatsApp with the enquiry details pre-filled.
            </p>
            <a
              href={`https://wa.me/?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded-lg text-xs tracking-wider transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open Pre-filled WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Demo Disclaimer */}
          <div className="flex items-start gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-500/70 flex-shrink-0 mt-0.5" />
            <span>
              This is an interactive demo simulation. No automated booking was made.
            </span>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
