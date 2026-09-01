import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Globe, 
  Cpu, 
  Bot, 
  Cloud, 
  Atom, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Database,
  Calendar,
  MapPin,
  Flame
} from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const orbitNodes = [
    { id: 'ai', label: 'Multimodal AI', category: 'AI', color: '#4285F4', icon: Sparkles, desc: 'Gemini 2.0 & Native Cross-Modal Models', angle: 0, radius: 170 },
    { id: 'agents', label: 'Agentic Systems', category: 'AGENTS', color: '#34A853', icon: Bot, desc: 'MCP & Cyclic Graph Multi-Agent Teams', angle: 36, radius: 215 },
    { id: 'cloud', label: 'Google Cloud', category: 'CLOUD', color: '#1A73E8', icon: Cloud, desc: 'Hyper-Scale Planetary Distributed Mesh', angle: 72, radius: 160 },
    { id: 'quantum', label: 'Quantum Compute', category: 'QUANTUM', color: '#A142F4', icon: Atom, desc: 'Cirq, Superconducting Qubits & Algorithms', angle: 108, radius: 220 },
    { id: 'gpus', label: 'TPUs & GPUs', category: 'HARDWARE', color: '#FBBC04', icon: Cpu, desc: 'Custom Matrix Multipliers & HBM3e Fabrics', angle: 144, radius: 175 },
    { id: 'k8s', label: 'Kubernetes GKE', category: 'INFRA', color: '#EA4335', icon: Layers, desc: 'Autonomous Cluster Scheduling & Serving', angle: 180, radius: 210 },
    { id: 'data', label: 'BigQuery Mesh', category: 'DATA', color: '#4285F4', icon: Database, desc: 'In-Database SQL Machine Learning', angle: 216, radius: 165 },
    { id: 'security', label: 'Zero-Trust Shield', category: 'SECURITY', color: '#34A853', icon: ShieldCheck, desc: 'Cryptographic Provenance & Sandbox Gates', angle: 252, radius: 220 },
    { id: 'vllm', label: 'vLLM Serving', category: 'INFERENCE', color: '#FBBC04', icon: Zap, desc: 'PagedAttention High-Throughput Serving', angle: 288, radius: 170 },
    { id: 'dev-tools', label: 'Antigravity IDE', category: 'DEVELOPER', color: '#A142F4', icon: Terminal, desc: 'AI-Native IDEs & Autonomous Refactoring', angle: 324, radius: 215 },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F8F9FA] to-[#F1F3F4]">
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-google-blue/15 via-google-green/10 to-google-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-google-subtle border border-[#DADCE0]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-google-green"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-gray-800 font-mono">
                GDG Cloud Toronto • DevFest 2026
              </span>
              <span className="bg-google-blue/10 text-google-blue-dark text-[10px] font-bold px-2 py-0.5 rounded-full">
                OCTOBER 24, 2026
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.08]">
                DEVFEST <span className="text-gradient-google">2026</span>
              </h1>
              <h2 className="text-xl sm:text-2xl xl:text-3xl font-semibold text-gray-700 tracking-tight">
                {EVENT_DATA.tagline}
              </h2>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {EVENT_DATA.subheadline}
            </p>

            {/* Quick Meta Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm text-center lg:text-left">
                <span className="block text-xl font-bold text-gray-900 font-mono">1,500+</span>
                <span className="text-[11px] text-gray-500 font-medium">Expected Builders</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm text-center lg:text-left">
                <span className="block text-xl font-bold text-google-blue font-mono">42+</span>
                <span className="text-[11px] text-gray-500 font-medium">Flagship Speakers</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm text-center lg:text-left">
                <span className="block text-xl font-bold text-google-green font-mono">16</span>
                <span className="text-[11px] text-gray-500 font-medium">Hands-On Labs</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <button
                onClick={onRegisterClick}
                className="bg-google-blue hover:bg-google-blue-dark text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-google-elevated hover:shadow-glow-blue transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-google-yellow" />
                <span>Register DevFest Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#ai-observatory"
                className="bg-white hover:bg-gray-50 text-gray-800 font-medium text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-gray-300 shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <Bot className="w-4 h-4 text-google-green" />
                <span>AI Observatory</span>
              </a>

              <a
                href="#evolution-of-computing"
                className="bg-white hover:bg-gray-50 text-gray-700 font-medium text-sm sm:text-base px-5 py-3.5 rounded-2xl border border-gray-300 shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-google-blue" />
                <span>8-Era Evolution</span>
              </a>
            </div>

            {/* Venue location pill */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-google-red" />
                {EVENT_DATA.location.venue}, {EVENT_DATA.location.city}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-google-blue" />
                {EVENT_DATA.dates.display}
              </span>
            </div>
          </div>

          {/* Right Column: Technology Orbit Command Center */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[440px] sm:min-h-[500px]">
            {/* Desktop Orbit Visualization */}
            <div className="relative w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] flex items-center justify-center">
              
              {/* Outer Orbit Rings */}
              <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-gray-300/80 animate-orbit-slow pointer-events-none hidden sm:block"></div>
              <div className="absolute w-[330px] h-[330px] rounded-full border border-gray-200 pointer-events-none"></div>
              <div className="absolute w-[220px] h-[220px] rounded-full border border-blue-100 pointer-events-none"></div>

              {/* Central Glowing DEVFEST 2026 Core Node */}
              <div className="relative z-20 bg-gradient-to-br from-white to-gray-50 rounded-full p-6 sm:p-8 shadow-google-elevated border-2 border-google-blue flex flex-col items-center justify-center text-center w-36 sm:w-44 h-36 sm:h-44 group cursor-pointer">
                <div className="flex items-center gap-1 mb-1">
                  <span className="w-2 h-2 rounded-full bg-google-blue"></span>
                  <span className="w-2 h-2 rounded-full bg-google-red"></span>
                  <span className="w-2 h-2 rounded-full bg-google-yellow"></span>
                  <span className="w-2 h-2 rounded-full bg-google-green"></span>
                </div>
                <span className="font-extrabold text-sm sm:text-base text-gray-900 tracking-tight">
                  DEVFEST
                </span>
                <span className="font-mono text-xs font-bold text-google-blue">
                  2026
                </span>
                <span className="text-[9px] text-gray-500 font-mono mt-1 uppercase tracking-wider">
                  HQ COMMAND
                </span>
              </div>

              {/* Orbiting Technology Nodes */}
              {orbitNodes.map((node) => {
                const Icon = node.icon;
                const radians = (node.angle * Math.PI) / 180;
                // Scale radius for mobile if needed
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                const r = isMobile ? node.radius * 0.72 : node.radius;
                const x = Math.cos(radians) * r;
                const y = Math.sin(radians) * r;
                const isSelected = activeNode === node.id;

                return (
                  <div
                    key={node.id}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                    className="absolute z-30 cursor-pointer transition-all duration-300"
                  >
                    <div 
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-all shadow-md ${
                        isSelected 
                          ? 'bg-gray-900 text-white scale-110 shadow-lg ring-2 ring-google-blue'
                          : 'bg-white/95 backdrop-blur-sm text-gray-800 border border-gray-200 hover:border-gray-400 hover:scale-105'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: isSelected ? '#8AB4F8' : node.color }} />
                      <span className="font-semibold text-[11px] whitespace-nowrap">
                        {node.label}
                      </span>
                    </div>

                    {/* Interactive tooltip info card on hover/click */}
                    {isSelected && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-900 text-white p-2.5 rounded-xl text-[11px] shadow-2xl z-40 border border-gray-700 pointer-events-none animate-in fade-in zoom-in-95">
                        <div className="flex items-center justify-between text-[9px] font-mono text-google-blue-light mb-1">
                          <span>{node.category}</span>
                          <span>ACTIVE TRACK</span>
                        </div>
                        <p className="text-gray-300 font-sans leading-snug">{node.desc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
