import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Atom,
  Cpu,
  Globe
} from 'lucide-react';
import { EVOLUTION_ERAS } from '../../../data/evolutionEras';
import { EraVisualCanvas } from './EraVisualCanvas';
import { EraIndicators } from './EraIndicators';
import { EraId, EvolutionEra } from '../../../types/evolution';

export const EvolutionOfComputing: React.FC = () => {
  const [activeEraId, setActiveEraId] = useState<EraId>('compute');

  const currentEraIndex = EVOLUTION_ERAS.findIndex((e: EvolutionEra) => e.id === activeEraId);
  const currentEra = EVOLUTION_ERAS[currentEraIndex] || EVOLUTION_ERAS[0];

  const handleNextEra = () => {
    if (currentEraIndex < EVOLUTION_ERAS.length - 1) {
      setActiveEraId(EVOLUTION_ERAS[currentEraIndex + 1].id);
    } else {
      setActiveEraId(EVOLUTION_ERAS[0].id);
    }
  };

  const handlePrevEra = () => {
    if (currentEraIndex > 0) {
      setActiveEraId(EVOLUTION_ERAS[currentEraIndex - 1].id);
    } else {
      setActiveEraId(EVOLUTION_ERAS[EVOLUTION_ERAS.length - 1].id);
    }
  };

  return (
    <section id="evolution-of-computing" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Dynamic ambient gradient matching current era */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, ${currentEra.colorPalette.primary}33 0%, #090A0D 80%)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flagship Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-3">
            <Compass className="w-4 h-4 text-google-yellow" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-light uppercase">
              SIGNATURE EXPERIENCE 01 • CONTINUOUS LANDSCAPE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            THE EVOLUTION OF COMPUTING
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-2">
            <strong>From information to intelligence.</strong> An educational storytelling experience exploring how technology evolved from discrete silicon computing into the connected web, mobile, cloud, multimodal AI, and the agentic quantum horizon.
          </p>
          <span className="text-[11px] text-gray-500 font-mono block mt-2">
            *Community educational archive curated by GDG Cloud Toronto.
          </span>
        </div>

        {/* 2-Column Story Landscape with Vertical Indicator on Left/Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Era Indicators Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-2 px-2">
                CHOOSE ERA (01 – 08)
              </span>
              <EraIndicators
                activeEraId={activeEraId}
                onSelectEra={(id: EraId) => setActiveEraId(id)}
              />
            </div>
          </div>

          {/* Right Column: Active Era Cinematic Transformation View */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Active Era Main Story Card */}
            <div className="bg-gradient-to-br from-neutral-900/90 to-black rounded-3xl border border-neutral-700/80 p-6 sm:p-10 shadow-2xl space-y-6">
              
              {/* Era Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-white text-gray-900 shadow">
                    ERA {currentEra.order}
                  </span>
                  <span className="text-xs font-mono text-google-blue-light uppercase tracking-wider">
                    {currentEra.concept}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevEra}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-mono flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Prev</span>
                  </button>
                  <button
                    onClick={handleNextEra}
                    className="p-2 rounded-xl bg-google-blue hover:bg-google-blue-dark text-white font-bold transition-colors text-xs font-mono flex items-center gap-1 shadow"
                  >
                    <span>Next Era</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Headlines */}
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {currentEra.headline}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  {currentEra.name} — {currentEra.subtitle}
                </p>
              </div>

              {/* Dynamic Interactive Canvas for this Era */}
              <EraVisualCanvas era={currentEra} />

              {/* Narrative Story */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
                {currentEra.story}
              </p>

              {/* Key Innovations 3-Card Grid */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-3 font-bold">
                  PIVOTAL TECHNOLOGICAL BREAKTHROUGHS
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentEra.keyInnovations.map((inno: any, idx: number) => (
                    <div 
                      key={idx}
                      className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800 space-y-1.5"
                    >
                      <h5 className="font-bold text-xs text-white">
                        {inno.title}
                      </h5>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {inno.description}
                      </p>
                      <span className="text-[10px] font-mono text-google-yellow-dark block pt-1">
                        Impact: {inno.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* If Era 08: Distinguish TODAY / EMERGING / EXPERIMENTAL */}
              {currentEra.frontierBadges && (
                <div className="pt-4 border-t border-neutral-800 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-cyan-400 block">
                    GROUNDED HORIZON ASSESSMENT
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-emerald-950/40 border border-emerald-500/40 p-3.5 rounded-2xl">
                      <span className="text-[11px] font-mono font-bold text-emerald-400 block mb-2 uppercase">
                        ● TODAY (PRODUCTION)
                      </span>
                      <ul className="space-y-1 text-xs text-gray-300 font-mono">
                        {currentEra.frontierBadges.today.map((item: string, i: number) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="text-emerald-400">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-950/40 border border-amber-500/40 p-3.5 rounded-2xl">
                      <span className="text-[11px] font-mono font-bold text-amber-400 block mb-2 uppercase">
                        ▲ EMERGING (PILOTS)
                      </span>
                      <ul className="space-y-1 text-xs text-gray-300 font-mono">
                        {currentEra.frontierBadges.emerging.map((item: string, i: number) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="text-amber-400">⚡</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-purple-950/40 border border-purple-500/40 p-3.5 rounded-2xl">
                      <span className="text-[11px] font-mono font-bold text-purple-400 block mb-2 uppercase">
                        ◆ EXPERIMENTAL (LABS)
                      </span>
                      <ul className="space-y-1 text-xs text-gray-300 font-mono">
                        {currentEra.frontierBadges.experimental.map((item: string, i: number) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="text-purple-400">🔬</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Continuous Transition Note */}
              <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-google-yellow" />
                  <span>Next Transition: {currentEra.transitionNote}</span>
                </span>
                <button
                  onClick={handleNextEra}
                  className="text-google-blue-light hover:underline flex items-center gap-1"
                >
                  <span>Advance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
