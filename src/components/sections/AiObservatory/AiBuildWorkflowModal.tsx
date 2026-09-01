import React, { useState } from 'react';
import { 
  X, 
  Workflow, 
  ArrowDown, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Cpu, 
  Database, 
  Server, 
  AppWindow, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';
import { AiProduct } from '../../../types/ai';

interface AiBuildWorkflowModalProps {
  product: AiProduct | null;
  onClose: () => void;
}

export const AiBuildWorkflowModal: React.FC<AiBuildWorkflowModalProps> = ({
  product,
  onClose,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  if (!product) return null;

  const defaultWorkflow = [
    { stage: 'USER', label: 'Developer / User Request', detail: 'Submits natural language prompt or code instruction to the application client.', icon: 'AppWindow' },
    { stage: 'MODEL', label: `${product.name} Reasoning Core`, detail: 'Model processes token embeddings, determines intent, and plans function calls.', icon: 'Cpu' },
    { stage: 'TOOL / PROTOCOL', label: 'Model Context Protocol (MCP)', detail: 'Exposes local databases, terminal execution sandboxes, and cloud APIs.', icon: 'Terminal' },
    { stage: 'DATABASE / STORAGE', label: 'Enterprise Knowledge Store', detail: 'Fetches vectorized document chunks and relational records with ACID consistency.', icon: 'Database' },
    { stage: 'API / INFRA', label: 'Cloud Gateway & Kubernetes', detail: 'Serves low-latency streaming endpoints with token-level rate limiting.', icon: 'Server' },
    { stage: 'APPLICATION', label: 'End-to-End User Experience', detail: 'Streams verified output, UI widgets, and executable code artifacts back to the user.', icon: 'CheckCircle2' },
  ];

  const workflowSteps = product.buildWorkflow && product.buildWorkflow.length > 0 
    ? product.buildWorkflow 
    : defaultWorkflow;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-3xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gray-950 text-white p-6 sm:p-8 relative overflow-hidden border-b border-gray-800">
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-google-green text-gray-950">
                  BUILD WITH IT WORKFLOW
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {product.name}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                HOW {product.name.toUpperCase()} BECOMES A REAL APPLICATION
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
                Click each stage in the execution chain to understand the architectural flow from prompt to production.
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

        {/* Interactive Steps List */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-3">
          {workflowSteps.map((step: any, idx: number) => {
            const isSelected = activeStepIndex === idx;

            return (
              <div key={idx} className="relative">
                <button
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-50/90 to-indigo-50/70 border-google-blue shadow-sm ring-1 ring-google-blue'
                      : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl font-mono text-xs font-bold shrink-0 ${
                      isSelected ? 'bg-google-blue text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase text-google-blue-dark">
                          {step.stage}
                        </span>
                        {isSelected && (
                          <span className="text-[9px] font-mono bg-google-blue text-white px-2 py-0.2 rounded-full font-semibold">
                            INSPECTING
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-sm text-gray-900 mt-0.5">
                        {step.label}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Arrow connector */}
                {idx < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-500">
            Stage {activeStepIndex + 1} of {workflowSteps.length}
          </span>
          <button
            onClick={onClose}
            className="bg-google-blue hover:bg-google-blue-dark text-white text-xs font-semibold px-5 py-2 rounded-xl transition-all shadow"
          >
            Close Architecture View
          </button>
        </div>
      </div>
    </div>
  );
};
