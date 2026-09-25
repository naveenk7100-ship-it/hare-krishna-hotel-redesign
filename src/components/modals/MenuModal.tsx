import React, { useState, useEffect } from 'react';
import { X, Utensils, ShieldAlert, Check } from 'lucide-react';
import { SAMPLE_MENU_ITEMS } from '../../data/hotelData';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, onEnquire }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Regional Specialities (Sample)', 'Main Course & Curries (Sample)', 'Breads & Tandoor (Sample)', 'Beverages & Sweets (Sample)'];

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

  const filteredItems = selectedCategory === 'All'
    ? SAMPLE_MENU_ITEMS
    : SAMPLE_MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl bg-slate-900 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  Sample Dining Selections
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-gold-300 border border-slate-700">
                  Demo Concept
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Hare Krishna Hotel &bull; Valsad, Gujarat
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Disclaimer notice */}
        <div className="bg-amber-950/30 border-b border-amber-800/30 px-6 py-2 flex items-center gap-2 text-xs text-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Demo Representation: Menu items are representative samples to illustrate the dining section design.</span>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-3 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-gold-500 text-slate-950 shadow-md'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {category.replace(' (Sample)', '')}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="p-6 max-h-[50vh] overflow-y-auto space-y-3.5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-xs sm:text-sm text-white">{item.name}</h4>
                    {item.dietary === 'chef-special' && (
                      <span className="text-[9px] font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20 whitespace-nowrap">
                        Special
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-slate-900 text-slate-500">
                  <span className="text-gold-400/80">{item.category.replace(' (Sample)', '')}</span>
                  <span>Contact for daily menu</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-400 mt-3">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold-400" />
              <span>Special meal requests and arrangements accommodated on prior enquiry.</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onEnquire();
            }}
            className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider"
          >
            Dining Enquiry
          </button>
        </div>

      </div>
    </div>
  );
};
