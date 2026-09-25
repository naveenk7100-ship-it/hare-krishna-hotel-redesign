import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../types';
import { GALLERY_ITEMS } from '../../data/hotelData';

interface LightboxModalProps {
  isOpen: boolean;
  currentItem: GalleryItem | null;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  currentItem,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % GALLERY_ITEMS.length);
      }
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, onClose, onNavigate]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-xl">
      {/* Close button (min 44x44px) */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation shadow-lg"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation shadow-lg"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % GALLERY_ITEMS.length)}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation shadow-lg"
        aria-label="Next photo"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Center Image Container */}
      <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center px-6 sm:px-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 max-h-[55vh] sm:max-h-[68vh] flex items-center justify-center bg-black">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[55vh] sm:max-h-[68vh] w-auto max-w-full object-contain animate-fade-in"
          />
        </div>

        {/* Caption */}
        <div className="mt-3 sm:mt-4 text-center text-slate-200 max-w-lg">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-[10px] uppercase font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
              {currentItem.category}
            </span>
            <span className="text-[11px] text-slate-400">
              {currentIndex + 1} of {GALLERY_ITEMS.length}
            </span>
          </div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
