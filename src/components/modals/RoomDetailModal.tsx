import React, { useEffect, useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { Room } from '../../types';

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (room: Room) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onEnquire,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [room]);

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

  if (!isOpen || !room) return null;

  const allImages = [room.imageUrl, ...(room.additionalImages || [])];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in my-8">
        
        {/* Main Image Banner */}
        <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-950">
          <img
            src={allImages[activeImageIndex]}
            alt={room.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tier Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-gold-500/40 text-xs font-bold uppercase tracking-wider text-gold-300">
              {room.tierTag}
            </span>
          </div>

          {/* Thumbnail strip */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md p-1.5 rounded-xl border border-slate-800">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-11 h-9 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-gold-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="absolute bottom-4 left-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {room.name}
            </h3>
            <p className="text-xs text-gold-300 font-medium">
              {room.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[55vh] overflow-y-auto">
          
          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-gold-300">
              Accommodation Concept
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {room.longDescription}
            </p>
          </div>

          {/* Sample Features */}
          <div className="space-y-2.5">
            <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-gold-300">
              Sample Features (Details on enquiry)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Notice */}
          <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-start gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Information on Request:</strong>
              <p className="text-slate-400 mt-0.5">
                Room categories, inclusions, and tariffs are subject to confirmation based on guest dates and requirements.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[11px] text-slate-400 block">Tariff Details</span>
            <span className="font-serif font-bold text-gold-300 text-sm">Available on Enquiry</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white border border-slate-800"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(room);
              }}
              className="flex-1 sm:flex-none bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-luxe-gold transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Enquire This Room</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
