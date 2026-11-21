import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  X, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  BookOpen,
  Mic,
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '../ui/BrandIcons';
import { SPEAKERS } from '../../data/speakers';
import { Speaker } from '../../types';
import { EVENT_DATA } from '../../data/event';

export const Speakers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSpeakerModal, setActiveSpeakerModal] = useState<Speaker | null>(null);

  const categories = [
    'ALL',
    'Keynote',
    'AI & Agents',
    'Cloud Architecture',
  ];

  const filteredSpeakers = selectedCategory === 'ALL'
    ? SPEAKERS
    : SPEAKERS.filter((s) => s.category === selectedCategory);

  return (
    <section id="speakers" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-google-blue/10 border border-google-blue/20 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-google-blue" />
              <span className="text-xs font-mono font-bold tracking-widest text-google-blue-dark uppercase">
                CONFIRMED SPEAKERS & VISIONARIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              THE MINDS BUILDING TOMORROW
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mt-2 leading-relaxed">
              Google leaders, developer advocates, cloud architects, and enterprise AI engineering pioneers sharing cutting-edge insights on Agentic AI, MCP, and career growth.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-google-blue text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Call for Speakers Banner */}
        <div className="bg-gradient-to-r from-google-blue via-indigo-900 to-gray-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider">
              <Mic className="w-3.5 h-3.5 text-google-yellow" />
              <span>CALL FOR SPEAKERS NOW OPEN</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Have an Idea to Share with 1,500+ Canadian Developers?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl leading-relaxed">
              We welcome submissions across Multimodal AI, Agentic Systems, Google Cloud & Kubernetes, Quantum Computing, and Engineering Practices. Beginner and first-time community speakers warmly welcomed.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href={EVENT_DATA.callForSpeakers?.formUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSevX5omJJKkgAZvVE5ZnNuGfqok0NtCjUYiQPKSSPdqIwB9vA/viewform'}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center gap-2 group transform hover:scale-105"
            >
              <Mic className="w-4 h-4 text-google-red" />
              <span>Submit Speaker Proposal</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-[#F8F9FA] rounded-3xl border border-gray-200 shadow-sm hover:shadow-google-card hover:border-google-blue/40 transition-all p-6 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveSpeakerModal(speaker)}
            >
              <div>
                {/* Speaker Photo & Category Badge */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-google-green border-2 border-white"></span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-gray-200 text-gray-700 inline-block mb-1">
                      {speaker.category}
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-google-blue transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium line-clamp-1">
                      {speaker.role}
                    </p>
                    <span className="text-[11px] text-google-blue-dark font-mono font-bold block mt-0.5">
                      {speaker.organization}
                    </span>
                  </div>
                </div>

                {/* Session Box */}
                <div className="bg-white p-3.5 rounded-2xl border border-gray-200 shadow-xs mb-3 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span className="bg-blue-50 text-google-blue font-bold px-1.5 py-0.5 rounded">
                      {speaker.sessionType}
                    </span>
                    <span>{speaker.timeSlot}</span>
                  </div>
                  <h4 className="font-bold text-xs text-gray-900 line-clamp-2 leading-snug">
                    {speaker.sessionTitle}
                  </h4>
                  <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1 pt-1">
                    <MapPin className="w-3 h-3 text-google-red" />
                    <span>{speaker.room}</span>
                  </div>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {speaker.expertise.slice(0, 3).map((exp, i) => (
                    <span key={i} className="text-[10px] bg-gray-200/70 text-gray-700 px-2 py-0.5 rounded-md font-medium">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-google-blue group-hover:underline flex items-center gap-1">
                  <span>Explore Speaker Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </span>

                <div className="flex items-center gap-2 text-gray-400">
                  {speaker.socials.linkedin && <LinkedinIcon size={14} className="hover:text-google-blue" />}
                  {speaker.socials.github && <GithubIcon size={14} className="hover:text-gray-900" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speaker Profile Modal */}
        {activeSpeakerModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-2xl overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gray-900 text-white p-6 sm:p-8 relative overflow-hidden">
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <img
                      src={activeSpeakerModal.photo}
                      alt={activeSpeakerModal.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-lg"
                    />
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-google-blue text-white">
                        {activeSpeakerModal.category}
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mt-1">
                        {activeSpeakerModal.name}
                      </h3>
                      <p className="text-xs text-gray-300">
                        {activeSpeakerModal.role} • <strong className="text-white">{activeSpeakerModal.organization}</strong>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveSpeakerModal(null)}
                    className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider mb-1">
                    BIOGRAPHY
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {activeSpeakerModal.bio}
                  </p>
                </div>

                {/* Session Box in modal */}
                <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-google-blue-dark font-bold">
                    <span>{activeSpeakerModal.sessionType}</span>
                    <span>{activeSpeakerModal.timeSlot}</span>
                  </div>
                  <h5 className="font-bold text-sm text-gray-900">
                    {activeSpeakerModal.sessionTitle}
                  </h5>
                  <div className="text-xs text-gray-600 flex items-center gap-1 font-mono pt-1">
                    <MapPin className="w-3.5 h-3.5 text-google-red" />
                    <span>{activeSpeakerModal.room}</span>
                  </div>
                </div>

                {/* Career Highlights */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider mb-2">
                    CAREER HIGHLIGHTS & CONTRIBUTIONS
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {activeSpeakerModal.careerHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-google-green shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">
                  {activeSpeakerModal.previousTalksCount} Previous GDG/DevFest Talks
                </span>
                <button
                  onClick={() => setActiveSpeakerModal(null)}
                  className="bg-gray-900 hover:bg-black text-white text-xs font-semibold px-5 py-2 rounded-xl"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
