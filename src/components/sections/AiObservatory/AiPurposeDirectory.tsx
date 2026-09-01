import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Bot, 
  Layers, 
  BarChart2, 
  Film, 
  Code2, 
  BookOpen, 
  Workflow, 
  Server, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  ExternalLink,
  Play,
  Share2,
  Terminal,
  Volume2,
  Atom
} from 'lucide-react';
import { AI_PURPOSE_CATEGORIES, AI_PRODUCTS } from '../../../data/aiProducts';
import { AiProduct, AiPurposeItem } from '../../../types/ai';

interface AiPurposeDirectoryProps {
  onSelectProduct: (product: AiProduct) => void;
  onOpen60Seconds: (product: AiProduct) => void;
  onOpenWorkflow: (product: AiProduct) => void;
}

export const AiPurposeDirectory: React.FC<AiPurposeDirectoryProps> = ({
  onSelectProduct,
  onOpen60Seconds,
  onOpenWorkflow,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPurposeId, setSelectedPurposeId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const [tryPromptProduct, setTryPromptProduct] = useState<AiProduct | null>(null);
  const [promptOutputSimulated, setPromptOutputSimulated] = useState<boolean>(false);

  // Exact 13 filter pills from specification
  const filterPills = [
    'ALL',
    'GENERATIVE AI',
    'AI AGENTS',
    'DEVELOPER TOOLS',
    'IMAGE',
    'VIDEO',
    'AUDIO',
    'CODE',
    'RESEARCH',
    'DATA',
    'CLOUD AI',
    'AI INFRASTRUCTURE',
    'QUANTUM + AI',
  ];

  // Dynamic search and recommendations
  const matchedProducts = AI_PRODUCTS.filter((prod: AiProduct) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = prod.name.toLowerCase().includes(q);
      const matchDesc = prod.description.toLowerCase().includes(q);
      const matchPurpose = prod.purpose.toLowerCase().includes(q);
      const matchCaps = prod.capabilities.some((c: string) => c.toLowerCase().includes(q));
      const matchCompany = prod.company.toLowerCase().includes(q);
      return matchName || matchDesc || matchPurpose || matchCaps || matchCompany;
    }

    if (selectedPurposeId) {
      const purpose = AI_PURPOSE_CATEGORIES.find((p: AiPurposeItem) => p.id === selectedPurposeId);
      if (purpose) {
        return purpose.productIds.includes(prod.id);
      }
    }

    if (filterCategory === 'GENERATIVE AI') return ['gemini', 'midjourney-runway', 'elevenlabs'].includes(prod.id);
    if (filterCategory === 'AI AGENTS') return ['langgraph', 'mcp-protocol', 'gemini'].includes(prod.id);
    if (filterCategory === 'DEVELOPER TOOLS') return ['cursor', 'gemma', 'mcp-protocol'].includes(prod.id);
    if (filterCategory === 'IMAGE') return ['midjourney-runway', 'gemini'].includes(prod.id);
    if (filterCategory === 'VIDEO') return ['midjourney-runway', 'gemini'].includes(prod.id);
    if (filterCategory === 'AUDIO') return ['elevenlabs', 'gemini', 'notebooklm'].includes(prod.id);
    if (filterCategory === 'CODE') return ['cursor', 'gemini', 'deepseek-r1', 'mcp-protocol'].includes(prod.id);
    if (filterCategory === 'RESEARCH') return ['notebooklm', 'deepseek-r1', 'gemini'].includes(prod.id);
    if (filterCategory === 'DATA') return ['bigquery-ml', 'vertex-ai'].includes(prod.id);
    if (filterCategory === 'CLOUD AI') return ['vertex-ai', 'gemini', 'bigquery-ml'].includes(prod.id);
    if (filterCategory === 'AI INFRASTRUCTURE') return ['vllm', 'vertex-ai', 'gemma'].includes(prod.id);
    if (filterCategory === 'QUANTUM + AI') return ['gemini', 'vertex-ai'].includes(prod.id);

    return true;
  });

  const getPurposeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Bot': return Bot;
      case 'BarChart2': return BarChart2;
      case 'Film': return Film;
      case 'Code2': return Code2;
      case 'BookOpen': return BookOpen;
      case 'Workflow': return Workflow;
      case 'Server': return Server;
      default: return Sparkles;
    }
  };

  const handleOpenTryModal = (prod: AiProduct) => {
    setTryPromptProduct(prod);
    setPromptOutputSimulated(false);
  };

  return (
    <div className="space-y-12">
      {/* Purpose-First Question Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50/50 to-green-50 p-6 sm:p-10 rounded-3xl border border-blue-100 shadow-sm">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase block mb-1">
            PURPOSE-FIRST AI DIRECTORY
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            "WHAT DO YOU WANT TO DO?"
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Instead of memorizing confusing product brand names, select your goal or describe what you are trying to build. We’ll surface the verified tools, protocols, and workflows to accomplish it.
          </p>
        </div>

        {/* Natural Language Search Box */}
        <div className="mt-6 max-w-2xl relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-google-blue absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (selectedPurposeId) setSelectedPurposeId(null);
              }}
              placeholder='Try typing: "Build an AI customer support agent" or "Analyze BigQuery data with SQL"...'
              className="w-full bg-white text-gray-900 text-sm sm:text-base pl-12 pr-28 py-3.5 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-google-blue focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs font-mono text-gray-400 hover:text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                CLEAR
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-2 text-xs font-mono text-google-blue-dark flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Filtering {matchedProducts.length} AI tools matching your objective</span>
            </div>
          )}
        </div>

        {/* 8 Purpose Goal Action Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {AI_PURPOSE_CATEGORIES.map((purpose: AiPurposeItem) => {
            const Icon = getPurposeIcon(purpose.icon);
            const isSelected = selectedPurposeId === purpose.id;

            return (
              <button
                key={purpose.id}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedPurposeId(isSelected ? null : purpose.id);
                }}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gray-900 text-white border-gray-900 shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 hover:border-google-blue/40 shadow-sm'
                }`}
              >
                <div>
                  <div className={`p-2 rounded-xl w-fit mb-3 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-google-blue'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm tracking-tight leading-snug">
                    {purpose.headline}
                  </h4>
                  <p className={`text-[11px] mt-1 line-clamp-2 ${
                    isSelected ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {purpose.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100/50 flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-google-yellow' : 'text-google-blue font-semibold'}>
                    {purpose.productIds.length} Tools
                  </span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 13 Filter Pills */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          {filterPills.map((pill) => (
            <button
              key={pill}
              onClick={() => {
                setFilterCategory(pill);
                setSelectedPurposeId(null);
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === pill && !selectedPurposeId && !searchQuery
                  ? 'bg-google-blue text-white shadow-sm'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
        <span className="text-xs font-mono text-gray-500">
          Showing {matchedProducts.length} Verified AI Products
        </span>
      </div>

      {/* AI Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchedProducts.map((prod: AiProduct) => (
          <div
            key={prod.id}
            className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-google-card hover:border-google-blue/50 transition-all flex flex-col justify-between p-6 group"
          >
            <div>
              {/* Card top badge row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                  {prod.category}
                </span>
                {prod.status && (
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    prod.status === 'NEW' ? 'bg-google-green/15 text-google-green-dark' :
                    prod.status === 'POPULAR' ? 'bg-google-blue/15 text-google-blue-dark' :
                    prod.status === 'DEVELOPER FAVORITE' ? 'bg-purple-100 text-purple-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {prod.status}
                  </span>
                )}
              </div>

              {/* Product title & company */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-google-blue transition-colors">
                    {prod.name}
                  </h4>
                  <span className="text-xs text-gray-500 font-mono block">
                    {prod.company}
                  </span>
                </div>
                <div 
                  className="w-3 h-3 rounded-full shrink-0 mt-1" 
                  style={{ backgroundColor: prod.color }}
                ></div>
              </div>

              {/* One line purpose */}
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                {prod.purpose}
              </p>

              {/* Best for audience */}
              <div className="mb-3">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  BEST FOR
                </span>
                <div className="flex flex-wrap gap-1">
                  {prod.audience.map((aud: string, i: number) => (
                    <span key={i} className="text-[10px] bg-gray-50 border border-gray-200 text-gray-700 px-2 py-0.5 rounded-md font-medium">
                      {aud}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capabilities tags */}
              <div className="mb-3">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  CAPABILITIES
                </span>
                <div className="flex flex-wrap gap-1">
                  {prod.capabilities.slice(0, 3).map((cap: string, i: number) => (
                    <span key={i} className="text-[10px] bg-blue-50/70 text-google-blue-dark px-2 py-0.5 rounded-md font-medium">
                      {cap}
                    </span>
                  ))}
                  {prod.capabilities.length > 3 && (
                    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-md font-mono">
                      +{prod.capabilities.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Related Technologies Breadcrumb Chain */}
              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-[10px] font-mono text-gray-600 mb-4">
                <span className="font-bold text-gray-400 block uppercase tracking-wider mb-0.5">RELATED TECHNOLOGIES:</span>
                <span className="text-google-blue-dark font-semibold">
                  {prod.name.split(' ')[0]} → Vertex AI → Cloud Infrastructure → AI Agents
                </span>
              </div>
            </div>

            {/* EXPLORE / TRY / LEARN Triple Buttons as specified */}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => onSelectProduct(prod)}
                  className="w-full bg-gray-900 hover:bg-black text-white text-xs font-semibold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  <Sparkles className="w-3 h-3 text-google-yellow" />
                  <span>EXPLORE</span>
                </button>
                <button
                  onClick={() => handleOpenTryModal(prod)}
                  className="w-full bg-google-blue hover:bg-google-blue-dark text-white text-xs font-semibold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 shadow-xs"
                >
                  <Play className="w-3 h-3" />
                  <span>TRY</span>
                </button>
                <button
                  onClick={() => onOpenWorkflow(prod)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1"
                >
                  <Workflow className="w-3 h-3" />
                  <span>LEARN</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-1">
                <button
                  onClick={() => onOpen60Seconds(prod)}
                  className="text-gray-500 hover:text-google-blue font-medium flex items-center gap-1 text-[11px]"
                >
                  <span>AI in 60s Summary</span>
                </button>
                <a
                  href={prod.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-700 flex items-center gap-1 text-[11px]"
                >
                  <span>Official Docs</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* "TRY THIS" Interactive Prompt Sandbox Modal */}
      {tryPromptProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-2xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gray-900 text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-google-blue text-white">
                      TRY THIS INTERACTIVE PROMPT
                    </span>
                    <span className="text-xs font-mono text-gray-400">{tryPromptProduct.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {tryPromptProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setTryPromptProduct(null)}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  PRACTICAL REAL-WORLD PROMPT EXAMPLE
                </span>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 font-mono text-xs text-gray-900 leading-relaxed">
                  "{tryPromptProduct.rapidLearning.practicalExample}"
                </div>
              </div>

              {!promptOutputSimulated ? (
                <button
                  onClick={() => setPromptOutputSimulated(true)}
                  className="w-full bg-google-blue hover:bg-google-blue-dark text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition-all"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Execute Simulated {tryPromptProduct.name.split(' ')[0]} Response</span>
                </button>
              ) : (
                <div className="bg-neutral-900 text-white p-4 rounded-2xl border border-neutral-700 font-mono text-xs space-y-2 animate-in fade-in">
                  <div className="flex items-center justify-between text-google-green text-[10px]">
                    <span>✓ SIMULATED MULTIMODAL INFERENCE</span>
                    <span>LATENCY: 18ms</span>
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    [Gemini 2.0 Engine]: Analysis complete. Identified 2 potential reliability bottlenecks in the cross-region database topology. Suggested Terraform fix and auto-healing policy has been validated against active Cloud Spanner replicas.
                  </p>
                </div>
              )}

              {/* Related Technologies Breadcrumb */}
              <div className="pt-2 border-t border-gray-100 text-xs text-gray-500 font-mono">
                <span className="font-bold text-gray-700 block">Related Technologies:</span>
                <span>{tryPromptProduct.name.split(' ')[0]} → Vertex AI → Cloud Infrastructure → AI Agents</span>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <a
                href={tryPromptProduct.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-google-blue font-semibold hover:underline flex items-center gap-1"
              >
                <span>Launch in Google Cloud Console</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setTryPromptProduct(null)}
                className="bg-gray-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-xl"
              >
                Close Sandbox
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
