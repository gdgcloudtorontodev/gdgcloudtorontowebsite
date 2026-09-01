import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Cloud, 
  Database, 
  Bot, 
  AppWindow, 
  Zap, 
  Atom, 
  ArrowRight,
  Info
} from 'lucide-react';

export const AiTechDependencyMap: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const layers = [
    {
      id: 0,
      title: 'FOUNDATION MODELS',
      theme: 'Multimodal Core',
      icon: Bot,
      color: '#4285F4',
      examples: 'Gemini 2.0 Pro, DeepSeek-R1, Gemma 2',
      role: 'Consumes raw sensory tokens and produces high-order reasoning & structured tool call plans.',
      connectsTo: 'AI Platforms & Orchestrators',
    },
    {
      id: 1,
      title: 'AI PLATFORMS & AGENTS',
      theme: 'State & Orchestration',
      icon: Layers,
      color: '#34A853',
      examples: 'Vertex AI Agent Builder, LangGraph, MCP Servers',
      role: 'Coordinates multi-agent cyclic loops, memory persistence, tool exposure, and human approval gates.',
      connectsTo: 'Cloud Compute & Storage',
    },
    {
      id: 2,
      title: 'CLOUD & CONTAINER MESH',
      theme: 'Distributed Utility',
      icon: Cloud,
      color: '#1A73E8',
      examples: 'Google Kubernetes Engine (GKE), Cloud Run, Spanner',
      role: 'Hosts isolated agent sandboxes, exposes VPC networks, and provides automatic horizontal scaling.',
      connectsTo: 'Silicon & Hardware Accelerators',
    },
    {
      id: 3,
      title: 'HARDWARE & ACCELERATORS',
      theme: 'Silicon Muscle',
      icon: Cpu,
      color: '#FBBC04',
      examples: 'Cloud TPU v5p/v6, NVIDIA H100/L4, HBM3e Memory',
      role: 'Executes high-density matrix multiplications via continuous batching and optical circuit switches.',
      connectsTo: 'Enterprise Data Stores',
    },
    {
      id: 4,
      title: 'ENTERPRISE DATA & QUANTUM',
      theme: 'Truth & Frontier Compute',
      icon: Atom,
      color: '#A142F4',
      examples: 'BigQuery ML, Vertex Vector Search, Google Cirq',
      role: 'Supplies grounded factual knowledge embeddings and tests hybrid quantum optimization routines.',
      connectsTo: 'Production Applications & Users',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 sm:p-10 rounded-3xl border border-neutral-800 shadow-xl my-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-google-blue-light uppercase block mb-1">
            TECHNOLOGY DEPENDENCY MAP
          </span>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            AI × CLOUD × QUANTUM × INFRASTRUCTURE
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            How modern AI models connect to cloud platforms, accelerators, and enterprise data backbones.
          </p>
        </div>
      </div>

      {/* 5 Stacked Layer Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {layers.map((layer) => {
          const Icon = layer.icon;
          const isSelected = selectedLayer === layer.id;

          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white text-gray-900 border-white shadow-glow-multi scale-[1.02] z-10'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10'
              }`}
            >
              <div>
                <div 
                  className={`p-2.5 rounded-xl w-fit mb-3 ${
                    isSelected ? 'bg-gray-900 text-white' : 'bg-white/10'
                  }`}
                  style={{ color: isSelected ? '#FFFFFF' : layer.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider block">
                  LAYER 0{layer.id + 1}
                </span>
                <h4 className="font-bold text-xs sm:text-sm mt-0.5 leading-snug">
                  {layer.title}
                </h4>
              </div>

              <div className="mt-4 pt-2 border-t border-white/10 text-[10px] font-mono">
                <span className={isSelected ? 'text-gray-600' : 'text-google-blue-light'}>
                  {layer.theme}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Layer Detail Banner */}
      <div className="mt-6 bg-neutral-900/80 p-5 rounded-2xl border border-neutral-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-google-yellow uppercase block mb-1">
            INSPECTING: {layers[selectedLayer].title} ({layers[selectedLayer].examples})
          </span>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {layers[selectedLayer].role}
          </p>
        </div>
        <div className="shrink-0 text-xs font-mono text-google-blue-light bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
          Feeds into: {layers[selectedLayer].connectsTo}
        </div>
      </div>
    </div>
  );
};
