import React from 'react';
import { 
  BarChart3, 
  Users, 
  Sparkles, 
  Cpu, 
  Radio, 
  Award,
  Globe
} from 'lucide-react';
import { EVENT_DATA } from '../../data/event';

export const HallOfImpact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-google-blue-light" />
            <span className="text-xs font-mono font-bold tracking-widest text-google-blue-light uppercase">
              FIVE YEARS OF GROWTH
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            HALL OF IMPACT
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2 leading-relaxed mx-auto">
            GDG Cloud Toronto impact metrics spanning community growth, hands-on lab completions, and ecosystem leadership.
          </p>
        </div>

        {/* 6 Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-neutral-900/90 p-5 rounded-2xl border border-neutral-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-google-blue font-mono block">5.8K+</span>
            <span className="text-xs text-gray-400 font-medium mt-1 block">Community Members</span>
          </div>

          <div className="bg-neutral-900/90 p-5 rounded-2xl border border-neutral-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-google-green font-mono block">1,300+</span>
            <span className="text-xs text-gray-400 font-medium mt-1 block">2025 Attendees</span>
          </div>

          <div className="bg-neutral-900/90 p-5 rounded-2xl border border-neutral-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-google-yellow font-mono block">850+</span>
            <span className="text-xs text-gray-400 font-medium mt-1 block">AI Lab Builders</span>
          </div>

          <div className="bg-neutral-900/90 p-5 rounded-2xl border border-neutral-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-google-red font-mono block">100+</span>
            <span className="text-xs text-gray-400 font-medium mt-1 block">Active Volunteers</span>
          </div>

          <div className="bg-neutral-900/90 p-5 rounded-2xl border border-neutral-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono block">12</span>
            <span className="text-xs text-gray-400 font-medium mt-1 block">Podcast Episodes</span>
          </div>

          <div className="bg-neutral-900/90 p-5 rounded-2xl border border-neutral-800 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono block">50+</span>
            <span className="text-xs text-gray-400 font-medium mt-1 block">Study Jams Hosted</span>
          </div>
        </div>

      </div>
    </section>
  );
};
