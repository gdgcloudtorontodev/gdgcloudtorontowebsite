import React from 'react';
import { EvolutionEra } from '../../../types/evolution';
import { 
  Cpu, 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Sparkles, 
  Bot, 
  Atom, 
  Layers, 
  Terminal, 
  Workflow, 
  Zap, 
  Database,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface EraVisualCanvasProps {
  era: EvolutionEra;
}

export const EraVisualCanvas: React.FC<EraVisualCanvasProps> = ({ era }) => {
  const { visualMode, colorPalette } = era;

  return (
    <div className="relative w-full min-h-[380px] sm:min-h-[460px] bg-black/60 backdrop-blur-md rounded-3xl border border-white/15 p-6 sm:p-8 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 opacity-20 blur-3xl transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colorPalette.primary}, transparent 70%)`
        }}
      ></div>

      {/* ERA 01 — COMPUTE: Discrete Logic Grid */}
      {visualMode === 'grid' && (
        <div className="relative z-10 w-full max-w-md space-y-4">
          <div className="grid grid-cols-4 gap-3">
            {['CPU 8086', 'UNIX KERNEL', 'SQL RDBMS', 'LOGIC GATES', 'C COMPILER', 'ALU REGISTERS', 'ETHERNET', 'SYSTEM BUS'].map((item, i) => (
              <div 
                key={i} 
                className="bg-neutral-900 border border-neutral-700 p-3 rounded-xl text-center text-gray-300 font-mono text-[10px] shadow-sm hover:border-white transition-all"
              >
                <Cpu className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                <span className="block font-bold">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 text-[11px] font-mono text-gray-400 flex items-center justify-between">
            <span>STATE: DISCRETE VON NEUMANN CYCLES</span>
            <span className="text-gray-200">100% DETERMINISTIC</span>
          </div>
        </div>
      )}

      {/* ERA 02 — THE WEB: Connected Global Information Graph */}
      {visualMode === 'network' && (
        <div className="relative z-10 w-full max-w-lg">
          <div className="flex items-center justify-center relative min-h-[280px]">
            {/* Center Search / HTTP Node */}
            <div className="relative z-20 bg-google-blue text-white p-5 rounded-full shadow-glow-blue text-center w-28 h-28 flex flex-col items-center justify-center">
              <Globe className="w-6 h-6 mb-0.5 animate-spin text-white" style={{ animationDuration: '20s' }} />
              <span className="font-mono text-xs font-extrabold">HTTP / DOM</span>
              <span className="text-[9px] font-mono text-blue-100">PAGERANK</span>
            </div>

            {/* Orbiting Hypertext Points */}
            {[
              { label: 'Hyperlinks', x: -140, y: -60, tag: 'URL' },
              { label: 'Web Crawlers', x: 140, y: -60, tag: 'INDEX' },
              { label: 'Global Data', x: -140, y: 70, tag: 'HTML' },
              { label: 'AJAX Clients', x: 140, y: 70, tag: 'JS' },
            ].map((node, idx) => (
              <div
                key={idx}
                style={{ transform: `translate(${node.x}px, ${node.y}px)` }}
                className="absolute bg-neutral-900/90 border border-blue-500/40 text-white px-3 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-google-blue animate-pulse"></span>
                <span>{node.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ERA 03 — MOBILE: Network Contracts to Handheld Devices */}
      {visualMode === 'mobile_cluster' && (
        <div className="relative z-10 w-full max-w-md flex items-center justify-center gap-4">
          <div className="bg-neutral-950 border-2 border-amber-500/40 p-4 rounded-3xl shadow-2xl w-48 text-center space-y-3">
            <div className="w-8 h-1 bg-gray-700 rounded-full mx-auto"></div>
            <Smartphone className="w-8 h-8 text-google-yellow mx-auto" />
            <span className="font-mono text-xs font-bold text-white block">ANDROID & SENSORS</span>
            <div className="space-y-1 text-[10px] font-mono text-gray-400">
              <p className="bg-white/5 p-1 rounded">📍 Real-time GPS</p>
              <p className="bg-white/5 p-1 rounded">📸 Multimodal Camera</p>
              <p className="bg-white/5 p-1 rounded">⚡ Low-Power NPU</p>
            </div>
            <div className="w-3 h-3 rounded-full border border-gray-600 mx-auto"></div>
          </div>
          <div className="text-left text-xs font-mono space-y-2 text-gray-300">
            <p className="flex items-center gap-1.5 text-google-red"><Zap className="w-3.5 h-3.5" /> 3 Billion Pocket Endpoints</p>
            <p className="flex items-center gap-1.5 text-google-yellow"><Zap className="w-3.5 h-3.5" /> Continuous Push Stream</p>
            <p className="flex items-center gap-1.5 text-google-green"><Zap className="w-3.5 h-3.5" /> Handheld Touch Interfaces</p>
          </div>
        </div>
      )}

      {/* ERA 04 — CLOUD: Hyper-Scale Kubernetes & Utility Nodes */}
      {visualMode === 'cloud_nodes' && (
        <div className="relative z-10 w-full max-w-lg space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-emerald-950/70 border border-emerald-500/50 p-3.5 rounded-2xl text-center">
              <Cloud className="w-5 h-5 text-google-green mx-auto mb-1" />
              <span className="font-mono text-xs font-bold text-white block">GKE CLUSTERS</span>
              <span className="text-[9px] font-mono text-emerald-300">Autopilot Pods</span>
            </div>
            <div className="bg-blue-950/70 border border-blue-500/50 p-3.5 rounded-2xl text-center">
              <Database className="w-5 h-5 text-google-blue mx-auto mb-1" />
              <span className="font-mono text-xs font-bold text-white block">SPANNER & BQ</span>
              <span className="text-[9px] font-mono text-blue-300">Global ACID Sync</span>
            </div>
            <div className="bg-teal-950/70 border border-teal-500/50 p-3.5 rounded-2xl text-center">
              <Layers className="w-5 h-5 text-teal-400 mx-auto mb-1" />
              <span className="font-mono text-xs font-bold text-white block">SERVERLESS</span>
              <span className="text-[9px] font-mono text-teal-300">Cloud Run</span>
            </div>
          </div>
          <div className="bg-neutral-950 p-3.5 rounded-2xl border border-neutral-800 text-xs font-mono text-gray-300 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-google-green animate-pulse"></span>
              PLANETARY UTILITY FABRIC
            </span>
            <span className="text-google-green">99.999% SLA</span>
          </div>
        </div>
      )}

      {/* ERA 05 — ML & TPUs: Flowing Neural Synapses */}
      {visualMode === 'neural_mesh' && (
        <div className="relative z-10 w-full max-w-lg space-y-4">
          <div className="flex items-center justify-between bg-purple-950/60 border border-purple-500/40 p-5 rounded-3xl">
            <div className="text-center">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-1 animate-pulse" />
              <span className="font-mono text-xs font-bold text-white block">DEEP NETWORK</span>
              <span className="text-[10px] font-mono text-purple-300">Backpropagation</span>
            </div>
            <div className="text-purple-300 font-mono text-xs animate-pulse">
              ══════►
            </div>
            <div className="text-center">
              <Cpu className="w-8 h-8 text-google-blue mx-auto mb-1" />
              <span className="font-mono text-xs font-bold text-white block">GOOGLE TPU v5</span>
              <span className="text-[10px] font-mono text-blue-300">Systolic Array</span>
            </div>
          </div>
          <div className="bg-black/80 p-3.5 rounded-2xl border border-purple-800/60 text-xs font-mono text-purple-300 flex items-center justify-between">
            <span>TRAINING: GRADIENT DESCENT MATRIX ACCELERATION</span>
            <span className="text-white font-bold">ALPHAFOLD & ALPHAGO</span>
          </div>
        </div>
      )}

      {/* ERA 06 — GENERATIVE AI: Multimodal Token Transformation */}
      {visualMode === 'multimodal_rays' && (
        <div className="relative z-10 w-full max-w-lg text-center space-y-4">
          <div className="inline-block bg-gradient-to-r from-google-blue via-google-red to-google-yellow text-white font-mono font-bold text-xs px-4 py-1.5 rounded-full shadow-lg">
            PROMPT: "Explain, code, and generate visual telemetry"
          </div>
          <div className="text-gray-400 font-mono text-sm">↓↓↓ TRANSFORMER SELF-ATTENTION & GEMINI NATIVE CORE ↓↓↓</div>
          <div className="grid grid-cols-5 gap-2">
            {['TEXT', 'IMAGES', 'AUDIO', 'VIDEO', 'CODE'].map((type, i) => (
              <div key={i} className="bg-white/10 border border-white/20 p-2.5 rounded-xl font-mono text-[11px] text-white font-bold">
                {type}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ERA 07 — AGENTIC AI: Autonomous Plan → Tool → Action Loop */}
      {visualMode === 'agent_orchestra' && (
        <div className="relative z-10 w-full max-w-lg space-y-3">
          <div className="bg-emerald-950/80 border border-emerald-500/60 p-4 rounded-2xl text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
              <Bot className="w-4 h-4" />
              AUTONOMOUS EXECUTION STATE MACHINE
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-gray-200 overflow-x-auto py-1">
              <span className="bg-white/10 px-2 py-1 rounded">1. UNDERSTAND</span>
              <span>→</span>
              <span className="bg-white/10 px-2 py-1 rounded">2. PLAN DAG</span>
              <span>→</span>
              <span className="bg-white/10 px-2 py-1 rounded text-google-yellow font-bold">3. USE MCP TOOLS</span>
              <span>→</span>
              <span className="bg-white/10 px-2 py-1 rounded text-google-green font-bold">4. VERIFY & COMMIT</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-gray-300">
            <div className="bg-white/5 p-2 rounded-xl border border-white/10">MCP Protocol Bus</div>
            <div className="bg-white/5 p-2 rounded-xl border border-white/10">LangGraph State Cyclic Graph</div>
            <div className="bg-white/5 p-2 rounded-xl border border-white/10">Human-in-the-Loop Safety Gate</div>
          </div>
        </div>
      )}

      {/* ERA 08 — THE NEXT FRONTIER: Quantum & Frontier Computing */}
      {visualMode === 'quantum_matrix' && (
        <div className="relative z-10 w-full max-w-lg space-y-4">
          <div className="flex items-center justify-center gap-6">
            <div className="bg-cyan-950/80 border border-cyan-400 p-4 rounded-full shadow-glow-multi text-center w-28 h-28 flex flex-col items-center justify-center">
              <Atom className="w-7 h-7 text-cyan-300 animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-[10px] font-mono font-bold text-white mt-1">QUANTUM QUBITS</span>
            </div>
            <div className="bg-purple-950/80 border border-purple-400 p-4 rounded-full shadow-glow-multi text-center w-28 h-28 flex flex-col items-center justify-center">
              <Sparkles className="w-7 h-7 text-purple-300 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-white mt-1">EMBODIED ROBOTICS</span>
            </div>
          </div>
          <div className="bg-neutral-950 p-3 rounded-2xl border border-neutral-700 text-center text-xs font-mono text-cyan-300">
            FAULT-TOLERANT LOGICAL QUBITS • PHOTONIC SILICON • SPATIAL NEURAL SYSTEMS
          </div>
        </div>
      )}

    </div>
  );
};
