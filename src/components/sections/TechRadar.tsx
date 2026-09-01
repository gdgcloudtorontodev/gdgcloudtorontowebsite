import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Zap, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { TECH_RADAR_ITEMS } from '../../data/techRadar';
import { RadarItem } from '../../types';

export const TechRadar: React.FC = () => {
  const [selectedRing, setSelectedRing] = useState<'ALL' | 'ADOPT' | 'TRIAL' | 'ASSESS' | 'WATCH'>('ALL');
  const [hoveredRadarItem, setHoveredRadarItem] = useState<RadarItem | null>(null);

  const rings: Array<'ADOPT' | 'TRIAL' | 'ASSESS' | 'WATCH'> = ['ADOPT', 'TRIAL', 'ASSESS', 'WATCH'];

  const filteredItems = selectedRing === 'ALL'
    ? TECH_RADAR_ITEMS
    : TECH_RADAR_ITEMS.filter((i) => i.ring === selectedRing);

  return (
    <section id="technology-radar" className="py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Compass className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              STRATEGIC INDUSTRY RADAR
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            DEVFEST TECHNOLOGY RADAR 2026
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Our community perspective on technologies to adopt in production today, trial in pilot projects, assess for strategic impact, and watch on the research horizon.
          </p>
        </div>

        {/* Ring Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {['ALL', 'ADOPT', 'TRIAL', 'ASSESS', 'WATCH'].map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRing(r as any)}
              className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold transition-all ${
                selectedRing === r
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Radar Quadrant Visual Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rings.map((ringName) => {
            const ringItems = TECH_RADAR_ITEMS.filter((i) => i.ring === ringName);

            return (
              <div
                key={ringName}
                className={`bg-white rounded-3xl border shadow-sm p-6 flex flex-col justify-between ${
                  ringName === 'ADOPT' ? 'border-emerald-300' :
                  ringName === 'TRIAL' ? 'border-blue-300' :
                  ringName === 'ASSESS' ? 'border-amber-300' :
                  'border-purple-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                    <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full ${
                      ringName === 'ADOPT' ? 'bg-emerald-100 text-emerald-900' :
                      ringName === 'TRIAL' ? 'bg-blue-100 text-blue-900' :
                      ringName === 'ASSESS' ? 'bg-amber-100 text-amber-900' :
                      'bg-purple-100 text-purple-900'
                    }`}>
                      {ringName}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {ringItems.length} Technologies
                    </span>
                  </div>

                  <div className="space-y-3">
                    {ringItems.map((item) => (
                      <div
                        key={item.id}
                        onMouseEnter={() => setHoveredRadarItem(item)}
                        className="bg-gray-50 hover:bg-gray-100 p-3.5 rounded-2xl border border-gray-200 transition-all cursor-pointer group"
                      >
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <h4 className="font-bold text-xs text-gray-900 group-hover:text-google-blue transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[10px] font-mono font-bold text-google-blue-dark">
                            {item.trend === 'UP' ? '▲' : item.trend === 'NEW' ? '★' : '●'}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-600 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {item.tags.map((t, i) => (
                            <span key={i} className="text-[9px] bg-white border border-gray-200 text-gray-600 px-1.5 py-0.5 rounded font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
