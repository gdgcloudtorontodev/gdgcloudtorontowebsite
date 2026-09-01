import React, { useState } from 'react';
import { 
  Network, 
  Users, 
  Sparkles, 
  Award, 
  Code, 
  Globe, 
  Cpu
} from 'lucide-react';

export const CommunityConstellation: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const constellationNodes = [
    { id: 'c1', label: 'Dr. Elena Vance', role: 'Keynote Speaker', type: 'speaker', color: '#4285F4', x: 20, y: 30 },
    { id: 'c2', label: 'Sarah Jenkins', role: 'Lead Organizer', type: 'organizer', color: '#EA4335', x: 50, y: 20 },
    { id: 'c3', label: 'Marcus Chen', role: 'GCP Solutions Architect', type: 'speaker', color: '#34A853', x: 80, y: 35 },
    { id: 'c4', label: 'AgentMesh Team', role: 'AI Hackathon Winner', type: 'winner', color: '#FBBC04', x: 25, y: 70 },
    { id: 'c5', label: 'Samuel Adebayo', role: 'Google Dev Expert (GDE)', type: 'community', color: '#4285F4', x: 75, y: 75 },
    { id: 'c6', label: '1,500+ Attendees', role: 'Canadian Builders', type: 'attendee', color: '#34A853', x: 50, y: 55 },
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
            Visualizing the interconnected web of speakers, organizers, hackathon builders, and community mentors powering DevFest 2026.
          </p>
        </div>

        {/* Interactive Constellation Board */}
        <div className="bg-neutral-900 rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative min-h-[400px] flex items-center justify-center">
          
          {/* Connecting SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="20%" y1="30%" x2="50%" y2="20%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="50%" y1="20%" x2="80%" y2="35%" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="20%" y1="30%" x2="50%" y2="55%" stroke="rgba(66,133,244,0.3)" strokeWidth="1.5" />
            <line x1="80%" y1="35%" x2="50%" y2="55%" stroke="rgba(52,168,83,0.3)" strokeWidth="1.5" />
            <line x1="25%" y1="70%" x2="50%" y2="55%" stroke="rgba(251,188,4,0.3)" strokeWidth="1.5" />
            <line x1="75%" y1="75%" x2="50%" y2="55%" stroke="rgba(66,133,244,0.3)" strokeWidth="1.5" />
            <line x1="25%" y1="70%" x2="75%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
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

      </div>
    </section>
  );
};
