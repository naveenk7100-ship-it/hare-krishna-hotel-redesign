import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Hare Krishna Hotel', href: '#about' },
    { name: 'Accommodation Options', href: '#rooms' },
    { name: 'Dining Options', href: '#dining' },
    { name: 'Availability Enquiry', href: '#availability' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Google Reviews', href: '#reviews' },
    { name: 'Location & Map', href: '#location' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Brand & Introduction */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-300 font-serif font-bold text-xl">
                HK
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white tracking-wide">
                  {HOTEL_INFO.name}
                </h3>
                <p className="text-[10px] text-gold-400 font-medium tracking-wider uppercase">
                  Valsad, Gujarat
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Experience comfortable accommodation, on-site dining, and warm hospitality in Valsad, Gujarat. Convenient for corporate visits, family travel, and regional trips.
            </p>
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Guest Enquiries Welcome</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif font-semibold text-white text-sm mb-3.5 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Explore
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-xs">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold-300 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-gold-500/40 text-[10px]">&rsaquo;</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hospitality Services */}
          <div>
            <h4 className="font-serif font-semibold text-white text-sm mb-3.5 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Hospitality Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <span className="text-gold-400 font-bold">&bull;</span>
                <span>Air-Conditioned Accommodation Options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400 font-bold">&bull;</span>
                <span>On-Site Restaurant & Dining Services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400 font-bold">&bull;</span>
                <span>Guest Wi-Fi & Workspaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400 font-bold">&bull;</span>
                <span>Front Desk & Enquiry Assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-400 font-bold">&bull;</span>
                <span>Proximity to Transit & Key City Points</span>
              </li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div>
            <h4 className="font-serif font-semibold text-white text-sm mb-3.5 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Contact Info
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  Valsad, Gujarat - 396001, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Enquiries: Available on Request</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>enquiries@harekrishnahotel-valsad.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Front Desk Assistance & Enquiries</span>
              </div>
              
              <div className="pt-1.5">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${HOTEL_INFO.googleMapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold-200 border-b border-gold-500/40 pb-0.5 transition-colors"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Client Presentation Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
            <span>
              <strong>Website Redesign Concept:</strong> Created for presentation purposes. Room details and menus are representative samples.
            </span>
          </div>

          <div>
            <span>&copy; {new Date().getFullYear()} Hare Krishna Hotel, Valsad. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
