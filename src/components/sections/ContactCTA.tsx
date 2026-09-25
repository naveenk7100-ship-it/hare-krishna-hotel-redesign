import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

interface ContactCTAProps {
  onCheckAvailability: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onCheckAvailability }) => {
  const [name, setName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phoneOrEmail.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner CTA */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 mb-14 border border-gold-500/40 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guest Enquiries & Bookings</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Planning Your Stay?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Get in touch with <strong className="text-white">{HOTEL_INFO.name}</strong> for room availability, dining enquiries, and travel assistance in Valsad, Gujarat.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-sm sm:max-w-md mx-auto">
              <button
                onClick={onCheckAvailability}
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-950 font-bold px-7 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-luxe-gold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Availability</span>
              </button>

              <a
                href="https://wa.me/?text=Hello%20Hare%20Krishna%20Hotel%2C%20I%20have%20an%20enquiry%20regarding%20stay%20and%20dining%20in%20Valsad."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-7 py-3 rounded-xl text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info & Direct Message Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            <h3 className="font-serif font-bold text-xl text-white mb-1">
              Contact & Enquiries
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Get in touch with our team in Valsad for booking enquiries, directions, and dining assistance.
            </p>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hotel Location</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Hare Krishna Hotel, Valsad, Gujarat - 396001, India</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Front Desk Enquiries</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Direct contact available for stay inquiries</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Email Assistance</h4>
                  <p className="text-xs text-slate-300 mt-0.5">enquiries@harekrishnahotel-valsad.in</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Guest Assistance</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Assisting with stay & dining requirements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Box */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1">
              Send an Enquiry
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-4">
              Have a question regarding accommodation or dining in Valsad? Send us a note below.
            </p>

            {submitted ? (
              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-2.5 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-base text-white">Enquiry Received!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, {name}. Your inquiry has been noted in this demo simulation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhoneOrEmail('');
                    setMessage('');
                  }}
                  className="mt-1 text-xs text-gold-400 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Amit Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-slate-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-300 mb-1">
                      Phone / Email *
                    </label>
                    <input
                      id="contact-phone"
                      type="text"
                      required
                      placeholder="+91 98765 43210 or email"
                      value={phoneOrEmail}
                      onChange={(e) => setPhoneOrEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-slate-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message / Query *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="How can we assist your stay or dining in Valsad?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-slate-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-luxe-gold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
