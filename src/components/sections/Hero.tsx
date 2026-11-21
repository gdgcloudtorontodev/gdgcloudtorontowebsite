import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Globe, 
  Bot, 
  Layers, 
  Calendar, 
  MapPin, 
  Ticket, 
  ExternalLink, 
  Clock, 
  Users, 
  CheckCircle2,
  Building2,
  Mic,
  Heart
} from 'lucide-react';
import { EVENT_DATA } from '../../data/event';
import { SPEAKERS } from '../../data/speakers';
import { PARTNERS } from '../../data/partners';

interface HeroProps {
  onRegisterClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  // Live Countdown state for Friday, December 11, 2026, 09:30 AM EST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-11T09:30:00-05:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Repeat partners & speakers list for continuous vertical marquee loop
  const verticalMarqueeSpeakers = [...SPEAKERS, ...SPEAKERS, ...SPEAKERS, ...SPEAKERS];
  const verticalMarqueePartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 sm:pt-36 pb-12 overflow-hidden bg-gradient-to-b from-white via-[#F8F9FA] to-[#F1F3F4]">
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-google-blue/15 via-google-green/10 to-google-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center">
          
          {/* Left Column: DevFest Speakers Vertical Scroll */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-200 shadow-md relative overflow-hidden flex flex-col h-[480px] sm:h-[540px] lg:h-[620px]">
              {/* Header */}
              <div className="flex items-center justify-between gap-1 pb-2.5 mb-2.5 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-google-green animate-pulse shrink-0"></span>
                  <h3 className="font-extrabold text-xs sm:text-sm text-gray-900 tracking-tight truncate">
                    DevFest Speakers
                  </h3>
                </div>
                <a href="#speakers" className="text-[10px] font-mono text-google-blue hover:underline font-semibold shrink-0">
                  All Bios →
                </a>
              </div>

              {/* Scroll Area */}
              <div className="relative flex-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                <div className="overflow-hidden rounded-2xl bg-gray-50/70 p-1.5 sm:p-2 h-full">
                  <div className="space-y-2 animate-vertical-marquee hover:[animation-play-state:paused]">
                    {verticalMarqueeSpeakers.map((sp, idx) => (
                      <div
                        key={`hero-sp-${sp.id}-${idx}`}
                        className="bg-white p-2 rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-google-blue/40 transition-all group cursor-pointer block"
                        onClick={() => {
                          const elem = document.getElementById('speakers');
                          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <img
                            src={sp.photo}
                            alt={sp.name}
                            className="w-8 h-8 rounded-lg object-cover border border-gray-200 shrink-0 group-hover:scale-105 transition-transform"
                          />
                          <div className="min-w-0 flex-1">
                            <span className="font-bold text-[11px] sm:text-xs text-gray-900 truncate block group-hover:text-google-blue transition-colors">
                              {sp.name}
                            </span>
                            <span className="text-[9.5px] text-gray-500 block truncate leading-tight">
                              {sp.organization}
                            </span>
                          </div>
                        </div>

                        <p className="text-[9.5px] sm:text-[10px] text-gray-700 font-medium line-clamp-2 leading-tight">
                          "{sp.sessionTitle}"
                        </p>

                        <div className="flex items-center justify-between mt-1 pt-1 border-t border-gray-100 text-[8.5px] sm:text-[9px] font-mono text-gray-400">
                          <span className="text-google-blue font-semibold truncate max-w-[70px]">
                            {sp.category}
                          </span>
                          <span className="shrink-0">{sp.timeSlot.split('–')[0].trim()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-2 mt-2 flex items-center justify-between text-[11px] text-gray-500 font-mono border-t border-gray-100 shrink-0">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-google-green" />
                  <span className="text-[10px]">Live Roster</span>
                </span>
                <a href="#speakers" className="text-google-blue hover:underline font-semibold text-[10px]">
                  All Speakers →
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: The DevFest 2026 Main Frame */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-4 sm:space-y-5 text-center flex flex-col items-center">
            
            {/* Top Micro Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-google-subtle border border-[#DADCE0]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-google-green"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-gray-800 font-mono">
                GDG Cloud Toronto • DevFest 2026
              </span>
              <span className="bg-google-blue/10 text-google-blue-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                FRIDAY, DECEMBER 11, 2026
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1 text-center">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.06]">
                DEVFEST <span className="text-gradient-google">2026</span>
              </h1>
              <h2 className="text-base sm:text-xl font-semibold text-gray-700 tracking-tight">
                {EVENT_DATA.tagline}
              </h2>
            </div>

            {/* Supporting Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-lg mx-auto text-center">
              {EVENT_DATA.subheadline}
            </p>

            {/* Quick Meta Stats (1,500+ Builders, 4 Speakers, 100+ Volunteers) */}
            <div className="grid grid-cols-3 gap-2.5 pt-1 max-w-md w-full mx-auto">
              <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-xs text-center">
                <span className="block text-lg sm:text-2xl font-bold text-gray-900 font-mono">1,500+</span>
                <span className="text-[10px] text-gray-500 font-medium">Builders</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-xs text-center">
                <span className="block text-lg sm:text-2xl font-bold text-google-blue font-mono">4</span>
                <span className="text-[10px] text-gray-500 font-medium">Keynote Speakers</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-xs text-center">
                <span className="block text-lg sm:text-2xl font-bold text-google-red font-mono">100+</span>
                <span className="text-[10px] text-gray-500 font-medium">Volunteers</span>
              </div>
            </div>

            {/* COUNTDOWN TIMER */}
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-300 shadow-sm max-w-md w-full mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-google-blue animate-pulse" />
                  <span>DevFest 2026 Starts In</span>
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  Dec 11, 2026 • 09:30 AM EST
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div className="bg-gray-50 rounded-xl p-2 text-center border border-gray-200">
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-google-blue block leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase font-semibold mt-1 block">
                    Days
                  </span>
                </div>
                <div className="bg-gray-50 rounded-xl p-2 text-center border border-gray-200">
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-google-red block leading-none">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase font-semibold mt-1 block">
                    Hours
                  </span>
                </div>
                <div className="bg-gray-50 rounded-xl p-2 text-center border border-gray-200">
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-google-yellow block leading-none">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase font-semibold mt-1 block">
                    Mins
                  </span>
                </div>
                <div className="bg-gray-50 rounded-xl p-2 text-center border border-gray-200">
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-google-green block leading-none">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase font-semibold mt-1 block">
                    Secs
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Group: 5 Primary Hub Action Buttons */}
            <div className="space-y-2.5 pt-1 w-full max-w-lg mx-auto">
              {/* Row 1: Tickets & Meetup */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#D1410C] hover:bg-[#b8380a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-google-elevated transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 animate-ticket-flash"
                >
                  <Ticket className="w-4 h-4 shrink-0" />
                  <span>Get DevFest Tickets</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>

                <a
                  href={EVENT_DATA.socials.meetup}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-[#E0393E] hover:bg-[#c93136] text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-google-subtle transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Users className="w-4 h-4 shrink-0" />
                  <span>Future Events - Meetup</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>

              {/* Row 2: Become Sponsor, Call for Speaker, Volunteer */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5">
                <a
                  href="#sponsors"
                  className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 shadow-xs transition-all flex items-center gap-1.5 hover:border-google-blue/50"
                >
                  <Building2 className="w-3.5 h-3.5 text-google-blue" />
                  <span>Become Sponsor</span>
                </a>

                <a
                  href={EVENT_DATA.callForSpeakers?.formUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSevX5omJJKkgAZvVE5ZnNuGfqok0NtCjUYiQPKSSPdqIwB9vA/viewform'}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 shadow-xs transition-all flex items-center gap-1.5 hover:border-google-yellow/70"
                >
                  <Mic className="w-3.5 h-3.5 text-google-yellow" />
                  <span>Call for Speaker</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>

                <a
                  href="#volunteers"
                  className="bg-white hover:bg-gray-50 text-gray-800 font-semibold text-xs px-3.5 py-2.5 rounded-xl border border-gray-200 shadow-xs transition-all flex items-center gap-1.5 hover:border-google-red/50"
                >
                  <Heart className="w-3.5 h-3.5 text-google-red fill-google-red/20" />
                  <span>Volunteer</span>
                </a>
              </div>
            </div>

            {/* Venue location pill & Bevy link */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-google-red" />
                {EVENT_DATA.location.venue}, {EVENT_DATA.location.city}
              </span>
              <span>•</span>
              <a
                href={EVENT_DATA.socials.bevy}
                target="_blank"
                rel="noreferrer"
                className="text-google-blue hover:underline flex items-center gap-1 font-semibold"
              >
                <Globe className="w-3.5 h-3.5 text-google-green" />
                <span>Official Bevy Chapter</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Proud Sponsors Vertical Scroll */}
          <div className="order-3 lg:order-3 lg:col-span-3">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-200 shadow-md relative overflow-hidden flex flex-col h-[480px] sm:h-[540px] lg:h-[620px]">
              {/* Header */}
              <div className="flex items-center justify-between gap-1 pb-2.5 mb-2.5 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Sparkles className="w-3.5 h-3.5 text-google-yellow shrink-0" />
                  <h3 className="font-extrabold text-xs sm:text-sm text-gray-900 tracking-tight truncate">
                    Proud Sponsors
                  </h3>
                </div>
                <a href="#sponsors" className="text-[10px] font-mono text-google-blue hover:underline font-semibold shrink-0">
                  Join →
                </a>
              </div>

              {/* Scroll Area */}
              <div className="relative flex-1 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

                <div className="overflow-hidden rounded-2xl bg-gray-50/70 p-1.5 sm:p-2 h-full">
                  <div className="space-y-2 animate-vertical-marquee-slow hover:[animation-play-state:paused]">
                    {verticalMarqueePartners.map((partner, idx) => (
                      <a
                        key={`hero-p-${partner.name}-${idx}`}
                        href={partner.website}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white p-2 rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-google-blue/40 transition-all group cursor-pointer block"
                      >
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <span className="font-bold text-[11px] sm:text-xs text-gray-900 truncate group-hover:text-google-blue transition-colors">
                            {partner.logoText || partner.name}
                          </span>
                          <span 
                            className="text-[7.5px] font-mono px-1 py-0.2 rounded-full text-white font-bold shrink-0 uppercase"
                            style={{ backgroundColor: partner.accentColor }}
                          >
                            {partner.category}
                          </span>
                        </div>

                        <p className="text-[9.5px] sm:text-[10px] text-gray-600 line-clamp-2 leading-tight">
                          {partner.description}
                        </p>

                        <div className="flex items-center justify-between mt-1 pt-1 border-t border-gray-100 text-[8.5px] sm:text-[9px] font-mono text-google-blue font-semibold">
                          <span className="truncate">{partner.name}</span>
                          <ExternalLink className="w-2.5 h-2.5 shrink-0 ml-1" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-2 mt-2 flex items-center justify-between text-[11px] text-gray-500 font-mono border-t border-gray-100 shrink-0">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-google-yellow" />
                  <span className="text-[10px]">Partners</span>
                </span>
                <a href="#sponsors" className="text-google-green hover:underline font-semibold text-[10px]">
                  Become Sponsor →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
