import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Cpu, 
  Code, 
  Database, 
  Cloud, 
  Layers, 
  Eye, 
  Network, 
  Workflow, 
  Zap, 
  Info
} from 'lucide-react';
import { AI_PRODUCTS } from '../../../data/aiProducts';
import { AiProduct } from '../../../types/ai';

interface AiConstellationProps {
  onSelectProduct: (product: AiProduct) => void;
}

export const AiConstellation: React.FC<AiConstellationProps> = ({ onSelectProduct }) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  // Radial positioning layout for the constellation
  const constellationNodes = [
    { product: AI_PRODUCTS[0], angle: 0, distance: 160 },    // Gemini
    { product: AI_PRODUCTS[1], angle: 30, distance: 230 },   // Vertex AI
    { product: AI_PRODUCTS[2], angle: 60, distance: 170 },   // LangGraph
    { product: AI_PRODUCTS[3], angle: 90, distance: 240 },   // MCP Protocol
    { product: AI_PRODUCTS[4], angle: 120, distance: 180 },  // Cursor
    { product: AI_PRODUCTS[5], angle: 150, distance: 235 },  // NotebookLM
    { product: AI_PRODUCTS[6], angle: 180, distance: 165 },  // Gemma 2
    { product: AI_PRODUCTS[7], angle: 210, distance: 230 },  // vLLM
    { product: AI_PRODUCTS[8], angle: 240, distance: 175 },  // DeepSeek-R1
    { product: AI_PRODUCTS[9], angle: 270, distance: 240 },  // Imagen & Runway
    { product: AI_PRODUCTS[10], angle: 300, distance: 170 }, // ElevenLabs
    { product: AI_PRODUCTS[11], angle: 330, distance: 230 }, // BigQuery ML
  ];

  const activeProduct = hoveredProduct ? AI_PRODUCTS.find((p: AiProduct) => p.id === hoveredProduct) : null;
  const relatedIds = activeProduct ? activeProduct.relatedProducts : [];

  return (
    <div className="bg-gray-950 text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-google-blue/10 via-purple-500/10 to-google-green/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header bar inside constellation */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-google-blue-light flex items-center gap-1.5 font-bold">
            <Network className="w-4 h-4 text-google-blue" />
            INTERACTIVE KNOWLEDGE GRAPH
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            THE AI PRODUCT CONSTELLATION
          </h3>
          <p className="text-xs text-gray-400">
            Hover over any AI node to illuminate interconnected ecosystem dependencies. Click to inspect.
          </p>
        </div>

        {activeProduct && (
          <div className="bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-mono flex items-center gap-2 animate-in fade-in">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeProduct.color }}></span>
            <span>Inspecting: <strong className="text-white">{activeProduct.name}</strong></span>
          </div>
        )}
      </div>

      {/* Interactive 2D Constellation Canvas */}
      <div className="relative min-h-[440px] sm:min-h-[520px] flex items-center justify-center overflow-hidden my-4">
        
        {/* SVG Network Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#34A853" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Lines from center to all nodes */}
          {constellationNodes.map(({ product, angle, distance }) => {
            const rad = (angle * Math.PI) / 180;
            const isHovered = hoveredProduct === product.id;
            const isRelated = relatedIds.includes(product.id);

            return (
              <line
                key={`line-${product.id}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${Math.cos(rad) * (distance * 0.85)}px)`}
                y2={`calc(50% + ${Math.sin(rad) * (distance * 0.85)}px)`}
                stroke={isHovered || isRelated ? '#8AB4F8' : 'rgba(255, 255, 255, 0.08)'}
                strokeWidth={isHovered || isRelated ? 2 : 1}
                strokeDasharray={isHovered ? '4 2' : undefined}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Center AI Core */}
        <div className="relative z-20 bg-gradient-to-br from-neutral-900 to-black p-6 rounded-full border-2 border-google-blue shadow-glow-blue flex flex-col items-center justify-center text-center w-28 sm:w-36 h-28 sm:h-36">
          <Sparkles className="w-6 h-6 text-google-yellow animate-pulse mb-1" />
          <span className="font-extrabold text-sm sm:text-base tracking-wider text-white">
            AI CORE
          </span>
          <span className="text-[9px] font-mono text-google-blue-light uppercase">
            FOUNDATION
          </span>
        </div>

        {/* Constellation Nodes */}
        {constellationNodes.map(({ product, angle, distance }) => {
          const rad = (angle * Math.PI) / 180;
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
          const d = isMobile ? distance * 0.65 : distance;
          const x = Math.cos(rad) * d;
          const y = Math.sin(rad) * d;

          const isHovered = hoveredProduct === product.id;
          const isRelated = relatedIds.includes(product.id);

          return (
            <div
              key={product.id}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => onSelectProduct(product)}
              className="absolute z-30 cursor-pointer transition-all duration-300"
            >
              <div 
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-lg ${
                  isHovered
                    ? 'bg-white text-gray-900 scale-110 shadow-glow-multi ring-2 ring-google-yellow'
                    : isRelated
                    ? 'bg-google-blue text-white ring-2 ring-google-blue scale-105'
                    : 'bg-neutral-900/90 text-gray-200 border border-neutral-700 hover:border-white hover:text-white'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0" 
                  style={{ backgroundColor: product.color }}
                ></span>
                <span className="whitespace-nowrap font-mono text-[11px]">
                  {product.name.split(' ')[0]}
                </span>
                {product.status && (
                  <span className="text-[8px] bg-white/20 text-white px-1 rounded uppercase font-bold">
                    {product.status.split(' ')[0]}
                  </span>
                )}
              </div>

              {/* Hover popup mini-card */}
              {isHovered && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-gray-900 text-white p-3 rounded-2xl border border-gray-700 shadow-2xl z-50 pointer-events-none animate-in fade-in">
                  <div className="flex items-center justify-between text-[10px] font-mono text-google-blue-light mb-1">
                    <span>{product.company}</span>
                    <span>{product.category}</span>
                  </div>
                  <h5 className="font-bold text-xs text-white mb-1">{product.name}</h5>
                  <p className="text-[11px] text-gray-300 line-clamp-2 leading-relaxed">
                    {product.purpose}
                  </p>
                  <div className="mt-2 pt-2 border-t border-gray-800 text-[10px] text-google-yellow font-mono flex items-center justify-between">
                    <span>Click to open deep dive</span>
                    <span>→</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Constellation category legend */}
      <div className="relative z-10 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[11px] font-mono uppercase text-gray-500 font-bold">CATEGORIES:</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-google-blue"></span> THINK & MODELS</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-google-green"></span> AUTOMATE & AGENTS</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-google-yellow"></span> BUILD & TOOLS</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-google-red"></span> CREATE & MEDIA</span>
        </div>
        <span className="font-mono text-[11px] text-google-blue-light">12+ Verified Tools Mapped</span>
      </div>
    </div>
  );
};
