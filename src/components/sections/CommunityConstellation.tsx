import React, { useState } from 'react';
import { 
  Network, 
  Users, 
  Sparkles, 
  Award, 
  Code, 
  Globe, 
  Cpu,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';
import { EVENT_DATA } from '../../data/event';

export const CommunityConstellation: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const constellationNodes = [
    { id: 'c1', label: 'Ramkumar Arun', role: 'Organizer, GDG Cloud Toronto', type: 'organizer', color: '#4285F4', x: 50, y: 22 },
    { id: 'c2', label: 'Naveen Nigam', role: 'Head of Americas - Dev Ecosystem, Google', type: 'speaker', color: '#EA4335', x: 18, y: 22 },
    { id: 'c3', label: 'Mohammad Al-Ansari', role: 'Developer Advocate, Google', type: 'speaker', color: '#34A853', x: 82, y: 22 },
    { id: 'c4', label: 'Gleb Otochkin', role: 'Cloud Advocate, Google', type: 'speaker', color: '#FBBC04', x: 14, y: 52 },
    { id: 'c5', label: 'Punit Solanki', role: 'Lead, AI Solutions Engineer, OMERS', type: 'speaker', color: '#4285F4', x: 86, y: 52 },
    { id: 'c6', label: '1,500+ Attendees', role: 'Developers & Tech Leaders across Canada', type: 'attendee', color: '#34A853', x: 50, y: 54 },
    { id: 'c7', label: 'Vimal & Shweta Shukla', role: 'Co-organizers, GDG Cloud Toronto', type: 'organizer', color: '#EA4335', x: 28, y: 82 },
    { id: 'c8', label: 'Volunteer Leads & Crew', role: 'Anastasia, Mehul, Aditya & 100+ Volunteers', type: 'volunteer', color: '#FBBC04', x: 72, y: 82 },
  ];

  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
            <Network className="w-3.5 h-3.5 text-google-blue-light" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-light uppercase">
              ECOSYSTEM NETWORK GRAPH
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            THE GDG CLOUD TORONTO CONSTELLATION
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 leading-relaxed mx-auto">
            Visualizing the interconnected web of Google leaders, organizers, technical speakers, and 1,500+ community builders powering DevFest 2026.
          </p>
        </div>

        {/* Interactive Constellation Board */}
        <div className="bg-neutral-900 rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative min-h-[460px] flex items-center justify-center">
          
          {/* Connecting SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="18%" y1="22%" x2="50%" y2="22%" stroke="rgba(234,67,53,0.3)" strokeWidth="1.5" />
            <line x1="50%" y1="22%" x2="82%" y2="22%" stroke="rgba(52,168,83,0.3)" strokeWidth="1.5" />
            <line x1="18%" y1="22%" x2="14%" y2="52%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="82%" y1="22%" x2="86%" y2="52%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="14%" y1="52%" x2="50%" y2="54%" stroke="rgba(251,188,4,0.3)" strokeWidth="1.5" />
            <line x1="86%" y1="52%" x2="50%" y2="54%" stroke="rgba(66,133,244,0.3)" strokeWidth="1.5" />
            <line x1="50%" y1="22%" x2="50%" y2="54%" stroke="rgba(66,133,244,0.4)" strokeWidth="1.8" />
            <line x1="50%" y1="54%" x2="28%" y2="82%" stroke="rgba(234,67,53,0.3)" strokeWidth="1.5" />
            <line x1="50%" y1="54%" x2="72%" y2="82%" stroke="rgba(251,188,4,0.3)" strokeWidth="1.5" />
            <line x1="28%" y1="82%" x2="72%" y2="82%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </svg>

          {/* Nodes */}
          {constellationNodes.map((node) => {
            const isHovered = activeNode === node.id;

            return (
              <div
                key={node.id}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute z-20 cursor-pointer transition-all duration-300"
              >
                <div className={`p-3 rounded-2xl flex items-center gap-2 border transition-all ${
                  isHovered
                    ? 'bg-white text-gray-900 border-white scale-110 shadow-glow-multi ring-2 ring-google-blue'
                    : 'bg-black/80 text-gray-200 border-neutral-700 hover:border-gray-400'
                }`}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: node.color }}></span>
                  <div className="text-left">
                    <span className="font-bold text-xs block leading-tight">{node.label}</span>
                    <span className="text-[9px] font-mono text-gray-400 block">{node.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Community Portals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <a
            href={EVENT_DATA.socials.bevy}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 border border-white/10"
          >
            <Globe className="w-3.5 h-3.5 text-google-green" />
            <span>Join 5,800+ Members on Official Bevy Chapter</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
          <a
            href={EVENT_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 border border-white/10"
          >
            <LinkedinIcon size={14} className="text-google-blue-light" />
            <span>Follow LinkedIn Company Page (18980745)</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
          <a
            href={EVENT_DATA.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 border border-white/10"
          >
            <InstagramIcon size={14} className="text-pink-400" />
            <span>Follow @gdgcloudtoronto on Instagram</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
