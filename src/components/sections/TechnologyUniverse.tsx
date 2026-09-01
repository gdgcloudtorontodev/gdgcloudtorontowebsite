import React, { useState } from 'react';
import { 
  Sparkles, 
  Cloud, 
  Atom, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Server, 
  Bot, 
  ShieldCheck, 
  Zap,
  Globe
} from 'lucide-react';

export const TechnologyUniverse: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('ai');

  const domains = [
    {
      id: 'ai',
      name: 'ARTIFICIAL INTELLIGENCE & AGENTS',
      shortName: 'AI & Agents',
      tagline: 'From Generative Foundation Models to Autonomous Collaborators',
      icon: Sparkles,
      color: 'google-blue',
      borderColor: 'border-blue-200',
      accentColor: '#4285F4',
      bgGlow: 'from-blue-500/10 to-indigo-500/5',
      topics: [
        'Generative & Multimodal AI (Gemini 2.0 / 1.5 Pro)',
        'Model Context Protocol (MCP) Tool Integration',
        'Stateful Multi-Agent Orchestration (LangGraph)',
        'Test-Time Reasoning & Chain-of-Thought Models',
        'Responsible AI, Watermarking & Alignment',
        'Zero-Shot Multimodal Embeddings & ScaNN RAG',
      ],
      description: 'Explore the frontiers of native multimodal reasoning, autonomous agent architectures, standardized tool buses via MCP, and enterprise retrieval augmentation.',
      keynoteHighlight: 'Keynote by Dr. Elena Vance (Google DeepMind) • 09:30 AM',
      labLink: '#workshops',
    },
    {
      id: 'cloud',
      name: 'PLANETARY CLOUD & KUBERNETES',
      shortName: 'Cloud & Compute',
      tagline: 'Resilient Microservices, Distributed Data & Serverless Scale',
      icon: Cloud,
      color: 'google-green',
      borderColor: 'border-emerald-200',
      accentColor: '#34A853',
      bgGlow: 'from-emerald-500/10 to-teal-500/5',
      topics: [
        'Google Kubernetes Engine (GKE) Autopilot & Multi-Region',
        'Serverless Scalability with Cloud Run & Eventarc',
        'Global Distributed ACID Transactions with Spanner',
        'Zero-Trust Network Mesh with Istio & Mutual TLS',
        'BigQuery Data Mesh & Real-Time Analytics',
        'Platform Engineering & GitOps CI/CD Delivery',
      ],
      description: 'Discover how modern platform engineering teams architect multi-region, self-healing backbones capable of surviving entire availability zone outages with zero downtime.',
      keynoteHighlight: 'Deep Dive by Marcus Chen (Google Cloud Staff Architect) • 11:15 AM',
      labLink: '#workshops',
    },
    {
      id: 'quantum',
      name: 'QUANTUM COMPUTING & ALGORITHMS',
      shortName: 'Quantum Frontier',
      tagline: 'Superconducting Qubits, Cirq & Hybrid Classical-Quantum Workflows',
      icon: Atom,
      color: 'google-purple',
      borderColor: 'border-purple-200',
      accentColor: '#A142F4',
      bgGlow: 'from-purple-500/10 to-fuchsia-500/5',
      topics: [
        'Google Cirq Circuit Construction & Gate Synthesis',
        'Quantum Virtual Machines (QVM) & Noise Simulation',
        'Variational Quantum Eigensolvers (VQE)',
        'Quantum Error Correction & Logical Qubits (Sycamore)',
        'Post-Quantum Cryptography & Lattice Standards',
        'Quantum Machine Learning (QML) Algorithms',
      ],
      description: 'Demystifying the quantum horizon. Learn how hybrid algorithms combine classical GPUs with quantum processors to solve combinatorial optimization in physics and chemistry.',
      keynoteHighlight: 'Fireside with Dr. Julian Trent (Toronto Quantum Initiative) • 02:30 PM',
      labLink: '#workshops',
    },
    {
      id: 'hardware',
      name: 'HARDWARE & ACCELERATION INFRASTRUCTURE',
      shortName: 'Silicon & Compute',
      tagline: 'TPUs, Liquid-Cooled Data Centers & High-Bandwidth Memory',
      icon: Cpu,
      color: 'google-yellow',
      borderColor: 'border-amber-200',
      accentColor: '#FBBC04',
      bgGlow: 'from-amber-500/10 to-orange-500/5',
      topics: [
        'Cloud TPU v5p & v6 Optical Circuit Switch Pods',
        'High-Bandwidth Memory (HBM3e) & Systolic Arrays',
        'vLLM PagedAttention GPU Serving Optimization',
        'Liquid Cooling & Carbon-Aware AI Workload Scheduling',
        'Custom Edge Accelerators & On-Device NPU Execution',
        'Hardware-Software Co-Design for Trillion-Parameter Models',
      ],
      description: 'Understand the physical limits and computational economics of modern inference clusters: memory fabrics, optical interconnects, and sustainable green data center engineering.',
      keynoteHighlight: 'Tech Deep Dive by Priya Sharma (VP AI Infrastructure) • 03:30 PM',
      labLink: '#workshops',
    },
  ];

  const currentDomain = domains.find((d) => d.id === selectedDomain) || domains[0];

  return (
    <section id="technology-universe" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200 mb-3">
            <span className="w-2 h-2 rounded-full bg-google-blue"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-gray-700 uppercase">
              TECHNOLOGY DOMAINS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            THE TECHNOLOGY UNIVERSE
          </h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Explore the four interconnected technology pillars defining DevFest 2026. From autonomous multi-agent systems to superconducting quantum processors.
          </p>
        </div>

        {/* 4 Domain Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {domains.map((dom) => {
            const Icon = dom.icon;
            const isSelected = selectedDomain === dom.id;
            return (
              <button
                key={dom.id}
                onClick={() => setSelectedDomain(dom.id)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? 'bg-gray-900 text-white border-gray-900 shadow-lg scale-[1.02]'
                    : 'bg-gray-50 hover:bg-white text-gray-800 border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="p-2.5 rounded-xl text-white"
                    style={{ backgroundColor: dom.accentColor }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-mono uppercase bg-white/20 text-white px-2 py-0.5 rounded-full font-bold">
                      ACTIVE DOMAIN
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs font-bold block opacity-80 uppercase">
                  {dom.shortName}
                </span>
                <span className="font-extrabold text-sm sm:text-base block mt-0.5 line-clamp-1">
                  {dom.name.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Deep-Dive Card */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-google-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Editorial & Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: currentDomain.accentColor }}
                ></span>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase">
                  {currentDomain.name}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {currentDomain.tagline}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {currentDomain.description}
              </p>

              {/* Keynote alert box */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-google-blue shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono font-bold text-google-blue-dark block">FEATURED SESSION</span>
                  <span className="text-xs text-gray-800 font-medium">{currentDomain.keynoteHighlight}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#workshops"
                  className="bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <span>Explore {currentDomain.shortName} Labs</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#speakers"
                  className="bg-white hover:bg-gray-100 text-gray-800 text-xs sm:text-sm font-medium px-4 py-3 rounded-xl border border-gray-300 transition-all"
                >
                  View Track Speakers
                </a>
              </div>
            </div>

            {/* Right side: Topic Pills Matrix */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-xs font-mono font-bold text-gray-700 uppercase">
                  CURATED CORE TOPICS
                </span>
                <span className="text-[11px] font-mono text-google-blue font-semibold">
                  6 MODULES
                </span>
              </div>

              <div className="space-y-2.5 pt-1">
                {currentDomain.topics.map((topic, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <CheckCircle2 
                      className="w-4 h-4 mt-0.5 shrink-0" 
                      style={{ color: currentDomain.accentColor }} 
                    />
                    <span className="text-xs font-medium text-gray-800 leading-snug">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
