import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  X, 
  Sparkles, 
  Compass, 
  Cpu, 
  Radio, 
  Award, 
  FileCheck, 
  Users, 
  Layers, 
  MapPin, 
  ArrowRight,
  Code2,
  BookOpen,
  Tv,
  Ticket,
  Mic,
  Globe,
  Building2,
  Calendar,
  Activity,
  GraduationCap
} from 'lucide-react';
import { YoutubeIcon } from '../ui/BrandIcons';
import { SPEAKERS } from '../../data/speakers';
import { WORKSHOPS } from '../../data/workshops';
import { AI_PRODUCTS } from '../../data/aiProducts';
import { EVOLUTION_ERAS } from '../../data/evolutionEras';
import { YOUTUBE_VIDEOS } from '../../data/youtubeVideos';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (targetHref: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Cmd+K / Ctrl+K & Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchableItems = useMemo(() => {
    const items: Array<{
      category: string;
      title: string;
      subtitle: string;
      href: string;
      icon: any;
      tags: string[];
    }> = [
      // Key Links & Priority Actions
      { category: 'Tickets & Registration', title: 'Buy Tickets on Eventbrite', subtitle: 'Official registration portal for DevFest Toronto 2026', href: 'https://www.eventbrite.ca/e/google-developer-group-devfest-toronto-2026-tickets-2004248355785', icon: Ticket, tags: ['tickets', 'eventbrite', 'register', 'pass', 'admission'] },
      { category: 'Speakers & Submissions', title: 'Call for Speakers Form (CFS)', subtitle: 'Submit talk proposal for AI, Cloud, Quantum & Architecture', href: 'https://docs.google.com/forms/d/e/1FAIpQLSevX5omJJKkgAZvVE5ZnNuGfqok0NtCjUYiQPKSSPdqIwB9vA/viewform', icon: Mic, tags: ['cfp', 'cfs', 'speaker', 'apply', 'proposal', 'talk'] },
      { category: 'Sponsors & Alliance', title: 'Sponsorship & Partnership Portal', subtitle: 'Official DevFest sponsorship form & partner inquiry', href: '#sponsors', icon: Building2, tags: ['sponsor', 'partner', 'form', 'funding'] },
      { category: 'Community Portals', title: 'Official Meetup (Future Events & Discounts)', subtitle: 'Join GDG Cloud Toronto Meetup community', href: 'https://www.meetup.com/gdg-cloud-toronto/', icon: Users, tags: ['meetup', 'tickets', 'discounts', 'events'] },
      { category: 'Community Portals', title: 'Official GDG Bevy Chapter', subtitle: 'Join 5,800+ developers on gdg.community.dev', href: 'https://gdg.community.dev/gdg-cloud-toronto/', icon: Globe, tags: ['bevy', 'community', 'chapter', 'gdg'] },
      { category: 'Community Portals', title: 'Official LinkedIn Page', subtitle: 'Follow GDG Cloud Toronto news & announcements', href: 'https://www.linkedin.com/company/18980745', icon: Users, tags: ['linkedin', 'company', 'social'] },
      { category: 'Community Portals', title: 'Official Instagram (@gdgcloudtoronto)', subtitle: 'Photos, highlights & behind-the-scenes stories', href: 'https://www.instagram.com/gdgcloudtoronto/', icon: Users, tags: ['instagram', 'photos', 'stories', 'social'] },

      // Sections
      { category: 'Community Telemetry', title: 'Community Growth Insights', subtitle: '5K Meetup, 7K LinkedIn, 1K Bevy, 6K DevFest, 100+ Events', href: '#community-growth', icon: Activity, tags: ['growth', 'insights', 'meetup', 'linkedin', 'stats', 'members', 'followers'] },
      { category: 'Event Sections', title: 'Google DevFest 2026 Agenda', subtitle: 'Track 1 Conference Experience & Track 2 Hands-On Workshops', href: '#schedule', icon: Calendar, tags: ['agenda', 'schedule', 'timeline', 'track 1', 'track 2'] },
      { category: 'Experiences', title: 'AI Product Observatory', subtitle: 'Explore frontier AI tools & multi-agent architectures', href: '#ai-observatory', icon: Sparkles, tags: ['ai', 'gemini', 'mcp', 'agents', 'tools'] },
      { category: 'Experiences', title: 'Evolution of Computing', subtitle: '8-Era interactive storytelling landscape from Compute to Frontier', href: '#evolution-of-computing', icon: Compass, tags: ['history', 'eras', 'quantum', 'cloud', 'timeline'] },
      { category: 'Event Sections', title: 'YouTube Video Media Archive', subtitle: 'Watch keynotes, codelabs & podcasts from @gdgcloudtoronto1898', href: '#youtube-media', icon: Tv, tags: ['youtube', 'videos', 'recordings', 'talks', 'watch', 'media'] },
      { category: 'Event Sections', title: 'Speaker Gallery', subtitle: 'Meet the confirmed minds building tomorrow', href: '#speakers', icon: Users, tags: ['speakers', 'keynotes', 'experts'] },
      { category: 'Event Sections', title: 'Meet the Team', subtitle: 'Core Organizers & Volunteer Leads', href: '#team', icon: Users, tags: ['team', 'organizers', 'volunteers', 'leads', 'core'] },
      { category: 'Event Sections', title: 'Community Honors & Awards', subtitle: 'Celebrating developers, innovation & volunteer champions', href: '#awards-recognitions', icon: Award, tags: ['awards', 'honors', 'hall of fame'] },
      { category: 'Event Sections', title: 'My Certificate (DevFest Attendees & Volunteers)', subtitle: 'Download attendee or volunteer leadership certificate PDF', href: '#my-certificate', icon: FileCheck, tags: ['my certificate', 'certificate', 'volunteer', 'participant', 'verify', 'download', 'pdf', 'eventbrite'] },
      { category: 'Event Sections', title: 'Download Certificate - Non DevFest Event/Workshop', subtitle: 'Claim workshop & community event certificates with email token', href: '#non-devfest-certificates', icon: GraduationCap, tags: ['non devfest certificate', 'workshop', 'study jam', 'token', 'certificate', 'codelab', 'apps script'] },
      { category: 'Event Sections', title: 'DevFest Archive', subtitle: 'Explore past DevFest chapters (2023–2026) & 2025 Highlights', href: '#archive', icon: BookOpen, tags: ['archive', 'history', '2025', '2024', '2023'] },
    ];

    // Add YouTube Videos
    YOUTUBE_VIDEOS.forEach((vid) => {
      items.push({
        category: 'YouTube Video Recordings',
        title: vid.title,
        subtitle: `${vid.category} • ${vid.speaker} (${vid.duration})`,
        href: '#youtube-media',
        icon: Tv,
        tags: [vid.title.toLowerCase(), vid.speaker.toLowerCase(), vid.category.toLowerCase(), ...vid.tags.map(t => t.toLowerCase())],
      });
    });

    // Add AI Products
    AI_PRODUCTS.forEach((prod) => {
      items.push({
        category: 'AI Product Directory',
        title: prod.name,
        subtitle: `${prod.company} • ${prod.purpose}`,
        href: '#ai-observatory',
        icon: Sparkles,
        tags: [prod.name.toLowerCase(), prod.company.toLowerCase(), ...prod.capabilities.map(c => c.toLowerCase())],
      });
    });

    // Add Speakers
    SPEAKERS.forEach((speaker) => {
      items.push({
        category: 'Featured Speakers',
        title: speaker.name,
        subtitle: `${speaker.role} at ${speaker.organization}`,
        href: '#speakers',
        icon: Users,
        tags: [speaker.name.toLowerCase(), speaker.organization.toLowerCase(), ...speaker.expertise.map(e => e.toLowerCase())],
      });
    });

    // Add Workshops
    WORKSHOPS.forEach((ws) => {
      items.push({
        category: 'Hands-On Workshops',
        title: ws.title,
        subtitle: `${ws.difficulty} • ${ws.duration} • Instructor: ${ws.instructor.name}`,
        href: '#schedule',
        icon: Code2,
        tags: [ws.title.toLowerCase(), ws.track.toLowerCase(), ...ws.technology.map(t => t.toLowerCase())],
      });
    });

    // Add Eras
    EVOLUTION_ERAS.forEach((era) => {
      items.push({
        category: 'Computing Eras',
        title: `Era ${era.order} — ${era.shortName}`,
        subtitle: `${era.headline}: ${era.subtitle}`,
        href: '#evolution-of-computing',
        icon: Compass,
        tags: [era.shortName.toLowerCase(), era.name.toLowerCase(), ...era.conceptsList.map(c => c.toLowerCase())],
      });
    });

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchableItems.slice(0, 8);
    const q = query.toLowerCase();
    return searchableItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some((t) => t.includes(q))
    ).slice(0, 10);
  }, [query, searchableItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 px-4 pb-6">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100 bg-gray-50/70">
          <Search className="w-5 h-5 text-google-blue shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search DevFest 2026: videos, speakers, workshops, eras, AI tools..."
            className="w-full bg-transparent border-none text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
            autoFocus
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline bg-gray-200 text-gray-600 px-2 py-0.5 text-[10px] rounded font-mono">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-gray-50">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-gray-500 text-sm">
              <p>No matching DevFest 2026 experiences or records found.</p>
              <p className="text-xs text-gray-400 mt-1 font-mono">Try searching for "YouTube", "Gemini", "MCP", "Quantum", or "Dr. Elena Vance"</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={`${item.title}-${idx}`}
                  onClick={() => {
                    if (item.href.startsWith('http')) {
                      window.open(item.href, '_blank');
                    } else {
                      onSelectAction(item.href);
                    }
                    onClose();
                  }}
                  className="w-full text-left p-3 hover:bg-google-blue/5 rounded-xl transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 group-hover:bg-google-blue/10 group-hover:text-google-blue text-gray-600 rounded-lg shrink-0 transition-colors mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-gray-900 group-hover:text-google-blue-dark">
                          {item.title}
                        </span>
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-mono">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-google-blue group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between font-mono">
          <div className="flex items-center gap-3">
            <span>Navigate: <kbd className="bg-white px-1.5 py-0.5 rounded border border-gray-200 text-[9px]">↑</kbd> <kbd className="bg-white px-1.5 py-0.5 rounded border border-gray-200 text-[9px]">↓</kbd></span>
            <span>Select: <kbd className="bg-white px-1.5 py-0.5 rounded border border-gray-200 text-[9px]">ENTER</kbd></span>
          </div>
          <span className="text-google-blue font-medium">GDG Cloud Toronto Digital HQ</span>
        </div>
      </div>
    </div>
  );
};
