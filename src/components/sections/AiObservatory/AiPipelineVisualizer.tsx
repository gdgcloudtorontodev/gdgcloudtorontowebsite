import React, { useState } from 'react';
import { 
  Lightbulb, 
  MessageSquareCode, 
  Cpu, 
  Wrench, 
  Bot, 
  AppWindow, 
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle
} from 'lucide-react';

export const AiPipelineVisualizer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(4);

  const stages = [
    {
      id: 0,
      name: 'IDEA',
      subtitle: 'Human Intent',
      icon: Lightbulb,
      color: '#FBBC04',
      bgGlow: 'from-amber-500/20 to-orange-500/10',
      description: 'A developer or researcher conceives an objective: "Build an autonomous code reliability agent for Kubernetes".',
      detail: 'Raw conceptual requirement without code or prompt structure.',
    },
    {
      id: 1,
      name: 'PROMPT / STREAM',
      subtitle: 'Multimodal Input',
      icon: MessageSquareCode,
      color: '#4285F4',
      bgGlow: 'from-blue-500/20 to-indigo-500/10',
      description: 'System specifications, logs, AST traces, and documentation PDFs packaged with structural constraints.',
      detail: '2M+ token context window ingestion with zero lossy chunking.',
    },
    {
      id: 2,
      name: 'FOUNDATION MODEL',
      subtitle: 'Reasoning Engine',
      icon: Cpu,
      color: '#A142F4',
      bgGlow: 'from-purple-500/20 to-fuchsia-500/10',
      description: 'Gemini 2.0 / DeepSeek-R1 reasoning core generates hypotheses, breaks down steps, and self-reflects.',
      detail: 'Cross-attention multimodal reasoning and test-time verification.',
    },
    {
      id: 3,
      name: 'TOOLS & MCP',
      subtitle: 'Standardized Bus',
      icon: Wrench,
      color: '#EA4335',
      bgGlow: 'from-rose-500/20 to-pink-500/10',
      description: 'Model calls external tools via Model Context Protocol (MCP): Git, Postgres, terminal sandbox, and cloud APIs.',
      detail: 'Typed JSON-RPC 2.0 protocol with bi-directional secure state sync.',
    },
    {
      id: 4,
      name: 'AGENTIC GRAPH',
      subtitle: 'Cyclic Autonomous Loops',
      icon: Bot,
      color: '#34A853',
      bgGlow: 'from-emerald-500/20 to-teal-500/10',
      description: 'LangGraph multi-actor team: Planner drafts changes, Coder implements diffs, Critic runs unit tests.',
      detail: 'State persistence, cyclic self-healing loops, and human approval gates.',
    },
    {
      id: 5,
      name: 'APPLICATION',
      subtitle: 'Production Service',
      icon: AppWindow,
      color: '#1A73E8',
      bgGlow: 'from-blue-600/20 to-cyan-500/10',
      description: 'The autonomous solution is deployed to production via Google Kubernetes Engine and Cloud Run.',
      detail: 'Continuous monitoring, sub-second latency, and horizontal autoscaling.',
    },
    {
      id: 6,
      name: 'REAL-WORLD IMPACT',
      subtitle: 'Societal Value',
      icon: Sparkles,
      color: '#FBBC04',
      bgGlow: 'from-amber-400/20 to-emerald-500/10',
      description: 'Zero downtime, automated security patches, accessible education, and accelerated scientific discovery.',
      detail: 'Measurable community impact and developer empowerment.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white p-6 sm:p-10 rounded-3xl border border-neutral-800 shadow-2xl relative overflow-hidden my-12">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-google-blue/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-google-green/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-2">
          <Zap className="w-3.5 h-3.5 text-google-yellow" />
          <span className="text-xs font-mono font-bold tracking-wider text-google-blue-light uppercase">
            SIGNATURE AI VISUALIZATION
          </span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          FROM IDEA → INTELLIGENCE → ACTION
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-2">
          Visualizing how modern developer technology transitions from raw conceptual human thought into autonomous multi-agent applications.
        </p>
      </div>

      {/* 7-Step Pipeline Horizontal Ribbon */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3 mb-8">
        {stages.map((stg) => {
          const Icon = stg.icon;
          const isActive = activeStage === stg.id;

          return (
            <button
              key={stg.id}
              onClick={() => setActiveStage(stg.id)}
              className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-between relative overflow-hidden ${
                isActive
                  ? 'bg-white text-gray-900 border-white shadow-glow-multi scale-105 z-20'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
              }`}
            >
              <div 
                className={`p-2 rounded-xl mb-2 ${
                  isActive ? 'bg-gray-900 text-white' : 'bg-white/10'
                }`}
                style={{ color: isActive ? '#FFFFFF' : stg.color }}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase font-bold tracking-wider block">
                0{stg.id + 1} • {stg.name}
              </span>
              <span className={`text-[9px] block mt-0.5 ${
                isActive ? 'text-gray-600 font-semibold' : 'text-gray-500'
              }`}>
                {stg.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Showcase Panel */}
      <div className="relative z-10 bg-neutral-900/90 rounded-2xl p-6 border border-neutral-700">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-google-blue/20 text-google-blue-light border border-google-blue/30">
                STAGE 0{activeStage + 1}
              </span>
              <span className="text-sm font-bold text-white">
                {stages[activeStage].name} — {stages[activeStage].subtitle}
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
              {stages[activeStage].description}
            </p>
            <div className="flex items-center gap-2 text-xs text-google-yellow font-mono pt-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Technical Architecture: {stages[activeStage].detail}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono"
            >
              ← Prev Stage
            </button>
            <button
              onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-xl bg-google-blue hover:bg-google-blue-dark text-white text-xs font-mono font-bold"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
