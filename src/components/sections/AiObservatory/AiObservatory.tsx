import React, { useState } from 'react';
import { 
  Sparkles, 
  Network, 
  Search, 
  Layers, 
  Clock, 
  Workflow, 
  Bot, 
  Cpu, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { AiConstellation } from './AiConstellation';
import { AiPurposeDirectory } from './AiPurposeDirectory';
import { AiPipelineVisualizer } from './AiPipelineVisualizer';
import { AiIn60SecondsModal } from './AiIn60SecondsModal';
import { AiBuildWorkflowModal } from './AiBuildWorkflowModal';
import { AiEvolutionTimeline } from './AiEvolutionTimeline';
import { AiTechDependencyMap } from './AiTechDependencyMap';
import { AiProduct } from '../../../types/ai';
import { AI_PRODUCTS } from '../../../data/aiProducts';

export const AiObservatory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'directory' | 'constellation' | 'pipeline' | 'timeline' | 'dependency'>('directory');
  const [selectedProductFor60s, setSelectedProductFor60s] = useState<AiProduct | null>(null);
  const [selectedProductForWorkflow, setSelectedProductForWorkflow] = useState<AiProduct | null>(null);

  const handleSelectProduct = (product: AiProduct) => {
    setSelectedProductFor60s(product);
  };

  return (
    <section id="ai-observatory" className="py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flagship Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Sparkles className="w-4 h-4 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              SIGNATURE EXPERIENCE 02 • DISCOVERY LAB
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            THE AI PRODUCT OBSERVATORY
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            Explore the AI tools shaping how we build, work and create. An interactive laboratory designed to understand modern foundation models, protocols, and multi-agent systems.
          </p>
        </div>

        {/* Observatory Mode Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('directory')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'directory'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            <Search className="w-4 h-4 text-google-blue" />
            <span>Purpose-First Directory</span>
          </button>

          <button
            onClick={() => setActiveTab('constellation')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'constellation'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            <Network className="w-4 h-4 text-google-yellow-dark" />
            <span>AI Constellation Graph</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'pipeline'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            <Workflow className="w-4 h-4 text-google-green" />
            <span>Idea → Action Pipeline</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'timeline'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            <Clock className="w-4 h-4 text-google-red" />
            <span>AI Evolution Timeline</span>
          </button>

          <button
            onClick={() => setActiveTab('dependency')}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'dependency'
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
            }`}
          >
            <Layers className="w-4 h-4 text-purple-600" />
            <span>Tech Dependency Map</span>
          </button>
        </div>

        {/* Render Tab Content */}
        {activeTab === 'directory' && (
          <AiPurposeDirectory
            onSelectProduct={handleSelectProduct}
            onOpen60Seconds={(prod) => setSelectedProductFor60s(prod)}
            onOpenWorkflow={(prod) => setSelectedProductForWorkflow(prod)}
          />
        )}

        {activeTab === 'constellation' && (
          <AiConstellation
            onSelectProduct={handleSelectProduct}
          />
        )}

        {activeTab === 'pipeline' && (
          <AiPipelineVisualizer />
        )}

        {activeTab === 'timeline' && (
          <AiEvolutionTimeline />
        )}

        {activeTab === 'dependency' && (
          <AiTechDependencyMap />
        )}

        {/* Global Modals for Rapid Learning and Miniature Workflows */}
        <AiIn60SecondsModal
          product={selectedProductFor60s}
          onClose={() => setSelectedProductFor60s(null)}
          onOpenWorkflow={(prod) => setSelectedProductForWorkflow(prod)}
        />

        <AiBuildWorkflowModal
          product={selectedProductForWorkflow}
          onClose={() => setSelectedProductForWorkflow(null)}
        />

      </div>
    </section>
  );
};
