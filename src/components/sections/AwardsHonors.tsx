import React from 'react';
import { 
  Award, 
  Sparkles, 
  Trophy, 
  Medal, 
  Star, 
  HeartHandshake, 
  Cloud, 
  Atom,
  CheckCircle2
} from 'lucide-react';
import { COMMUNITY_AWARDS } from '../../data/awards';

export const AwardsHonors: React.FC = () => {
  const getAwardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Cloud': return Cloud;
      case 'HeartHandshake': return HeartHandshake;
      case 'Atom': return Atom;
      default: return Award;
    }
  };

  return (
    <section id="awards-honors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-yellow/20 border border-google-yellow/40 mb-3">
            <Trophy className="w-3.5 h-3.5 text-google-yellow-dark" />
            <span className="text-xs font-mono font-bold tracking-widest text-gray-800 uppercase">
              COMMUNITY HALL OF FAME
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            COMMUNITY HONORS
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Honoring exceptional engineering breakthroughs, community mentorship, and tireless volunteer leadership across the Toronto developer ecosystem.
          </p>
        </div>

        {/* 5 Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMUNITY_AWARDS.map((award) => {
            const Icon = getAwardIcon(award.icon);

            return (
              <div
                key={award.id}
                className="bg-[#F8F9FA] rounded-3xl border border-gray-200 shadow-sm hover:shadow-google-card hover:border-google-yellow-dark/40 transition-all p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-2xl border border-gray-200 shadow-xs text-google-yellow-dark">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-google-yellow/15 text-gray-900">
                      {award.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                    {award.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {award.description}
                  </p>

                  {/* Criteria */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider block">
                      SELECTION CRITERIA
                    </span>
                    {award.criteria.map((c, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-google-yellow-dark shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Previous Recipient Banner */}
                {award.recipient2025 && (
                  <div className="pt-3 border-t border-gray-200 text-xs font-mono bg-white p-3 rounded-xl border border-gray-200">
                    <span className="text-[10px] text-gray-400 uppercase block">2025 HONOREE:</span>
                    <span className="font-bold text-gray-900">{award.recipient2025}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
