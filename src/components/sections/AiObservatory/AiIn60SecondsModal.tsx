import React from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Activity, 
  Users, 
  Terminal, 
  ArrowRight,
  ExternalLink,
  Zap
} from 'lucide-react';
import { AiProduct } from '../../../types/ai';

interface AiIn60SecondsModalProps {
  product: AiProduct | null;
  onClose: () => void;
  onOpenWorkflow: (product: AiProduct) => void;
}

export const AiIn60SecondsModal: React.FC<AiIn60SecondsModalProps> = ({
  product,
  onClose,
  onOpenWorkflow,
}) => {
  if (!product) return null;

  const { rapidLearning } = product;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-2xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-gray-900 text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-google-blue/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-google-yellow text-gray-900">
                  AI IN 60 SECONDS
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {product.company}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                {product.purpose}
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 5 Rapid Learning Dimensions */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[65vh] overflow-y-auto divide-y divide-gray-100">
          
          {/* 1. WHAT IS IT? */}
          <div className="pt-2">
            <span className="text-xs font-mono font-bold text-google-blue-dark uppercase flex items-center gap-1.5 mb-1">
              <HelpCircle className="w-4 h-4 text-google-blue" />
              1. WHAT IS IT?
            </span>
            <p className="text-sm font-semibold text-gray-900">
              {rapidLearning.whatIsIt}
            </p>
          </div>

          {/* 2. WHAT DOES IT DO? */}
          <div className="pt-4">
            <span className="text-xs font-mono font-bold text-google-green-dark uppercase flex items-center gap-1.5 mb-1">
              <Activity className="w-4 h-4 text-google-green" />
              2. WHAT DOES IT DO?
            </span>
            <p className="text-sm text-gray-800 leading-relaxed">
              {rapidLearning.whatDoesItDo}
            </p>
          </div>

          {/* 3. WHY DOES IT MATTER? */}
          <div className="pt-4">
            <span className="text-xs font-mono font-bold text-google-red-dark uppercase flex items-center gap-1.5 mb-1">
              <Zap className="w-4 h-4 text-google-red" />
              3. WHY DOES IT MATTER?
            </span>
            <p className="text-sm text-gray-800 leading-relaxed">
              {rapidLearning.whyItMatters}
            </p>
          </div>

          {/* 4. WHO SHOULD USE IT? */}
          <div className="pt-4">
            <span className="text-xs font-mono font-bold text-purple-700 uppercase flex items-center gap-1.5 mb-1">
              <Users className="w-4 h-4 text-purple-600" />
              4. WHO SHOULD USE IT?
            </span>
            <p className="text-sm text-gray-800 leading-relaxed">
              {rapidLearning.whoShouldUseIt}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {product.audience.map((aud: string, i: number) => (
                <span key={i} className="text-xs bg-purple-50 text-purple-800 px-2.5 py-0.5 rounded-full border border-purple-200 font-medium">
                  {aud}
                </span>
              ))}
            </div>
          </div>

          {/* 5. ONE REAL-WORLD PRACTICAL EXAMPLE */}
          <div className="pt-4">
            <span className="text-xs font-mono font-bold text-google-yellow-dark uppercase flex items-center gap-1.5 mb-1">
              <Terminal className="w-4 h-4 text-google-yellow-dark" />
              5. ONE REAL-WORLD EXAMPLE
            </span>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 font-mono text-xs text-gray-900 leading-relaxed">
              <span className="text-google-blue font-bold block mb-1">PROMPT / WORKFLOW TASK:</span>
              "{rapidLearning.practicalExample}"
            </div>
          </div>

        </div>

        {/* Modal footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={product.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1 underline"
            >
              <span>Official Documentation</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenWorkflow(product);
              }}
              className="bg-gray-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow"
            >
              <span>Interactive Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
