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
  Tv
} from 'lucide-react';
import { YoutubeIcon } from '../ui/BrandIcons';
import { EVENT_DATA } from '../../data/event';

interface HeaderProps {
  onOpenCommandPalette: () => void;
  onOpenRegisterModal: () => void;
  onOpenCertificatePortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCommandPalette,
  onOpenRegisterModal,
  onOpenCertificatePortal,
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

  const navLinks = [
    { label: 'Command Center', href: '#command-center', icon: Terminal },
    { label: 'Technology', href: '#technology-universe', icon: Layers },
    { label: 'AI Observatory', href: '#ai-observatory', icon: Sparkles, highlight: true },
    { label: 'Speakers', href: '#speakers', icon: Zap },
    { label: 'Workshops', href: '#workshops', icon: Cpu },
    { label: 'Evolution', href: '#evolution-of-computing', icon: Compass, highlight: true },
    { label: 'Podcast', href: '#podcast-studio', icon: Radio },
    { label: 'YouTube Media', href: '#youtube-media', icon: Tv },
    { label: 'Certificates', href: '#certificate-center', icon: FileCheck },
    { label: 'Archive', href: '#archive', icon: Calendar },
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
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@gdgcloudtoronto1898/featured"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-red-400 flex items-center gap-1 transition-colors hidden sm:flex"
            >
              <YoutubeIcon size={14} className="text-red-400" />
              <span>@gdgcloudtoronto1898</span>
            </a>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <button
              onClick={onOpenCertificatePortal}
              className="text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <FileCheck className="w-3 h-3 text-google-yellow" />
              Verify Certificate
            </button>
            <span className="text-gray-500">•</span>
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

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1 bg-[#F1F3F4] p-2 rounded-xl group-hover:bg-google-blue/10 transition-colors border border-[#DADCE0]">
              <span className="w-2.5 h-2.5 rounded-full bg-google-blue"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-google-red"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-google-yellow"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-google-green"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 tracking-tight text-base sm:text-lg">
                  GDG Cloud Toronto
                </span>
                <span className="bg-google-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase font-mono">
                  DEVFEST 2026
                </span>
              </div>
              <span className="text-[11px] text-gray-500 font-mono block">
                Official Google Developer Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 8).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  item.highlight
                    ? 'text-google-blue-dark bg-google-blue/10 hover:bg-google-blue/20 font-semibold'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              title="Open Command Palette (⌘K)"
              aria-label="Command Palette"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenRegisterModal}
              className="bg-google-blue hover:bg-google-blue-dark text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-xl shadow-sm hover:shadow-google-subtle transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Register Pass</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenRegisterModal}
              className="bg-google-blue text-white text-xs px-3 py-1.5 rounded-lg font-medium"
            >
              Register
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
              href="https://www.youtube.com/@gdgcloudtoronto1898/featured"
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
