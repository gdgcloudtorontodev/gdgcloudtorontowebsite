import React from 'react';
import { 
  Trophy, 
  Sparkles, 
  Medal, 
  CheckCircle2, 
  Mail,
  Award,
  Cloud,
  HeartHandshake,
  Atom
} from 'lucide-react';
import { COMMUNITY_AWARDS } from '../../data/awards';

export const AwardsHonors: React.FC = () => {
  const getAwardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Cloud': return Cloud;
      case 'HeartHandshake': return HeartHandshake;
      case 'Atom': return Atom;
      default: return Trophy;
    }
  };

  return (
    <section id="awards-recognitions" className="py-24 bg-gradient-to-b from-white via-amber-50/15 to-[#F8F9FA] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-yellow/20 border border-google-yellow/40 mb-3">
            <Trophy className="w-3.5 h-3.5 text-google-yellow-dark" />
            <span className="text-xs font-mono font-bold tracking-widest text-gray-800 uppercase">
              HONORING EXCELLENCE & IMPACT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            AWARDS & RECOGNITIONS
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-3 leading-relaxed mx-auto">
            Honoring premier milestones, developer empowerment, and monumental community leadership across Canada's developer ecosystem at GDG Cloud Toronto DevFest 2026.
          </p>
        </div>

        {/* Monumental Scale Award Featured Card */}
        <div className="max-w-3xl mx-auto mb-16">
          {COMMUNITY_AWARDS.map((award) => {
            const Icon = getAwardIcon(award.icon);

            return (
              <div
                key={award.id}
                className="bg-white rounded-3xl border-2 border-google-yellow/40 shadow-xl hover:shadow-2xl transition-all p-8 sm:p-10 relative overflow-hidden group"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-google-yellow/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-gradient-to-br from-google-yellow/30 to-amber-100 rounded-2xl border border-google-yellow/50 text-google-yellow-dark shadow-sm">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-google-yellow/20 text-gray-900 uppercase tracking-wider">
                          {award.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mt-1">
                          {award.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    {award.description}
                  </p>

                  {/* Selection Criteria / Key Accomplishments */}
                  <div className="space-y-2.5 mb-6 bg-gray-50/80 p-5 rounded-2xl border border-gray-200">
                    <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block">
                      KEY ACCOMPLISHMENTS & CRITERIA
                    </span>
                    {award.criteria.map((c, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-google-green shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  {/* Honoree Banner */}
                  {award.recipient2025 && (
                    <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-gray-100 text-xs font-mono bg-amber-50/40 p-4 rounded-xl border border-google-yellow/30">
                      <div>
                        <span className="text-[10px] text-gray-500 uppercase block font-semibold">RECOGNITION AWARDED TO:</span>
                        <span className="font-extrabold text-gray-900 text-sm sm:text-base">{award.recipient2025}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-google-green/10 text-google-green border border-google-green/30 text-[11px] font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Official Google Honor</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Nominations Callout */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 text-center max-w-2xl mx-auto shadow-xs">
          <Medal className="w-8 h-8 text-google-yellow-dark mx-auto mb-2" />
          <h4 className="text-lg font-bold text-gray-900">
            Nominate a Builder or Community Volunteer for 2026
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-lg mx-auto">
            Know an engineer, researcher, or community volunteer who went above and beyond? Submit your nomination for the DevFest 2026 Honors Ceremony.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="mailto:gdgcloudtoronto@gmail.com?subject=DevFest%202026%20Award%20Nomination"
              className="bg-google-blue hover:bg-google-blue-dark text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Submit Nomination (gdgcloudtoronto@gmail.com)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
