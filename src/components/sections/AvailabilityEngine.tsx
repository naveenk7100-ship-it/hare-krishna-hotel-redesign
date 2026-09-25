import React, { useState } from 'react';
import { Calendar, User, Sparkles, CheckCircle, ShieldCheck, AlertCircle } from 'lucide-react';
import { DEMO_ROOMS } from '../../data/hotelData';
import { EnquiryData } from '../../types';

interface AvailabilityEngineProps {
  onSuccess: (data: EnquiryData) => void;
  selectedRoomId?: string;
}

export const AvailabilityEngine: React.FC<AvailabilityEngineProps> = ({
  onSuccess,
  selectedRoomId,
}) => {
  // Default dates: tomorrow and day after
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDate(dayAfter));
  const [guests, setGuests] = useState<number>(2);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [roomTier, setRoomTier] = useState<string>(selectedRoomId || 'executive-comfort');
  
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (selectedRoomId) {
      setRoomTier(selectedRoomId);
    }
  }, [selectedRoomId]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!checkOut) newErrors.checkOut = 'Check-out date is required';

    if (checkIn && checkOut) {
      const dIn = new Date(checkIn);
      const dOut = new Date(checkOut);
      if (dOut <= dIn) {
        newErrors.checkOut = 'Check-out must be after check-in';
      }
    }

    if (!fullName.trim()) newErrors.fullName = 'Please enter your name';
    if (!phone.trim()) {
      newErrors.phone = 'Please enter contact number';
    } else if (phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const refId = `HKV-${Math.floor(100000 + Math.random() * 900000)}`;
      onSuccess({
        checkIn,
        checkOut,
        guests,
        roomsCount,
        roomTier,
        fullName,
        phone,
        email,
        specialRequests,
        referenceId: refId,
      });
    }, 500);
  };

  return (
    <section id="availability" className="py-16 sm:py-20 relative bg-slate-950 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gold-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Guest Request</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2.5">
            Availability Enquiry
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed px-1">
            Submit your preferred dates and requirements. Our team can confirm availability directly.
          </p>
        </div>

        {/* Enquiry Form Card */}
        <div className="glass-panel-gold rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-9 shadow-2xl border border-gold-500/30">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
            
            {/* Step 1: Stay Dates & Preferences */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-gold-400">
                <Calendar className="w-4 h-4" />
                <span>1. Dates & Accommodation Preferences</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                
                {/* Check In */}
                <div>
                  <label htmlFor="check-in-date" className="block text-xs font-medium text-slate-300 mb-1">
                    Check-in Date *
                  </label>
                  <input
                    id="check-in-date"
                    type="date"
                    min={formatDate(today)}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className={`w-full bg-slate-900/90 border ${
                      errors.checkIn ? 'border-rose-500' : 'border-slate-700'
                    } text-slate-100 rounded-xl px-3.5 py-3 text-sm focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]`}
                  />
                  {errors.checkIn && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.checkIn}</span>
                    </p>
                  )}
                </div>

                {/* Check Out */}
                <div>
                  <label htmlFor="check-out-date" className="block text-xs font-medium text-slate-300 mb-1">
                    Check-out Date *
                  </label>
                  <input
                    id="check-out-date"
                    type="date"
                    min={checkIn || formatDate(tomorrow)}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className={`w-full bg-slate-900/90 border ${
                      errors.checkOut ? 'border-rose-500' : 'border-slate-700'
                    } text-slate-100 rounded-xl px-3.5 py-3 text-sm focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]`}
                  />
                  {errors.checkOut && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.checkOut}</span>
                    </p>
                  )}
                </div>

                {/* Guests & Rooms */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="guests-count" className="block text-xs font-medium text-slate-300 mb-1">
                      Guests
                    </label>
                    <select
                      id="guests-count"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-slate-900/90 border border-slate-700 text-slate-100 rounded-xl px-2.5 py-3 text-sm focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rooms-count" className="block text-xs font-medium text-slate-300 mb-1">
                      Rooms
                    </label>
                    <select
                      id="rooms-count"
                      value={roomsCount}
                      onChange={(e) => setRoomsCount(Number(e.target.value))}
                      className="w-full bg-slate-900/90 border border-slate-700 text-slate-100 rounded-xl px-2.5 py-3 text-sm focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]"
                    >
                      <option value={1}>1 Room</option>
                      <option value={2}>2 Rooms</option>
                      <option value={3}>3 Rooms</option>
                      <option value={4}>4+ Rooms</option>
                    </select>
                  </div>
                </div>

                {/* Room Option */}
                <div>
                  <label htmlFor="room-category" className="block text-xs font-medium text-slate-300 mb-1">
                    Room Preference
                  </label>
                  <select
                    id="room-category"
                    value={roomTier}
                    onChange={(e) => setRoomTier(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 text-slate-100 rounded-xl px-3 py-3 text-sm focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]"
                  >
                    <option value="any">Any Available Option</option>
                    {DEMO_ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>

              </div>
            </div>

            {/* Step 2: Contact Details */}
            <div className="pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-gold-400">
                <User className="w-4 h-4" />
                <span>2. Guest Contact Information</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="full-name" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="e.g. Rajesh Patel"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full bg-slate-900/90 border ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-700'
                    } text-slate-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-slate-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone-number" className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full bg-slate-900/90 border ${
                      errors.phone ? 'border-rose-500' : 'border-slate-700'
                    } text-slate-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-slate-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email-address" className="block text-xs font-medium text-slate-300 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900/90 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-3 text-sm placeholder:text-slate-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[46px]"
                  />
                </div>

              </div>

              {/* Special Requests */}
              <div className="mt-3">
                <label htmlFor="special-requests" className="block text-xs font-medium text-slate-300 mb-1">
                  Special Notes / Queries (Optional)
                </label>
                <input
                  id="special-requests"
                  type="text"
                  placeholder="e.g. Approximate arrival time, ground floor room..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-2.5 text-sm placeholder:text-slate-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 min-h-[44px]"
                />
              </div>
            </div>

            {/* Submission & Disclaimers */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-slate-800">
              <div className="flex items-start gap-2 text-xs text-slate-400 max-w-md">
                <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Enquiry Note:</strong> Direct submission for team confirmation. No automated payment or booking charge executed.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-luxe-gold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 min-h-[48px] touch-manipulation"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Submitting...</span>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>Send Availability Enquiry</span>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
