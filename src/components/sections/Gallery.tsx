import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/hotelData';
import { GalleryItem } from '../../types';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Views' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'dining', label: 'Dining & Food' },
    { id: 'ambience', label: 'Ambiance' },
    { id: 'exterior', label: 'Exterior' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-20 relative bg-luxe-bg overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-72 sm:w-80 h-72 sm:h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Tour & Moments</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2.5">
            A Glimpse into <span className="gold-gradient-text">Our World</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-1">
            Explore our welcoming suites, dining spaces, and pleasant hospitality surroundings in Valsad, Gujarat.
          </p>
        </div>

        {/* Filter Tabs (Horizontal Scroll on mobile with min 44px tap target) */}
        <div className="flex items-center sm:justify-center gap-2 mb-8 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all min-h-[44px] flex items-center justify-center touch-manipulation ${
                activeFilter === filter.id
                  ? 'bg-gold-500 text-slate-950 shadow-luxe-gold'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-slate-800 bg-slate-900 h-60 sm:h-64 md:h-72 touch-manipulation"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-75 sm:opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Hover icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-gold-500/30 flex items-center justify-center text-gold-400 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Caption & Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-gold-400 bg-slate-950/80 px-2 py-0.5 rounded border border-gold-500/20 mb-1 inline-block">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-sm sm:text-base text-white group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
