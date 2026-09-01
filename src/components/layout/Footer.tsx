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
  Globe
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, TwitterIcon } from '../ui/BrandIcons';
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
                Join Canada’s premier developer community gathering in downtown Toronto for DevFest 2026.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={EVENT_DATA.socials.meetup}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <Globe className="w-4 h-4 text-google-red" />
                <span>Join Meetup Chapter</span>
              </a>
              <a
                href="#register"
                className="bg-google-blue hover:bg-google-blue-dark text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md"
              >
                <Sparkles className="w-4 h-4" />
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
              An independent, community-led developer organization dedicated to Google Cloud, AI, and modern software engineering in Toronto, Ontario.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <a href={EVENT_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-google-blue transition-colors">
                <LinkedinIcon size={16} />
              </a>
              <a href={EVENT_DATA.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <GithubIcon size={16} />
              </a>
              <a href={EVENT_DATA.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-google-red transition-colors">
                <YoutubeIcon size={16} />
              </a>
              <a href={EVENT_DATA.socials.x} target="_blank" rel="noreferrer" className="hover:text-google-blue-light transition-colors">
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
              <li><a href="#workshops" className="text-gray-400 hover:text-google-blue transition-colors">DevFest Lab Workshops</a></li>
              <li><a href="#technology-radar" className="text-gray-400 hover:text-google-blue transition-colors">Technology Radar 2026</a></li>
              <li><a href="#podcast-studio" className="text-gray-400 hover:text-google-blue transition-colors">Podcast & Media Studio</a></li>
              <li><a href="#forum-panels" className="text-gray-400 hover:text-google-blue transition-colors">The Forum Panels</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Community & Credentials
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#speakers" className="text-gray-400 hover:text-google-blue transition-colors">Featured Speakers</a></li>
              <li><a href="#volunteers" className="text-gray-400 hover:text-google-blue transition-colors">Volunteer Recognition</a></li>
              <li><a href="#awards-honors" className="text-gray-400 hover:text-google-blue transition-colors">Community Honors & Awards</a></li>
              <li><a href="#winners-podium" className="text-gray-400 hover:text-google-blue transition-colors">Challenge Winners</a></li>
              <li><a href="#digital-credential" className="text-gray-400 hover:text-google-blue transition-colors">Digital Credentials</a></li>
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
                  href="#campus-venue"
                  className="inline-flex items-center gap-1 text-google-blue-light hover:underline"
                >
                  <span>Interactive Venue Map</span>
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
