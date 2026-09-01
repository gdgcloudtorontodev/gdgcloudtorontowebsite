import React from 'react';
import { 
  Trophy, 
  Medal, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { PRIZE_WINNERS } from '../../data/awards';

export const WinnersPodium: React.FC = () => {
  return (
    <section id="winners-podium" className="py-24 bg-[#F8F9FA] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-green/10 border border-google-green/20 mb-3">
            <Trophy className="w-3.5 h-3.5 text-google-green" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-green-dark uppercase">
              HACKATHON & CHALLENGE SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            THE WINNERS
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed mx-auto">
            Celebrating the groundbreaking projects built during the Toronto AI & Cloud Developer Challenge. Over $17,500+ CAD in prize awards and cloud credits.
          </p>
        </div>

        {/* 3 Winner Podium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-10">
          {PRIZE_WINNERS.map((winner) => {
            const isFirst = winner.rank === 1;

            return (
              <div
                key={winner.id}
                className={`bg-white rounded-3xl border shadow-sm p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isFirst
                    ? 'border-google-yellow ring-2 ring-google-yellow/30 shadow-google-elevated md:-translate-y-4'
                    : 'border-gray-200'
                }`}
              >
                <div>
                  {/* Rank Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl flex items-center gap-1.5 font-bold font-mono text-sm ${
                      winner.rank === 1 ? 'bg-amber-100 text-amber-900' :
                      winner.rank === 2 ? 'bg-slate-100 text-slate-900' :
                      'bg-orange-100 text-orange-900'
                    }`}>
                      <Medal className="w-5 h-5" />
                      <span>{winner.rank === 1 ? '1ST PLACE' : winner.rank === 2 ? '2ND PLACE' : '3RD PLACE'}</span>
                    </div>

                    <span className="text-xs font-mono font-bold text-google-green bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                      {winner.prize}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase font-bold text-google-blue-dark block mb-1">
                    {winner.category}
                  </span>

                  <h3 className="text-lg font-extrabold text-gray-900 leading-snug mb-1">
                    {winner.projectName}
                  </h3>

                  <span className="text-xs text-gray-500 font-mono block mb-3">
                    Team: {winner.teamName} ({winner.organization})
                  </span>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {winner.summary}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {winner.technology.map((tech, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub & Demo Links */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-google-blue flex items-center gap-1">
                    <span>Verified Project Submission</span>
                  </span>

                  {winner.githubUrl && (
                    <a
                      href={winner.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-gray-900 p-1"
                      title="GitHub Code"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
