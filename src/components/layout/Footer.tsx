import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Heart, 
  ExternalLink, 
  ShieldCheck, 
  ArrowUp,
  FileCheck,
  Globe,
  Ticket,
  Mic,
  Building2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from '../ui/BrandIcons';
import { EVENT_DATA } from '../../data/event';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181A20] text-gray-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top summary card */}
        <div className="bg-gradient-to-r from-neutral-900 via-[#1E2028] to-neutral-900 p-8 rounded-3xl border border-neutral-700/60 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-google-blue/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-google-blue-light">
                  GDG Cloud Toronto Community
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {EVENT_DATA.tagline}
              </h3>
              <p className="text-gray-400 text-sm max-w-2xl mt-1">
                Join Canada’s premier developer community gathering in Toronto for DevFest 2026 at {EVENT_DATA.location.venue}.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={EVENT_DATA.socials.bevy}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <Globe className="w-4 h-4 text-google-green" />
                <span>Join Bevy Community</span>
              </a>
              <a
                href={EVENT_DATA.registration.eventbriteUrl || 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785'}
                target="_blank"
                rel="noreferrer"
                className="bg-[#D1410C] hover:bg-[#b8380a] text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md animate-ticket-flash"
              >
                <Ticket className="w-4 h-4" />
                <span>Eventbrite Tickets</span>
              </a>
              <a
                href="#register"
                className="bg-google-blue hover:bg-google-blue-dark text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4 text-google-yellow" />
                <span>Claim Pass</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Column links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 bg-neutral-800 p-1.5 rounded-lg border border-neutral-700">
                <span className="w-2 h-2 rounded-full bg-google-blue"></span>
                <span className="w-2 h-2 rounded-full bg-google-red"></span>
                <span className="w-2 h-2 rounded-full bg-google-yellow"></span>
                <span className="w-2 h-2 rounded-full bg-google-green"></span>
              </div>
              <span className="font-bold text-white text-sm">GDG Cloud Toronto</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              An official Google Developer Group chapter dedicated to Google Cloud, AI, and modern software engineering in Toronto, Ontario.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <a href={EVENT_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-google-blue transition-colors" title="LinkedIn Company Page">
                <LinkedinIcon size={16} />
              </a>
              <a href={EVENT_DATA.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors" title="Instagram @gdgcloudtoronto">
                <InstagramIcon size={16} />
              </a>
              <a href={EVENT_DATA.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-google-red transition-colors" title="Official YouTube Channel">
                <YoutubeIcon size={16} />
              </a>
              <a href={EVENT_DATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="GitHub Organization">
                <GithubIcon size={16} />
              </a>
              <a href={EVENT_DATA.socials.x} target="_blank" rel="noreferrer" className="hover:text-google-blue-light transition-colors" title="Twitter / X">
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Experiences & Labs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#ai-observatory" className="text-gray-400 hover:text-google-blue transition-colors flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-google-yellow" /> AI Product Observatory</a></li>
              <li><a href="#evolution-of-computing" className="text-gray-400 hover:text-google-blue transition-colors">Evolution of Computing</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-google-blue transition-colors">Meet the Team</a></li>
              <li><a href="#youtube-media" className="text-gray-400 hover:text-google-blue transition-colors">YouTube Video Archive</a></li>
              <li><a href="#awards-recognitions" className="text-gray-400 hover:text-google-yellow transition-colors">Awards & Recognitions</a></li>
              <li><a href="#speakers" className="text-gray-400 hover:text-google-blue transition-colors">Confirmed Speakers</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Participation & Sponsors
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href={EVENT_DATA.callForSpeakers?.formUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSevX5omJJKkgAZvVE5ZnNuGfqok0NtCjUYiQPKSSPdqIwB9vA/viewform'} target="_blank" rel="noreferrer" className="text-google-yellow hover:underline flex items-center gap-1"><Mic className="w-3 h-3 text-google-yellow" /> Call for Speakers Form</a></li>
              <li><a href="#sponsors" className="text-gray-400 hover:text-google-blue transition-colors flex items-center gap-1"><Building2 className="w-3 h-3" /> Sponsor DevFest 2026</a></li>
              <li><a href={EVENT_DATA.sponsorship?.interestFormUrl || 'https://forms.gle/GP9ZNc3w8dLoTB1G8'} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-google-blue transition-colors">Sponsorship Interest Form</a></li>
              <li><a href={EVENT_DATA.socials.bevy} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-google-green transition-colors flex items-center gap-1"><Globe className="w-3 h-3 text-google-green" /> Official Bevy Page</a></li>
              <li><a href="#speakers" className="text-gray-400 hover:text-google-blue transition-colors">Featured Speakers</a></li>
              <li><a href="#certificate-center" className="text-gray-400 hover:text-google-yellow transition-colors flex items-center gap-1"><FileCheck className="w-3 h-3 text-google-yellow" /> Certificate Portal</a></li>
              <li><a href="#archive" className="text-gray-400 hover:text-google-blue transition-colors">DevFest Archive (2023–2026)</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Event Details
            </h4>
            <div className="space-y-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <Calendar className="w-3.5 h-3.5 text-google-blue mt-0.5 shrink-0" />
                <span>{EVENT_DATA.dates.display}<br />{EVENT_DATA.dates.startTime} – {EVENT_DATA.dates.endTime}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-google-red mt-0.5 shrink-0" />
                <span>{EVENT_DATA.location.venue}<br />{EVENT_DATA.location.address}</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=190+Railside+Rd+North+York+ON+M3A+1A3"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-google-blue-light hover:underline"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 text-[11px] text-gray-500 space-y-4">
          <div className="bg-neutral-900/80 p-4 rounded-xl border border-neutral-800 text-gray-400 leading-relaxed">
            <p className="flex items-center gap-1.5 font-semibold text-gray-300 mb-1">
              <ShieldCheck className="w-4 h-4 text-google-green" />
              Community & Brand Notice
            </p>
            <p>
              GDG Cloud Toronto is an independent Google Developer Group chapter. Activities and opinions expressed by speakers, participants, and volunteers are their own and do not necessarily represent the official views of Google LLC. Google Developer Groups (GDG) is a global program supported by Google Developers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="flex items-center gap-1">
              <span>© 2026 GDG Cloud Toronto. Built with</span>
              <Heart className="w-3 h-3 text-google-red fill-google-red inline" />
              <span>for the Canadian Developer Community.</span>
            </p>
            <div className="flex items-center gap-4">
              <a href="#resources" className="hover:text-gray-300 transition-colors">Resources</a>
              <span>•</span>
              <a href="https://developers.google.com/community-guidelines" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">Code of Conduct</a>
              <span>•</span>
              <button
                onClick={scrollToTop}
                className="hover:text-white flex items-center gap-1 text-google-blue-light transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
