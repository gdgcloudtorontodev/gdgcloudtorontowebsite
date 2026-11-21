import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Menu, 
  X, 
  Search, 
  Calendar, 
  MapPin, 
  Award, 
  FileCheck, 
  Radio, 
  Layers, 
  Cpu, 
  Compass, 
  Zap, 
  Tv, 
  Ticket, 
  Mic, 
  Globe, 
  Building2, 
  ExternalLink, 
  Users, 
  Activity,
  Mail,
  GraduationCap
} from 'lucide-react';
import { YoutubeIcon, InstagramIcon } from '../ui/BrandIcons';
import { SponsorTicker } from './SponsorTicker';
import { EVENT_DATA } from '../../data/event';

interface HeaderProps {
  onOpenCommandPalette: () => void;
  onOpenRegisterModal: () => void;
  onOpenCertificatePortal: () => void;
  onOpenContactModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCommandPalette,
  onOpenRegisterModal,
  onOpenCertificatePortal,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; href: string; icon: any; highlight?: boolean }[] = [
    { label: 'Agenda 2026', href: '#schedule', icon: Calendar },
    { label: 'Speakers', href: '#speakers', icon: Zap },
    { label: 'Sponsors', href: '#sponsors', icon: Building2 },
    { label: 'Meet Team', href: '#team', icon: Users },
    { label: 'Certificate', href: '#my-certificate', icon: FileCheck },
    { label: 'Non-DevFest Certs', href: '#non-devfest-certificates', icon: GraduationCap },
    { label: 'Awards & Recognition', href: '#awards-recognitions', icon: Award },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E8EAED]' 
          : 'bg-white/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      {/* Top micro banner */}
      <div className="bg-[#202124] text-white text-[11px] font-medium py-1 px-4 tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-google-blue-light font-mono">
              <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
              LIVE DIGITAL HQ
            </span>
            <span className="hidden sm:inline text-gray-400">|</span>
            <span className="hidden sm:inline text-gray-300">
              {EVENT_DATA.dates.display} • {EVENT_DATA.location.venue}
            </span>
          </div>
          <div className="flex items-center gap-3.5">
            <a
              href={EVENT_DATA.socials.bevy}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-google-green flex items-center gap-1 transition-colors hidden md:flex font-mono text-[10px]"
            >
              <Globe className="w-3 h-3 text-google-green" />
              <span>Bevy Chapter</span>
            </a>
            <span className="text-gray-600 hidden md:inline">•</span>
            <a
              href={EVENT_DATA.callForSpeakers?.formUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSevX5omJJKkgAZvVE5ZnNuGfqok0NtCjUYiQPKSSPdqIwB9vA/viewform'}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-google-yellow flex items-center gap-1 transition-colors hidden lg:flex font-mono text-[10px]"
            >
              <Mic className="w-3 h-3 text-google-yellow" />
              <span>Call for Speakers</span>
            </a>
            <span className="text-gray-600 hidden lg:inline">•</span>
            <a
              href={EVENT_DATA.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-pink-400 flex items-center gap-1 transition-colors hidden xl:flex font-mono text-[10px]"
            >
              <InstagramIcon size={13} className="text-pink-400" />
              <span>@gdgcloudtoronto</span>
            </a>
            <span className="text-gray-600 hidden xl:inline">•</span>
            <a
              href={EVENT_DATA.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-red-400 flex items-center gap-1 transition-colors hidden sm:flex"
            >
              <YoutubeIcon size={14} className="text-red-400" />
              <span>@gdgcloudtoronto1898</span>
            </a>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <button
              onClick={onOpenCertificatePortal}
              className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors font-medium"
              title="Download Participant or Volunteer Certificate"
            >
              <FileCheck className="w-3 h-3 text-google-yellow" />
              <span>DevFest Cert</span>
            </button>
            <span className="text-gray-600 hidden md:inline">•</span>
            <a
              href="#non-devfest-certificates"
              className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors font-medium hidden md:flex text-[11px]"
              title="Download Certificate - Non DevFest Event/Workshop"
            >
              <GraduationCap className="w-3 h-3 text-google-green" />
              <span>Workshop Cert</span>
            </a>
            <span className="text-gray-600">•</span>
            <button
              onClick={onOpenCommandPalette}
              className="text-gray-300 hover:text-white flex items-center gap-1.5 font-mono text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20 hover:border-google-blue transition-colors"
            >
              <Search className="w-2.5 h-2.5" />
              <span>⌘K</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Sponsor Recognition Marquee */}
      <SponsorTicker />

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4rem] sm:min-h-[4.5rem] py-2 gap-3 sm:gap-4">
          {/* Logo & Identity - Protected against crushing and wrapping */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 select-none">
            <div className="flex items-center gap-1 bg-[#F1F3F4] p-1.5 sm:p-2 rounded-xl group-hover:bg-google-blue/10 transition-colors border border-[#DADCE0] shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-google-blue"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-google-red"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-google-yellow"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-google-green"></span>
            </div>
            <div className="whitespace-nowrap">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-gray-900 tracking-tight text-sm sm:text-base lg:text-lg whitespace-nowrap">
                  GDG Cloud Toronto
                </span>
                <span className="bg-google-blue text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full tracking-wider uppercase font-mono whitespace-nowrap">
                  DEVFEST 2026
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-gray-500 font-mono block whitespace-nowrap leading-tight">
                Official Google Developer Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 overflow-x-auto no-scrollbar">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 whitespace-nowrap ${
                  item.highlight
                    ? 'text-google-blue-dark bg-google-blue/10 hover:bg-google-blue/20 font-semibold'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Get Tickets on Eventbrite & Join Meetup */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              title="Open Command Palette (⌘K)"
              aria-label="Command Palette"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
              target="_blank"
              rel="noreferrer"
              className="bg-[#D1410C] hover:bg-[#b8380a] text-white font-semibold text-xs px-3 sm:px-3.5 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap animate-ticket-flash"
            >
              <Ticket className="w-3.5 h-3.5 shrink-0" />
              <span>Get Tickets</span>
            </a>

            <a
              href={EVENT_DATA.socials.meetup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#E0393E] hover:bg-[#c93136] text-white font-semibold text-xs px-3 sm:px-3.5 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              title="Join Meetup for future events and discounted tickets"
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span>Join Meetup</span>
            </a>

            <button
              onClick={onOpenContactModal}
              className="bg-gray-900 hover:bg-black text-white font-semibold text-xs px-3 sm:px-3.5 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap cursor-pointer hover:shadow-md active:scale-95"
              title="Contact GDG Cloud Toronto organizers (gdgcloudtoronto@gmail.com)"
            >
              <Mail className="w-3.5 h-3.5 shrink-0 text-google-yellow" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
              target="_blank"
              rel="noreferrer"
              className="bg-[#D1410C] text-white text-[11px] px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 animate-ticket-flash"
            >
              <Ticket className="w-3 h-3" />
              <span>Tickets</span>
            </a>
            <a
              href={EVENT_DATA.socials.meetup}
              target="_blank"
              rel="noreferrer"
              className="bg-[#E0393E] text-white text-[11px] px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1"
            >
              <Users className="w-3 h-3" />
              <span>Meetup</span>
            </a>
            <button
              onClick={onOpenContactModal}
              className="bg-gray-900 text-white text-[11px] px-2 py-1.5 rounded-lg font-medium flex items-center gap-1 shrink-0 cursor-pointer"
              title="Contact Us (gdgcloudtoronto@gmail.com)"
            >
              <Mail className="w-3 h-3 text-google-yellow" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8EAED] px-4 pt-2 pb-6 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                    item.highlight
                      ? 'text-google-blue-dark bg-google-blue/10 font-semibold'
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-google-blue" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
            <a
              href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-[#D1410C] hover:bg-[#b8380a] text-white rounded-xl text-xs font-bold flex items-center justify-between animate-ticket-flash"
            >
              <span className="flex items-center gap-2">
                <Ticket className="w-4 h-4" />
                <span>Get Tickets on Eventbrite</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={EVENT_DATA.socials.meetup}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-[#E0393E] hover:bg-[#c93136] text-white rounded-xl text-xs font-bold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Join Meetup (Future Events & Discounts)</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-2.5 px-4 bg-gray-900 hover:bg-black text-white rounded-xl text-xs font-bold flex items-center justify-between cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-google-yellow" />
                <span>Contact Us (gdgcloudtoronto@gmail.com)</span>
              </span>
              <span>→</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertificatePortal();
              }}
              className="w-full py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-google-blue-dark rounded-xl text-xs font-bold flex items-center justify-between border border-blue-200"
            >
              <span className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-google-blue" />
                <span>DevFest Certificate (Participants & Volunteers)</span>
              </span>
              <span>→</span>
            </button>

            <a
              href="#non-devfest-certificates"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 rounded-xl text-xs font-bold flex items-center justify-between border border-emerald-200"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Workshop Certificate (Non DevFest)</span>
              </span>
              <span>→</span>
            </a>

            <a
              href={EVENT_DATA.callForSpeakers?.formUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSevX5omJJKkgAZvVE5ZnNuGfqok0NtCjUYiQPKSSPdqIwB9vA/viewform'}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 rounded-xl text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-amber-600" />
                <span>Call for Speakers (Apply Now)</span>
              </span>
              <span>→</span>
            </a>

            <a
              href={EVENT_DATA.socials.bevy}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-green-500/10 hover:bg-green-500/20 text-green-800 rounded-xl text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-600" />
                <span>Official Bevy Community Page</span>
              </span>
              <span>→</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-mono flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-gray-500" />
                <span>Command Palette</span>
              </span>
              <kbd className="bg-white px-2 py-0.5 rounded border border-gray-300 text-[10px]">⌘K</kbd>
            </button>
            
            <a
              href={EVENT_DATA.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-pink-500/10 hover:bg-pink-500/20 text-pink-700 rounded-xl text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <InstagramIcon size={16} />
                <span>Instagram @gdgcloudtoronto</span>
              </span>
              <span>→</span>
            </a>

            <a
              href={EVENT_DATA.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 bg-red-600/10 hover:bg-red-600/20 text-red-600 rounded-xl text-xs font-semibold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <YoutubeIcon size={16} />
                <span>YouTube @gdgcloudtoronto1898</span>
              </span>
              <span>→</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertificatePortal();
              }}
              className="w-full py-2.5 px-4 bg-google-yellow/10 hover:bg-google-yellow/20 text-gray-900 rounded-xl text-xs font-medium flex items-center gap-2"
            >
              <FileCheck className="w-4 h-4 text-google-yellow-dark" />
              <span>Verify Attendee Certificate</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full py-3 px-4 bg-google-blue text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register for DevFest 2026</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
