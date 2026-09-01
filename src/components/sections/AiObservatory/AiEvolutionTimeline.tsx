import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { AI_EVOLUTION_MILESTONES } from '../../../data/aiProducts';
import { AiEvolutionMilestone } from '../../../types/ai';

export const AiEvolutionTimeline: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm my-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1 rounded bg-google-blue/10 text-google-blue-dark">
              <Clock className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              HISTORICAL BREAKTHROUGHS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            THE EVOLUTION OF MODERN AI
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
            How modern AI evolved from statistical CNNs into 2M+ token multimodal reasoning models and autonomous agentic systems.
          </p>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-2 border-gray-200 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
        {AI_EVOLUTION_MILESTONES.map((mile: AiEvolutionMilestone, idx: number) => (
          <div key={idx} className="relative group">
            {/* Timeline node dot */}
            <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-all ${
              mile.status === 'FRONTIER' 
                ? 'bg-google-green ring-4 ring-google-green/20 animate-pulse' 
                : mile.status === 'TRANSFORMATIVE'
                ? 'bg-google-blue'
                : 'bg-gray-400'
            }`}></div>

            <div className="bg-gray-50 hover:bg-gray-100/70 p-5 rounded-2xl border border-gray-200 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-mono font-bold text-google-blue-dark">
                  {mile.period} • {mile.era}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                  mile.status === 'FRONTIER'
                    ? 'bg-google-green/15 text-google-green-dark'
                    : mile.status === 'TRANSFORMATIVE'
                    ? 'bg-google-blue/15 text-google-blue-dark'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {mile.status}
                </span>
              </div>

              <h4 className="text-base font-bold text-gray-900 mt-1">
                {mile.title}
              </h4>

              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                {mile.milestone}
              </p>

              <div className="mt-3 pt-3 border-t border-gray-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-gray-700">
                  <Sparkles className="w-3.5 h-3.5 text-google-yellow-dark" />
                  <span className="font-semibold">Core Breakthrough:</span>
                  <span className="text-gray-600">{mile.breakthrough}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {mile.techKeywords.map((kw: string, i: number) => (
                    <span key={i} className="text-[10px] bg-white border border-gray-300 text-gray-700 px-2 py-0.5 rounded font-mono">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
