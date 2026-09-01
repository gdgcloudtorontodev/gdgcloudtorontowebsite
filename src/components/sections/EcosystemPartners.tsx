import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Award,
  Globe
} from 'lucide-react';
import { PARTNERS } from '../../data/partners';

export const EcosystemPartners: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
            <Building2 className="w-3.5 h-3.5 text-google-blue" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
              ECOSYSTEM ALLIANCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            ECOSYSTEM PARTNERS
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Supported by world-class technology leaders, research institutes, and Canadian developer innovation coalitions.
          </p>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((p, idx) => (
            <a
              key={idx}
              href={p.website}
              target="_blank"
              rel="noreferrer"
              className="bg-[#F8F9FA] hover:bg-white p-6 rounded-3xl border border-gray-200 shadow-xs hover:shadow-google-card hover:border-google-blue/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: p.accentColor }}
                  >
                    {p.category} PARTNER
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-google-blue transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-google-blue transition-colors">
                  {p.name}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 mt-4 text-[11px] font-mono text-google-blue-dark font-semibold flex items-center justify-between">
                <span>Explore Organization</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
